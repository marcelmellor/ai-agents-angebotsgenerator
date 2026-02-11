// Position Counter für eindeutige IDs
let positionCounter = 4;

// Eindeutige Vertragsnummer generieren (Hash aus Timestamp)
function generateContractNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const hash = ((timestamp + random) % 10000000).toString().padStart(7, '0');
    return 'B' + hash;
}

// Datum auf heute setzen beim Laden
window.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // Vertragsnummer automatisch generieren
    const contractNumberInput = document.getElementById('contract-number');
    contractNumberInput.value = generateContractNumber();

    // Beispielangebot Button Handler
    const fillExampleBtn = document.getElementById('fill-example-btn');
    if (fillExampleBtn) {
        fillExampleBtn.addEventListener('click', fillExampleData);
    }

    // Position hinzufügen Button Handler
    const addPositionBtn = document.getElementById('add-position-btn');
    if (addPositionBtn) {
        addPositionBtn.addEventListener('click', addNewPosition);
    }
});

// Neue Position hinzufügen
function addNewPosition() {
    positionCounter++;
    const container = document.getElementById('positions-container');

    const positionDiv = document.createElement('div');
    positionDiv.className = 'position-group';
    positionDiv.dataset.positionId = positionCounter;

    positionDiv.innerHTML = `
        <div class="position-header">
            <div class="form-group position-name-group">
                <label>Bezeichnung *</label>
                <input type="text" class="position-name-input" placeholder="z.B. Zusätzliche Leistung" required>
            </div>
            <button type="button" class="btn-remove-position" onclick="removePosition(this)" title="Position entfernen">&times;</button>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Anzahl *</label>
                <input type="number" class="position-quantity" value="1" min="0" required>
            </div>
            <div class="form-group">
                <label>Einzelpreis (€) *</label>
                <input type="number" class="position-price" value="0" step="0.01" min="0" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group full-width">
                <label>Beschreibung (optional, Punkte mit | trennen)</label>
                <input type="text" class="position-description-input" placeholder="z.B. Feature 1|Feature 2|Feature 3">
            </div>
        </div>
        <input type="hidden" class="position-name" value="">
        <input type="hidden" class="position-description" value="">
    `;

    container.appendChild(positionDiv);

    // Event Listener für Name-Input hinzufügen
    const nameInput = positionDiv.querySelector('.position-name-input');
    const hiddenName = positionDiv.querySelector('.position-name');
    nameInput.addEventListener('input', () => {
        hiddenName.value = nameInput.value;
    });

    // Event Listener für Description-Input hinzufügen
    const descInput = positionDiv.querySelector('.position-description-input');
    const hiddenDesc = positionDiv.querySelector('.position-description');
    descInput.addEventListener('input', () => {
        hiddenDesc.value = descInput.value;
    });

    // Focus auf das neue Namensfeld setzen
    nameInput.focus();
}

// Position entfernen
function removePosition(button) {
    const positionGroup = button.closest('.position-group');
    if (positionGroup) {
        positionGroup.remove();
    }
}

// Alle Positionen aus dem Formular sammeln
function collectPositions() {
    const positionGroups = document.querySelectorAll('#positions-container .position-group');
    const positions = [];

    positionGroups.forEach((group, index) => {
        const isMain = group.dataset.isMain === 'true';
        const quantity = parseInt(group.querySelector('.position-quantity').value) || 0;
        const price = parseFloat(group.querySelector('.position-price').value) || 0;

        // Name: aus hidden field oder aus input
        let name = group.querySelector('.position-name').value;
        const nameInput = group.querySelector('.position-name-input');
        if (nameInput && nameInput.value) {
            name = nameInput.value;
        }

        // Description: aus hidden field oder aus input
        let description = group.querySelector('.position-description').value;
        const descInput = group.querySelector('.position-description-input');
        if (descInput && descInput.value) {
            description = descInput.value;
        }

        positions.push({
            quantity,
            price,
            name,
            description,
            isMain,
            minutes: isMain ? quantity : 0
        });
    });

    return positions;
}

// Beispieldaten in Formular laden und sofort Angebot generieren
function fillExampleData() {
    // Kundeninformationen
    document.getElementById('company').value = 'Musterfirma GmbH';
    document.getElementById('salutation').value = 'Herr';
    document.getElementById('contact').value = 'Max Mustermann';
    document.getElementById('street').value = 'Beispielstraße 123';
    document.getElementById('plz').value = '40219';
    document.getElementById('city').value = 'Düsseldorf';

    // Vertragsinformationen
    document.getElementById('location').value = 'Düsseldorf';
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
    document.getElementById('contract-number').value = generateContractNumber();

    // Angebotspositionen - Standard-Werte setzen
    const positionGroups = document.querySelectorAll('#positions-container .position-group');
    if (positionGroups.length >= 4) {
        positionGroups[0].querySelector('.position-quantity').value = '2500';
        positionGroups[0].querySelector('.position-price').value = '449.95';

        positionGroups[1].querySelector('.position-quantity').value = '1';
        positionGroups[1].querySelector('.position-price').value = '0';

        positionGroups[2].querySelector('.position-quantity').value = '1';
        positionGroups[2].querySelector('.position-price').value = '4.95';

        positionGroups[3].querySelector('.position-quantity').value = '1';
        positionGroups[3].querySelector('.position-price').value = '0';
    }

    // Vertragsbedingungen
    document.getElementById('contract-start').value = 'mit Unterschrift';
    document.getElementById('billing-start').value = 'nach Ablauf des Testzeitraums';
    document.getElementById('contract-term').value = 'zwölf (12) Monate – abweichend von den AGB läuft der Vertrag für ein (1) Jahr und verlängert sich automatisch um ein (1) weiteres Jahr, wenn er nicht mit einer Frist von 3 Monaten zum Ende des Vertragszeitraums in Textform gekündigt wurde.';
    document.getElementById('test-period').value = 'Das Produkt AI Agent kann innerhalb der ersten vier (4) Wochen ab Vertragsbeginn kostenfrei getestet werden. Während dieses Testzeitraums ist der Kunde berechtigt, ohne Angabe von Gründen vom Vertrag zurückzutreten. Der Abrechnungszeitraum beginnt erst nach Ablauf des Testzeitraums.';
    document.getElementById('billing-period').value = 'Monatliche Abrechnung in Höhe des unter monatlich Netto genannten Betrages.';

    // Angebot sofort generieren
    const form = document.getElementById('offer-form');
    form.requestSubmit();
}

// Formular Submit Handler
document.getElementById('offer-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Daten aus dem Formular sammeln
    const formData = {
        // Kundeninformationen
        company: document.getElementById('company').value,
        salutation: document.getElementById('salutation').value,
        contact: document.getElementById('contact').value,
        street: document.getElementById('street').value,
        plz: document.getElementById('plz').value,
        city: document.getElementById('city').value,

        // Vertragsinformationen
        location: document.getElementById('location').value,
        date: document.getElementById('date').value,
        contractNumber: document.getElementById('contract-number').value,

        // Angebotspositionen - dynamisch sammeln
        positions: collectPositions(),

        // Vertragsbedingungen
        contractStart: document.getElementById('contract-start').value,
        billingStart: document.getElementById('billing-start').value,
        contractTerm: document.getElementById('contract-term').value,
        testPeriod: document.getElementById('test-period').value,
        billingPeriod: document.getElementById('billing-period').value
    };

    // Angebot generieren
    generateOffer(formData);

    // PDF Export via Browser-Druckdialog
    setTimeout(() => {
        // Print-Modus aktivieren (entfernt visuelle Effekte wie box-shadow)
        document.body.classList.add('printing');

        // Kurz warten, damit CSS angewendet wird
        setTimeout(() => {
            window.print();
            // Print-Modus deaktivieren
            document.body.classList.remove('printing');
        }, 100);
    }, 500);
});

function generateOffer(data) {
    // Datum formatieren
    const dateObj = new Date(data.date);
    const formattedDate = dateObj.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Seite 1: Deckblatt
    document.getElementById('output-company').textContent = data.company;
    document.getElementById('output-contact').textContent = data.contact;
    document.getElementById('output-street').textContent = data.street;
    document.getElementById('output-salutation').textContent = `Sehr geehrte${data.salutation === 'Frau' ? '' : 'r'} ${data.salutation} ${data.contact},`;
    document.getElementById('output-plz-city').textContent = `${data.plz} ${data.city}`;
    document.getElementById('output-location-date').textContent = `${data.location}, ${formattedDate}`;
    document.getElementById('output-contract-number').textContent = data.contractNumber;

    // Seite 2+: Angebot (dynamisch, mehrseitig)
    generateOfferPages(data);

    // Seite 3: Konditionen
    document.getElementById('conditions-date').textContent = formattedDate;
    document.getElementById('conditions-start').textContent = data.contractStart;
    document.getElementById('conditions-billing-start').textContent = data.billingStart;
    document.getElementById('conditions-term').textContent = data.contractTerm;
    document.getElementById('conditions-test').textContent = data.testPeriod;
    document.getElementById('conditions-billing').textContent = data.billingPeriod;

    // Angebot sichtbar machen (für Print)
    document.getElementById('offer-container').style.display = 'block';
}

function generateOfferPages(data) {
    const container = document.getElementById('offer-pages-container');
    container.innerHTML = '';

    // Alle Tabellenzeilen erstellen und Gesamtsumme berechnen
    let total = 0;
    const rows = [];

    data.positions.forEach((position) => {
        const sum = position.isMain
            ? (position.quantity > 0 ? position.price : 0)
            : position.quantity * position.price;
        total += sum;

        const row = document.createElement('tr');

        // Anzahl
        const quantityCell = document.createElement('td');
        quantityCell.textContent = position.isMain ? (position.quantity > 0 ? '1' : '0') : position.quantity;
        row.appendChild(quantityCell);

        // Tarif/Beschreibung
        const descCell = document.createElement('td');
        let descHTML = `<strong>${escapeHtml(position.name)}</strong>`;

        if (position.description) {
            const items = position.description.split('|').filter(item => item.trim());
            if (items.length > 0) {
                descHTML += '<ul>';
                items.forEach(item => {
                    let itemText = item.trim();
                    if (position.isMain && itemText.includes('{{minutes}}')) {
                        itemText = itemText.replace('{{minutes}}', position.minutes.toLocaleString('de-DE'));
                    }
                    descHTML += `<li>${escapeHtml(itemText)}</li>`;
                });
                descHTML += '</ul>';
            }
        }

        if (position.isMain) {
            descHTML += '<p style="font-size: 0.8em; margin-top: 8px; color: #888;">*Minutenpakete können jederzeit erweitert werden – vgl. <a href="https://www.sipgate.ai/preise" style="color: #888;">Paketpreise</a>.</p>';
        }

        descCell.innerHTML = descHTML;
        row.appendChild(descCell);

        // Einzelpreis
        const priceCell = document.createElement('td');
        priceCell.textContent = formatCurrency(position.price);
        row.appendChild(priceCell);

        // Summe
        const sumCell = document.createElement('td');
        sumCell.textContent = formatCurrency(sum);
        row.appendChild(sumCell);

        rows.push(row);
    });

    // Mess-Seite erstellen (off-screen) um Zeilenhöhen zu messen
    const measurePage = document.createElement('div');
    measurePage.className = 'page page-2';
    measurePage.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;width:210mm;height:297mm;padding:20mm;';

    const measureHeader = document.createElement('div');
    measureHeader.className = 'page-header';
    measureHeader.innerHTML = '<h2>Unser Angebot</h2><div class="page-logo"><img class="logo-img" style="height:28px;"></div>';
    measurePage.appendChild(measureHeader);

    const measureTable = document.createElement('table');
    measureTable.className = 'offer-table';
    const measureThead = document.createElement('thead');
    measureThead.innerHTML = '<tr><th>Anzahl</th><th>Tarife</th><th>Einzelpreis</th><th>Summe</th></tr>';
    measureTable.appendChild(measureThead);
    const measureTbody = document.createElement('tbody');
    measureTable.appendChild(measureTbody);
    measurePage.appendChild(measureTable);

    document.body.appendChild(measurePage);

    // Maximale Tabellenhöhe pro Seite (in px)
    // A4=297mm, Padding 20mm oben/unten, Seitenheader ~22mm, Footer-Bereich ~25mm
    // Verfügbar: 297-20-20-22-25 = 210mm
    const maxTableHeight = 210 * (96 / 25.4);
    const tfootHeight = 70;

    // Zeilen auf Seiten verteilen
    const pages = [[]];
    let currentPage = 0;

    rows.forEach((row) => {
        const clone = row.cloneNode(true);
        measureTbody.appendChild(clone);

        if (measureTable.offsetHeight > maxTableHeight && pages[currentPage].length > 0) {
            measureTbody.removeChild(clone);
            currentPage++;
            pages[currentPage] = [];
            measureTbody.innerHTML = '';
            measureTbody.appendChild(clone);
        }

        pages[currentPage].push(row);
    });

    // Prüfen ob letzte Seite Platz für tfoot hat
    let tfootFits = false;
    while (!tfootFits && pages[pages.length - 1].length > 1) {
        if (measureTable.offsetHeight + tfootHeight > maxTableHeight) {
            const overflow = pages[pages.length - 1].pop();
            pages.push([overflow]);
            measureTbody.innerHTML = '';
            measureTbody.appendChild(overflow.cloneNode(true));
        } else {
            tfootFits = true;
        }
    }

    document.body.removeChild(measurePage);

    // Seiten-DOM aufbauen
    const footerHTML = '<div class="footer">' +
        '<div class="footer-col">' +
        '<p>sipgate GmbH, Gladbacher Str. 74, 40219 Düsseldorf</p>' +
        '<p>HRB 38841 Düsseldorf GF: Tim Mois, Thilo Salmon</p>' +
        '<p>USt ID: DE257948491, Finanzamt Düsseldorf</p>' +
        '<p>Steuer-Nr.: 106/5754/7147</p>' +
        '</div>' +
        '<div class="footer-col">' +
        '<p>Bank: Commerzbank Düsseldorf</p>' +
        '<p>IBAN: DE10 3004 0000 0381 1488 00</p>' +
        '<p>BIC: COBADEFFXXX</p>' +
        '<p>Gläubiger-ID: DE73ZZZ00001393294</p>' +
        '</div>' +
        '<div class="footer-col">' +
        '<p>Telefon: 0211-63555661</p>' +
        '<p>www.sipgate.de</p>' +
        '<p>Support: team@support.sipgate.de</p>' +
        '</div>' +
        '</div>';

    const offerPageCount = pages.length;

    pages.forEach((pageRows, index) => {
        const isLast = index === pages.length - 1;
        const pageNumber = 2 + index;

        const page = document.createElement('div');
        page.className = 'page page-2';

        // Seitenheader
        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = '<h2>Unser Angebot</h2>' +
            '<div class="page-logo">' +
            '<img src="https://cdn.prod.website-files.com/678900e941dcd8f65b4519f8/678900e941dcd8f65b451a42_sipgate_logo_black.svg" alt="sipgate" class="logo-img">' +
            '</div>';
        page.appendChild(header);

        // Tabelle
        const table = document.createElement('table');
        table.className = 'offer-table';

        const thead = document.createElement('thead');
        thead.innerHTML = '<tr><th>Anzahl</th><th>Tarife</th><th>Einzelpreis</th><th>Summe</th></tr>';
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        pageRows.forEach((row) => tbody.appendChild(row));
        table.appendChild(tbody);

        // Gesamtsumme nur auf letzter Seite
        if (isLast) {
            const tfoot = document.createElement('tfoot');
            tfoot.innerHTML = '<tr class="total-row">' +
                '<td colspan="3" class="total-label">Monatlich Netto (zzgl. MwSt.)</td>' +
                '<td class="total-amount">' + formatCurrency(total) + '</td>' +
                '</tr>';
            table.appendChild(tfoot);
        }

        page.appendChild(table);

        // Fortsetzungs-Hinweis auf Nicht-letzten Seiten
        if (!isLast) {
            const contHint = document.createElement('p');
            contHint.className = 'continuation-hint';
            contHint.textContent = 'Fortsetzung auf der nächsten Seite';
            page.appendChild(contHint);
        }

        // Footer
        page.insertAdjacentHTML('beforeend', footerHTML);

        // Seitennummer
        const pageNum = document.createElement('div');
        pageNum.className = 'page-number';
        pageNum.textContent = pageNumber;
        page.appendChild(pageNum);

        container.appendChild(page);
    });

    // Konditionen-Seitennummer aktualisieren
    document.getElementById('conditions-page-number').textContent = 2 + offerPageCount;
}

function formatCurrency(amount) {
    return amount.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ' €';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Optional: Vorschau-Funktion für Entwicklung/Testing
function showPreview() {
    const offerContainer = document.getElementById('offer-container');
    if (offerContainer.style.display === 'none') {
        offerContainer.style.display = 'block';
        document.getElementById('form-container').style.display = 'none';
    } else {
        offerContainer.style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
    }
}

// Vorschau-Button hinzufügen (optional, für Entwicklung)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const previewBtn = document.createElement('button');
    previewBtn.textContent = 'Vorschau umschalten (Dev)';
    previewBtn.className = 'btn-primary';
    previewBtn.style.marginLeft = '10px';
    previewBtn.type = 'button';
    previewBtn.onclick = showPreview;

    const formActions = document.querySelector('.form-actions');
    if (formActions) {
        formActions.appendChild(previewBtn);
    }
}
