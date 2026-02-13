// Übersetzungswörterbuch
const translations = {
    de: {
        // Seitentitel
        "page.title": "sipgate AI Agents - Angebotsgenerator",

        // Formular-Header
        "form.title": "sipgate AI Agents Angebotsgenerator",
        "form.subtitle": "Füllen Sie die Felder aus, um ein Angebot zu generieren",

        // Section-Header
        "section.customerInfo": "Kundeninformationen",
        "section.contractInfo": "Vertragsinformationen",
        "section.positions": "Angebotspositionen",
        "section.conditions": "Vertragsbedingungen",

        // Formularlabels
        "label.company": "Firmenname *",
        "label.salutation": "Anrede *",
        "label.contact": "Ansprechpartner *",
        "label.street": "Straße *",
        "label.plz": "PLZ *",
        "label.city": "Ort *",
        "label.location": "Ort *",
        "label.date": "Datum *",
        "label.contractNumber": "Vertragsnummer *",
        "label.quantity": "Anzahl *",
        "label.minuteQuantity": "Anzahl Minutenkontingent *",
        "label.unitPrice": "Einzelpreis (€) *",
        "label.contractStart": "Vertragsbeginn *",
        "label.billingStart": "Abrechnungsbeginn *",
        "label.contractTerm": "Vertragslaufzeit *",
        "label.testPeriod": "Testzeitraum *",
        "label.billingPeriod": "Abrechnungszeitraum *",
        "label.positionName": "Bezeichnung *",
        "label.positionDesc": "Beschreibung (optional, Punkte mit | trennen)",

        // Anrede-Optionen
        "salutation.mr": "Herr",
        "salutation.ms": "Frau",

        // Buttons
        "btn.generateExample": "Beispielangebot generieren",
        "btn.generate": "Angebot generieren",
        "btn.addPosition": "+ Neue Position hinzufügen",
        "btn.removePosition": "Position entfernen",
        "btn.preview": "Vorschau umschalten (Dev)",

        // Platzhalter
        "placeholder.contractNumber": "Wird automatisch generiert",
        "placeholder.positionName": "z.B. Zusätzliche Leistung",
        "placeholder.positionDesc": "z.B. Feature 1|Feature 2|Feature 3",

        // Standard-Formulartexte
        "default.contractStart": "mit Unterschrift",
        "default.billingStart": "nach Ablauf des Testzeitraums",
        "default.contractTerm": "zwölf (12) Monate – abweichend von den AGB läuft der Vertrag für ein (1) Jahr und verlängert sich automatisch um ein (1) weiteres Jahr, wenn er nicht mit einer Frist von 3 Monaten zum Ende des Vertragszeitraums in Textform gekündigt wurde.",
        "default.testPeriod": "Das Produkt AI Agent kann innerhalb der ersten vier (4) Wochen ab Vertragsbeginn kostenfrei getestet werden. Während dieses Testzeitraums ist der Kunde berechtigt, ohne Angabe von Gründen vom Vertrag zurückzutreten. Der Abrechnungszeitraum beginnt erst nach Ablauf des Testzeitraums.",
        "default.billingPeriod": "Monatliche Abrechnung in Höhe des unter monatlich Netto genannten Betrages.",

        // Deckblatt (PDF)
        "cover.heading1": "Stärken Sie Ihren",
        "cover.heading2": "Kundenservice.",
        "cover.subheading": "Wir freuen uns, Ihnen den folgenden <strong>Enterprise Vertrag</strong> zu unterbreiten.",
        "cover.yourContract": "Ihr Vertrag",
        "cover.greeting.mr": "Sehr geehrter Herr {{name}},",
        "cover.greeting.ms": "Sehr geehrte Frau {{name}},",
        "cover.introText": "vielen Dank für Ihr Interesse an unseren sipgate AI Agents. In den folgenden Abschnitten finden Sie eine detaillierte Übersicht über unser Angebot sowie Informationen zu Preisen und weiteren wichtigen Informationen.",
        "cover.closingText": "Wir freuen uns auf eine erfolgreiche Zusammenarbeit!",
        "cover.teamSignature": "Ihr Team von sipgate",

        // Angebotsseiten (PDF)
        "offer.pageTitle": "Unser Angebot",
        "offer.colQuantity": "Anzahl",
        "offer.colTariffs": "Tarife",
        "offer.colUnitPrice": "Einzelpreis",
        "offer.colSum": "Summe",
        "offer.totalLabel": "Monatlich Netto (zzgl. MwSt.)",
        "offer.continuation": "Fortsetzung auf der nächsten Seite",
        "offer.minuteFootnote": "*Minutenpakete können jederzeit erweitert werden – vgl. <a href=\"https://www.sipgate.ai/preise\" style=\"color: #888;\">Paketpreise</a>.",

        // Konditionenseite (PDF)
        "conditions.title": "Konditionen",
        "conditions.intro": "Hiermit beauftragt <strong>der Kunde</strong> die sipgate GmbH mit der Erbringung der unter Grundtarif genannten Leistungen gemäß des Angebots vom <strong>{{date}}</strong>.",
        "conditions.contractStart": "Vertragsbeginn:",
        "conditions.contractTerm": "Vertragslaufzeit:",
        "conditions.testPeriod": "Testzeitraum:",
        "conditions.billingStart": "Abrechnungsbeginn:",
        "conditions.billingPeriod": "Abrechnungszeitraum:",
        "conditions.signatureLine": "Datum, Unterschrift/Stempel Kunde",

        // Optionen
        "section.options": "Optionen",
        "label.outboundAgent": "Outbound Agent",
        "hint.outboundAgent": "Aktiviert Verbindungspreise für ausgehende Telefonie im Angebot",

        // Verbindungspreise (PDF)
        "usageRates.title": "Verbindungspreise (minutengenau, zzgl. MwSt.):",
        "usageRates.titleInline": "Preis pro AI Agent-Minute, wenn nicht mit Kontingent abgegolten",
        "usageRates.overage": "Preis pro AI Agent-Minute, wenn nicht mit Kontingent abgegolten",
        "usageRates.linkText": "Alle Preise unter: <a href=\"https://www.sipgate.de/preise\">www.sipgate.de/preise</a>",
        "outbound.festnetz": "Ausgehende Telefonie DE Festnetz",
        "outbound.mobilfunk": "Ausgehende Telefonie DE Mobilfunk",

        // Positionsnamen (vorkonfiguriert)
        "position.aiAgents.name": "AI Agents Enterprise Tarif",
        "position.aiAgents.desc": "{{minutes}} AI-Minuten inkludiert*|Natürliche Gesprächsführung|Mehrsprachigkeit|Auswahl an natürlich klingenden AI-Stimmen (20+ Stimmen)|Verzweigte Gesprächsleitfäden|Anrufszenarien (Playbooks)|Kontextwissen|Outbound-Anrufe|CRM/ERP-Integration",
        "position.setup.name": "Unterstützte Einrichtung und Optimierung",
        "position.setup.desc": "Onboarding und Erarbeitung eines \"Proof of Concept\" (PoC)|Bereitstellung und Produktübergabe|Bereitstellung eines Account Managers",
        "position.phoneBlock.name": "neuer 3er Rufnummernblock (optional)",
        "position.phoneBlock.title": "neuer 3er Rufnummernblock",
        "position.porting.name": "Portierung bestehender Rufnummern (optional)",
        "position.porting.title": "Portierung bestehender Rufnummern",
        "position.porting.desc": "Unterstützung bei der Portierung von Rufnummern zu sipgate",
    },

    en: {
        // Page title
        "page.title": "sipgate AI Agents - Offer Generator",

        // Form header
        "form.title": "sipgate AI Agents Offer Generator",
        "form.subtitle": "Fill in the fields to generate an offer",

        // Section headers
        "section.customerInfo": "Customer Information",
        "section.contractInfo": "Contract Information",
        "section.positions": "Offer Items",
        "section.conditions": "Contract Conditions",

        // Form labels
        "label.company": "Company Name *",
        "label.salutation": "Salutation *",
        "label.contact": "Contact Person *",
        "label.street": "Street *",
        "label.plz": "Postal Code *",
        "label.city": "City *",
        "label.location": "City *",
        "label.date": "Date *",
        "label.contractNumber": "Contract Number *",
        "label.quantity": "Quantity *",
        "label.minuteQuantity": "Minute Allowance *",
        "label.unitPrice": "Unit Price (€) *",
        "label.contractStart": "Contract Start *",
        "label.billingStart": "Billing Start *",
        "label.contractTerm": "Contract Term *",
        "label.testPeriod": "Trial Period *",
        "label.billingPeriod": "Billing Period *",
        "label.positionName": "Name *",
        "label.positionDesc": "Description (optional, separate items with |)",

        // Salutation options
        "salutation.mr": "Mr.",
        "salutation.ms": "Ms.",

        // Buttons
        "btn.generateExample": "Generate example offer",
        "btn.generate": "Generate offer",
        "btn.addPosition": "+ Add new item",
        "btn.removePosition": "Remove item",
        "btn.preview": "Toggle preview (Dev)",

        // Placeholders
        "placeholder.contractNumber": "Auto-generated",
        "placeholder.positionName": "e.g. Additional service",
        "placeholder.positionDesc": "e.g. Feature 1|Feature 2|Feature 3",

        // Default form values
        "default.contractStart": "upon signing",
        "default.billingStart": "after the trial period ends",
        "default.contractTerm": "twelve (12) months – deviating from the General Terms and Conditions, the contract runs for one (1) year and is automatically renewed for one (1) additional year unless terminated in writing with three (3) months' notice before the end of the contract period.",
        "default.testPeriod": "The AI Agent product can be tested free of charge within the first four (4) weeks from the start of the contract. During this trial period, the customer is entitled to withdraw from the contract without stating reasons. The billing period begins only after the trial period has ended.",
        "default.billingPeriod": "Monthly billing in the amount of the monthly net price stated above.",

        // Cover page (PDF)
        "cover.heading1": "Strengthen Your",
        "cover.heading2": "Customer Service.",
        "cover.subheading": "We are pleased to present the following <strong>Enterprise Contract</strong> to you.",
        "cover.yourContract": "Your Contract",
        "cover.greeting.mr": "Dear Mr. {{name}},",
        "cover.greeting.ms": "Dear Ms. {{name}},",
        "cover.introText": "Thank you for your interest in our sipgate AI Agents. In the following sections, you will find a detailed overview of our offer as well as information on pricing and other important details.",
        "cover.closingText": "We look forward to a successful collaboration!",
        "cover.teamSignature": "Your team at sipgate",

        // Offer pages (PDF)
        "offer.pageTitle": "Our Offer",
        "offer.colQuantity": "Quantity",
        "offer.colTariffs": "Plans",
        "offer.colUnitPrice": "Unit Price",
        "offer.colSum": "Total",
        "offer.totalLabel": "Monthly Net (excl. VAT)",
        "offer.continuation": "Continued on the next page",
        "offer.minuteFootnote": "*Minute packages can be upgraded at any time – see <a href=\"https://www.sipgate.ai/preise\" style=\"color: #888;\">package prices</a>.",

        // Conditions page (PDF)
        "conditions.title": "Conditions",
        "conditions.intro": "The <strong>customer</strong> hereby commissions sipgate GmbH to provide the services listed under the base plan in accordance with the offer dated <strong>{{date}}</strong>.",
        "conditions.contractStart": "Contract Start:",
        "conditions.contractTerm": "Contract Term:",
        "conditions.testPeriod": "Trial Period:",
        "conditions.billingStart": "Billing Start:",
        "conditions.billingPeriod": "Billing Period:",
        "conditions.signatureLine": "Date, Signature/Stamp Customer",

        // Options
        "section.options": "Options",
        "label.outboundAgent": "Outbound Agent",
        "hint.outboundAgent": "Enables outbound telephony rates in the offer",

        // Usage rates (PDF)
        "usageRates.title": "Connection rates (per minute, excl. VAT):",
        "usageRates.titleInline": "Price per AI Agent minute, if not covered by allowance",
        "usageRates.overage": "Price per AI Agent minute, if not covered by allowance",
        "usageRates.linkText": "All rates at: <a href=\"https://www.sipgate.de/preise\">www.sipgate.de/preise</a>",
        "outbound.festnetz": "Outbound telephony DE landline",
        "outbound.mobilfunk": "Outbound telephony DE mobile",

        // Position names (pre-configured)
        "position.aiAgents.name": "AI Agents Enterprise Plan",
        "position.aiAgents.desc": "{{minutes}} AI minutes included*|Natural conversation handling|Multilingual support|Selection of natural-sounding AI voices (20+ voices)|Branched conversation guides|Call scenarios (Playbooks)|Context knowledge|Outbound calls|CRM/ERP integration",
        "position.setup.name": "Assisted Setup and Optimization",
        "position.setup.desc": "Onboarding and development of a \"Proof of Concept\" (PoC)|Provisioning and product handover|Dedicated Account Manager",
        "position.phoneBlock.name": "New 3-number block (optional)",
        "position.phoneBlock.title": "New 3-Number Block",
        "position.porting.name": "Porting of existing phone numbers (optional)",
        "position.porting.title": "Porting of Existing Phone Numbers",
        "position.porting.desc": "Support for porting phone numbers to sipgate",
    }
};

// Aktuelle Sprache
let currentLang = localStorage.getItem('appLang') || 'de';

// Übersetzungsfunktion mit Variablen-Interpolation
function t(key, vars) {
    let str = translations[currentLang]?.[key]
           || translations['de']?.[key]
           || key;

    if (vars) {
        Object.keys(vars).forEach(varName => {
            str = str.replaceAll('{{' + varName + '}}', vars[varName]);
        });
    }
    return str;
}

// Locale-String für Intl-APIs
function getLocale() {
    return currentLang === 'en' ? 'en-GB' : 'de-DE';
}

// Übersetzungen auf alle data-i18n-Elemente anwenden
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.title = t(el.getAttribute('data-i18n-title'));
    });

    document.title = t('page.title');
    document.documentElement.lang = currentLang;
}

// Sprache umschalten
function setLanguage(lang) {
    const prevLang = currentLang;
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    applyTranslations();
    updateDefaultFormValues(prevLang);
    updatePositionTranslations();
}

// Standard-Formulartexte aktualisieren (nur wenn nicht vom Benutzer geändert)
function updateDefaultFormValues(prevLang) {
    const defaults = {
        'contract-start': 'default.contractStart',
        'billing-start': 'default.billingStart',
        'contract-term': 'default.contractTerm',
        'test-period': 'default.testPeriod',
        'billing-period': 'default.billingPeriod',
    };

    Object.entries(defaults).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (!el) return;
        const oldDefault = translations[prevLang]?.[key];
        if (el.value === oldDefault) {
            el.value = t(key);
        }
    });
}

// Vorkonfigurierte Positionsnamen/-beschreibungen aktualisieren
function updatePositionTranslations() {
    const positionMap = {
        '1': { name: 'position.aiAgents.name', desc: 'position.aiAgents.desc' },
        '2': { name: 'position.setup.name', desc: 'position.setup.desc' },
        '3': { name: 'position.phoneBlock.name', desc: null },
        '4': { name: 'position.porting.name', desc: 'position.porting.desc' },
    };

    document.querySelectorAll('.position-group[data-position-id]').forEach(group => {
        const posId = group.dataset.positionId;
        const mapping = positionMap[posId];
        if (!mapping) return;

        const nameHidden = group.querySelector('.position-name');
        if (nameHidden && mapping.name) nameHidden.value = t(mapping.name);

        const descHidden = group.querySelector('.position-description');
        if (descHidden && mapping.desc) descHidden.value = t(mapping.desc);
    });
}
