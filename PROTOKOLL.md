# Dokumentation & Änderungsprotokoll — Schabnam Shor Portfolio

**Projekt:** Portfolio-Website Schabnam Shor (Interior Architecture)  
**Datum:** 23. Juli 2026 / Aktualisiert: 08. September 2026  
**Status:** Live & Vercel Deployed  

---

## 📋 Übersicht der durchgeführten Optimierungen

Dieses Protokoll dokumentiert alle technischen, gestalterischen und funktionellen Überarbeitungen, die im Rahmen der Portfolio-Optimierung durchgeführt wurden.

---

### 1. 🎬 Hero-Sektion — Konzept 1: Geerdeter Freisteller, Schnittkanten-Überlappung & Ambient-Gradients
* **Atmosphärische Ambient-Gradients & Tiefenverlauf:**
  * `.hero-sticky` und `.hero` mit multidimensionalen architektonischen Licht-Gradients hinterlegt:
    * *Oben rechts:* Sanfter warmer Champagner-/Lichtschein (`radial-gradient(circle at 85% 15%, rgba(215, 195, 170, 0.12) 0%, transparent 60%)`).
    * *Unten links:* Dezenter Tiefenschatten (`radial-gradient(circle at 25% 85%, rgba(0, 0, 0, 0.45) 0%, transparent 65%)`).
    * *Hintergrund:* Taktiler Tiefenverlauf (`linear-gradient(180deg, #161616 0%, #121212 50%, #0d0d0d 100%)`), der den Raum haptisch strukturiert.
* **Geerdeter Freisteller mit Schnittkanten-Überlappung (`z-index: 10`):**
  * Porträt ([`#hero-portrait`](file:///C:/Users/eeraj/Documents/PROJEKTE/Schabnam%20Portfolio/schabnam-portfolio-site/index.html#L53)) ist direktes Kindelement von `.hero-sticky` mit fester Verankerung am unteren Viewport-Rand (`position: absolute; bottom: 0;`).
  * **Vergrößerte Skalierung:** Um ca. 25–30 % vergrößert auf `height: clamp(520px, 72vh, 860px) !important;` (`max-width: 55vw;`), sodass ihr Porträt präsent und skulptural im Raum steht.
  * **Schnittkanten-Überlappung:** Mit `left: 59%; transform: translateX(-42%);` ragt ihr Körper und ihre Schulter dominant und natürlich über die Nahtlinie in die Canvas-Bühne hinein.
  * **Ebenenpriorität:** Fest definiert auf `z-index: 10 !important;`.
  * Weicher, plastischer Raumschatten: `filter: drop-shadow(0 20px 48px rgba(0, 0, 0, 0.65));`.
* **Typografie "SCHABNAM SHOR" (Oben rechts in den freien Raum versetzt):**
  * **Platzierung:** Weit weg vom Kopf nach oben rechts platziert via [`.hero-info-col`](file:///C:/Users/eeraj/Documents/PROJEKTE/Schabnam%20Portfolio/schabnam-portfolio-site/styles.css#L1725) (`padding-top: clamp(100px, 15vh, 160px); padding-right: clamp(32px, 6vw, 96px);`).
  * **Ausrichtung & Block:** Rechtsbündig gesetzt (`align-items: flex-end; text-align: right; margin-left: auto;`), sodass die Buchstaben völlig frei im dunklen Raum stehen und keinerlei Berührungspunkte mit ihren Haaren haben.
  * **Massive Grotesk:** `font-family: Jost, sans-serif; font-weight: 800; font-size: clamp(3rem, 5vw, 5.5rem); line-height: 0.92; letter-spacing: -0.025em; text-transform: uppercase; color: #FFFFFF;`.
* **MorphingText (Verdoppelt & Veredelt):**
  * **Positionierung:** Sitzt direkt im freien Streifen unterhalb des neu positionierten Namens, rechts neben ihrem Kopf/Schulterbereich mit freiem horizontalem Abstand zur Silhouette.
  * **Schriftgröße verdoppelt:** Auf `font-size: clamp(2.5rem, 4vw, 3.75rem) !important;` verdoppelt (entspricht Tailwind `text-4xl xl:text-5xl`).
  * **Container & Zeilenhöhe:** `height: clamp(54px, 5.5vw, 84px); line-height: 1.15; white-space: nowrap; overflow: visible;`, sodass lange Begriffe wie „Material & Atmosphäre“ großzügig und ohne Umbruch im Raum stehen.
  * **Styling & Farbe:** Edle Serif-Italic (`font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 400;`) in warmem Beige (`color: #E6DFD5 !important;`).
  * **SVG-Filter:** Filterbounds auf `x="-60%" y="-60%" width="220%" height="220%"` erweitert für artefaktfreie, flüssige Liquid-Blur-Übergänge.
* **Gestraffte Scrollstrecke (230vh) & Organischer Bottom-Fade:**
  * Gesamthöhe von `.hero` von `300vh` moderat auf `230vh` gestrafft — 294 Frames bleiben butterweich scrubbbar bei deutlich reduziertem Scrollaufwand.
  * Ab ca. Frame 260 / 88 % Scrollblendung aktiviert sich `#hero-bottom-fade` (`linear-gradient(to bottom, transparent 0%, #E8DDD0 100%)`), wodurch die dunkle Hero-Bühne organisch und weich in das helle `#aktuelles` übergeht.
* **Kuratierte Canvas-Bühne & HiDPI-Schärfe:**
  * 60 % Spaltenbreite, kuratiertes Fenster (`.hero-canvas-stage`, `border-radius: 12px`, `box-shadow: 0 20px 50px rgba(0,0,0,0.5)`).
  * Retina-Auflösung via `devicePixelRatio` und `ctx.imageSmoothingQuality = 'high'` in [`app.js`](file:///C:/Users/eeraj/Documents/PROJEKTE/Schabnam%20Portfolio/schabnam-portfolio-site/app.js).
* **Desktop-Kollisionsbehebung (Flache Viewports / Laptops):**
  * **Textblock fixiert:** `.hero-brand-block` erhält `flex-shrink: 0; z-index: 30; pointer-events: auto;`, sodass der Name "SCHABNAM SHOR" und der Morphing-Text immer vorrangig sichtbar bleiben.
  * **Freisteller-Höhe an Viewport gebunden:** Skalierung des Freistellers auf `height: clamp(340px, 48vh, 620px); width: auto; object-fit: contain;` neu tariert.
  * **2.5rem Mindestabstand garantiert:** Auf Desktop wird via CSS (`max-height: calc(...)`) und dynamischer Clearance-Kalkulation in [`app.js`](file:///C:/Users/eeraj/Documents/PROJEKTE/Schabnam%20Portfolio/schabnam-portfolio-site/app.js) ein Mindestabstand von `2.5rem` (40px) zwischen dem MorphingText und Schabnams Kopf erzwungen. Die Haare ragen somit selbst bei stark gestauchten Laptop-Fenstern niemals in die Typografie.
* **Mobile-Optimierung (Frame-Scrubbing, gestraffter Flex-Stapel & verdoppeltes Porträt):**
  * **Frame-Scrubbing & Touch:** `.hero` auf `200vh` und `.hero-sticky` auf `position: sticky; top: 0; height: 100dvh;` gesetzt, um butterweiches Frame-Scrubbing auf Mobile zu gewährleisten. `pointer-events: none` auf dem Canvas und `-webkit-overflow-scrolling: touch` leiten Touch-Gesten latenzfrei an `#app-scroll` weiter.
  * **Tote Fläche eliminiert (Kompakter Flex-Stapel):** Auflösung des starren `space-between`. Der Bereich unterhalb der Canvas-Bühne ist als kompakter vertikaler Flex-Stapel (`flex flex-col items-center justify-start`) organisiert: Canvas-Bühne (`order: 1`), zentrierter Textblock (`order: 2`), geerdetes Porträt (`order: 3`).
  * **Porträt auf Mobile verdoppelt:** Skalierung mindestens verdoppelt auf `height: clamp(280px, 38vh, 420px); width: auto;` (auf Kleinstdisplays `clamp(260px, 37vh, 380px)`), zentriert geerdet mit `object-position: bottom center`.
  * **Freiraum & Kopf-Position:** Schabnams Kopf sitzt direkt mit harmonischem Freiraum (ca. 2–3 rem / `margin-top: clamp(12px, 2.2vh, 22px)`) unter dem Morphing-Text. Der Textblock ("SCHABNAM SHOR" + MorphingText) bleibt oben zentriert ausgerichtet (`color: #E6DFD5`), Desktop bleibt völlig unberührt.

---

### 1b. 👤 Sektion "Über mich" — Zweifarbiges Color-Blocking & Persönliche Profilspalte
* **Zweifarbiges Color-Blocking (Hintergrund):**
  * Linke Fläche (von ganz links bis exakt zur rechten Kante des Fotos / 38 % der Sektionsbreite): Satteres, warmes Sandstein-/Kalkstein-Beige (`#D8CEBE`).
  * Rechte Fläche: Lichte Textbühne im harmonischen Grundton (`#E8DDD0`).
  * Nahtloser Sektionsübergang via `linear-gradient(to right, #D8CEBE 0%, #D8CEBE 38%, #E8DDD0 38%, #E8DDD0 100%)`.
  * Das Foto am Zeichentisch ([`assets/ueber-mich-remove-bg-io (4).png`](file:///C:/Users/eeraj/Documents/PROJEKTE/Schabnam%20Portfolio/schabnam-portfolio-site/assets/ueber-mich-remove-bg-io%20(4).png)) schließt unten bündig ab und ist plastisch auf dieser Ton-in-Ton-Fläche geerdet.
* **Tags restlos bereinigt:**
  * Die Pill-Tags („INNENARCHITEKTUR“, „LICHT & MATERIAL“ etc.) wurden vollständig aus HTML und CSS entfernt.
* **Strukturiertes 2-Spalten-Layout (12er-Raster):**
  * **Linker Textbereich (col-span-7):**
    * Dachzeile: `ÜBER MICH` (Jost, 11px, letter-spacing: 0.24em).
    * Headline: `ICH GESTALTE RÄUME.` in markanter Grotesk mit flüssigem Typewriter-Effekt.
    * Leitmotiv: *„Mit dem Blick für Atmosphäre, Materialität und Licht — für Räume, die technisch funktionieren und emotional treffen.“* in eleganter Serif-Italic.
    * Fließtext: Auf zwei prägnante, lesefreundliche Absätze mit großzügigem Zeilenabstand (`line-height: 1.75`) gestrafft.
  * **Rechter Bereich / Persönliche Profilspalte (col-span-5):**
    * Steife Buzzwords („Hospitality“, „New Work“) restlos durch persönliche Interessen und Kernstärken ersetzt.
    * Feine Trennlinien (`border-t border-neutral-400/25 py-3`) für eine luftige, architektonische Struktur:
      * **LEIDENSCHAFT:** Wohnkultur, Freihandzeichnen & Materialästhetik
      * **KREATIVITÄT:** Raumgefühl, Skizzieren & Szenografie
      * **PERSÖNLICHES:** Vintage-Design, Altbau-Liebe & [Cat Mom]
* **Interaktives „Cat Mom“ Easter-Egg (Freigestellte Katzen bündig auf Regal-Linie):**
  * Das Stichwort „Cat Mom“ ist dezent gestrichelt unterstrichen und dient als interaktiver Trigger (`cursor: pointer`).
  * **Exakte Verankerung an der Linie:** Die freigestellten Katzen (`cats.png`, ohne Hintergrund und transparent auf den exakten Pfoten-Abschluss getrimmt) sitzen in [`.cats-shelf-container`](file:///C:/Users/eeraj/Documents/PROJEKTE/Schabnam%20Portfolio/schabnam-portfolio-site/styles.css) mit `position: absolute; bottom: 100%; left: 0; width: 100%; display: flex; justify-content: center; align-items: flex-end; margin-bottom: 0;` bündig direkt auf der oberen horizontalen Haarlinie oberhalb von „LEIDENSCHAFT“.
  * **Skalierung & Bild:** `height: clamp(120px, 16vh, 180px); width: auto; object-fit: contain; object-position: bottom;`.
  * **Slide-Up Bewegung:**
    * *Ruhezustand:* `opacity: 0; transform: translateY(15px); pointer-events: none; transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);`.
    * *Hover/Aktivierung über „Cat Mom“:* `opacity: 1; transform: translateY(0);` — die Katzen gleiten geschmeidig nach oben und rasten exakt auf der Haarlinie ein.
  * **Touch-Unterstützung:** Antippen auf mobilen Endgeräten schaltet das Katzen-Element ebenfalls flüssig ein und aus.

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

### 8. 🧊 Sektion „Stationen & Erfahrung“ (Werdegang) — Echtes Ping-Pong-3D-Band mit interaktivem Drag & Reversal
* **Layout & 3D-Bühne (1 zentraler Stream):**
  * **Zentraler Container (`.wd-stream-container`):** Mittig zentriert (`width: min(560px, calc(100% - 32px))`, `margin: 0 auto`), `perspective: 800px` (`-webkit-perspective: 800px`), Höhe `clamp(580px, 72vh, 740px)` und `overflow: hidden`.
  * **3D-Neigung (`.wd-stream-stage`):** `transform: rotateX(16deg) rotateY(-10deg) rotateZ(6deg);` mit `transform-style: preserve-3d;` für eine ausbalancierte Raumschräge und optimale Lesbarkeit.
  * **Sanfte Gradients oben und unten:** Ausblend-Verläufe oben (`.wd-edge-top`) und unten (`.wd-edge-bottom`) im Hintergrundton `#E8DDD0` mit `pointer-events: none; z-index: 10;`.
* **Keine Endlos-Schleife & Ping-Pong (Von Mitte zu Mitte):**
  * **Keine Duplizierung:** Das Array enthält exakt die 7 definierten Stationen ohne künstliches Loopen.
  * **Startpunkt (Zentriert in der Mitte):** Beim Betreten der Sektion startet Karte 1 („Master of Arts Innenarchitektur“) exakt in der vertikalen Mitte des Containers (`yStart = containerCenter - card1CenterInTrack`). Die obere Hälfte des Containers bleibt bewusst frei und lässt die 3D-Bühne und Tiefe atmen.
  * **Aufwärtsbewegung:** Das Band gleitet langsam nach oben, bis die letzte Karte („Rechtswissenschaften“) exakt in der vertikalen Mitte der Sektion ankommt (`yEnd = containerCenter - card7CenterInTrack`, unterhalb von Karte 7 bleibt die untere Hälfte frei).
  * **Richtungsumkehr:** Sobald Karte 7 zentriert ist, kehrt die Animation weich um und gleitet zurück nach unten, bis Karte 1 wieder exakt in der Mitte ruht (`repeat: Infinity, repeatType: "reverse"`).
* **Interaktion & Steuerung:**
  * **`pauseOnHover`:** Bei Berührung mit dem Mauszeiger friert die Bewegung sofort an der aktuellen Position ein.
  * **Maus-Drag (`drag="y"`):** Begrenzung durch Drag-Constraints exakt im Intervall `[yEnd, yStart]` (oberer Anschlag = Karte 1 zentriert, unterer Anschlag = letzte Karte zentriert). Weiche Rubberband-Resistance (0.22) beim Ziehen über die Anschläge hinaus.
  * **Wheel-Support:** Sanftes Scrollen per Mausrad innerhalb der Anschläge mit automatischer Weiterführung des Ping-Pong-Zyklus.
* **Spürbar vergrößerte Kartengröße & Abstände:**
  * **Dimensionen (`.wd-stream-card`):** Breite `max-w-lg min-w-[380px] sm:min-w-[460px]`, `min-height: 164px`, großzügiges Padding `py-8 px-10` (`padding: 32px clamp(28px, 4vw, 40px);`), abgerundete Ecken (`rounded-2xl` / 20px).
  * **Deutlich vergrößerter Abstand:** Vertikaler Abstand zwischen den Stationen auf `gap: 32px;` (`gap-8`) vergrößert für klare Trennung der Stationen.
  * **Styling & Hover:** Dunkler Hintergrund (`#242220`), feine Kontur (`border: 1px solid rgba(255, 255, 255, 0.15)`). Bei Hover leuchtet der Rand auf (`border-color: rgba(255, 255, 255, 0.5)`), mit feinem Lift (`scale(1.02)`) und tiefem Raumschatten (`box-shadow: 0 20px 48px rgba(0, 0, 0, 0.42)`).
  * **Typografie (Pure Architektur-Typo):**
    * *Zeitraum / Status:* `text-sm font-medium tracking-wide text-neutral-300` (`IBM Plex Mono`, `clamp(13px, 1.05vw, 14.5px)`, `font-weight: 500`, `#D4D4D4`).
    * *Titel / Rolle:* `text-xl font-bold text-white` (`Jost`, `clamp(20px, 1.9vw, 24px)`, `font-weight: 700`, `#FFFFFF`).
    * *Institution / Ort:* `text-base text-neutral-400` (`Jost`, `clamp(15px, 1.2vw, 16.5px)`, `#A3A3A3`).
* **Datenbasis (7 Stationen):**
  1. *03.2025 – HEUTE · Studium:* Master of Arts Innenarchitektur | Hochschule Kaiserslautern
  2. *08.2023 – HEUTE · Beruf:* Recruiter & HR Administrator | Reline Europe GmbH
  3. *2024 · Auslandssemester:* D-EVA Studios | Bali
  4. *2020 – 2024 · Studium:* Bachelor of Arts Innenarchitektur | Hochschule Kaiserslautern
  5. *Ehrenamt:* Dolmetscherin & Integration | Arbeitskreis Asyl / Stadt Neustadt a. d. W.
  6. *Gastronomie:* Servicekraft | Komami
  7. *Studium:* Rechtswissenschaften | Universität zu Köln

---

### 9. 🎙️ Sektion „Perspectives“ (Podcast) — Zentrierter Cinema-View & 50/50 Cards Grid
* **Zentrierter Cinema-Player (16:9):**
  * Auflösung des asymmetrischen 2-Spalten-Splits zugunsten einer großzügigen, zentrierten Kinobühne (`.ps-cinema-wrap` mit `max-width: 1024px; margin: 0 auto;`).
  * Video-Container (`.ps-video-stage`) im festen 16:9-Format mit `border-radius: 20px`, feinem Border (`border: 1px solid rgba(255,255,255,.1)`) und tiefem Raumschatten (`box-shadow: 0 24px 60px rgba(0,0,0,.6)`).
* **Bereinigung & Fokussierung:**
  * Komplette Entfernung der Topic-Tags / Pillen („Wir diskutieren: Materialität...“).
  * Vollständige Entfernung der 4 Metadaten-Felder unter dem Video (Seminar, Hochschule, Dauer, Datum) für eine ruhige, reduzierte Architektur-Ästhetik.
* **Zwei Cards unter dem Video (50/50 Grid):**
  * Direkt unter dem Video bündig platziertes 2-Spalten-Raster (`.ps-cards-grid` mit `grid-template-columns: repeat(2, 1fr); gap: 24px;`).
  * Dunkles Design (`background: #242220; border: 1px solid rgba(255,255,255,.1); border-radius: 20px; min-height: 280px;`).
  * **Linke Card (Gast-Steckbrief):**
    * Heller Kontrast-Badge: `ZU GAST` in warmem Weiß/Beige (`color: #E8DDD0; background: rgba(232, 221, 208, 0.12); border: 1px solid rgba(232, 221, 208, 0.22);`).
    * Titel: `SASCHA BAUER` in fetter, markanter Typo (`Jost`, `font-bold`, `text-2xl`, `#FFFFFF`).
    * Subline: `Architect & Founder, Studio Cross Scale` (`IBM Plex Mono`, dezent abgetönt).
    * Bio zu Sascha Bauer & Studio Cross Scale mit sauber integriertem Link `studiocrossscale.com ↗`.
  * **Rechte Card (Thema & Kontext):**
    * Heller Kontrast-Badge: `THEMA & KONTEXT`.
    * Titel: `Zeitgenössische Raumtheorie`.
    * Vollständiger Textinhalt über den Umgang der jüngeren Generation mit Raum und die Interpretation experimenteller Architekturkonzepte in angenehmer Lesetypografie (`#D4D4D4`, `line-height: 1.7`).
* **Responsive Anpassung:** Bei mobilen Bildschirmbreiten (<820px) bricht das Raster nahtlos in eine 1-spaltige vertikale Ansicht um.

---

### 10. 🚀 Git & Vercel Deployment
* Alle Änderungen wurden im Git-Repository versioniert und auf den Hauptbranch `origin/main` gepusht:
  * Repository: `https://github.com/eeraj88/schabnam-portfolio.git`
* Das automatische Deployment auf Vercel baut und veröffentlicht die Website bei jedem Push.

---
*Protokoll automatisch generiert für die Projektdokumentation.*

