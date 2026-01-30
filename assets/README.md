# App-Icons

Dieses Verzeichnis sollte die App-Icons für verschiedene Plattformen enthalten.

## Benötigte Icon-Dateien

### macOS
- **icon.icns** - macOS Icon-Bundle (512x512px oder größer empfohlen)
  - Kann mit dem Tool `iconutil` aus einem .iconset-Ordner erstellt werden
  - Oder online mit Tools wie https://cloudconvert.com/png-to-icns

### Windows
- **icon.ico** - Windows Icon (256x256px empfohlen)
  - Sollte mehrere Auflösungen enthalten (16x16, 32x32, 48x48, 256x256)
  - Kann mit Tools wie https://cloudconvert.com/png-to-ico erstellt werden

### Linux
- **icon.png** - PNG-Icon (512x512px oder 1024x1024px)

## Icon-Erstellung

1. Erstellen Sie ein quadratisches Logo/Icon (mindestens 1024x1024px) im PNG-Format
2. Verwenden Sie Online-Konverter oder Tools, um die Formate zu konvertieren:
   - PNG → ICNS für macOS
   - PNG → ICO für Windows
   - PNG bleibt PNG für Linux

## Ohne Icons

Die App kann auch ohne Icons gebaut werden. electron-builder verwendet dann ein Standard-Electron-Icon.

Um die App ohne Icons zu bauen, entfernen Sie die `icon`-Zeilen aus der `build`-Konfiguration in [package.json](../package.json).
