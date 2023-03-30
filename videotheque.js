// création de la classe instance pour ma vidéothèque

class Videotheque {
    // On passe par le construteur de la classe
    constructor(Titre, Realisateur, Duree_totale, Duree_vision_cour, Court_description) {
        this.Titre = titre;
        this.Realisateur = Realisateur;
        this.Duree_totale = Duree_totale;
        this.Duree_vision_cour = Duree_vision_cour;
        this.Court_description = Court_description;;
    }
}

// instanciation de mes videotheque dans un tableau
let videotheque = [
    new Videotheque (
        titre = "les 4 fanstatique", 
        Realisateur = "Josh Trank", 
        Duree_totale = "1h40 mn", 
        Duree_vision_cour = "1h", 
        Court_description = "C'est super ce film vraiment le mieulleure de son temps"
    ),

    new Videotheque (
        titre = "SAGE HOMME", 
        Realisateur = "Jennifer Devoldère", 
        Duree_totale = "1h40 mn", 
        Duree_vision_cour = "45 mn", 
        Court_description = "Après avoir raté le concours d’entrée en médecine, Léopold intègre par défaut l’école des sage-femmes en cachant la vérité à son entourage."
    ),

    new Videotheque (
        titre = "Alibi", 
        Realisateur = "Philippe Lacheau", 
        Duree_totale = "1h28 mn", 
        Duree_vision_cour= "36 mn", 
        Court_description = "Après avoir fermé son agence Alibi.com et promis à Flo qu'il ne lui mentirait plus jamais, la nouvelle vie de Greg est devenue tranquille, trop tranquille."
        ),
    
    new Videotheque (
        titre = "John Wick : Chapitre 4",
        Realisateur = "Chad Stahelski",
        Duree_totale = "2h50 mn",
        Duree_vision_cour = "110mn",
        Court_description = "John Wick découvre un moyen de vaincre l’organisation criminelle connue sous le nom de la Grande Table."

    ),

    new Videotheque (
        titre = "Creed 3",
        Realisateur = "Michael B. Jordan",
        Duree_totale = "1h50 mn",
        Duree_vision_cour = "10mn",
        Court_description = "Idole de la boxe et entouré de sa famille, Adonis Creed n’a plus rien à prouver. Jusqu’au jour où son ami d’enfance, Damian, prodige de la boxe lui aussi, refait surface."
    ),

    new Videotheque (
        titre = "ANT-MAN ET LA GUÊPE : QUANTUMANIA",
        Realisateur = "Peyton Reed",
        Duree_totale = "2h00 mn",
        Duree_vision_cour = "10mn",
        Court_description = "Une nouvelle aventure attend Scott Lang et Hope van Dyne dans leur vie de couple et de super-héros Tout va pour le mieux."
    ),
];
/*
// boucle pour afficher les oeuvres dans la console
for (let i = 0; i < videotheque.length; i++) {
    console.log(videotheque[i].titre);
    console.log(videotheque[i].Realisateur);
    console.log(videotheque[i].Duree_totale);
    console.log(videotheque[i].Duree_vision_cour);
    console.log(videotheque[i].Court_description);
    console.log('----------------------');
}*/

// calcule de la durée

/*calculPourcentageVision = () =>
(100 - (this.Duree_vision_cour / this.Duree_totale) * 100).toFixed(0);
console.log(calculPourcentageVision);*/
