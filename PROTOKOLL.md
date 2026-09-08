# Dokumentation & Änderungsprotokoll — Schabnam Shor Portfolio

**Projekt:** Portfolio-Website Schabnam Shor (Interior Architecture)  
**Datum:** 23. Juli 2026 / Aktualisiert: 08. September 2026  
**Status:** Live & Vercel Deployed  

---

## 📋 Übersicht der durchgeführten Optimierungen

Dieses Protokoll dokumentiert alle technischen, gestalterischen und funktionellen Überarbeitungen, die im Rahmen der Portfolio-Optimierung durchgeführt wurden.

---

### 1. 🎬 Hero-Sektion & 3D-Scroll-Canvas
* **3D-Bauwerk-Sequenz:**  
  Flüssige Animation über 294 hochauflösende Einzelbilder (`assets/frames/f001.jpg` bis `f294.jpg`), synchronisiert mit dem Scrollfortschritt des Nutzers.
* **Canvas Aspect-Ratio Preservation:**  
  Einbau von `drawCoverImage` & Fallback-Abfragen in `sizeCanvas()`, um sicherzustellen, dass die 3D-Bilder auf allen Bildschirmen (Desktop, Tablet, Smartphone) im echten `object-fit: cover`-Modus gerendert werden — frei von vertikalen oder horizontalen Verzerrungen.
* **Abschlusswand mit Namens-Reveal & Portrait:**  
  * Dunkle, architektonische Hintergrundwand (`#141210`) mit zentriertem Schriftzug `SCHABNAM SHOR` und edler Terrakotta-Subzeile `INTERIOR ARCHITECT`.
  * Das Freisteller-Portrait (`assets/schabnam-remove-bg-io.png`) ist direkt am unteren Rand der Wand verankert (`bottom: 0`, `height: min(92vh, 900px)`).
  * Die Wand blendet erst im letzten Scrollbereich (ab Frame 270+) sanft hinein.
* **Mobile-Hero-Feinjustierung:**  
  * Reduzierung der mobilen Hero-Höhe von 240vh auf `170vh`, damit sich das Scrollen auf Smartphones knackig und natürlich anfühlt.
  * Zentrierung der Typografie auf der mobilen Wand sowie Vergrößerung des Abstands zum Subtitel `INTERIOR ARCHITECT` (`clamp(20px, 4vw, 32px)`).

---

### 2. ⚡ PDF-Performance & Blitzschnelle Dokumenten-Anzeige
* **PyMuPDF Batch-Kompression:**  
  Alle PDF-Dokumente im Ordner `assets/pdf/` wurden mit PyMuPDF neu aufbereitet (Stream-Kompression `deflate=True`, Downsampling auf 150 DPI JPEG).
  * *Experimenteller Raum Schnee PDF:* Von **540 MB** auf **7,05 MB** reduziert (98,7 % kleiner).
  * *Bachelorarbeit & Planbögen:* Auf unter 10 % der ursprünglichen Ladezeit optimiert.
* **Asynchrones / Deferred Iframe-Laden (0ms Lag):**  
  Das Modal-Overlay öffnet sich bei PDF-Projekten **augenblicklich ohne Verzögerung (0ms Lag)**. Das PDF-Iframe lädt im Hintergrund entkoppelt, während ein eleganter Spinner („Dokument wird geladen…“) angezeigt wird.
* **Entfernen der PDF-Badges:**  
  Auf Kundenwunsch wurden die `📄 PDF & Plan`-Badges oben rechts von den Bento-Projektkarten entfernt.

---

### 3. 🖼️ Bento Grid & Projekt-Covers
* **Full-Bleed Bildanzeige:**  
  Entfernen aller Ränder/Einpassungs-Stile (`imgFit: "contain"`). Alle Karten nutzen `object-fit: cover !important` für eine randlose, ausfüllende Darstellung ohne schwarze Ränder.
* **Sparkasse Renovation:**  
  Neues Coverbild gerendert aus Seite 4 der originalen Abgabe-PDF (`assets/projekte/sparkasse-cover.png`).
* **Functional Furniture:**  
  * Neues Coverbild gerendert aus Seite 4 der PDF (`assets/projekte/functional-furniture-cover.png`).
  * Bild `functional-furniture-05.png` (Detailzeichnung mit erklärendem Text) an die **erste Stelle der Galerie** gesetzt.
* **Creative Quarter:**  
  Zusammenführung der Entwurfspläne `Plan 1 GEN` bis `Plan 4 GEN` in exakter Reihenfolge zu einer zusammenhängenden PDF (`assets/pdf/creative-quarter-entwurfsplaene.pdf`).

---

### 4. 🏰 Waldmannsburg-Sektion (Aktuelles)
* **Textspalten-Vergrößerung:**  
  Breite der Fotospalte von 68 % auf 46 % reduziert. Dadurch rückt die Textspalte weiter nach links und bietet mehr Leseraum.
* **Banderolen-Ausrichtung:**  
  Der Kicker-Tag `.live-kicker` („Aktuelles · Laufende Masterarbeit“) wurde direkt in die Textspalte oberhalb der Überschrift `<h2>Waldmannsburg</h2>` platziert und bündig ausgerichtet.

---

### 5. ✉️ Kontaktformular & UI-Details
* **Hoher Kontrast im Erfolgs-Status:**  
  Die Bestätigungsbox nach dem Absenden (`.cf-success`) ist in einem edlen Beigeton (`#E8DDD0`) gestaltet mit **dunkler, hochkontrastreicher Schrift (`#140f0d` & `#2a2a2a`)** für 100 % Lesbarkeit.
* **Reset-Button:**  
  Der Button *„Neue Nachricht schreiben“* ist als dunkler Chip-Button in Anthrazit mit warmem Hover-Effekt gestylt.

---

---

### 6. 🎛️ Projekt-Karussell & Karten-Redesign (Portfolio-Slider)
* **Entfall der Ziehleiste (Pullbar):**  
  Die alte manuelle Ziehleiste wurde vollständig entfernt, um ein klares, aufgeräumtes und großzügiges Layout zu schaffen.
* **Prägnante Pfeil-Navigation (Glassmorphism & Terrakotta-Akzent):**  
  * **Positionierung:** Vertikal exakt zentriert (`top: 50%`, `transform: translateY(-50%)`) direkt an den äußeren Kanten des Slider-Viewports (`left: 14px`, `right: 14px`).
  * **Größe & Styling:** Mit 64×64px (48×48px mobil) deutlich vergrößerte runde Buttons aus getöntem Frosted Glass (`rgba(22, 19, 16, 0.76)` mit 16px Backdrop-Blur), eingefasst von einem 1,5px Sandrand (`rgba(232, 221, 208, 0.42)`).
  * **Interaktiver Hover-Status:** Sofortiger Farbumschlag in kräftiges Terrakotta (`#B8614A`), weiße Icon-Kontur, sanfte Vergrößerung (`scale(1.1)`) und ein raumgreifender Terrakotta-Glow (`box-shadow: 0 16px 42px rgba(184, 97, 74, 0.65)`).
  * **Sichtbarkeits-Logik:** Der linke Pfeil blendet sanft aus, solange man am Anfang steht, und erscheint weich ab einem Scrollwert von 20px. Der rechte Pfeil blendet aus, sobald das Ende erreicht ist.
* **Kartenformat, Docked-Bottom Layout & Typografie:**  
  * **Format:** Ausdehnung der Karten in die Vertikale (`height: clamp(380px, 58vh, 620px)`), wodurch Renderings und Architekturpläne im eleganten Monographie-Format zur Geltung kommen.
  * **Docking ganz unten:** Alle Text-Overlays sitzen einheitlich am unteren Rand (`bottom: 0`, `width: 100%`) mit einer Mindesthöhe von `86px` und festem Padding (`16px 20px`).
  * **Reduktion & Zentrierung:** Die dritte Textzeile (Kategorie-Label) wurde entfernt. Es verbleiben nur noch Zeile 1 (Kategorie/Jahr) und Zeile 2 (Projekttitel) — beide horizontal wie vertikal im Textfeld zentriert.
* **Alternierendes Farbschema (Beige / Schwarz im Wechsel):**  
  * **Karte 1, 3, 5... (Beige / `theme-light`):** Heller Sandsteinton (`rgba(236, 229, 220, 0.95)`), weißer Akzentrand oben, Zeile 1 in warmem Terrakotta (`#9C4F3E`) und Titel in tiefem Anthrazitschwarz (`#140F0D`).
  * **Karte 2, 4, 6... (Schwarz / `theme-dark`):** Tiefes Graphitschwarz (`rgba(18, 16, 14, 0.93)`), sandfarbener Akzentrand oben, Zeile 1 in warmem Sandton (`rgba(232, 221, 208, 0.78)`) und Titel in reinem Warmweiß (`#FFFFFF`).
* **Cover-Rendering TRE Vehicle Dynamics:**  
  * Das Titelbild des Projekts wurde gegen das neue, hochqualitative Konferenzraum-Rendering (`assets/projekte/tre-09.jpg`) ausgetauscht.
* **Weicher Peek-Fade-Out-Effekt (Mask-Gradient):**  
  * Die Galerie nutzt dynamische CSS-Masken (`mask-image: linear-gradient(to right, black 0%, black 85%, transparent 100%)`), um angeschnittene Karten am rechten Rand sanft auszublenden und weiteren Content subtil anzudeuten. Die Navigationspfeile bleiben davon unberührt und kristallklar sichtbar.
* **Drag-vs-Click Schwellenwert-Logik:**  
  * Desktop-Mausziehen ist flüssig unterstützt; ein `hasMoved`-Schwellenwert (5px) verhindert Fehlklicks auf das Projekt-Modal während des Wischens.
* **Isolierte Bild-Navigation im Detail-Modal (TRE Vehicle Dynamics):**  
  * Beim Durchklicken (`‹` / `›`), Swipen oder Tastatursteuern wird nun ausschließlich das Bildelement auf der linken Seite aktualisiert (`updateModalMedia()`).
  * Das gesamte restliche Modal (Kartenpanel, Text-Spalte rechts, Header, Navigationsleiste) bleibt absolut fixiert und ruhig im DOM stehen — kein Neurendern des Modals, kein Springen der `modalUp`-Animation und kein Zurücksetzen der Leseposition.
  * Horizontale Touch-Swipe-Gesten (`touchstart`/`touchmove`/`touchend` mit Event-Isolierung) und Desktop-Mausziehen wurden direkt auf dem Bildbereich verankert.
* **PDF-Seitenbereinigungen:**  
  * **Modernisierung mit Feingefühl:** Die letzten zwei Seiten (Seite 11 & 12) wurden aus `baa-bachelorarbeit.pdf` entfernt (jetzt 10 Seiten im Kernformat).
  * **Hotelzimmer Ausführungsplanung:** Die letzte Seite (Seite 9, Kostenberechnung) wurde aus `hotelzimmer-ausfuehrungsplanung.pdf` entfernt (jetzt exakt 8 CAD-Planblätter). Metadaten und Bezeichnungen wurden entsprechend auf 8 Pläne angepasst.

---

### 7. 🧩 Sektion „Fähigkeiten & Tools“ — Bento Grid Overhaul & Motion Showcase
* **Grid-Proportionen (8 / 4 & 6 / 6 Spalten-Split):**
  * **Obere Reihe:** Großzügige 8/12-Spalten-Breite (`grid-column: span 8`) für „Software & Tools“, damit die interaktive Workflow-Pipeline atmen und wirken kann. Kompakte 4/12-Spalten-Breite (`grid-column: span 4`) für „Kommunikation & Projektführung“.
  * **Untere Reihe:** Perfekt austarierte 6/6-Spalten-Symmetrie (`grid-column: span 6`) für „Entwurf & Raumplanung“ und „Material & Atmosphäre“.
* **Kachel: Software & Tools (Heller Zeichentisch-Look, Maskierung & Tooltips):**
  * **Zeichentisch-Arbeitsfläche:** Die Stage nutzt den hellen, warmen Ton `#FAF7F2` mit feinem inneren Schatten (`inset 0 2px 10px rgba(0,0,0,0.03)`), der wie ein edler Architektur-Zeichentisch wirkt.
  * **SVG-Layering & Vectorworks-Transparenz-Fix:**
    * Die `AnimatedBeam`-SVG-Ebene liegt strikt auf `z-index: 1` hinter den Knoten.
    * Alle Software-Knoten und Icons (`.wf-logo-mask`, `.cluster-icon`) sitzen auf `z-index: 10` und besitzen einen deckenden `#FAF7F2`-Hintergrund. Dadurch scheinen keine farbigen Laser-Strahlen mehr durch die transparente Aussparung des Vectorworks-„V“ oder durch Icon-Details.
  * **Icon-Größenharmonisierung:**
    * Die Icons für Pinterest, Miro, Freihand-Skizze und Material-Recherche wurden auf die optische Masse der Software-Logos angepasst (~44px–52px).
  * **Elegante Dark-Graphite Tooltips:**
    * Jeder Knoten ist mit einem dezenten, dunklen Tooltip (`.wf-tooltip`) ausgestattet, der bei Hover weich einblendet (`opacity: 1`, `translateY(0)`), den Namen des Programms und seinen Einsatzzweck nennt und durch smarte Kantenjustierung nicht über das Bento-Panel hinausragt.
* **Kachel: Kommunikation & Projektführung (Bereinigung & 5 Kernkompetenzen):**
  * **Badge-Entfernung:** Sämtliche störenden Rand-Pills („PRÄSENTATION“, „LEADERSHIP“, etc.) wurden restlos entfernt.
  * **5 authentische Innenarchitektur-Kompetenzen in der `AnimatedList`:**
    1. *Projektkoordination:* Schnittstelle zwischen Planung, Handwerk & Team
    2. *Präsentationen & Pitch:* Visuelle Aufbereitung für Auftraggeber & Bauherren
    3. *Kundenberatung:* Bedarfsanalyse und individuelle Raumkonzepte
    4. *Teamwork:* Kollaboratives Arbeiten im interdisziplinären Planerteam
    5. *HR & Recruiting:* Erfahrung in Teamaufbau und Mitarbeiterbetreuung
* **Kachel: Material & Atmosphäre (Edle Werkstoff-Kanten & Terrakotta-Glow):**
  * Alle quadratischen Material-Muster im Endlos-Marquee haben eine feine, präzise Einfassung (`border: 1.5px solid rgba(42, 42, 42, 0.08)`).
  * Bei Hover akzentuiert eine samtige Terrakotta-Kante (`rgba(156, 79, 62, 0.7)`) mit tiefem Raumschatten (`box-shadow: 0 14px 34px rgba(156, 79, 62, 0.24)`).
* **Kachel: Entwurf & Raumplanung (Interaktives Motion Showcase):**
  * Ersetzung der starren 4 Textkarten durch ein dynamisches, interaktives Motion Showcase (`#concept-showcase`):
    1. *3D-Visualisierung & Rendering:* Räumlicher, sich im 3D-Perspektivraum drehender Drahtgitter-Würfel (`.cube-3d` mit `rotateX` und `rotateY`).
    2. *Grundrisse & Zonierung:* Selbstzeichnender architektonischer CAD-Grundriss (`drawPlan`-Pfad-Animation mit Raumstempeln).
    3. *Lichtkonzepte & Atmosphäre:* Stilvolle Pendelleuchte mit pulsierendem, warmem Lichtkegel (`lampConePulse` & `bulbGlow`).
    4. *Detail- & Ausführungsplanung:* Rotierender technischer Präzisionszirkel mit Winkelmaß und Fadenkreuz (`rotateCompassCircle`).
  * **Interaktive Tab-Leiste & Progress:**
    * 4 Navigations-Reiter mit linearem Ladebalken (`.tab-progress`), Klick-Auswahl zur direkten Themenansicht und automatischer Pause beim Überfahren mit dem Mauszeiger.

---

### 8. 🚀 Git & Vercel Deployment
* Alle Änderungen wurden im Git-Repository versioniert und auf den Hauptbranch `origin/main` gepusht:
  * Repository: `https://github.com/eeraj88/schabnam-portfolio.git`
* Das automatische Deployment auf Vercel baut und veröffentlicht die Website bei jedem Push.

---
*Protokoll automatisch generiert für die Projektdokumentation.*

