# Memory

## Spielerklärung

Dieses Projekt ist ein Memory-Spiel über verschiedene Hauptstädte der Welt. Ein Memory funktioniert so, dass man zwei Karten aufdeckt und ein Paar finden muss. Ein Paar besteht aus einem Bild und dem Namen der Hauptstadt.

## Branching-Strategie

Die Branching Strategie die ich in diesem Projekt verwenden werde ist die Feature-Branching Strategie. Die Funktioniert so, dass wenn man etwas neues etwas neues programmiert, dass nicht auf dem Main macht sondern immer kleine Branches macht und wenn diese funktionieren werden die mit einem Pull Request auf den Main hinzugefügt.
Auf dem Main geht alles Einwandfrei und die Änderungen werden sepperat gemacht, damit sie nicht den funktionierenden Code kaputt machen würden.

## Merge-Strategie

Die Merge Strategie die ich benutzen werde sind folgende. Alle Änderungen die ich machen werden, müssen mit einem Pull Request durchgeführt werden. Ich werde die Änderungen Mergen oder alternativ Rebasen. Wenn ich Teile vom Code Ändere bzw. etwas hinzufüge, muss ein Teammitglied mit mir ein Code Review machen(den Code überprüfen), dass alles stimmt. Wenn das Code Review durchgeführt worden ist, geht der Code ins Testing. Hat alles funktioniert, kann der Code gemerged werden.

Hier kommst du zum [Contributing](CONTRIBUTING.md)

## Setup

Dieses Projekt wird mit React/ Typescript programmiert.
Es hat eine ESLint und eine Prettier Konfiguration.
Das gitignore File findet man im Root Verzeichnis

## Ausführung

`npm run dev`:
Mit diesem Befehl geht die Webseite in den Watch-Modus und reflektiert sofort die Änderungen am Code.

`npm run build`:
Mit diesem Befehl bereitet man den Code für die Produktion vor, indem man ihn optimiert.

`npm run lint`:
Mit diesem Befehl überprüft man den Code auf Fehler und potenzielle Bugs.

 `npm run preview`: 
 Mit diesem Befehl startet man einen lokalen Webserver, um die produktionsfertige Version der Anwendung zu testen.

`npm run deploy`: 
Mit diesem Befehl wird die Webseite automatisch auf GitHub Pages veröffentlicht, indem der Inhalt des `dist`-Ordners hochgeladen wird.
