class Videotheque {
    constructor(titre, realisateur, duree_totale, duree_vision_cour, court_description) {
      this.titre = titre;
      this.realisateur = realisateur;
      this.duree_totale = duree_totale;
      this.duree_vision_cour = duree_vision_cour;
      this.court_description = court_description;
      this.pourcentage_visionne = (duree_vision_cour / duree_totale) * 100;
    }
  
    afficherFilm() {
      const heures_totales = Math.floor(this.duree_totale / 60);
      const minutes_totales = this.duree_totale % 60;
      const heures_vues = Math.floor(this.duree_vision_cour / 60);
      const minutes_vues = this.duree_vision_cour % 60;
  
      let icone = "";
      if (this.pourcentage_visionne === 100) {
        icone = '<i class="fas fa-check-circle"></i>';
      } else {
        icone = '<i class="fas fa-question-circle"></i>';
      }
  
      console.log(
        `${this.titre} - ${this.realisateur} (${heures_totales}h${minutes_totales} - ${heures_vues}h${minutes_vues}) ${icone}`
      );
    }
  }
  
  const videotheque = [
    new Videotheque(
      "les 4 fanstatique",
      "Josh Trank",
      100,
      60,
      "C'est super ce film vraiment le mieulleure de son temps"
    ),
    new Videotheque(
      "SAGE HOMME",
      "Jennifer Devoldère",
      100,
      45,
      "Après avoir raté le concours d’entrée en médecine, Léopold intègre par défaut l’école des sage-femmes en cachant la vérité à son entourage."
    ),
    new Videotheque(
      "Alibi",
      "Philippe Lacheau",
      88,
      36,
      "Après avoir fermé son agence Alibi.com et promis à Flo qu'il ne lui mentirait plus jamais, la nouvelle vie de Greg est devenue tranquille")];
  