const SHEET_NAMES = {
  content: "Texty",
  team: "Tým"
};

const TEXT_DEFAULTS = [
  ["Název webu v záložce", "Nemovitosti bez starostí", "page_title"],
  ["Název v nabídce", "NEMOVITOSTI BEZ STAROSTI", "brand_name"],
  ["Tlačítko: prodat", "CHCI PRODAT", "nav_sell"],
  ["Tlačítko: koupit", "CHCI KOUPIT", "nav_buy"],
  ["Odkaz: úvod", "Úvod", "nav_home"],
  ["Odkaz: služby", "Služby", "nav_services"],
  ["Odkaz: postup prodeje", "Postup prodeje", "nav_process"],
  ["Odkaz: tým", "Náš tým", "nav_team"],
  ["Odkaz: kontakty", "Kontakty", "nav_contact"],
  ["Hlavní nadpis", "SOUKROMÝ REALITNÍ ZPROSTŘEDKOVATEL", "hero_title"],
  ["Text pod hlavním nadpisem", "NEZABÝVEJTE SE STAROSTMI, NECHTE JE NA NÁS.\nOD PRODEJE PO PRÁVNÍ SERVIS, VŠE VYŘEŠÍME ZA VÁS.", "hero_subtitle"],
  ["Jméno v úvodní části", "Ilona Brázdilová", "hero_name"],
  ["Telefon v úvodní části", "TEL: 723 958 609", "hero_phone"],
  ["Popisek části s čísly", "Proč s námi", "stats_label"],
  ["Nadpis části s čísly", "ČÍSLA, KTERÁ MLUVÍ ZA NÁS.", "stats_title"],
  ["Popisek: roky na trhu", "let na trhu", "stat_years"],
  ["Popisek: klienti", "spokojených klientů", "stat_clients"],
  ["Popisek: prodej nad odhad", "prodáno nad odhad", "stat_above_estimate"],
  ["Popisek: doba prodeje", "dní průměrná doba prodeje", "stat_days"],
  ["Karta doporučení 1 – nadpis", "Osobní přístup", "recommendation_1_title"],
  ["Karta doporučení 1 – text", "Každou nemovitost i situaci řešíme individuálně a srozumitelně vás provedeme celým prodejem.", "recommendation_1_text"],
  ["Karta doporučení 2 – nadpis", "Profesionální prezentace", "recommendation_2_title"],
  ["Karta doporučení 2 – text", "Kvalitní fotografie a promyšlená propagace pomohou vaší nemovitosti oslovit správné zájemce.", "recommendation_2_text"],
  ["Karta doporučení 3 – nadpis", "Bezstarostný průběh", "recommendation_3_title"],
  ["Karta doporučení 3 – text", "Od odhadu ceny až po smlouvy a předání máte potřebnou podporu na jednom místě.", "recommendation_3_text"],
  ["Nadpis nad službami", "Služby", "services_label"],
  ["Nadpis služeb", "Kompletní servis od A do Z.", "services_title"],
  ["Služba 1 – název", "Odhad ceny", "service_01_title"],
  ["Služba 1 – popis", "Přesný, tržní odhad zdarma a bez závazku – vždy s daty v ruce.", "service_01_text"],
  ["Služba 2 – název", "Profi prezentace", "service_02_title"],
  ["Služba 2 – popis", "Kvalitní fotografie, 3D video prohlídka a homestaging.", "service_02_text"],
  ["Služba 3 – název", "Vyjednávání", "service_03_title"],
  ["Služba 3 – popis", "Vyjednám cenu, která odráží skutečnou hodnotu vaší nemovitosti.", "service_03_text"],
  ["Služba 4 – název", "Právní servis", "service_04_title"],
  ["Služba 4 – popis", "Advokátní úschova, smlouvy a katastr – vše pod jednou střechou.", "service_04_text"],
  ["Služba 5 – název", "Hypotéka", "service_05_title"],
  ["Služba 5 – popis", "Spolupráce s hypotečním specialistou pro nejlepší podmínky.", "service_05_text"],
  ["Služba 6 – název", "Bezpečná transakce", "service_06_title"],
  ["Služba 6 – popis", "Pojištění odpovědnosti a garance férového procesu.", "service_06_text"],
  ["Nadpis týmu", "NÁŠ TÝM SPECIALISTŮ", "team_title"],
  ["Popis týmu", "PROFESIONÁLOVÉ, KTEŘÍ VÁM POMOHOU S VAŠEMI NEMOVITOSTMI.", "team_subtitle"],
  ["Nadpis kontaktů", "KDE NÁS NAJDETE", "location_title"],
  ["Úvodní text u kontaktů", "NAŠE KANCELÁŘ SE NACHÁZÍ VE ŠTERNBERKU, KDE JSME VÁM PLNĚ K DISPOZICI. RÁDI VÁS PŘIVÍTÁME OSOBNĚ A PO TELEFONU. PROBEREME VŠE KOLEM VAŠÍ NEMOVITOSTI.", "location_intro"],
  ["Popisek adresy", "ADRESA-SÍDLO FIRMY:", "location_address_label"],
  ["Adresa kanceláře", "VÁCLAVSKÉ NÁMĚSTÍ 1\n110 00 PRAHA", "location_address"],
  ["Popisek e-mailu", "EMAIL:", "location_email_label"],
  ["Kontaktní e-mail", "✉️ INFO@REALITY.CZ", "location_email"],
  ["Popisek telefonu", "TELEFON:", "location_phone_label"],
  ["Kontaktní telefon", "📞 723 958 609", "location_phone"],
  ["Název v patičce", "NEMOVITOSTI BEZ STAROSTI", "footer_brand"],
  ["Nadpis postupu prodeje", "POSTUP PRODEJE NEMOVITOSTI", "process_title"],
  ["Postup 01 – název", "Nezávazná schůzka zdarma", "process_01_title"],
  ["Postup 01 – popis", "Prohlídka a posouzení stavu nemovitosti, ujasnění potřeb klienta a situace na trhu.", "process_01_text"],
  ["Postup 02 – název", "Stanovení prodejní ceny zdarma", "process_02_title"],
  ["Postup 02 – popis", "Profesionální odhad ceny dle lokality, stavu a aktuální poptávky.", "process_02_text"],
  ["Postup 03 – název", "Zahájení spolupráce", "process_03_title"],
  ["Postup 03 – popis", "Nastavení strategie, ceny a podmínek prodeje.", "process_03_text"],
  ["Postup 04 – název", "Příprava nemovitosti", "process_04_title"],
  ["Postup 04 – popis", "Úklid, drobné opravy, homestaging a příprava na prezentaci.", "process_04_text"],
  ["Postup 05 – název", "Dokumenty", "process_05_title"],
  ["Postup 05 – popis", "PENB, evidenční list, prohlášení vlastníka a další podklady.", "process_05_text"],
  ["Postup 06 – název", "Profesionální prezentace", "process_06_title"],
  ["Postup 06 – popis", "Fotky, video, dron, virtuální prohlídka, web nemovitosti.", "process_06_text"],
  ["Postup 07 – název", "Marketing a propagace", "process_07_title"],
  ["Postup 07 – popis", "Reality portály, sociální sítě, cílená reklama.", "process_07_text"],
  ["Postup 08 – název", "Práce se zájemci", "process_08_title"],
  ["Postup 08 – popis", "Prohlídky, ověření bonity, výběr nejlepší nabídky.", "process_08_text"],
  ["Postup 09 – název", "Právní servis", "process_09_title"],
  ["Postup 09 – popis", "Smlouvy, advokátní úschova, katastr, převody financí.", "process_09_text"],
  ["Postup 10 – název", "Poprodejní servis", "process_10_title"],
  ["Postup 10 – popis", "Přepis energií, poradenství a pomoc po prodeji.", "process_10_text"]
];

function initializeSheets() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error("Otevřete Apps Script přímo z připravené Google tabulky.");

  PropertiesService.getScriptProperties().setProperty("SPREADSHEET_ID", spreadsheet.getId());

  const contentSheet = getOrCreateSheet_(spreadsheet, SHEET_NAMES.content, [
    ["Popisek", "Text na webu", "ID (neměnit)"],
    ...TEXT_DEFAULTS
  ]);
  contentSheet.setFrozenRows(1);
  contentSheet.setColumnWidth(1, 260);
  contentSheet.setColumnWidth(2, 640);
  contentSheet.setColumnWidth(3, 40);
  contentSheet.hideColumns(3);
  contentSheet.getRange(2, 2, Math.max(contentSheet.getMaxRows() - 1, 1), 1).setWrap(true);

  const teamSheet = getOrCreateSheet_(spreadsheet, SHEET_NAMES.team, [
    ["Jméno", "Pozice", "Telefon", "E-mail", "Fotografie URL", "Zobrazit"]
  ]);
  teamSheet.setFrozenRows(1);
  teamSheet.setColumnWidths(1, 6, 180);
  const checkboxRule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
  teamSheet.getRange("F2:F1000").setDataValidation(checkboxRule);

  return "Hotovo. Byly připraveny listy Texty a Tým.";
}

function getOrCreateSheet_(spreadsheet, name, initialRows) {
  let sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
    sheet.getRange(1, 1, initialRows.length, initialRows[0].length).setValues(initialRows);
  }
  return sheet;
}

function doGet(event) {
  const callback = String(event && event.parameter && event.parameter.callback || "");
  if (!/^[A-Za-z_$][A-Za-z0-9_$]{0,100}$/.test(callback)) {
    return ContentService.createTextOutput("Neplatný požadavek.");
  }

  let result;
  try {
    if (event.parameter.action !== "public") throw new Error("Neznámý požadavek.");
    result = getPublicData_();
  } catch (error) {
    console.error("Načtení obsahu selhalo:", error);
    result = { error: "Obsah se nepodařilo načíst." };
  }

  const json = JSON.stringify(result).replace(/</g, "\\u003c");
  return ContentService.createTextOutput(`${callback}(${json});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function getPublicData_() {
  const spreadsheet = getSpreadsheet_();
  const contentRows = spreadsheet.getSheetByName(SHEET_NAMES.content).getDataRange().getValues().slice(1);
  const content = {};
  contentRows.forEach((row) => {
    const key = String(row[2] || "").trim();
    if (key) content[key] = String(row[1] == null ? "" : row[1]);
  });

  const teamRows = spreadsheet.getSheetByName(SHEET_NAMES.team).getDataRange().getValues().slice(1);
  const team = teamRows
    .filter((row) => isChecked_(row[5]) && row[0] && row[1] && row[4])
    .map((row) => ({
      name: cleanSheetText_(row[0]),
      role: String(row[1]).trim(),
      phone: String(row[2] || "").trim(),
      email: String(row[3] || "").trim(),
      imageUrl: String(row[4]).trim()
    }));

  return { content: content, team: team };
}

function getSpreadsheet_() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  if (!spreadsheetId) throw new Error("Nejprve spusťte funkci initializeSheets.");
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  [SHEET_NAMES.content, SHEET_NAMES.team].forEach((name) => {
    if (!spreadsheet.getSheetByName(name)) throw new Error(`Chybí list ${name}.`);
  });
  return spreadsheet;
}

function isChecked_(value) {
  return value === true || ["true", "ano", "yes", "1"].includes(String(value).trim().toLowerCase());
}

function cleanSheetText_(value) {
  return String(value == null ? "" : value).replace(/^'(?=[=+\-@])/, "").trim();
}
