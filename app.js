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
{id:"hotelzimmer",title:"Hotelzimmer Ausführungsplanung",year:"2024",type:"Ausführungsplanung",catLabel:"CAD · Ausführungsplanung",role:"Ausführungsplanung (AUS 2) · Maßstab 1:8 bis 1:50",place:"Hotelzimmer Projekt",programs:["AutoCAD","VectorWorks"],blurb:"Vollständiger Planungssatz für ein Hotelzimmer — von Grundriss über Lichtplan bis zur Kostenberechnung.",concept:"In diesem Projekt habe ich ein Hotelzimmer von der Grundrissplanung bis zur baureichen Ausführung vollständig durchgearbeitet. Acht Planblätter — Grundriss, Schnitte, Lichtplan, Einbauschränke und Kleiderschrank — bilden einen direkt umsetzbaren Planungssatz.",measures:["8 CAD-Ausführungspläne in 1:8 bis 1:50","Exakte Detailplanung für Einbauschränke & Beleuchtung","Vollständige Kostenberechnung für Wirtschaftlichkeit"],materials:["CAD-Werkplanung","Detailzeichnungen","Kostenberechnung"],result:"Ein fachgerechter, umsetzbarer Ausführungsplanungssatz mit hoher Maßhaltigkeit und Kostentransparenz.",images:["modernisierung-08.jpeg|plan|Grundriss 1:50","modernisierung-10.jpeg|plan|Schnitt AA"],pdf:{src:"assets/pdf/hotelzimmer-ausfuehrungsplanung.pdf",label:"AUS 2 Hotelzimmer Ausführungsplanung (Pläne 1–8)",subLabel:"Vollständige CAD-Werkplanung (8 Planblätter)"},coverImg:"assets/projekte/hotelzimmer-cover.png",cardTheme:"dark",cardPos:"bottom-right"},
{id:"tre",title:"TRE Vehicle Dynamics Interior",year:"2023-2024",type:"Corporate Interior",catLabel:"Corporate · Team Rossberg",role:"Interior Designer · Team Rossberg Engineering",place:"Team Rossberg Engineering",programs:["Moodboards","VectorWorks","Twinmotion"],blurb:"Corporate-Interior für Team Rossberg - Empfang, Büro, Pausenraum und Atrium aus vier Moodboard-Welten.",concept:"Corporate-Interior für Team Rossberg Engineering - vom Empfangsbereich über Büro und Pausenraum bis zum Atrium. Vier Moodboard-Welten bilden die gestalterische Basis.",measures:["Markenstarke Lobby mit Akustiksegeln, Holzlamellen und Trophäeninszenierung","Porsche-Büro mit Pflanzenkonzept, Mosswand und Akustikpaneelen","Pausenraum mit warmer, wohnlicher Aufenthaltsatmosphäre","Atrium als aktiver Begegnungsort mit klaren Funktionszonen"],materials:["Holzlamellen","Akustiksegel & Deckenpaneele","Mosswand & Pflanzen","Energy-Green Akzente","Terrazzo"],result:"Aus uneinheitlichen Räumen entsteht eine durchgängige, markenstarke Corporate-Welt für Team Rossberg, TRE und RXR.",images:["tre-01.jpg|rendering|Atrium & Showcar","tre-02.jpg|rendering|Empfang","tre-03.jpg|rendering|Empfang · RXR","tre-04.jpg|rendering|Empfang · Lounge","tre-05.jpg|rendering|Pausenraum","tre-06.jpg|rendering|Pausenraum · Begrünung","tre-07.jpg|rendering|Atrium · Bar","tre-08.jpg|rendering|Atrium · Lounge","tre-09.jpg|rendering|Besprechung","tre-10.jpg|rendering|Besprechung · TRE-Wand","tre-11.jpg|rendering|Besprechung · Galerie","tre-14.jpg|modell|Moodboard · Industrial","tre-15.jpg|modell|Moodboard · Mysterious Glamour","tre-16.jpg|modell|Moodboard · Scandinavian","tre-17.jpg|modell|Moodboard · Clean White","tre-18.jpg|detail|Bestand · Atrium","tre-19.jpg|detail|Bestand · Empfang","tre-12.jpg|plan|Grundriss","tre-13.jpg|plan|Markenwand"],coverImg:"assets/projekte/tre-09.jpg",cardTheme:"light",cardPos:"top-left"},
{id:"dach",title:"Tradition tragen, Zukunft dämmen",year:"SoSe 2025",type:"Bauen im Bestand",catLabel:"Bestand · Dachsanierung",role:"Studienprojekt · Prof. Fabian A. Wagner, Ass. Louise Daussy · mit Jule Wagenbrenner",place:"Landwirtschaftliches Gebäude / Bauernhaus, Kreimbach",programs:["Bestandsanalyse","1:1-Modell","Ubakus"],blurb:"Ein historischer, ungedämmter Dachbestand - mit biobasiertem, rückbaubarem Schichtaufbau neu gedacht.",concept:"Das Projekt transformiert einen historischen Dachaufbau im Bestand: ein altes Bauernhaus in Kreimbach mit einfacher Falzziegeldeckung, sichtbaren Eichen-Sparren und fehlender bauphysikalischer Ergänzung.",measures:["Erhalt der sichtbaren Eichen-Sparren als primäre, tragende Struktur","Diffusionsoffener, mechanisch befestigter und weitgehend reversibler Aufbau","Wiederverwendete Tonfalzziegel von F. v. Müller als äußere Witterungsschicht","Schichtfolge: Hanfbauplatte, Schilfrohr-Dämmplatte, Holzfaserplatte, Konter- und Traglattung","1:1-Modell auf Europalette mit zugeschnittenen Eichenbalken"],materials:["Wiederverwendete Tonfalzziegel","GUTEX Ultratherm Holzfaser","Hiss Reet Schilfrohr","Hemplith Hanfbauplatte","Eichen-Sparren"],result:"Denkmalnähe, Ökologie und Bauphysik werden in einem zeitgemäßen Dachsystem zusammengeführt.",images:["dach-01.jpg|detail|Bestandsdach · Eichen-Sparren","dach-02.jpg|modell|1:1-Modell · Schichtaufbau","dach-03.jpg|modell|Schichtaufbau · Detail","dach-04.jpg|detail|Tonfalzziegel · F. v. Müller","dach-05.jpg|detail|Schilfrohr-Dämmplatte","dach-06.jpg|modell|Zuschnitt Eichenbalken","dach-07.jpg|modell|Modellbau · Prozess","dach-08.jpg|modell|Schilfrohr einbauen","dach-09.jpg|plan|Bauteilaufbau & Schutzwerte","dach-10.jpg|plan|Temperaturverlauf & Taupunkt","dach-11.jpg|plan|Ökobilanz","dach-12.jpg|plan|Kostenschätzung"],pdf:{src:"assets/pdf/bib-dachsanierung.pdf",label:"BIB_PRäsi.pdf",subLabel:"Dachsanierung & Bauphysik Dokumentation"},coverImg:"assets/projekte/dach-01.jpg",cardTheme:"light",cardPos:"bottom-left"},
{id:"sparkasse",title:"Sparkasse Renovation",year:"2022",type:"Beleuchtungskonzept",catLabel:"Lighting · Renovierung",role:"Gruppenarbeit · Betreuung Prof. Alexander Klein",place:"Sparkasse Filiale",programs:["VectorWorks","SketchUp","Twinmotion"],blurb:"Ein neues Lichtkonzept für eine einladendere, angenehmere und technisch optimierte Atmosphäre.",concept:"Im Renovierungsprojekt der Sparkasse liegt der Schwerpunkt auf einem verbesserten Beleuchtungsdesign - für eine einladendere und angenehmere Atmosphäre für Kundschaft und Mitarbeitende.",measures:["Mehr natürliches Licht: vergrößerte Fenster und Oberlichter","Energieeffiziente LED-Technik mit Dimmsystemen","Tageslichtsensoren passen das Licht an Tageszeit und Nutzung an","Abgehängte Decken verbessern Akustik, Isolierung und Technikzugang"],materials:["LED-Leuchten","Tageslichtsensoren","Abgehängte Decken","Oberlichter"],result:"Ein nutzerfreundlicheres, angenehmeres und technisch optimiertes Raumkonzept mit gleichmäßiger Lichtverteilung.",images:["creative-quarter-02.png|rendering|Innenraum","sparkasse-01.png|rendering|Lounge & Lamellen","sparkasse-02.png|rendering|Schnitt & Theke","sparkasse-03.png|plan|Grundriss","sparkasse-04.png|plan|Beleuchtungsplan","sparkasse-05.png|detail|Schnitt Detail","sparkasse-06.png|detail|Lichtkonzept"],pdf:{src:"assets/pdf/sparkasse-renovation.pdf",label:"GLP_ABGABE-Sparkasse.pdf",subLabel:"Beleuchtungskonzept Abgabe-PDF"},coverImg:"assets/projekte/sparkasse-cover.png",cardTheme:"dark",cardPos:"top-left"},
{id:"functional-furniture",title:"Functional Furniture",year:"2022",type:"Möbeldesign",catLabel:"Furniture · Produktdesign",role:"Gruppenprojekt · Betreuung Prof. Yvonne Fehling",place:"Krankenhauszimmer",programs:["VectorWorks"],blurb:"Ein multifunktionaler Krankenhaus-Schrank - Stauraum, Licht, Arbeitstisch und Ladestation in einem.",concept:"Das Projekt entwickelt einen multifunktionalen Krankenhaus-Schrank, der sich vom sterilen Krankenhausstil abhebt und exakt in eine vorgegebene Nische passt.",measures:["Großzügiger Stauraum für persönliche und medizinische Dinge","Integrierte Beleuchtung, verstellbarer Tisch und Ladestation","Abgerundete Ecken und Kanten zur Unfallvermeidung","Langlebige, leicht zu reinigende Oberflächen"],materials:["Langlebige Oberflächen","Integrierte LED","Verstellbarer Tisch","Ladestation"],result:"Ein Möbel, das Patientenzimmer funktionaler, wohnlicher und sicherer macht - belegt durch ein handgebautes Modell.",images:["functional-furniture-05.png|detail|Ansichten & Erläuterung","functional-furniture-01.png|rendering|Schrank im Raum","functional-furniture-02.png|modell|Handgebautes Modell","functional-furniture-03.png|plan|Konstruktion","functional-furniture-04.png|plan|Grundriss & Nische"],pdf:{src:"assets/pdf/mbe-functional-furniture.pdf",label:"MBE_3final_Functional_Furniture.pdf",subLabel:"Möbelentwurf & Konstruktionsdokumentation"},coverImg:"assets/projekte/functional-furniture-cover.png",cardTheme:"dark",cardPos:"top-right"},
{id:"magic-marvel",title:"Magic Marvel",year:"2022",type:"Messestand",catLabel:"Exhibition · Messestand",role:"Entwurf · Betreuung Prof. Gregor Rutrecht",place:"Buchmesse / Convention",programs:["VectorWorks","SketchUp","Twinmotion"],blurb:"Ein immersiver Marvel-Stand, der schon aus der Ferne anzieht und im Inneren eine Markenwelt schafft.",concept:"Der Entwurf entwickelt einen Marvel-Stand für Buchmesse oder Convention - ein fesselnder Raum mit geheimnisvoller Fassade aus weißen Bildschirmen, auf denen lebensgroße Charaktere erscheinen.",measures:["Äußere Hülle aus weißen Bildschirmen mit Überraschungsmoment","Elegantes, modernes Interior mit Anspielungen auf Marvels Stil","Snackbar, Leseecke für Comics und Überraschungsauftritte","Obere Ebene als Planetarium - Comic-Zeichner bei der Arbeit erlebbar"],materials:["LED-Screens","Dynamische Beleuchtung","Comic-Grafiken","Lesezonen"],result:"Ein immersiver Raum, der das Marvel-Universum räumlich erfahrbar macht - von der Snackbar bis zur Erlebnisplattform.",images:["magic-marvel-01.png|rendering|Fassade & Screens","magic-marvel-02.jpeg|rendering|Leseecke","magic-marvel-03.jpeg|rendering|Snackbar"],coverImg:"assets/projekte/magic-marvel-01.png",cardTheme:"dark",cardPos:"center"},
{id:"exr",title:"Experimenteller Raum — Schnee",year:"WS 2025/2026",type:"Installation",catLabel:"Experimental · Modell",role:"Gruppenarbeit · Sophie Rebholz · Seminar Experimenteller Raum",place:"Hochschule Kaiserslautern",programs:["Handwerkliches Modell","Fotodokumentation"],blurb:"Experimenteller Raum aus Schnee — physisches Modell und atmosphärische Installation.",concept:"Der experimentelle Raum 'Schnee' untersucht Materialität und Raumgefühl durch ein physisch erfahrbares Modell. Flüchtige Qualität des Materials, Lichtwirkung und das Erleben von Raum ohne fest definierte Wände stehen im Mittelpunkt.",measures:["Schnee als flüchtiges, wandelbares Material","Licht und Schatten als raumgestaltende Elemente","Raum ohne feste Wände und Decken erleben","Fotodokumentation der Installation vor Ort"],materials:["Schnee","Natürliches Licht","Physisches Modell"],result:"Eine atmosphärische Installation, die Vergänglichkeit und Materialität räumlich erfahrbar macht.",images:["exr-m-12.jpg|modell|Modell · Final","exr-m-08.jpg|modell|Modell · Perspektive","exr-m-05.jpg|modell|Modell · Überblick","exr-01.jpg|modell|Installation vor Ort","exr-m-01.jpg|modell|Modell · Ansicht","exr-m-02.jpg|modell|Modell · Detail","exr-m-03.jpg|modell|Modell · Struktur","exr-m-04.jpg|modell|Modell · Textur","exr-m-06.jpg|modell|Modell · Licht","exr-m-07.jpg|modell|Modell · Innen","exr-m-09.jpg|modell|Modell · Schnee","exr-m-10.jpg|modell|Modell · Form","exr-m-11.jpg|modell|Modell · Prozess"],pdf:{src:"assets/pdf/exraum-schnee.pdf",label:"Exraum_Schnee.pdf",subLabel:"Projekt-Dokumentation PDF"},coverImg:"assets/projekte/exr-m-12.jpg",cardTheme:"light",cardPos:"bottom-right"}
].map((p,i)=>({...p,sheet:`PRJ-${String(i+1).padStart(2,"0")}`,images:p.images.map(s=>{const [file,cat,label]=s.split("|");return{src:`assets/projekte/${file}`,cat,label,catLabel:catMeta[cat].label,kind:"image"}})}));
const projectBentoOrder=["modernisierung","creative-quarter","tre","hotelzimmer","dach","functional-furniture","exr","sparkasse"];
const projectBentoClasses={modernisierung:"feature",tre:"tall",sparkasse:"wide"};
const timeline=[
  {
    category: "Studium",
    period: "03.2025 – HEUTE",
    kicker: "Studium · 03.2025 – HEUTE",
    title: "Master of Arts Innenarchitektur",
    org: "Hochschule Kaiserslautern"
  },
  {
    category: "Beruf",
    period: "08.2023 – HEUTE",
    kicker: "Beruf · 08.2023 – HEUTE",
    title: "Recruiter & HR Administrator",
    org: "Reline Europe GmbH"
  },
  {
    category: "Auslandssemester",
    period: "2024",
    kicker: "Auslandssemester · 2024",
    title: "D-EVA Studios",
    org: "Bali"
  },
  {
    category: "Studium",
    period: "2020 – 2024",
    kicker: "Studium · 2020 – 2024",
    title: "Bachelor of Arts Innenarchitektur",
    org: "Hochschule Kaiserslautern"
  },
  {
    category: "Ehrenamt",
    period: "",
    kicker: "Ehrenamt",
    title: "Dolmetscherin & Integration",
    org: "Arbeitskreis Asyl / Stadt Neustadt a. d. W."
  },
  {
    category: "Gastronomie",
    period: "",
    kicker: "Gastronomie",
    title: "Servicekraft",
    org: "Komami"
  },
  {
    category: "Studium",
    period: "",
    kicker: "Studium",
    title: "Rechtswissenschaften",
    org: "Universität zu Köln"
  }
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
function preloadFrames(){for(let i=1;i<=TOTAL_FRAMES;i++){const img=new Image();img.src=`assets/frames/f${String(i).padStart(3,"0")}.jpg`;img.onload=()=>{framesLoaded++;if(i===1)drawFrame();};frames.push(img);}}
function sizeCanvas(){if(!canvas)return;const w=canvas.offsetWidth||canvas.clientWidth||window.innerWidth;const h=canvas.offsetHeight||canvas.clientHeight||window.innerHeight;canvas.width=w;canvas.height=h;}
function navTo(id){const el=document.getElementById(id);if(!el)return;const top=sc.scrollTop+(el.getBoundingClientRect().top-sc.getBoundingClientRect().top)-64;sc.scrollTo({top,behavior:"smooth"})}
document.querySelectorAll("[data-target]").forEach(b=>b.addEventListener("click",()=>navTo(b.dataset.target)));
function initMarquee(){const track=$("#marquee-track");track.innerHTML=[...marqueeWords,...marqueeWords].map(w=>`<span>${w}</span>`).join("")}
function renderDocs(){}
function renderProjects(){
  var grid=$("#project-grid");
  var ordered=projectBentoOrder.map(function(id){return projects.find(function(p){return p.id===id;});}).filter(Boolean);
  grid.innerHTML=
    '<div class="proj-gallery-container">'+
      '<button class="proj-nav-btn proj-nav-prev" id="proj-prev-btn" aria-label="Vorherige Projekte" type="button">'+
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>'+
      '</button>'+
      '<div class="proj-gallery" id="proj-gallery" data-fade="right">'+
        ordered.map(function(p,i){
          var imgSrc=p.coverImg || p.images[0].src;
          var themeClass = (i % 2 === 0) ? 'theme-light' : 'theme-dark';

          return '<button class="proj-card '+themeClass+'" data-project="'+p.id+'" style="--i:'+i+'">'+
            '<img src="'+imgSrc+'" alt="'+p.title+'" loading="lazy">'+
            '<div class="proj-card-overlay">'+
              '<div class="proj-card-text-box">'+
                '<div class="proj-card-type">'+p.type+' · '+p.year+'</div>'+
                '<div class="proj-card-title">'+p.title+'</div>'+
              '</div>'+
            '</div>'+
          '</button>';
        }).join('')+
      '</div>'+
      '<button class="proj-nav-btn proj-nav-next visible" id="proj-next-btn" aria-label="Nächste Projekte" type="button">'+
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'+
      '</button>'+
    '</div>';

  var gallery=document.getElementById("proj-gallery");
  var prevBtn=document.getElementById("proj-prev-btn");
  var nextBtn=document.getElementById("proj-next-btn");

  function updateNavArrows(){
    if(!gallery || !prevBtn || !nextBtn) return;
    var maxScroll=gallery.scrollWidth-gallery.clientWidth;
    if(maxScroll<=10){
      prevBtn.classList.remove("visible");
      nextBtn.classList.remove("visible");
      gallery.removeAttribute("data-fade");
      return;
    }
    if(gallery.scrollLeft>20){
      prevBtn.classList.add("visible");
    } else {
      prevBtn.classList.remove("visible");
    }
    if(gallery.scrollLeft<maxScroll-20){
      nextBtn.classList.add("visible");
    } else {
      nextBtn.classList.remove("visible");
    }

    // Dynamic edge fade mask
    if(gallery.scrollLeft>30 && gallery.scrollLeft<maxScroll-30){
      gallery.setAttribute("data-fade","both");
    } else if(gallery.scrollLeft>=maxScroll-30){
      gallery.setAttribute("data-fade","left");
    } else {
      gallery.setAttribute("data-fade","right");
    }
  }

  function getStep(){
    var firstCard=gallery.querySelector(".proj-card");
    return firstCard ? (firstCard.offsetWidth + 16) * 1.5 : (gallery.clientWidth * 0.75);
  }

  prevBtn.addEventListener("click",function(e){
    e.preventDefault();
    gallery.scrollBy({left:-getStep(),behavior:"smooth"});
  });

  nextBtn.addEventListener("click",function(e){
    e.preventDefault();
    gallery.scrollBy({left:getStep(),behavior:"smooth"});
  });

  gallery.addEventListener("scroll",updateNavArrows,{passive:true});
  window.addEventListener("resize",updateNavArrows,{passive:true});
  setTimeout(updateNavArrows,150);

  // drag gallery
  var dragging=false,startX,startScroll,hasMoved=false;
  gallery.addEventListener("mousedown",function(e){
    if(e.target.closest(".proj-nav-btn")) return;
    dragging=true;
    hasMoved=false;
    startX=e.pageX;
    startScroll=gallery.scrollLeft;
    gallery.style.cursor="grabbing";
  });
  document.addEventListener("mousemove",function(e){
    if(!dragging)return;
    var dx=e.pageX-startX;
    if(Math.abs(dx)>5) hasMoved=true;
    gallery.scrollLeft=startScroll-dx;
  });
  document.addEventListener("mouseup",function(){
    if(dragging){
      dragging=false;
      gallery.style.cursor="";
      setTimeout(function(){hasMoved=false;},50);
    }
  });

  grid.querySelectorAll(".proj-card").forEach(function(b){
    b.addEventListener("click",function(e){
      if(hasMoved){e.preventDefault();return;}
      openProject(b.dataset.project);
    });
  });
}
const materialSamples = [
  { name: "Eiche Natur", src: "assets/materials/eiche.jpg" },
  { name: "Terrazzo Fein", src: "assets/materials/terrazzo.jpg" },
  { name: "Akustikpaneel", src: "assets/materials/akustikpaneel.webp" },
  { name: "Warmes Licht", src: "assets/materials/warm-light.jpg" },
  { name: "Stoff Bouclé", src: "assets/materials/stoff.jpg" }
];

function initMaterialMarquee() {
  var track = document.getElementById("material-marquee");
  if (!track) return;
  var list = materialSamples.concat(materialSamples);
  track.innerHTML = list.map(function(m) {
    return '<div class="material-tile" title="' + m.name + '">' +
      '<img src="' + m.src + '" alt="' + m.name + '" loading="lazy">' +
    '</div>';
  }).join('');
}

const kommMilestones = [
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    title: "Projektkoordination",
    desc: "Schnittstelle zwischen Planung, Handwerk & Team"
  },
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    title: "Präsentationen & Pitch",
    desc: "Visuelle Aufbereitung für Auftraggeber & Bauherren"
  },
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    title: "Kundenberatung",
    desc: "Bedarfsanalyse und individuelle Raumkonzepte"
  },
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    title: "Teamwork",
    desc: "Kollaboratives Arbeiten im interdisziplinären Planerteam"
  },
  {
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>',
    title: "HR & Recruiting",
    desc: "Erfahrung in Teamaufbau und Mitarbeiterbetreuung"
  }
];

var milestoneTimer = null;
function initAnimatedList() {
  var feed = document.getElementById("milestones-feed");
  var wrapper = document.getElementById("milestones-wrapper");
  if (!feed) return;

  feed.innerHTML = "";
  var curIndex = 0;
  var isPaused = false;

  function createItemEl(data, isEntering) {
    var div = document.createElement("div");
    div.className = "anim-item" + (isEntering ? " anim-item-entering" : "");
    div.innerHTML =
      '<div class="anim-item-icon">' + data.icon + '</div>' +
      '<div class="anim-item-content">' +
        '<div class="anim-item-title">' + data.title + '</div>' +
        '<div class="anim-item-sub">' + data.desc + '</div>' +
      '</div>';
    return div;
  }

  for (var i = 2; i >= 0; i--) {
    feed.appendChild(createItemEl(kommMilestones[i], false));
  }
  curIndex = 3;

  function addNextItem() {
    if (isPaused) return;
    var data = kommMilestones[curIndex % kommMilestones.length];
    curIndex++;

    var newEl = createItemEl(data, true);
    feed.insertBefore(newEl, feed.firstChild);

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        newEl.classList.remove("anim-item-entering");
      });
    });

    var children = feed.querySelectorAll(".anim-item:not(.anim-item-leaving)");
    if (children.length > 3) {
      var oldest = children[children.length - 1];
      oldest.classList.add("anim-item-leaving");
      setTimeout(function() {
        if (oldest.parentNode) oldest.remove();
      }, 460);
    }
  }

  if (wrapper) {
    wrapper.addEventListener("mouseenter", function() { isPaused = true; });
    wrapper.addEventListener("mouseleave", function() { isPaused = false; });
  }

  if (milestoneTimer) clearInterval(milestoneTimer);
  milestoneTimer = setInterval(addNextItem, 3400);
}

function updateAnimatedBeams() {
  var stage = document.getElementById("beam-stage");
  var svg = document.getElementById("beam-svg");
  if (!stage || !svg) return;

  var sRect = stage.getBoundingClientRect();
  if (sRect.width === 0 || sRect.height === 0) return;

  var w = Math.round(sRect.width);
  var h = Math.round(sRect.height);
  svg.setAttribute("viewBox", "0 0 " + w + " " + h);
  svg.setAttribute("width", w);
  svg.setAttribute("height", h);

  svg.querySelectorAll(".beam-track, .beam-active").forEach(function(p) { p.remove(); });

  function getNodeCenter(el, fromSide) {
    var targetEl = el.querySelector(".wf-logo-mask") || el;
    var rect = targetEl.getBoundingClientRect();
    var x;
    if (fromSide === "right") {
      x = (rect.right - sRect.left) - 2;
    } else if (fromSide === "left") {
      x = (rect.left - sRect.left) + 2;
    } else {
      x = (rect.left - sRect.left) + (rect.width / 2);
    }
    var y = (rect.top - sRect.top) + (rect.height / 2);
    return { x: x, y: y };
  }

  var connections = [
    // Station 1 -> Station 2
    { from: "node-miro", to: "node-vw", delay: 0.0, fromSide: "right" },
    { from: "station-1", to: "node-su", delay: 0.35, fromSide: "right" },
    { from: "node-material", to: "node-tm", delay: 0.7, fromSide: "right" },

    // Station 2 -> Station 3
    { from: "node-vw", to: "node-ps", delay: 1.0 },
    { from: "node-vw", to: "node-id", delay: 1.3 },
    { from: "node-su", to: "node-ps", delay: 1.6 },
    { from: "node-tm", to: "node-ps", delay: 1.9 },
    { from: "node-tm", to: "node-id", delay: 2.2 },

    // Station 3 -> Station 4
    { from: "node-ps", to: "node-target", delay: 2.5 },
    { from: "node-id", to: "node-target", delay: 2.8 }
  ];

  connections.forEach(function(conn) {
    var fromEl = document.getElementById(conn.from);
    var toEl = document.getElementById(conn.to);
    if (!fromEl || !toEl) return;

    var fromPt = getNodeCenter(fromEl, conn.fromSide);
    var toPt = getNodeCenter(toEl, null);

    var dx = toPt.x - fromPt.x;
    if (dx <= 0) return;

    var cp1x = fromPt.x + dx * 0.46;
    var cp1y = fromPt.y;
    var cp2x = toPt.x - dx * 0.46;
    var cp2y = toPt.y;
    var d = "M " + fromPt.x + " " + fromPt.y + " C " + cp1x + " " + cp1y + ", " + cp2x + " " + cp2y + ", " + toPt.x + " " + toPt.y;

    var track = document.createElementNS("http://www.w3.org/2000/svg", "path");
    track.setAttribute("d", d);
    track.setAttribute("class", "beam-track");
    svg.appendChild(track);

    var beam = document.createElementNS("http://www.w3.org/2000/svg", "path");
    beam.setAttribute("d", d);
    beam.setAttribute("class", "beam-active");
    beam.style.animationDelay = conn.delay + "s";
    svg.appendChild(beam);
  });
}

function initAnimatedBeam() {
  updateAnimatedBeams();
  window.addEventListener("resize", updateAnimatedBeams, { passive: true });
  setTimeout(updateAnimatedBeams, 250);
  setTimeout(updateAnimatedBeams, 750);
}

var conceptShowcaseTimer = null;
function initConceptShowcase() {
  var container = document.getElementById("concept-showcase");
  if (!container) return;

  var slides = container.querySelectorAll(".showcase-slide");
  var tabs = container.querySelectorAll(".showcase-tab");
  if (!slides.length || !tabs.length) return;

  var currentIndex = 0;
  var isPaused = false;

  function goToSlide(idx) {
    currentIndex = ((idx % slides.length) + slides.length) % slides.length;
    slides.forEach(function(s, i) {
      if (i === currentIndex) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
    tabs.forEach(function(t, i) {
      if (i === currentIndex) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    if (isPaused) return;
    goToSlide(currentIndex + 1);
  }

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      var target = parseInt(tab.getAttribute("data-target"), 10);
      if (!isNaN(target)) {
        goToSlide(target);
        resetTimer();
      }
    });
  });

  container.addEventListener("mouseenter", function() { isPaused = true; });
  container.addEventListener("mouseleave", function() { isPaused = false; });

  function resetTimer() {
    if (conceptShowcaseTimer) clearInterval(conceptShowcaseTimer);
    conceptShowcaseTimer = setInterval(nextSlide, 4000);
  }

  resetTimer();
}

function renderSkills() {
  initMaterialMarquee();
  initAnimatedList();
  initAnimatedBeam();
  initConceptShowcase();
}
function renderTimeline() {
  var col1 = document.getElementById("wd-col-1");
  var col2 = document.getElementById("wd-col-2");
  var col3 = document.getElementById("wd-col-3");
  if (!col1 || !col2 || !col3) return;

  function cardHtml(item) {
    var kicker = item.kicker || (item.category + (item.period ? ' · ' + item.period : ''));
    return '<div class="wd-card-3d">' +
      '<div class="wd-card-kicker">' + kicker + '</div>' +
      '<div class="wd-card-title">' + item.title + '</div>' +
      '<div class="wd-card-org">' + item.org + '</div>' +
    '</div>';
  }

  // Distribution across 3 columns (4 items each, duplicated for seamless loop)
  // Col 1: Studium Fokus + Beruf (Master, Bachelor, Jura, Recruiter)
  // Col 2: Beruf & Auslandssemester & Ehrenamt (Recruiter, Ehrenamt, D-EVA, Komami)
  // Col 3: Auslandssemester & Gastronomie & Studium (D-EVA, Komami, Master, Bachelor)
  var col1Items = [timeline[0], timeline[3], timeline[6], timeline[1]];
  var col2Items = [timeline[1], timeline[4], timeline[2], timeline[5]];
  var col3Items = [timeline[2], timeline[5], timeline[0], timeline[3]];

  function populateCol(el, items) {
    var allItems = items.concat(items);
    el.innerHTML = '<div class="wd-col-track">' +
      allItems.map(cardHtml).join('') +
    '</div>';
  }

  populateCol(col1, col1Items);
  populateCol(col2, col2Items);
  populateCol(col3, col3Items);

  // pauseOnHover: Pause when cursor enters the 3D stage or any column
  var stage = document.getElementById("wd-3d-stage");
  if (stage) {
    stage.addEventListener("mouseenter", function() {
      stage.querySelectorAll(".wd-col-track").forEach(function(tr) {
        tr.style.animationPlayState = "paused";
      });
    });
    stage.addEventListener("mouseleave", function() {
      stage.querySelectorAll(".wd-col-track").forEach(function(tr) {
        tr.style.animationPlayState = "running";
      });
    });
    stage.addEventListener("touchstart", function() {
      stage.querySelectorAll(".wd-col-track").forEach(function(tr) {
        tr.style.animationPlayState = "paused";
      });
    }, { passive: true });
    stage.addEventListener("touchend", function() {
      stage.querySelectorAll(".wd-col-track").forEach(function(tr) {
        tr.style.animationPlayState = "running";
      });
    }, { passive: true });
  }
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
function updateModalMedia(newIdx){
  const p=activeProject();
  if(!p||p.pdf)return;
  const imgs=visibleImages();
  if(!imgs.length)return;
  state.idx=(newIdx+imgs.length)%imgs.length;
  const current=imgs[state.idx]||imgs[0];
  const modal=$("#project-modal");
  if(!modal)return;
  const imgEl=document.getElementById("mp-active-img");
  const capEl=document.getElementById("mp-caption");
  const cntEl=document.getElementById("mp-counter");
  if(imgEl&&current){
    imgEl.style.opacity="0.3";
    const nextSrc=current.src;
    const tempImg=new Image();
    tempImg.onload=function(){
      imgEl.src=nextSrc;
      imgEl.alt=current.label;
      if(capEl)capEl.textContent=current.label;
      if(cntEl)cntEl.textContent=(state.idx+1)+" / "+imgs.length;
      imgEl.style.opacity="1";
    };
    tempImg.onerror=function(){
      imgEl.src=nextSrc;
      imgEl.style.opacity="1";
    };
    tempImg.src=nextSrc;
  }
  modal.querySelectorAll("[data-thumb]").forEach(function(b,i){
    b.classList.toggle("active",i===state.idx);
  });
}
function stepImg(dir){
  const p=activeProject();
  if(!p||p.pdf)return;
  updateModalMedia(state.idx+dir);
}
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
        <div class="mp-media" id="mp-media">
          <button class="mp-arrow mp-prev" id="prev-img" aria-label="Vorheriges Bild">‹</button>
          <img src="${current.src}" alt="${current.label}" loading="lazy" id="mp-active-img">
          <button class="mp-arrow mp-next" id="next-img" aria-label="Nächstes Bild">›</button>
          <div class="mp-counter" id="mp-counter">${state.idx+1} / ${imgs.length}</div>
          <div class="mp-caption" id="mp-caption">${current.label}</div>
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
    const prevImg=$("#prev-img");if(prevImg)prevImg.onclick=(e)=>{e.stopPropagation();stepImg(-1);};
    const nextImg=$("#next-img");if(nextImg)nextImg.onclick=(e)=>{e.stopPropagation();stepImg(1);};
    modal.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>setFilter(b.dataset.filter));
    modal.querySelectorAll("[data-thumb]").forEach(b=>b.onclick=()=>{updateModalMedia(+b.dataset.thumb);});

    // Touch swipe & mouse drag isolation on the image container
    const mediaEl=document.getElementById("mp-media");
    if(mediaEl){
      let touchStartX=0,touchStartY=0,touchDiffX=0;
      mediaEl.addEventListener("touchstart",function(e){
        if(e.touches.length===1){
          touchStartX=e.touches[0].clientX;
          touchStartY=e.touches[0].clientY;
          touchDiffX=0;
        }
      },{passive:true});

      mediaEl.addEventListener("touchmove",function(e){
        if(e.touches.length===1){
          touchDiffX=e.touches[0].clientX-touchStartX;
          const diffY=e.touches[0].clientY-touchStartY;
          if(Math.abs(touchDiffX)>Math.abs(diffY)){
            e.preventDefault();
            e.stopPropagation();
          }
        }
      },{passive:false});

      mediaEl.addEventListener("touchend",function(){
        if(Math.abs(touchDiffX)>35){
          if(touchDiffX<0)stepImg(1);
          else stepImg(-1);
        }
        touchDiffX=0;
      },{passive:true});

      let isDragging=false,dragStartX=0;
      mediaEl.addEventListener("mousedown",function(e){
        if(e.target.closest(".mp-arrow"))return;
        isDragging=true;
        dragStartX=e.clientX;
        mediaEl.style.cursor="grabbing";
      });
      document.addEventListener("mousemove",function(e){
        if(!isDragging)return;
      });
      document.addEventListener("mouseup",function(e){
        if(isDragging){
          isDragging=false;
          mediaEl.style.cursor="";
          const dx=e.clientX-dragStartX;
          if(Math.abs(dx)>40){
            if(dx<0)stepImg(1);
            else stepImg(-1);
          }
        }
      });
    }
  }
}
function openLightbox(src,label){const lb=$("#lightbox");state.lightbox=src;document.body.style.overflow="hidden";lb.innerHTML=`<div class="lightbox-inner"><div class="lightbox-top"><span>${label}</span><button id="close-lightbox">Schließen ✕</button></div><img src="${src}" alt="${label}"></div>`;lb.classList.add("open");lb.setAttribute("aria-hidden","false");$("#close-lightbox").onclick=closeLightbox}
function waldVisible(){return state.waldTab==="alle"?waldAssets:waldAssets.filter(x=>x.tab===state.waldTab)}
function openWaldModal(tab="fotos"){state.waldTab=tab;state.waldIdx=0;document.body.style.overflow="hidden";renderWaldModal()}
function renderWaldModal(){const lb=$("#lightbox"),items=waldAssets,current=items[state.waldIdx]||items[0];state.lightbox=current.src;lb.innerHTML=`<div class="wald-modal-panel"><button class="wald-modal-close" id="close-lightbox">✕</button><div class="wald-modal-head"><small>Aktuelles · Laufende Masterarbeit</small><strong>Waldmannsburg</strong></div><figure class="wald-modal-stage"><img class="wald-modal-image" src="${current.src}" alt="${current.label}" loading="lazy"><figcaption>${current.label}</figcaption></figure><div class="wald-modal-controls"><button id="wald-prev">‹</button><span>${state.waldIdx+1} / ${items.length}</span><button id="wald-next">›</button></div></div>`;lb.classList.add("open");lb.setAttribute("aria-hidden","false");$("#close-lightbox").onclick=closeLightbox;$("#wald-prev").onclick=()=>{state.waldIdx=(state.waldIdx-1+items.length)%items.length;renderWaldModal()};$("#wald-next").onclick=()=>{state.waldIdx=(state.waldIdx+1)%items.length;renderWaldModal()}}
function openDocsOverlay(){openWaldModal("grundrisse")}
function computeHero(){if(!hero)return;const scrollTop=(sc&&sc.scrollTop>0)?sc.scrollTop:(window.scrollY||document.documentElement.scrollTop||0);const clientHeight=(sc&&sc.clientHeight)?sc.clientHeight:window.innerHeight;const total=hero.offsetHeight-clientHeight;let p=total>0?scrollTop/total:0;p=Math.max(0,Math.min(1,p));state.scrollP=p;if(bar)bar.style.transform=`scaleX(${p.toFixed(4)})`;}
function drawCoverImage(c,img,cw,ch){const nw=img.naturalWidth||1920,nh=img.naturalHeight||1080,ir=nw/nh,cr=cw/ch;let dw,dh,dx,dy;if(cr>ir){dw=cw;dh=cw/ir;dx=0;dy=(ch-dh)/2;}else{dw=ch*ir;dh=ch;dx=(cw-dw)/2;dy=0;}c.drawImage(img,dx,dy,dw,dh);}
function drawFrame(){if(!canvas||!ctx||framesLoaded===0)return;const targetF=state.scrollP*(TOTAL_FRAMES-1);currentFrameF+=(targetF-currentFrameF)*0.08;const idx=Math.min(Math.round(currentFrameF),TOTAL_FRAMES-1);const img=frames[idx];if(!img||!img.complete||!img.naturalWidth)return;if(canvas.width!==canvas.offsetWidth||canvas.height!==canvas.offsetHeight)sizeCanvas();ctx.drawImage(img,0,0,canvas.width,canvas.height);if(heroRightPanel)heroRightPanel.classList.toggle("visible",currentFrameF>=270);}
function layoutTimeline(){}
function scrubTimeline(){}
function loop(){state.frame++;computeHero();drawFrame();requestAnimationFrame(loop)}
preloadFrames();sizeCanvas();
sc.addEventListener("scroll",()=>{computeHero();},{passive:true});
window.addEventListener("scroll",()=>{computeHero();},{passive:true});
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
  var sec = document.getElementById('faehigkeiten');
  if(!sec) return;
  var obs = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
      updateAnimatedBeams();
    }
  },{threshold:0.1, root:sc});
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
