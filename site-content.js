(function () {
  const endpoint = window.REALITY_CONTENT_ENDPOINT;
  let publicDataPromise;

  window.loadRealityData = function () {
    if (!endpoint) return Promise.resolve(null);
    if (publicDataPromise) return publicDataPromise;

    publicDataPromise = new Promise((resolve, reject) => {
      const callbackName = `realityData_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const script = document.createElement("script");
      const requestUrl = new URL(endpoint);
      requestUrl.searchParams.set("action", "public");
      requestUrl.searchParams.set("callback", callbackName);
      requestUrl.searchParams.set("_", String(Date.now()));

      function cleanUp() {
        delete window[callbackName];
        script.remove();
      }

      window[callbackName] = (result) => {
        cleanUp();
        if (!result || result.error) {
          reject(new Error(result?.error || "Prázdná odpověď služby."));
          return;
        }
        resolve(result);
      };

      script.onerror = () => {
        cleanUp();
        reject(new Error("Nepodařilo se připojit k tabulce."));
      };
      script.src = requestUrl.toString();
      document.head.append(script);
    });

    return publicDataPromise;
  };

  function renderTeam(members) {
    const container = document.getElementById("team-list");
    if (!container || !Array.isArray(members)) return;

    container.replaceChildren();
    if (!members.length) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "team-empty";
      emptyMessage.textContent = "Informace o týmu připravujeme.";
      container.append(emptyMessage);
      return;
    }

    members.forEach((member) => {
      const card = document.createElement("article");
      card.className = "team-card";
      const imageWrap = document.createElement("div");
      imageWrap.className = "team-img";
      const image = document.createElement("img");
      image.src = member.imageUrl;
      image.alt = `Portrét: ${member.name}`;
      image.loading = "lazy";
      imageWrap.append(image);

      const name = document.createElement("h3");
      name.textContent = member.name;
      const role = document.createElement("span");
      role.textContent = member.role;
      card.append(imageWrap, name, role);

      [
        ["☎", member.phone],
        ["✉", member.email]
      ].forEach(([icon, value]) => {
        if (!value) return;
        const contact = document.createElement("p");
        contact.className = "contact";
        contact.textContent = `${icon} ${value}`;
        card.append(contact);
      });
      container.append(card);
    });
  }

  if (!endpoint) return;

  window.loadRealityData()
    .then((result) => {
      if (!result) return;
      const content = new Map(Object.entries(result.content || {}));
      document.querySelectorAll("[data-content]").forEach((element) => {
        const value = content.get(element.dataset.content);
        if (value !== undefined) element.textContent = value;
      });
      renderTeam(result.team);
      window.dispatchEvent(new CustomEvent("reality-data-loaded", { detail: result }));
    })
    .catch((error) => {
      console.error("Nepodařilo se načíst obsah webu z tabulky:", error.message);
      const team = document.getElementById("team-list");
      if (team) {
        const message = document.createElement("p");
        message.className = "team-empty";
        message.textContent = "Informace o týmu se nyní nepodařilo načíst.";
        team.replaceChildren(message);
      }
      window.dispatchEvent(new CustomEvent("reality-data-error"));
    });
})();
