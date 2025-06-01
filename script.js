const galleryImages = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg'
];

const galleryDiv = document.getElementById('gallery');
galleryImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Photo du lycée";
    img.onclick = () => window.open(src, '_blank');
    galleryDiv.appendChild(img);
});

// Actualités dynamiques
const news = [
    { date: "15 juin 2025", title: "Concours d’éloquence", content: "Le concours annuel d’éloquence aura lieu le 15 juin 2025. Inscrivez-vous auprès de la vie scolaire." },
    { date: "8 juin 2025", title: "Projet environnemental", content: "Les élèves de la section sciences participent à un projet de reforestation locale." },
    { date: "1er juin 2025", title: "Portes ouvertes", content: "Venez découvrir notre établissement lors de la journée portes ouvertes !" }
];
const newsList = document.getElementById('news-list');
news.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.date} - ${item.title}</strong><br>${item.content}`;
    newsList.appendChild(li);
});

// Agenda dynamique
const agendaEvents = [
    { date: "2025-06-15", event: "Concours d’éloquence" },
    { date: "2025-06-20", event: "Réunion parents-professeurs" },
    { date: "2025-07-01", event: "Début des vacances d'été" }
];
const agendaList = document.getElementById('agenda-list');
agendaEvents.forEach(ev => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${ev.date}</strong> : ${ev.event}`;
    agendaList.appendChild(li);
});

// Blog dynamique
const blogPosts = [
    {
        title: "Résultats du concours d’éloquence",
        date: "2025-06-16",
        content: "Félicitations à tous les participants et bravo à notre lauréat !"
    },
    {
        title: "Nouveau partenariat environnemental",
        date: "2025-06-10",
        content: "Le lycée s’engage avec l’association Planète Verte pour la reforestation."
    }
];
const blogDiv = document.getElementById('blog-posts');
blogPosts.forEach(post => {
    const article = document.createElement('article');
    article.innerHTML = `<h4>${post.title}</h4><small>${post.date}</small><p>${post.content}</p>`;
    blogDiv.appendChild(article);
});

// Formulaire de contact interactif
document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Merci pour votre message ! Nous vous répondrons rapidement.";
    this.reset();
};

// Espace élèves (connexion simple)
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const login = document.getElementById('login').value;
    const pwd = document.getElementById('pwd').value;
    if(login === "eleve" && pwd === "1234") { // à remplacer par une vraie gestion sécurisée !
        document.getElementById('loginMsg').textContent = "";
        document.getElementById('loginForm').style.display = "none";
        document.getElementById('espacePrive').style.display = "block";
    } else {
        document.getElementById('loginMsg').textContent = "Identifiants incorrects.";
    }
};
function logout() {
    document.getElementById('espacePrive').style.display = "none";
    document.getElementById('loginForm').style.display = "block";
}
