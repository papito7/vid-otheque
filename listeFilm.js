class Film {
    constructor(titre, realisateur, duree_totale, duree_vision_cour, court_description, vu_a_100) {
      this.titre = titre;
      this.realisateur = realisateur;
      this.duree_totale = duree_totale;
      this.duree_vision_cour = duree_vision_cour;
      this.court_description = court_description;
      this.vu_a_100 = vu_a_100;
    }
  
    // Méthode pour calculer le pourcentage de visionnage du film
    calculerPourcentageVisionnage() {
      const dureeTotaleEnMinutes = this.convertirHeureEnMinutes(this.duree_totale);
      const dureeVisionCourEnMinutes = this.convertirHeureEnMinutes(this.duree_vision_cour);
      return Math.round((dureeVisionCourEnMinutes / dureeTotaleEnMinutes) * 100);
    }
  
    // Méthode pour convertir un temps en format hh:mm en minutes
    convertirHeureEnMinutes(heure) {
      const heuresMinutes = heure.split('h');
      const heuresEnMinutes = parseInt(heuresMinutes[0]) * 60;
      const minutes = parseInt(heuresMinutes[1]);
      return heuresEnMinutes + minutes;
    }
  }
  
  const films = [
    new Film(
      "les 4 fanstatique", 
      "Josh Trank", 
      "1h40 mn", 
      "1h", 
      "C'est super ce film vraiment le mieulleure de son temps",
      true
    ),
  
    new Film(
      "SAGE HOMME", 
      "Jennifer Devoldère", 
      "1h40 mn", 
      "45 mn", 
      "Après avoir raté le concours d’entrée en médecine, Léopold intègre par défaut l’école des sage-femmes en cachant la vérité à son entourage.",
      false
    ),
  
    new Film(
      "Alibi", 
      "Philippe Lacheau", 
      "1h28 mn", 
      "36 mn", 
      "Après avoir fermé son agence Alibi.com et promis à Flo qu'il ne lui mentirait plus jamais, la nouvelle vie de Greg est devenue tranquille, trop tranquille.",
      false
    ),
    
    new Film(
      "John Wick : Chapitre 4",
      "Chad Stahelski",
      "2h50 mn",
      "110mn",
      "John Wick découvre un moyen de vaincre l’organisation criminelle connue sous le nom de la Grande Table.",
      false
    ),
  
    new Film(
      "Creed 3",
      "Michael B. Jordan",
      "1h50 mn",
      "10mn",
      "Idole de la boxe et entouré de sa famille, Adonis Creed n’a plus rien à prouver. Jusqu’au jour où son ami d’enfance, Damian, prodige de la boxe lui aussi, refait surface.",
      true
    ),
  
    new Film(
      "ANT-MAN ET LA GUÊPE : QUANTUMANIA",
      "Peyton Reed",
      "2h00 mn",
      "10mn",
      "Une nouvelle aventure attend Scott Lang et Hope van Dyne dans leur vie de couple et de super-héros Tout va pour le héros")];
  