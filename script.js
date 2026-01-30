// Position Counter für eindeutige IDs
let positionCounter = 4;

// Datum auf heute setzen beim Laden
window.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

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
    document.getElementById('contract-number').value = 'B4316065';

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

    // Seite 2: Angebot - Tabelle dynamisch generieren
    const tableBody = document.getElementById('offer-table-body');
    tableBody.innerHTML = '';

    let total = 0;

    data.positions.forEach((position, index) => {
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
                    // Ersetze {{minutes}} mit der tatsächlichen Minutenzahl
                    let itemText = item.trim();
                    if (position.isMain && itemText.includes('{{minutes}}')) {
                        itemText = itemText.replace('{{minutes}}', position.minutes.toLocaleString('de-DE'));
                    }
                    descHTML += `<li>${escapeHtml(itemText)}</li>`;
                });
                descHTML += '</ul>';
            }
        }

        // Minutenpaket-Hinweis für Hauptposition
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

        tableBody.appendChild(row);
    });

    // Gesamtsumme
    document.getElementById('total-amount').textContent = formatCurrency(total);

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
