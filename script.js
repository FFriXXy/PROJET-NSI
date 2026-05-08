// On attend que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', () => {

    // On ajoute la classe fade-up à tous les éléments qu'on veut animer
    const elementsAAnimer = document.querySelectorAll('.card, .step, .hero, .features h2, .steps h2, .grille, .features-equipe');
    elementsAAnimer.forEach(el => el.classList.add('fade-up'));

    // IntersectionObserver : il "surveille" quand un élément entre dans l'écran
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {       // si l'élément est visible à l'écran
                entry.target.classList.add('visible');  // on ajoute la classe visible
            }
        });
    }, { threshold: 0.1 }); // se déclenche quand 10% de l'élément est visible

    // On applique l'observer à chaque élément
    elementsAAnimer.forEach(el => observer.observe(el));

//Le bouton pour les mobiles
const menubar = document.querySelector('.nav-links')
const hamburger = document.querySelector('.hamburger')

function updateNavbar() {
    if (window.innerWidth <= 768) {     // Si la taille de l'écran est inférieure ou égale a 768px
        menubar.style.display = 'none'  // mobile : on cache les liens
        hamburger.style.display = 'block' // mobile : on montre le hamburger
    } else {
        menubar.style.display = 'flex'  // desktop : on montre les liens
        hamburger.style.display = 'none' // desktop : on cache le hamburger
    }
}

// on appelle la fonction au chargement
updateNavbar()

// on rappelle la fonction à chaque redimensionnement de la fenêtre
window.addEventListener('resize', updateNavbar)

hamburger.addEventListener('click', function() {
    if (menubar.style.display === 'none') {
        menubar.style.display = 'flex'
        menubar.style.flexDirection = 'column'
    } else {
        menubar.style.display = 'none'
    }
})

// === BOUTON RETOUR EN HAUT ===
const scrollTopBtn = document.getElementById('scrollTop')

// Apparaît quand on scroll de plus de 300px
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible')
    } else {
        scrollTopBtn.classList.remove('visible')
    }
})

// Remonte en haut au clic
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // smooth = animation douce
})

// === INDICATEUR PAGE ACTIVE ===
// Récupère l'URL de la page actuelle
const pageCourante = window.location.pathname.split('/').pop()

// Pour chaque lien de la navbar, si son href correspond à la page actuelle
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(lien => {
    if (lien.getAttribute('href') === pageCourante) {
        lien.classList.add('nav-active')
    }
})

// Cela m'a permis de crée le sudoku plus rapidement et facilement (cela m'a évité de mettre 81 balises input dans le html)
    for(let i=0;i<81;i++){
        const input = document.createElement('input')
        input.type = 'number'
        input.min = 1
        input.max = 9
        document.querySelector('.grille').appendChild(input)   

    }

    function estValide(grille,ligne,colonne,valeur){
        if (grille[ligne].includes(valeur)){
            return false
        }
       if (grille[colonne].includes(valeur)){
            return false
    }
        let blocLigne = (ligne)
}
});

