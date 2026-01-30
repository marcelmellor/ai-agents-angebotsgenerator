# sipgate AI Agents - Angebotsgenerator

Eine Web-Anwendung zur Erstellung professioneller, dreiseitiger Angebote für sipgate AI Agents Enterprise Verträge.

## Features

- Rein clientseitig - keine Serveranbindung erforderlich
- Dreiseitiges Angebot basierend auf sipgate-Design
- Automatische Berechnung der Gesamtsumme
- Druckoptimiertes Layout (A4-Format)
- PDF-Export über Browser-Druckdialog (Als PDF speichern)
- Deutsche Formatierung (Datum, Währung)

## Live-Version

Die App ist deployed unter: [Netlify-URL hier einfügen]

## Lokale Entwicklung

### Mit einem lokalen Server

```bash
npm start
```

Oder mit einem beliebigen HTTP-Server:

```bash
npx serve .
# oder
python3 -m http.server 8000
```

### Direkt im Browser

Sie können `index.html` auch direkt im Browser öffnen.

## Deployment auf Netlify

### Option 1: Drag & Drop

1. Gehen Sie zu [app.netlify.com](https://app.netlify.com)
2. Ziehen Sie den Projektordner in den Deploy-Bereich
3. Fertig!

### Option 2: Git-Integration

1. Pushen Sie das Repository zu GitHub/GitLab
2. Verbinden Sie das Repository mit Netlify
3. Netlify deployed automatisch bei jedem Push

Die `netlify.toml` ist bereits konfiguriert.

## Verwendung

### 1. Formular ausfüllen

Füllen Sie alle erforderlichen Felder aus:

#### Kundeninformationen
- Firmenname
- Ansprechpartner
- Straße
- PLZ und Ort

#### Vertragsinformationen
- Ort (Standard: Düsseldorf)
- Datum (wird automatisch auf heute gesetzt)
- Vertragsnummer

#### Angebotspositionen
Passen Sie die vier Standardpositionen an:
1. **AI Agents Enterprise Tarif**: Minutenkontingent und Preis
2. **Unterstützte Einrichtung**: Anzahl und Preis
3. **Rufnummernblock**: Anzahl und Preis
4. **Portierung**: Anzahl und Preis

Sie können auch eigene Positionen hinzufügen mit dem Button "+ Neue Position hinzufügen".

#### Vertragsbedingungen
Anpassbare Texte für:
- Vertragsbeginn
- Abrechnungsbeginn
- Vertragslaufzeit
- Testzeitraum
- Abrechnungszeitraum

### 2. Angebot generieren

Klicken Sie auf "Angebot generieren". Es öffnet sich der Browser-Druckdialog.

### 3. Als PDF speichern

Im Druckdialog wählen Sie "Als PDF speichern" als Drucker/Ziel aus.

**Tipp für Chrome/Edge:**
- Ziel: "Als PDF speichern"
- Seiten: Alle
- Layout: Hochformat
- Ränder: Standard oder Keine

Das generierte PDF:
- Ist im A4-Format (210mm × 297mm)
- Enthält alle drei Seiten (Deckblatt, Angebot, Konditionen)
- Kann direkt per E-Mail versendet oder ausgedruckt werden

## Struktur

```
ai-agent-angebotsgenerator/
├── index.html          # Hauptdatei mit Formular und Angebots-Template
├── styles.css          # Styling und Print-Layout
├── script.js           # JavaScript für Datenbindung und Generierung
├── netlify.toml        # Netlify-Konfiguration
├── package.json        # Projekt-Metadaten
└── README.md           # Diese Datei
```

## Technische Details

### Browser-Kompatibilität
- Chrome/Edge: Vollständig unterstützt
- Firefox: Vollständig unterstützt
- Safari: Vollständig unterstützt

### Print-CSS
Das Layout verwendet Print-CSS-Media-Queries, um eine optimale Darstellung auf A4-Format zu gewährleisten:
- Seitengröße: 210mm × 297mm
- Seitenränder: 20mm
- Automatische Seitenumbrüche

### Berechnungen
- Gesamtsumme wird automatisch aus allen Positionen berechnet
- Preise werden im deutschen Format dargestellt (z.B. 449,95 €)
- Datumsangaben werden automatisch formatiert (TT.MM.JJJJ)

## Anpassungen

### Farben ändern
Die sipgate-Markenfarbe (Gelb-Grün) ist in `styles.css` definiert:

```css
background: linear-gradient(135deg, #c6f000 0%, #a8d000 100%);
```

### Footer-Informationen
Die Kontaktdaten im Footer können in `index.html` in den `.footer`-Bereichen angepasst werden.

## Entwicklung

Für lokale Entwicklung starten Sie einen lokalen Server. Änderungen an HTML, CSS oder JavaScript können direkt getestet werden, indem Sie die Seite neu laden.

**Tipp**: Im Entwicklungsmodus (localhost) wird automatisch ein "Vorschau umschalten"-Button angezeigt, mit dem Sie zwischen Formular und generiertem Angebot wechseln können, ohne zu drucken.

## Lizenz

MIT

## Support

Bei Fragen oder Problemen wenden Sie sich bitte an: team@support.sipgate.de
