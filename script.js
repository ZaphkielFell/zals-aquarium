// Project Descriptions for the Gallery Banner
const PROJECTS = {
  general: {
    title: "General Art",
    subtitle: "These are general art pieces that I just do on my free time! "
  },
  mekamajik: {
    title: "Mekanika Majika",
    subtitle: "Our Animated Thesis! I'm the Art Director and Lead Artist for Mekanika Majika. I made the character designs, 2D Animations and Character Animations "
  },
  paralos: {
    title: "Para Los Filipinos",
    subtitle: "2D Animation Project about Jose Rizal. I was the Director and Lead Animator for this project! Unfortunately unfinished due to unexpected circumstances :("
  },
  otrb: {
    title: "Over The Rainbow Bridge",
    subtitle: "Exploration of Hell, Morality and Redemption. Used to be a Visual Novel project for school, turned into its own thing!"
  }
};

// Portfolio Data
const ARTWORKS = [
  // General Works
 {
    id: 1,
    title: "Herobrine Spawner",
    project: "general",
    projectLabel: "General Art",
    tools: "Adobe Animate",
    desc: "Birthday Art for Herobrine (2025)",
    image: "images/HeroinBDayYAYVar2.gif"
  },
  {
    id: 2,
    title: "Herobrine Birthday Art",
    project: "general",
    projectLabel: "General Art",
    tools: "Adobe Animate",
    desc: "Birthday Art for Herobrine (2026)",
    image: "images/HeroinBirth.gif"
  },
  {
    id: 3,
    title: "Isn't it Bromantic?",
    project: "general",
    projectLabel: "General Art",
    tools: "IbisPaint",
    desc: "Wither Rose art based of the photoshoot of Robert Sean Leonard & Hugh Laurie",
    image: "images/WitherRose in that Hilson pose.png"
  },
  {
    id: 4,
    title: "iLoveU",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Valentines Art of these two",
    image: "images/iLoveU.png"
  },
   {
    id: 5,
    title: "Bad Heebs",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Herobrine in Micheal Jackson's Bad album outfit",
    image: "images/BadHeebs.png"
  },
   {
    id: 6,
    title: "Apple of my Eye",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Art inspired by CharlieXCX's Apple song",
    image: "images/Apple of my eye.png"
  },
   {
    id: 7,
    title: "Render Test in Affinity",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "First Rendered art I made in Affinity",
    image: "images/Fell Rendertest.png"
  },
  {
    id: 8,
    title: "Herobrine Doodle",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Some Colored Doodle",
    image: "images/Heebs but he BAD asf ehhhh.png"
  },
  {
    id: 9,
    title: "Tree Village; Kamahalan",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Design for my Minecraft Stuff about a Tree Cult",
    image: "images/Fell Tree Outfit.png"
  },
  {
    id: 10,
    title: "Tree Village; Kamatayan",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Design for my Minecraft Stuff about a Tree Cult",
    image: "images/HeebsTree.png"
  },
 {
    id: 11,
    title: "Tree Village; People of the Village Part 1",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Design for my Minecraft Stuff about a Tree Cult",
    image: "images/TreeVillagersOutfit1.png"
  },
   {
    id: 12,
    title: "Tree Village; People of the Village Part 2",
    project: "general",
    projectLabel: "General Art",
    tools: "Affinity",
    desc: "Design for my Minecraft Stuff about a Tree Cult",
    image: "images/TreeVillagersOutfit2.png"
  },
  // MekaMajik
  {
    id: 13,
    title: "Judgement Scene",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Blender",
    desc: "Eyes are hand drawn in Blender's Grease Pencil.",
    image: "MekaMajik/HarryJudge.gif"
  },
  {
    id: 14,
    title: "Tomas Intro Part",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Blender",
    desc: "Tomas' part in Dolabella's Intro segment",
    image: "MekaMajik/TomasShowOff.gif"
  },
    {
    id: 15,
    title: "Harry & Marie's Conversation",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Blender",
    desc: "This whole segment is animated by me :3",
    image: "MekaMajik/HarryMarie4.gif"
  },
  {
    id: 16,
    title: "Mekanika Majika Poster",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Official Poster for Mekanika Majika",
    image: "MekaMajik/MEKAMAJIK POSTER NEW.png"
  },
   {
    id: 17,
    title: "Dolabella University Students",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Lineup for the main trio",
    image: "MekaMajik/Dolabella Students colored.png"
  },
  {
    id: 18,
    title: "University of Sta. Adarna Students",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Lineup for the Adarna students",
    image: "MekaMajik/Sta Adarna Students colored.png"
  },
  {
    id: 19,
    title: "Harry's Outfit Exploration",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Outfits include: Normal DU PE Uniform, Jacket Version, Damaged Ver",
    image: "MekaMajik/HarryVECTORS.png"
  },
  {
    id: 20,
    title: "Marie's Outfit Exploration",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Outfits include: Normal USTA PE Uniform, Jacket Version, Dress Ver",
    image: "MekaMajik/MarieVECTORS.png"
  },
   {
    id: 21,
    title: "Harry Mech Suit Concept",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Concept Art for Harry's Mech Suit",
    image: "MekaMajik/Harry Suit and concept stuff.png"
  },
   {
    id: 22,
    title: "Harry Mech Suit Concept(Color Exploration)",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Concept Art for Harry's Mech Suit",
    image: "MekaMajik/Color Palettes.png"
  },
  {
    id: 23,
    title: "Concept Art Dump",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Concept Art for Harry's Mech Suit",
    image: "MekaMajik/concept art 2.png"
  },
  {
    id: 24,
    title: "Tigmamanukan Concept",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "WIP of Tigmamanukan",
    image: "MekaMajik/Tigmamanukan.png"
  },
  {
    id: 25,
    title: "Spiders Concept",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Concept Art of the Spiders",
    image: "MekaMajik/Spiders.png"
  },
  {
    id: 26,
    title: "Dolabella Humans",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Humanized versions of the Dolabella Students",
    image: "MekaMajik/DolaHumansColored.png"
  },
  {
    id: 27,
    title: "Addarna Humans",
    project: "mekamajik",
    projectLabel: "Mekanika Majika",
    tools: "Affinity",
    desc: "Humanized versions of the Dolabella Students",
    image: "MekaMajik/AdarnaHumansColored.png"
  },
  // Para Los
  {
    id: 28,
    title: "Teaser Trailer 1",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "Adobe Animate",
    desc: "Segment of the Teaser Trailer",
    image: "ParaLos/Pepe Teaser1.gif"
  },
  {
    id: 29,
    title: "Teaser Trailer 2",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "Adobe Animate",
    desc: "Segment of the Teaser Trailer",
    image: "ParaLos/Pepe Teaser2.gif"
  },
  {
    id: 30,
    title: "Para Los Nightmare Segment",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "Adobe Animate",
    desc: "1 second of screentime took 3 days to animate",
    image: "ParaLos/Climax3.gif"
  },
  {
    id: 31,
    title: "Para Los Nightmare Segment(Statue)",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "Adobe Animate",
    desc: "Looks at you wrong",
    image: "ParaLos/oogles-you-menacingly.gif"
  },
  {
    id: 32,
    title: "Jose Rizal Turn Around",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "Pepe's Turnaround",
    image: "ParaLos/RIZAL TURN AROUND REF SHEET.png"
  },
  {
    id: 33,
    title: "Rizal Outfit Exploration; Polos",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "Polo design explorations",
    image: "ParaLos/Rizal Polos.png"
  },
  {
    id: 34,
    title: "Rizal Outfit Exploration; Other Outfits",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "Pepe but in a Sando and Modern Version of what he used to wear",
    image: "ParaLos/Rizal Other outfits.png"
  },
  {
    id: 35,
    title: "Aling Baby Turn Around",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "Pepe's Cranky Landlord",
    image: "ParaLos/Aling Baby Turnaround Ref.png"
  },
  {
    id: 36,
    title: "Rizal Close Up",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "Some Illustrations of Rizal",
    image: "ParaLos/zoom in.png"
  },
  {
    id: 37,
    title: "Aling Baby Close Up",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "Some Illustrations of Aling Baby",
    image: "ParaLos/zoomed in.png"
  },
  {
    id: 38,
    title: "Rizal Doodles",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "Bunch of Pepe doodles just doom scrolling",
    image: "ParaLos/Pepeng Doom Scrolling.png"
  },
  {
    id: 39,
    title: "Initial Artstyle Test",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "First ever art for the project",
    image: "ParaLos/ArtStyle test Rizal.png"
  },
  {
    id: 40,
    title: "Initial Sketches",
    project: "paralos",
    projectLabel: "Para Los Filipinos",
    tools: "IbisPaintX",
    desc: "More early pieces for the project",
    image: "ParaLos/Initial sketches.png"
  },
  // OTRB
  {
    id: 41,
    title: "Over the Rainbow Bridge; Cover Art",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Cover Art/Main Menu Art for the old Visual Novel concept",
    image: "OTRB/OTRB Fall from Heaven.png"
  },
  {
    id: 42,
    title: "Over the Rainbow Bridge; Poster",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Poster for Over the Rainbow Bridge",
    image: "OTRB/Over The Rainbow Bridge poster.png"
  },
  {
    id: 43,
    title: "Fr. Jude Salvi; Reference Sheet",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Reference for the project's protagonist",
    image: "OTRB/Judas_Salvi_.png"
  },
  {
    id: 44,
    title: "Valak; Reference Sheet",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Reference for the project's deuteragonist",
    image: "OTRB/Valak_the_nun_092357.png"
  },
  {
    id: 45,
    title: "Lucifer; Vector/Reference Sheet",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Reference for Lucifer Morningstar",
    image: "OTRB/HH7SINS OTRB Zalucifer.png"
  },
  {
    id: 46,
    title: "Beelzebub; Vector/Reference Sheet",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Reference for Beelzebub",
    image: "OTRB/HH7SINS OTRB Bee.png"
  },
  {
    id: 47,
    title: "Satan; Vector/Reference Sheet",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Reference for Satan",
    image: "OTRB/HH7SINS OTRB Kuwagattan.png"
  },
  {
    id: 49,
    title: "Asmodeus; Vector/Reference Sheet",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Reference for Beelzebub",
    image: "OTRB/HH7SINS OTRB Ozzy.png"
  },
  {
    id: 50,
    title: "Leviathan; Vector/Reference Sheet",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "IbisPaintX",
    desc: "Reference for Beelzebub",
    image: "OTRB/HH7SINS OTRB Levi.png"
  },
  {
    id: 51,
    title: "The Unholy Trinity",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "Affinity",
    desc: "Recent Addition for the project ft. new characters",
    image: "OTRB/Unholy Trinity colored.png"
  },
  {
    id: 52,
    title: "Morning Star",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "Affinity",
    desc: "Based of the The Fallen Angel by Alexandre Cabanel.",
    image: "OTRB/Lucifer Redraw.png"
  },
  {
    id: 53,
    title: "Phenelope Cyclidine",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "Affinity",
    desc: "Originally a redesign of a pre existing character that we turned into their own thing. They are a side character/not important",
    image: "OTRB/Angel Dust redesign and redesing.png"
  },
  {
    id: 54,
    title: "Baphomet Illustration",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "Affinity",
    desc: "Baphomet is also a redesigned character that became their own thing.",
    image: "OTRB/BaphAd.png"
  },
 
  {
    id: 55,
    title: "Belphegor & Mammon",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "Affinity",
    desc: "Concept art of the then Sin of Sloth and Greed",
    image: "OTRB/Belph and Mammon.png"
  },
  {
    id: 56,
    title: "Paimon Concept Art",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "MS Paint",
    desc: "Concept art of Paimon",
    image: "OTRB/otrb Paimon.png"
  },
  {
    id: 57,
    title: "Demons Concept Arts 1",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "MS Paint",
    desc: "Concept art of the demons Buer, Balam & Amon",
    image: "OTRB/otrb npcs buer balam amon.png"
  },
  {
    id: 58,
    title: "Demons Concept Arts 2",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "MS Paint",
    desc: "Concept art of Amduscias & Caim",
    image: "OTRB/OTRB npcs Amdu Caim.png"
  },
  {
    id: 59,
    title: "Demons Concept Arts 3",
    project: "otrb",
    projectLabel: "Over The Rainbow Bridge",
    tools: "MS Paint",
    desc: "Concept art of Stolas & Furfur",
    image: "OTRB/OTRB npcs Stolas Furfur.png"
  }
];

let activeProject = "general";

const galleryGrid = document.getElementById("galleryGrid");
const projectHeading = document.getElementById("projectHeading");
const projectSubtitle = document.getElementById("projectSubtitle");
const lightbox = document.getElementById("lightbox");

// Render Artworks by Selected Project
function renderGallery() {
  const filtered = ARTWORKS.filter((art) => art.project === activeProject);

  const info = PROJECTS[activeProject] || PROJECTS.aquatica;
  projectHeading.textContent = info.title;
  projectSubtitle.textContent = info.subtitle;

  galleryGrid.innerHTML = filtered
    .map(
      (art) => `
      <article class="art-card" tabindex="0" data-id="${art.id}">
        <div class="art-thumb" style="background: url('${art.image}') center/cover no-repeat;"></div>
        <div class="art-info">
          <h3>${art.title}</h3>
          <span class="tag">${art.projectLabel}</span>
        </div>
      </article>
    `
    )
    .join("");
}

// Open Lightbox Modal
function openLightbox(id) {
  const art = ARTWORKS.find((item) => item.id === Number(id));
  if (!art) {
    console.error("Artwork not found for ID:", id);
    return;
  }

  document.getElementById("lbTitle").textContent = art.title;
  document.getElementById("lbArtwork").style.backgroundImage = `url('${art.image}')`;
  document.getElementById("lbProject").textContent = art.projectLabel;
  document.getElementById("lbDesc").textContent = art.desc;
  document.getElementById("lbTools").textContent = art.tools;

  // Unhide the lightbox
  lightbox.hidden = false;
}

// Gallery Click & Keyboard Events
galleryGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".art-card");
  if (card) {
    openLightbox(card.dataset.id);
  }
});

galleryGrid.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const card = e.target.closest(".art-card");
    if (card) {
      openLightbox(card.dataset.id);
    }
  }
});

// Close Lightbox Events
document.getElementById("lbClose").addEventListener("click", () => {
  lightbox.hidden = true;
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.hidden = true;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) {
    lightbox.hidden = true;
  }
});

// Project Filtering
document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".project-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeProject = btn.dataset.project;

    // Ensure Gallery tab is active when clicking a project
    document.querySelectorAll(".nav-tabs .gel-btn").forEach((t) => t.classList.remove("active"));
    document.querySelector('[data-view="gallery"]').classList.add("active");
    document.querySelectorAll(".view").forEach((view) => (view.hidden = true));
    document.getElementById("view-gallery").hidden = false;

    renderGallery();
  });
});

// Navigation Tabs (Gallery / About / Socials)
document.querySelectorAll(".nav-tabs .gel-btn").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".nav-tabs .gel-btn").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".view").forEach((view) => (view.hidden = true));
    document.getElementById(`view-${tab.dataset.view}`).hidden = false;
  });
});

// Light Mode / Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const modeIcon = document.getElementById("modeIcon");
const modeLabel = document.getElementById("modeLabel");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-pressed", isDark);
  modeIcon.textContent = isDark ? "☀️" : "🌙";
  modeLabel.textContent = isDark ? "Sun Time" : "Moon Time";
  localStorage.setItem("aero-theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Load saved theme preference
const savedTheme = localStorage.getItem("aero-theme");
if (savedTheme) applyTheme(savedTheme);

// Initial Render
renderGallery();