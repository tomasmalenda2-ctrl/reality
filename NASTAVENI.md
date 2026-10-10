# Jednorázové nastavení webu přes Google tabulku

Web nepoužívá účty návštěvníků ani databázi přihlášených uživatelů. Texty a tým se ukládají do Google tabulky majitele. Běžní návštěvníci do tabulky přístup nedostanou.

Apps Script se musí jednorázově propojit s tabulkou a webem (viz níže); potom majitel upravuje vše přímo v tabulkách a nemusí měnit žádný kód.

## První propojení

1. Přihlaste se ke svému Google účtu a vytvořte novou tabulku na [sheets.google.com](https://sheets.google.com/).
2. V tabulce otevřete **Rozšíření → Apps Script**. V editoru smažte ukázkový kód a vložte celý obsah souboru `google-apps-script.gs`. Projekt uložte.
3. V horním seznamu funkcí vyberte `initializeSheets` a klikněte na **Spustit**. Google požádá o oprávnění spravovat právě vytvořenou tabulku; potvrďte ho. V tabulce se vytvoří listy **Texty** a **Tým**.
4. V Apps Scriptu klikněte na **Nasadit → Nové nasazení**, jako typ vyberte **Webová aplikace**, nastavte **Spouštět jako: já** a přístup **Kdokoli**. Nasazení potvrďte a zkopírujte URL webové aplikace (končí `/exec`).
5. Otevřete `google-config.js` a vložte zkopírovanou adresu mezi uvozovky:

   ```js
   window.REALITY_CONTENT_ENDPOINT = "SEM_VLOZTE_URL_WEBOVE_APLIKACE";
   ```

6. Nahrajte aktualizované soubory webu na hosting. Vlastní Google tabulku **nesdílejte veřejně**; upravovat ji má pouze majitel a lidé, kterým to sám povolí.

## Běžné úpravy majitelem

- **Texty:** v listu **Texty** měňte hodnoty ve sloupci „Text na webu“. Skrytý sloupec s ID nemažte ani neupravujte.
- **Doporučení:** v listu **Texty** upravujte nadpis a text každé ze tří karet označených „Karta doporučení“. Karty zůstávají na webu tři.
- **Tým:** v listu **Tým** přidejte řádek se jménem, pozicí, telefonem, e-mailem, veřejně dostupnou URL fotografie a zaškrtnutým políčkem „Zobrazit“. Odebráním zaškrtnutí kartu skryjete; smazáním řádku ji odstraníte. Fotografie musí být dostupná návštěvníkům přes přímý odkaz na obrázek.

Změny textů a týmu provádí majitel přímo v Google tabulce pod svým Google účtem.
