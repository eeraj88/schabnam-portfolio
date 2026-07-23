const catMeta={rendering:{label:"Renderings",single:"Rendering"},plan:{label:"Pläne & Schnitte",single:"Plan"},modell:{label:"Modell & Prozess",single:"Modell"},detail:{label:"Details & Material",single:"Detail"}};
const marqueeWords=["Raumkonzepte","Renderings","Material & Licht","Bestand & Denkmalschutz","Möbeldesign","Lichtplanung","Corporate Interior","3D-Visualisierung","Moodboards"];
const aktDocs=[
  {tag:"Dok. 01",label:"Lageplan",src:"assets/aktuelles/plan-lageplan.jpg"},{tag:"Dok. 02",label:"Grundriss",src:"assets/aktuelles/plan-grundriss-1.jpg"},{tag:"Dok. 03",label:"Grundriss",src:"assets/aktuelles/plan-grundriss-2.jpg"},{tag:"Dok. 04",label:"Grundriss",src:"assets/aktuelles/plan-grundriss-3.jpg"},{tag:"Dok. 05",label:"Grundriss",src:"assets/aktuelles/plan-grundriss-4.jpg"},{tag:"Dok. 06",label:"Ansicht",src:"assets/aktuelles/plan-ansicht.jpg"}
];
const waldAssets=[
  {tab:"fotos",label:"Historische Ansicht",src:"assets/aktuelles/waldmannsburg-historisch.jpg"},
  {tab:"fotos",label:"Aktuelle Ansicht",src:"assets/aktuelles/waldmannsburg-heute.jpg"}
];
const projects=[
{id:"modernisierung",title:"Modernisierung mit Feingefühl",year:"2025",type:"Bachelorarbeit",catLabel:"Interior · Bestand",role:"Bachelor-Projekt · Betreuung Prof. Yvonne Fehling",place:"Café der Badischen Landesbibliothek",programs:["VectorWorks","SketchUp","Twinmotion"],blurb:"Behutsame Modernisierung eines denkmalgeschützten Cafés - Bestand bewahren, modern weiterdenken.",concept:"Das denkmalgeschützte Café der Badischen Landesbibliothek wird modernisiert, ohne seinen Charakter zu verlieren. Historische Elemente wie rote Fassade, Fenster, Boden und Säulen bleiben erhalten und werden durch moderne, nachhaltige Eingriffe ergänzt.",measures:["Historische Substanz bewahren, moderne Nutzung ermöglichen","Schwarze Leuchtengestelle als Kontrast, auf unterschiedlichen Höhen abgehängt","Fensternischen als ruhige Rückzugsorte und zusätzliche Sitzplätze","Natürliches Licht bewusst als atmosphärisches Element integriert","Außenmöblierung nimmt Eigenschaften des Bestands auf und verbindet Innen- und Außenraum"],materials:["Terrazzo","Flexible Möblierung","Begrünung & Pflanzen","Angepasste Bestandsmöbel","Schwarze Leuchtengestelle"],result:"Ein einladendes Café, das historische Substanz, nachhaltige Materialien und zeitgemäße Nutzung harmonisch verbindet.",images:["modernisierung-baa-aussen.jpg|rendering|Außenfassade","modernisierung-baa-innen.jpg|rendering|Innenraum · BAA","modernisierung-lr-01.jpg|rendering|Café · Atmosphäre","modernisierung-lr-02.jpg|rendering|Innenraum · Licht","modernisierung-lr-03.jpg|rendering|Sitzbereich","modernisierung-lr-04.jpg|rendering|Detail","modernisierung-lr-05.jpg|rendering|Fensterplatz","modernisierung-lr-06.jpg|rendering|Übergang","modernisierung-isometrie.png|plan|Isometrie · Möbel","modernisierung-08.jpeg|plan|Grundriss","modernisierung-09.jpeg|plan|Fassadenansicht","modernisierung-10.jpeg|plan|Schnitt A","modernisierung-11.jpeg|plan|Schnitt B"],pdf:{src:"assets/pdf/baa-bachelorarbeit.pdf",label:"WS25_BAA_Schabnam_Shor_883436.pdf",subLabel:"Vollständige Bachelorarbeit Abgabe-PDF"},coverImg:"assets/projekte/modernisierung-baa-aussen.jpg",cardTheme:"light",cardPos:"bottom-left"},
{id:"creative-quarter",title:"Creative Quarter — Studentischer Freiraum",year:"2023-2024",type:"Gebäudeentwurf",catLabel:"Interior · Freiraum",role:"Gebäudeentwurf · Studentischer Freiraum & Begegnungsort",place:"Mühlenstraße / HS Kaiserslautern",programs:["VectorWorks","SketchUp","Twinmotion"],blurb:"Ein dreistöckiges Zentrum für Kreativität & Begegnung — Café, Workshops, Startups und Galerie unter einem Dach.",concept:"Das Creative Quarter ist ein dreistöckiges Zentrum für Kreativität, Innovation und studentischen Austausch in direkter Nähe zur Hochschule Kaiserslautern. Café, Workshop-Räume, Startup-Flächen und Galerie verschmelzen zu einem offenen Ort für Zusammenarbeit.",measures:["Erdgeschoss als Café zum Entspannen und Vernetzen","Workshop-Räume und dynamische Startup-Flächen in den oberen Etagen","Galerie als Plattform für studentische Kunst und junge Talente","Grenzen zwischen Disziplinen bewusst aufheben"],materials:["Offene Raumstruktur","Helle Flächen","Galerie-Wände","Flexible Möblierung"],result:"Ein lebendiger Knotenpunkt, der Lernen, Arbeit, Austausch und Präsentation unter einem Dach verbindet.",images:["creative-quarter-01.jpeg|modell|Axonometrie","creative-quarter-03.jpeg|plan|Grundriss EG","creative-quarter-04.jpeg|plan|Grundriss OG","creative-quarter-06.png|plan|Raumkonzept","creative-quarter-07.jpg|plan|Gebäudeschnitt"],pdf:{src:"assets/pdf/creative-quarter-entwurfsplaene.pdf",label:"Creative Quarter Entwurfspläne (Plan 1 bis 4)",subLabel:"Vollständige Entwurfs-Planbögen 1–4"},coverImg:"assets/projekte/creative-quarter-01.jpeg",cardTheme:"dark",cardPos:"top-right"},
{id:"hotelzimmer",title:"Hotelzimmer Ausführungsplanung",year:"2024",type:"Ausführungsplanung",catLabel:"CAD · Ausführungsplanung",role:"Ausführungsplanung (AUS 2) · Maßstab 1:8 bis 1:50",place:"Hotelzimmer Projekt",programs:["AutoCAD","VectorWorks"],blurb:"Vollständiger Planungssatz für ein Hotelzimmer — von Grundriss über Lichtplan bis zur Kostenberechnung.",concept:"In diesem Projekt habe ich ein Hotelzimmer von der Grundrissplanung bis zur baureichen Ausführung vollständig durchgearbeitet. Acht Planblätter — Grundriss, Schnitte, Lichtplan, Einbauschränke und Kleiderschrank — bilden einen direkt umsetzbaren Planungssatz.",measures:["8 CAD-Ausführungspläne in 1:8 bis 1:50","Exakte Detailplanung für Einbauschränke & Beleuchtung","Vollständige Kostenberechnung für Wirtschaftlichkeit"],materials:["CAD-Werkplanung","Detailzeichnungen","Kostenberechnung"],result:"Ein fachgerechter, umsetzbarer Ausführungsplanungssatz mit hoher Maßhaltigkeit und Kostentransparenz.",images:["modernisierung-08.jpeg|plan|Grundriss 1:50","modernisierung-10.jpeg|plan|Schnitt AA"],pdf:{src:"assets/pdf/hotelzimmer-ausfuehrungsplanung.pdf",label:"AUS 2 Hotelzimmer Ausführungsplanung (Pläne 1–8 + Kostenberechnung)",subLabel:"Vollständige CAD-Werkplanung (8 Blatt + Kostenberechnung)"},coverImg:"assets/projekte/hotelzimmer-cover.png",cardTheme:"dark",cardPos:"bottom-right"},
{id:"tre",title:"TRE Vehicle Dynamics Interior",year:"2023-2024",type:"Corporate Interior",catLabel:"Corporate · Team Rossberg",role:"Interior Designer · Team Rossberg Engineering",place:"Team Rossberg Engineering",programs:["Moodboards","VectorWorks","Twinmotion"],blurb:"Corporate-Interior für Team Rossberg - Empfang, Büro, Pausenraum und Atrium aus vier Moodboard-Welten.",concept:"Corporate-Interior für Team Rossberg Engineering - vom Empfangsbereich über Büro und Pausenraum bis zum Atrium. Vier Moodboard-Welten bilden die gestalterische Basis.",measures:["Markenstarke Lobby mit Akustiksegeln, Holzlamellen und Trophäeninszenierung","Porsche-Büro mit Pflanzenkonzept, Mosswand und Akustikpaneelen","Pausenraum mit warmer, wohnlicher Aufenthaltsatmosphäre","Atrium als aktiver Begegnungsort mit klaren Funktionszonen"],materials:["Holzlamellen","Akustiksegel & Deckenpaneele","Mosswand & Pflanzen","Energy-Green Akzente","Terrazzo"],result:"Aus uneinheitlichen Räumen entsteht eine durchgängige, markenstarke Corporate-Welt für Team Rossberg, TRE und RXR.",images:["tre-01.jpg|rendering|Atrium & Showcar","tre-02.jpg|rendering|Empfang","tre-03.jpg|rendering|Empfang · RXR","tre-04.jpg|rendering|Empfang · Lounge","tre-05.jpg|rendering|Pausenraum","tre-06.jpg|rendering|Pausenraum · Begrünung","tre-07.jpg|rendering|Atrium · Bar","tre-08.jpg|rendering|Atrium · Lounge","tre-09.jpg|rendering|Besprechung","tre-10.jpg|rendering|Besprechung · TRE-Wand","tre-11.jpg|rendering|Besprechung · Galerie","tre-14.jpg|modell|Moodboard · Industrial","tre-15.jpg|modell|Moodboard · Mysterious Glamour","tre-16.jpg|modell|Moodboard · Scandinavian","tre-17.jpg|modell|Moodboard · Clean White","tre-18.jpg|detail|Bestand · Atrium","tre-19.jpg|detail|Bestand · Empfang","tre-12.jpg|plan|Grundriss","tre-13.jpg|plan|Markenwand"],coverImg:"assets/projekte/tre-01.jpg",cardTheme:"dark",cardPos:"top-left"},
{id:"dach",title:"Tradition tragen, Zukunft dämmen",year:"SoSe 2025",type:"Bauen im Bestand",catLabel:"Bestand · Dachsanierung",role:"Studienprojekt · Prof. Fabian A. Wagner, Ass. Louise Daussy · mit Jule Wagenbrenner",place:"Landwirtschaftliches Gebäude / Bauernhaus, Kreimbach",programs:["Bestandsanalyse","1:1-Modell","Ubakus"],blurb:"Ein historischer, ungedämmter Dachbestand - mit biobasiertem, rückbaubarem Schichtaufbau neu gedacht.",concept:"Das Projekt transformiert einen historischen Dachaufbau im Bestand: ein altes Bauernhaus in Kreimbach mit einfacher Falzziegeldeckung, sichtbaren Eichen-Sparren und fehlender bauphysikalischer Ergänzung.",measures:["Erhalt der sichtbaren Eichen-Sparren als primäre, tragende Struktur","Diffusionsoffener, mechanisch befestigter und weitgehend reversibler Aufbau","Wiederverwendete Tonfalzziegel von F. v. Müller als äußere Witterungsschicht","Schichtfolge: Hanfbauplatte, Schilfrohr-Dämmplatte, Holzfaserplatte, Konter- und Traglattung","1:1-Modell auf Europalette mit zugeschnittenen Eichenbalken"],materials:["Wiederverwendete Tonfalzziegel","GUTEX Ultratherm Holzfaser","Hiss Reet Schilfrohr","Hemplith Hanfbauplatte","Eichen-Sparren"],result:"Denkmalnähe, Ökologie und Bauphysik werden in einem zeitgemäßen Dachsystem zusammengeführt.",images:["dach-01.jpg|detail|Bestandsdach · Eichen-Sparren","dach-02.jpg|modell|1:1-Modell · Schichtaufbau","dach-03.jpg|modell|Schichtaufbau · Detail","dach-04.jpg|detail|Tonfalzziegel · F. v. Müller","dach-05.jpg|detail|Schilfrohr-Dämmplatte","dach-06.jpg|modell|Zuschnitt Eichenbalken","dach-07.jpg|modell|Modellbau · Prozess","dach-08.jpg|modell|Schilfrohr einbauen","dach-09.jpg|plan|Bauteilaufbau & Schutzwerte","dach-10.jpg|plan|Temperaturverlauf & Taupunkt","dach-11.jpg|plan|Ökobilanz","dach-12.jpg|plan|Kostenschätzung"],pdf:{src:"assets/pdf/bib-dachsanierung.pdf",label:"BIB_PRäsi.pdf",subLabel:"Dachsanierung & Bauphysik Dokumentation"},coverImg:"assets/projekte/dach-01.jpg",cardTheme:"light",cardPos:"bottom-left"},
{id:"sparkasse",title:"Sparkasse Renovation",year:"2022",type:"Beleuchtungskonzept",catLabel:"Lighting · Renovierung",role:"Gruppenarbeit · Betreuung Prof. Alexander Klein",place:"Sparkasse Filiale",programs:["VectorWorks","SketchUp","Twinmotion"],blurb:"Ein neues Lichtkonzept für eine einladendere, angenehmere und technisch optimierte Atmosphäre.",concept:"Im Renovierungsprojekt der Sparkasse liegt der Schwerpunkt auf einem verbesserten Beleuchtungsdesign - für eine einladendere und angenehmere Atmosphäre für Kundschaft und Mitarbeitende.",measures:["Mehr natürliches Licht: vergrößerte Fenster und Oberlichter","Energieeffiziente LED-Technik mit Dimmsystemen","Tageslichtsensoren passen das Licht an Tageszeit und Nutzung an","Abgehängte Decken verbessern Akustik, Isolierung und Technikzugang"],materials:["LED-Leuchten","Tageslichtsensoren","Abgehängte Decken","Oberlichter"],result:"Ein nutzerfreundlicheres, angenehmeres und technisch optimiertes Raumkonzept mit gleichmäßiger Lichtverteilung.",images:["creative-quarter-02.png|rendering|Innenraum","sparkasse-01.png|rendering|Lounge & Lamellen","sparkasse-02.png|rendering|Schnitt & Theke","sparkasse-03.png|plan|Grundriss","sparkasse-04.png|plan|Beleuchtungsplan","sparkasse-05.png|detail|Schnitt Detail","sparkasse-06.png|detail|Lichtkonzept"],pdf:{src:"assets/pdf/sparkasse-renovation.pdf",label:"GLP_ABGABE-Sparkasse.pdf",subLabel:"Beleuchtungskonzept Abgabe-PDF"},coverImg:"assets/projekte/sparkasse-cover.png",cardTheme:"dark",cardPos:"top-left"},
{id:"functional-furniture",title:"Functional Furniture",year:"2022",type:"Möbeldesign",catLabel:"Furniture · Produktdesign",role:"Gruppenprojekt · Betreuung Prof. Yvonne Fehling",place:"Krankenhauszimmer",programs:["VectorWorks"],blurb:"Ein multifunktionaler Krankenhaus-Schrank - Stauraum, Licht, Arbeitstisch und Ladestation in einem.",concept:"Das Projekt entwickelt einen multifunktionalen Krankenhaus-Schrank, der sich vom sterilen Krankenhausstil abhebt und exakt in eine vorgegebene Nische passt.",measures:["Großzügiger Stauraum für persönliche und medizinische Dinge","Integrierte Beleuchtung, verstellbarer Tisch und Ladestation","Abgerundete Ecken und Kanten zur Unfallvermeidung","Langlebige, leicht zu reinigende Oberflächen"],materials:["Langlebige Oberflächen","Integrierte LED","Verstellbarer Tisch","Ladestation"],result:"Ein Möbel, das Patientenzimmer funktionaler, wohnlicher und sicherer macht - belegt durch ein handgebautes Modell.",images:["functional-furniture-05.png|detail|Ansichten & Erläuterung","functional-furniture-01.png|rendering|Schrank im Raum","functional-furniture-02.png|modell|Handgebautes Modell","functional-furniture-03.png|plan|Konstruktion","functional-furniture-04.png|plan|Grundriss & Nische"],pdf:{src:"assets/pdf/mbe-functional-furniture.pdf",label:"MBE_3final_Functional_Furniture.pdf",subLabel:"Möbelentwurf & Konstruktionsdokumentation"},coverImg:"assets/projekte/functional-furniture-cover.png",cardTheme:"light",cardPos:"top-right"},
{id:"magic-marvel",title:"Magic Marvel",year:"2022",type:"Messestand",catLabel:"Exhibition · Messestand",role:"Entwurf · Betreuung Prof. Gregor Rutrecht",place:"Buchmesse / Convention",programs:["VectorWorks","SketchUp","Twinmotion"],blurb:"Ein immersiver Marvel-Stand, der schon aus der Ferne anzieht und im Inneren eine Markenwelt schafft.",concept:"Der Entwurf entwickelt einen Marvel-Stand für Buchmesse oder Convention - ein fesselnder Raum mit geheimnisvoller Fassade aus weißen Bildschirmen, auf denen lebensgroße Charaktere erscheinen.",measures:["Äußere Hülle aus weißen Bildschirmen mit Überraschungsmoment","Elegantes, modernes Interior mit Anspielungen auf Marvels Stil","Snackbar, Leseecke für Comics und Überraschungsauftritte","Obere Ebene als Planetarium - Comic-Zeichner bei der Arbeit erlebbar"],materials:["LED-Screens","Dynamische Beleuchtung","Comic-Grafiken","Lesezonen"],result:"Ein immersiver Raum, der das Marvel-Universum räumlich erfahrbar macht - von der Snackbar bis zur Erlebnisplattform.",images:["magic-marvel-01.png|rendering|Fassade & Screens","magic-marvel-02.jpeg|rendering|Leseecke","magic-marvel-03.jpeg|rendering|Snackbar"],coverImg:"assets/projekte/magic-marvel-01.png",cardTheme:"dark",cardPos:"center"},
{id:"exr",title:"Experimenteller Raum — Schnee",year:"WS 2025/2026",type:"Installation",catLabel:"Experimental · Modell",role:"Gruppenarbeit · Sophie Rebholz · Seminar Experimenteller Raum",place:"Hochschule Kaiserslautern",programs:["Handwerkliches Modell","Fotodokumentation"],blurb:"Experimenteller Raum aus Schnee — physisches Modell und atmosphärische Installation.",concept:"Der experimentelle Raum 'Schnee' untersucht Materialität und Raumgefühl durch ein physisch erfahrbares Modell. Flüchtige Qualität des Materials, Lichtwirkung und das Erleben von Raum ohne fest definierte Wände stehen im Mittelpunkt.",measures:["Schnee als flüchtiges, wandelbares Material","Licht und Schatten als raumgestaltende Elemente","Raum ohne feste Wände und Decken erleben","Fotodokumentation der Installation vor Ort"],materials:["Schnee","Natürliches Licht","Physisches Modell"],result:"Eine atmosphärische Installation, die Vergänglichkeit und Materialität räumlich erfahrbar macht.",images:["exr-m-12.jpg|modell|Modell · Final","exr-m-08.jpg|modell|Modell · Perspektive","exr-m-05.jpg|modell|Modell · Überblick","exr-01.jpg|modell|Installation vor Ort","exr-m-01.jpg|modell|Modell · Ansicht","exr-m-02.jpg|modell|Modell · Detail","exr-m-03.jpg|modell|Modell · Struktur","exr-m-04.jpg|modell|Modell · Textur","exr-m-06.jpg|modell|Modell · Licht","exr-m-07.jpg|modell|Modell · Innen","exr-m-09.jpg|modell|Modell · Schnee","exr-m-10.jpg|modell|Modell · Form","exr-m-11.jpg|modell|Modell · Prozess"],pdf:{src:"assets/pdf/exraum-schnee.pdf",label:"Exraum_Schnee.pdf",subLabel:"Projekt-Dokumentation PDF"},coverImg:"assets/projekte/exr-m-12.jpg",cardTheme:"light",cardPos:"bottom-right"}
].map((p,i)=>({...p,sheet:`PRJ-${String(i+1).padStart(2,"0")}`,images:p.images.map(s=>{const [file,cat,label]=s.split("|");return{src:`assets/projekte/${file}`,cat,label,catLabel:catMeta[cat].label,kind:"image"}})}));
const projectBentoOrder=["modernisierung","creative-quarter","hotelzimmer","tre","dach","functional-furniture","sparkasse","exr"];
const projectBentoClasses={modernisierung:"feature",tre:"tall",sparkasse:"wide"};
const timeline=[
["03.2025 - heute","Master of Arts Innenarchitektur","Hochschule Kaiserslautern","Studium",["Vertiefung Interior Architecture","Raumkonzepte, Materialität und atmosphärische Gestaltung"]],
["08.2023 - heute","Recruiter & HR Administrator","Reline Europe GmbH","Beruf",["Bewerbungsmanagement und Koordination von Gesprächen","Kommunikation mit Bewerbern, HR-Administration"]],
["08.2023 - 03.2024","Auslandspraktikum","D-Eva Studio, Indonesien","Praktikum",["Gestaltung des Beachclubs für Desa Kitsuné","Raumkonzepte und Layouts für Villen","Content-Strategie für Social Media"]],
["05.2023 - 11.2024","Interior Designer / Innenraumausstatterin","Team Rossberg Engineering","Beruf",["Beratung von Kunden und Entwicklung individueller Raumkonzepte","Auswahl, Beschaffung und Visualisierung von Materialien","Koordination und Überwachung von Umsetzungsprojekten"]],
["10.2020 - 03.2025","Bachelor of Arts Innenarchitektur","Hochschule Kaiserslautern","Studium",["Schwerpunkte: Design, Raumplanung, kreative Konzepte","Abschlussarbeit: Modernisierung mit Feingefühl"]],
["08.2020 - heute","Ehrenamtliche Dolmetscherin","Arbeitskreis Humanitäre Hilfe für Asylbewerber e.V.","Ehrenamt",["Dolmetschen bei Terminen mit Ämtern, Ärzten und Helfenden","Unterstützung bei der Verständigung im Alltag Geflüchteter"]],
["2021 - 2023","Servicekraft","Commami","Beruf",["Kundenkontakt und direkter Umgang mit Menschen","Professionelles Verhalten in stressigen Situationen"]],
["2015 - 2017","Rechtswissenschaft","Köln","Studium",["Begonnen, später bewusster Wechsel zur kreativen Leidenschaft Innenarchitektur"]]
];
const software=[["VectorWorks","CAD · Grundrisse, Schnitte, Konstruktionspläne",92],["SketchUp","3D-Modelle, Explosionszeichnungen, Entwürfe",86],["Twinmotion","Innen- & Außenrenderings, Atmosphäre",84],["Adobe Photoshop","Bildbearbeitung, Moodboards, Aufbereitung",76],["Adobe InDesign","Layout, Portfolio, Projektdokumentation",72]];
const clusters=[["Design & Konzept",["Raumkonzepte","Moodboards","Farbtheorie","Materialauswahl","Storytelling","Funktionale Planung"]],["Planung & Visualisierung",["Grundrisse","Schnitte","Renderings","3D-Visualisierung","Lichtkonzepte","Detailzeichnungen"]],["Material & Atmosphäre",["Terrazzo","Holz","Akustikpaneele","Begrünung","Licht","Möbeldesign"]],["Umsetzung & Kommunikation",["Kundenberatung","Projektkoordination","Teamarbeit","HR & Recruiting","Präsentation"]]];
const kindColors={Studium:"#4e0000",Beruf:"#4A6858",Praktikum:"#253328",Ehrenamt:"#B85C38"};
const isMobile=('ontouchstart' in window)||(navigator.maxTouchPoints>0);
const state={modalId:null,idx:0,filter:"alle",viewMode:"pdf",activePdfKey:"main",lightbox:null,scrollP:0,frame:0};
const $=s=>document.querySelector(s);
const sc=$("#app-scroll"),hero=$("#hero"),bar=$("#hero-progress");
const TOTAL_FRAMES=294;
const canvas=$("#hero-canvas");
const ctx=canvas?canvas.getContext("2d"):null;
const frames=[];
let framesLoaded=0;
let currentFrameF=0;
const heroPortrait=document.getElementById("hero-portrait");
const heroNameReveal=document.getElementById("hero-name-reveal");
const heroRightPanel=document.getElementById("hero-right-panel");
function preloadFrames(){for(let i=1;i<=TOTAL_FRAMES;i++){const img=new Image();img.src=`assets/frames/f${String(i).padStart(3,"0")}.jpg`;img.onload=()=>{framesLoaded++;};frames.push(img);}}
function sizeCanvas(){if(!canvas)return;canvas.width=canvas.offsetWidth||canvas.clientWidth;canvas.height=canvas.offsetHeight||canvas.clientHeight;}
function navTo(id){const el=document.getElementById(id);if(!el)return;const top=sc.scrollTop+(el.getBoundingClientRect().top-sc.getBoundingClientRect().top)-64;sc.scrollTo({top,behavior:"smooth"})}
document.querySelectorAll("[data-target]").forEach(b=>b.addEventListener("click",()=>navTo(b.dataset.target)));
function initMarquee(){const track=$("#marquee-track");track.innerHTML=[...marqueeWords,...marqueeWords].map(w=>`<span>${w}</span>`).join("")}
function renderDocs(){}
function renderProjects(){
  var grid=$("#project-grid");
  var ordered=projectBentoOrder.map(function(id){return projects.find(function(p){return p.id===id;});}).filter(Boolean);
  grid.innerHTML=
    '<div class="proj-gallery" id="proj-gallery">'+
    ordered.map(function(p,i){
      var imgSrc=p.coverImg || p.images[0].src;
      var themeClass = 'theme-' + (p.cardTheme || 'dark');
      var posClass = 'pos-' + (p.cardPos || 'bottom-left');

      return '<button class="proj-card '+themeClass+' '+posClass+'" data-project="'+p.id+'" style="--i:'+i+'">'+
        '<img src="'+imgSrc+'" alt="'+p.title+'" loading="lazy">'+
        '<div class="proj-card-overlay">'+
          '<div class="proj-card-text-box">'+
            '<div class="proj-card-type">'+p.type+' · '+p.year+'</div>'+
            '<div class="proj-card-title">'+p.title+'</div>'+
            '<div class="proj-card-sub">'+p.catLabel+'</div>'+
          '</div>'+
        '</div>'+
      '</button>';
    }).join('')+
    '</div>'+
    '<div class="proj-pullbar-wrap">'+
      '<div class="proj-pullbar-label">Pull →</div>'+
      '<div class="proj-pullbar-track" id="proj-pullbar-track">'+
        '<div class="proj-pullbar-thumb" id="proj-pullbar-thumb"></div>'+
      '</div>'+
    '</div>';

  var gallery=document.getElementById("proj-gallery");
  var track=document.getElementById("proj-pullbar-track");
  var thumb=document.getElementById("proj-pullbar-thumb");

  function updatePullbar(){
    var maxScroll=gallery.scrollWidth-gallery.clientWidth;
    if(maxScroll<=0){thumb.style.width="100%";thumb.style.left="0";return;}
    var ratio=gallery.scrollLeft/maxScroll;
    var thumbW=Math.max(48,Math.round((gallery.clientWidth/gallery.scrollWidth)*track.offsetWidth));
    var maxLeft=track.offsetWidth-thumbW;
    thumb.style.width=thumbW+"px";
    thumb.style.left=Math.round(ratio*maxLeft)+"px";
  }

  gallery.addEventListener("scroll",updatePullbar);
  window.addEventListener("resize",updatePullbar);
  setTimeout(updatePullbar,120);

  // drag gallery
  var dragging=false,startX,startScroll;
  gallery.addEventListener("mousedown",function(e){dragging=true;startX=e.pageX;startScroll=gallery.scrollLeft;gallery.style.cursor="grabbing";e.preventDefault();});
  document.addEventListener("mousemove",function(e){if(!dragging)return;gallery.scrollLeft=startScroll-(e.pageX-startX);});
  document.addEventListener("mouseup",function(){dragging=false;gallery.style.cursor="";});

  // drag pullbar
  var tDragging=false,tStartX,tStartScroll;
  thumb.addEventListener("mousedown",function(e){tDragging=true;tStartX=e.pageX;tStartScroll=gallery.scrollLeft;e.stopPropagation();e.preventDefault();});
  document.addEventListener("mousemove",function(e){
    if(!tDragging)return;
    var maxScroll=gallery.scrollWidth-gallery.clientWidth;
    var thumbW=thumb.offsetWidth;
    var trackW=track.offsetWidth;
    var ratio=(e.pageX-tStartX)/(trackW-thumbW);
    gallery.scrollLeft=tStartScroll+ratio*maxScroll;
  });
  document.addEventListener("mouseup",function(){tDragging=false;});

  // click on track (not thumb) → jump
  track.addEventListener("click",function(e){
    if(e.target===thumb)return;
    var rect=track.getBoundingClientRect();
    var ratio=(e.clientX-rect.left)/rect.width;
    gallery.scrollLeft=ratio*(gallery.scrollWidth-gallery.clientWidth);
  });

  grid.querySelectorAll(".proj-card").forEach(function(b){b.addEventListener("click",function(){openProject(b.dataset.project);});});
}
function renderSkills(){const list=$("#software-list");list.innerHTML=software.map(s=>`<div class="software-row"><header><strong>${s[0]}</strong><span class="skill-pct"><span class="skill-pct-num">0</span><em>%</em></span></header><div class="bar"><span class="bar-fill" style="width:${s[2]}%"></span></div><small class="skill-desc">${s[1]}</small></div>`).join("");$("#cluster-list").innerHTML=clusters.map((c,i)=>`<div class="cat-card" style="--i:${i}"><div class="cat-card-title"><span class="cat-kicker">K${String(i+1).padStart(2,"0")}</span>${c[0]}</div><div class="cat-tags">${c[1].map(t=>`<span>${t}</span>`).join("")}</div></div>`).join("")}
function renderTimeline(){
  var vp=document.getElementById("wd-viewport");
  if(!vp)return;
  vp.className="tl-viewport";
  var curYear=String(new Date().getFullYear());
  var years=timeline.map(function(t){var s=t[0];return s.indexOf("heute")!==-1?curYear:(s.match(/\d{4}/)||["2025"])[0];});
  var html='<div class="tl-track">';
  html+=timeline.map(function(t,i){
    return'<div class="tl-event" style="--i:'+i+'">'+
      '<div class="tl-content">'+
        '<div class="tl-meta">'+
          '<div class="tl-kind">'+t[3]+'</div>'+
          '<div class="tl-date">'+t[0]+'</div>'+
        '</div>'+
        '<div class="tl-body">'+
          '<div class="tl-title">'+t[1]+'</div>'+
          '<div class="tl-org">'+t[2]+'</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }).join('');
  html+='<div class="tl-pgblur"></div></div>';
  vp.innerHTML=html;
  var pgblur=vp.querySelector(".tl-pgblur");
  var barEl=document.getElementById("wd-bar");
  var yearEl=document.getElementById("wd-year");
  function update(){
    var max=vp.scrollHeight-vp.clientHeight;
    var p=max>0?vp.scrollTop/max:0;
    if(barEl)barEl.style.width=(p*100).toFixed(1)+"%";
    if(yearEl){var idx=Math.min(Math.round(p*(timeline.length-1)),timeline.length-1);yearEl.textContent=years[idx]||curYear;}
    if(pgblur)pgblur.style.opacity=p>=0.9?'0':'1';
  }
  vp.addEventListener("scroll",update,{passive:true});
  update();
}
function activeProject(){return projects.find(p=>p.id===state.modalId)}
function visibleImages(){const p=activeProject();if(!p)return[];return state.filter==="alle"?p.images:p.images.filter(im=>im.cat===state.filter)}
function openProject(id){
  state.modalId=id;
  state.idx=0;
  state.filter="alle";
  const p=projects.find(x=>x.id===id);
  state.viewMode=p&&p.pdf?"pdf":"gallery";
  state.activePdfKey="main";
  document.body.style.overflow="hidden";
  renderModal();
}
function closeProject(){state.modalId=null;document.body.style.overflow="";$("#project-modal").classList.remove("open");$("#project-modal").setAttribute("aria-hidden","true")}
function setFilter(f){state.filter=f;state.idx=0;renderModal()}
function stepImg(dir){const v=visibleImages();if(v.length){state.idx=(state.idx+dir+v.length)%v.length;renderModal()}}
function stepProject(dir){
  const i=projects.findIndex(p=>p.id===state.modalId);
  const nextP=projects[(i+dir+projects.length)%projects.length];
  state.modalId=nextP.id;
  state.idx=0;
  state.filter="alle";
  state.viewMode=nextP&&nextP.pdf?"pdf":"gallery";
  state.activePdfKey="main";
  renderModal();
}
function renderModal(){
  const p=activeProject();if(!p)return;
  const modal=$("#project-modal");
  modal.dataset.pid=p.id;
  const tools=p.programs.join(" · ");
  const hasPdf=!!p.pdf;

  if(hasPdf){
    const activePdfSrc=p.pdf.src;
    const activePdfLabel=p.pdf.label;

    modal.innerHTML=`
      <div class="mp-panel mp-panel-pdf-only">
        <div class="mp-header">
          <div class="mp-header-meta">
            <div class="mp-kicker">${p.sheet} · ${p.catLabel} · ${p.year}</div>
            <h2 class="mp-title">${p.title}</h2>
            <div class="mp-sub">${p.role}<span class="mp-sep">·</span>${p.place}<span class="mp-sep">|</span><span class="mp-tools">${tools}</span></div>
          </div>
          <button class="mp-close" id="modal-close">✕</button>
        </div>
        <div class="mp-media-wrapper pdf-only">
          <div class="mp-pdf-view">
            <div class="mp-pdf-bar">
              <div class="mp-pdf-title-wrap">
                <span class="mp-pdf-tag">📄 PDF DOKUMENT</span>
                <span class="mp-pdf-name" title="${activePdfLabel}">${activePdfLabel}</span>
              </div>
              <div class="mp-pdf-tools">
                <a href="${activePdfSrc}" target="_blank" class="mp-pdf-tool-btn" title="PDF in neuem Tab / Vollbild öffnen">↗ Vollbild</a>
                <a href="${activePdfSrc}" download class="mp-pdf-tool-btn mp-dl" title="PDF herunterladen">⬇ Download</a>
              </div>
            </div>
            <div class="mp-pdf-stage">
              <div class="mp-pdf-loader" id="pdf-loader">
                <div class="pdf-spinner"></div>
                <span>Dokument wird geladen…</span>
              </div>
              <iframe data-src="${activePdfSrc}#toolbar=0&navpanes=0&scrollbar=1&view=FitH" class="mp-pdf-frame" id="pdf-iframe" title="${activePdfLabel}"></iframe>
            </div>
          </div>
        </div>
        <div class="mp-nav">
          <button class="mp-nav-btn" id="prev-project">← Vorheriges</button>
          <button class="mp-nav-btn mp-nav-mid" id="close-project-nav">Übersicht</button>
          <button class="mp-nav-btn mp-nav-right" id="next-project">Nächstes →</button>
        </div>
      </div>
    `;
  } else {
    const imgs=visibleImages(),current=imgs[state.idx]||imgs[0]||{src:'',label:''};
    const cats=["alle",...["rendering","plan","modell","detail"].filter(c=>p.images.some(im=>im.cat===c))];
    const fHTML=()=>cats.map(c=>`<button class="${state.filter===c?"active":""}" data-filter="${c}">${c==="alle"?"Alle":catMeta[c].label.split(" ")[0]}</button>`).join("");
    const tHTML=()=>imgs.map((im,i)=>`<button class="thumb ${i===state.idx?"active":""}" data-thumb="${i}"><img src="${im.src}" alt="${im.label}"></button>`).join("");

    modal.innerHTML=`
      <div class="mp-panel">
        <div class="mp-header">
          <div class="mp-header-meta">
            <div class="mp-kicker">${p.sheet} · ${p.catLabel} · ${p.year}</div>
            <h2 class="mp-title">${p.title}</h2>
            <div class="mp-sub">${p.role}<span class="mp-sep">·</span>${p.place}<span class="mp-sep">|</span><span class="mp-tools">${tools}</span></div>
          </div>
          <button class="mp-close" id="modal-close">✕</button>
        </div>
        <div class="mp-media">
          <button class="mp-arrow mp-prev" id="prev-img" aria-label="Vorheriges Bild">‹</button>
          <img src="${current.src}" alt="${current.label}" loading="lazy">
          <button class="mp-arrow mp-next" id="next-img" aria-label="Nächstes Bild">›</button>
          <div class="mp-caption">${current.label}</div>
        </div>
        <div class="mp-details">
          <div class="mp-label">Über das Projekt</div>
          <p class="mp-text">${p.blurb}</p>
          <div class="mp-label">Entwurfskonzept</div>
          <p class="mp-text">${p.concept}</p>
          <div class="mp-label">Maßnahmen & Raumlösungen</div>
          <ul class="mp-list">${p.measures.map(m=>`<li>${m}</li>`).join("")}</ul>
          <div class="mp-label">Materialien & Ausstattung</div>
          <div class="mp-pills pill-list">${p.materials.map(m=>`<span>${m}</span>`).join("")}</div>
          <div class="mp-label">Ergebnis & Wirkung</div>
          <p class="mp-text">${p.result}</p>
        </div>
        <div class="mp-controls">
          <div class="filter-row">${fHTML()}</div>
          <div class="thumb-row">${tHTML()}</div>
        </div>
        <div class="mp-nav">
          <button class="mp-nav-btn" id="prev-project">← Vorheriges</button>
          <button class="mp-nav-btn mp-nav-mid" id="close-project-nav">Übersicht</button>
          <button class="mp-nav-btn mp-nav-right" id="next-project">Nächstes →</button>
        </div>
      </div>
    `;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");

  $("#modal-close").onclick=closeProject;
  document.getElementById("close-project-nav").onclick=closeProject;
  $("#prev-project").onclick=()=>stepProject(-1);
  $("#next-project").onclick=()=>stepProject(1);

  if(hasPdf){
    setTimeout(()=>{
      const iframe=$("#pdf-iframe");
      if(iframe&&iframe.dataset.src){
        iframe.src=iframe.dataset.src;
        iframe.onload=()=>{
          const loader=$("#pdf-loader");
          if(loader){loader.style.opacity="0";setTimeout(()=>{if(loader)loader.style.display="none";},300);}
        };
      }
    },50);
  } else {
    const prevImg=$("#prev-img");if(prevImg)prevImg.onclick=()=>stepImg(-1);
    const nextImg=$("#next-img");if(nextImg)nextImg.onclick=()=>stepImg(1);
    modal.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>setFilter(b.dataset.filter));
    modal.querySelectorAll("[data-thumb]").forEach(b=>b.onclick=()=>{state.idx=+b.dataset.thumb;renderModal()});
  }
}
function openLightbox(src,label){const lb=$("#lightbox");state.lightbox=src;document.body.style.overflow="hidden";lb.innerHTML=`<div class="lightbox-inner"><div class="lightbox-top"><span>${label}</span><button id="close-lightbox">Schließen ✕</button></div><img src="${src}" alt="${label}"></div>`;lb.classList.add("open");lb.setAttribute("aria-hidden","false");$("#close-lightbox").onclick=closeLightbox}
function waldVisible(){return state.waldTab==="alle"?waldAssets:waldAssets.filter(x=>x.tab===state.waldTab)}
function openWaldModal(tab="fotos"){state.waldTab=tab;state.waldIdx=0;document.body.style.overflow="hidden";renderWaldModal()}
function renderWaldModal(){const lb=$("#lightbox"),items=waldAssets,current=items[state.waldIdx]||items[0];state.lightbox=current.src;lb.innerHTML=`<div class="wald-modal-panel"><button class="wald-modal-close" id="close-lightbox">✕</button><div class="wald-modal-head"><small>Aktuelles · Laufende Masterarbeit</small><strong>Waldmannsburg</strong></div><figure class="wald-modal-stage"><img class="wald-modal-image" src="${current.src}" alt="${current.label}" loading="lazy"><figcaption>${current.label}</figcaption></figure><div class="wald-modal-controls"><button id="wald-prev">‹</button><span>${state.waldIdx+1} / ${items.length}</span><button id="wald-next">›</button></div></div>`;lb.classList.add("open");lb.setAttribute("aria-hidden","false");$("#close-lightbox").onclick=closeLightbox;$("#wald-prev").onclick=()=>{state.waldIdx=(state.waldIdx-1+items.length)%items.length;renderWaldModal()};$("#wald-next").onclick=()=>{state.waldIdx=(state.waldIdx+1)%items.length;renderWaldModal()}}
function openDocsOverlay(){openWaldModal("grundrisse")}
function closeLightbox(){state.lightbox=null;document.body.style.overflow="";$("#lightbox").classList.remove("open");$("#lightbox").setAttribute("aria-hidden","true")}
function drawCoverImage(c,img,cw,ch){const nw=img.naturalWidth||1920,nh=img.naturalHeight||1080,ir=nw/nh,cr=cw/ch;let dw,dh,dx,dy;if(cr>ir){dw=cw;dh=cw/ir;dx=0;dy=(ch-dh)/2;}else{dw=ch*ir;dh=ch;dx=(cw-dw)/2;dy=0;}c.drawImage(img,dx,dy,dw,dh);}
function drawFrame(){if(!canvas||!ctx||framesLoaded===0)return;const targetF=state.scrollP*(TOTAL_FRAMES-1);currentFrameF+=(targetF-currentFrameF)*0.08;const idx=Math.min(Math.round(currentFrameF),TOTAL_FRAMES-1);const img=frames[idx];if(!img||!img.complete||!img.naturalWidth)return;if(canvas.width!==canvas.offsetWidth||canvas.height!==canvas.offsetHeight)sizeCanvas();ctx.drawImage(img,0,0,canvas.width,canvas.height);if(heroRightPanel)heroRightPanel.classList.toggle("visible",currentFrameF>=270);}
function layoutTimeline(){}
function scrubTimeline(){}
function loop(){state.frame++;computeHero();drawFrame();requestAnimationFrame(loop)}
preloadFrames();sizeCanvas();
sc.addEventListener("scroll",()=>{computeHero();},{passive:true});
addEventListener("resize",()=>{layoutTimeline();computeHero()},{passive:true});
addEventListener("keydown",e=>{if(e.key==="Escape"){closeProject();closeLightbox();const oi=document.getElementById('wald-info-overlay');if(oi&&oi.classList.contains('open')){oi.classList.remove('open');oi.setAttribute('aria-hidden','true');document.body.style.overflow='';}}if(state.modalId&&e.key==="ArrowRight")stepImg(1);if(state.modalId&&e.key==="ArrowLeft")stepImg(-1)});
$("#copy-email").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("schabnam.shor@googlemail.com");$("#copy-feedback").textContent="Kopiert ✓"}catch(e){$("#copy-feedback").textContent="Kopieren"}setTimeout(()=>$("#copy-feedback").textContent="Kopieren",1900)});
(function(){
  var form=document.getElementById('contact-form');
  var btn=document.getElementById('cf-btn');
  var successEl=document.getElementById('cf-success');
  var errorEl=document.getElementById('cf-error');
  var resetBtn=document.getElementById('cf-reset');
  if(!form)return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    errorEl.textContent='';
    btn.disabled=true;
    btn.textContent='Wird gesendet…';
    fetch('https://formspree.io/f/mpqgzzer',{
      method:'POST',
      headers:{'Accept':'application/json'},
      body:new FormData(form)
    })
    .then(function(res){return res.json().then(function(data){return{ok:res.ok,data:data};});})
    .then(function(result){
      if(result.ok){
        form.querySelectorAll('input,textarea').forEach(function(el){el.value='';});
        btn.style.display='none';
        successEl.classList.add('visible');
      } else {
        var msg=result.data&&result.data.errors?result.data.errors.map(function(e){return e.message;}).join(' · '):'Fehler beim Senden. Bitte erneut versuchen.';
        errorEl.textContent=msg;
        btn.disabled=false;
        btn.textContent='Erneut versuchen';
      }
    })
    .catch(function(){
      errorEl.textContent='Netzwerkfehler. Bitte erneut versuchen.';
      btn.disabled=false;
      btn.textContent='Erneut versuchen';
    });
  });
  if(resetBtn){resetBtn.addEventListener('click',function(){successEl.classList.remove('visible');btn.style.display='';btn.disabled=false;btn.textContent='Nachricht senden';});}
})();
function initTypewriter(){var h2=document.querySelector('.typewriter-h2');if(!h2)return;var tw=h2.querySelector('.tw-text');var cursor=h2.querySelector('.tw-cursor');if(!tw||!cursor)return;var text=h2.dataset.tw||'';var i=0;function type(){if(i<=text.length){tw.textContent=text.slice(0,i);i++;setTimeout(type,i===text.length+1?700:58);}else{setTimeout(function(){if(cursor){cursor.style.animation='none';cursor.style.opacity='0';}},2400);}}var started=false;var obs=new IntersectionObserver(function(entries){if(entries[0].isIntersecting&&!started){started=true;obs.disconnect();setTimeout(type,320);}},{threshold:0.35,root:sc});obs.observe(h2);}
function initSkillsAnim(){
var sec=document.getElementById('faehigkeiten');
if(!sec)return;
var done=false;
var easeOut=function(t){return 1-Math.pow(1-t,3);};
var obs=new IntersectionObserver(function(entries){
  if(entries[0].isIntersecting&&!done){
    done=true;obs.disconnect();
    var rows=sec.querySelectorAll('.software-row');
    rows.forEach(function(row,idx){
      var tgt=software[idx]?software[idx][2]:0;
      var numEl=row.querySelector('.skill-pct-num');
      var barEl=row.querySelector('.bar-fill');
      var dur=1500;
      setTimeout(function(){
        if(barEl)barEl.style.transform='scaleX(1)';
        var t0=null;
        var tick=function(ts){
          if(!t0)t0=ts;
          var prog=Math.min((ts-t0)/dur,1);
          if(numEl)numEl.textContent=Math.round(easeOut(prog)*tgt);
          if(prog<1)requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },idx*80);
    });
  }
},{threshold:0.2,root:sc});
obs.observe(sec);
}
initMarquee();renderDocs();renderProjects();renderSkills();initSkillsAnim();renderTimeline();initTypewriter();computeHero();requestAnimationFrame(loop);
(function(){
  const overlay=document.getElementById('wald-info-overlay');
  const btn=document.getElementById('wald-mehr-btn');
  const closeBtn=document.getElementById('wald-info-close');
  if(!overlay||!btn)return;
  function openInfo(){overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
  function closeInfo(){overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');document.body.style.overflow='';}
  btn.addEventListener('click',openInfo);
  closeBtn.addEventListener('click',closeInfo);
  overlay.addEventListener('click',e=>{if(e.target===overlay)closeInfo();});
})();
(function(){
  var btn=document.getElementById('mobile-menu-btn');
  var nav=document.getElementById('mobile-nav');
  if(!btn||!nav)return;
  function openMenu(){btn.classList.add('open');nav.classList.add('open');nav.setAttribute('aria-hidden','false');btn.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';}
  function closeMenu(){btn.classList.remove('open');nav.classList.remove('open');nav.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false');document.body.style.overflow='';}
  btn.addEventListener('click',function(){btn.classList.contains('open')?closeMenu():openMenu();});
  nav.querySelectorAll('[data-target]').forEach(function(el){el.addEventListener('click',function(){navTo(el.dataset.target);closeMenu();});});
})();
(function(){
  const sec=document.getElementById('ueber');
  const img=document.querySelector('#ueber .about-image img');
  if(!sec||!img)return;
  function setSplit(){
    const r=img.naturalWidth/img.naturalHeight;
    const rect=img.getBoundingClientRect();
    const w=rect.width,h=rect.height;
    const contentW=(w/h>=r)?Math.round(h*r):w;
    sec.style.setProperty('--split-x',contentW+'px');
  }
  if(img.complete&&img.naturalWidth)setSplit();
  else img.addEventListener('load',setSplit);
  window.addEventListener('resize',setSplit);
})();
