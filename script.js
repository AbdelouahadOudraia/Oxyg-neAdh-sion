// Gestion des champs conditionnels selon l'état civil
document.addEventListener('DOMContentLoaded', function() {
    const etatCivilRadios = document.querySelectorAll('input[name="etat_civil"]');
    const champsConditionnels = document.getElementById('champsConditionnels');
    
    function updateChampsConditionnels() {
        const selectedEtatCivil = document.querySelector('input[name="etat_civil"]:checked');
        
        if (!selectedEtatCivil) {
            champsConditionnels.innerHTML = '';
            return;
        }
        
        let html = '';
        
        switch(selectedEtatCivil.value) {
            case 'mariee':
                html = `
                    <div class="form-row">
                        <div class="form-column">
                            <label for="nb_enfants">Nombre d'enfants :</label>
                            <input type="number" id="nb_enfants" name="nb_enfants" min="0">
                        </div>
                        <div class="form-column">
                            <label for="annees_mariage">Nombre d'années de mariage :</label>
                            <input type="number" id="annees_mariage" name="annees_mariage" min="0">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-column">
                            <label for="travail_mari">Travail du mari :</label>
                            <input type="text" id="travail_mari" name="travail_mari">
                        </div>
                    </div>
                `;
                break;
                
            case 'celibataire':
                html = `
                    <div class="form-row">
                        <div class="form-column">
                            <label for="profession_pere">Profession du père :</label>
                            <input type="text" id="profession_pere" name="profession_pere">
                        </div>
                    </div>
                `;
                break;
                
            case 'divorcee':
                html = `
                    <div class="form-row">
                        <div class="form-column">
                            <label for="raison_divorce">Pourquoi divorcée :</label>
                            <textarea id="raison_divorce" name="raison_divorce" rows="3"></textarea>
                        </div>
                    </div>
                `;
                break;
                
            case 'veuve':
                html = `
                    <div class="form-row">
                        <div class="form-column">
                            <label for="problemes_veuve">Quels sont les problèmes rencontrés :</label>
                            <textarea id="problemes_veuve" name="problemes_veuve" rows="3"></textarea>
                        </div>
                    </div>
                `;
                break;
        }
        
        champsConditionnels.innerHTML = html;
    }
    
    etatCivilRadios.forEach(radio => {
        radio.addEventListener('change', updateChampsConditionnels);
    });
    
    // Gestion de la soumission du formulaire
    document.getElementById('adhesionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simulation d'envoi (à remplacer par une requête AJAX)
        console.log('Données du formulaire:', data);
        
        // Affichage message de succès
        alert('Votre demande d\'adhésion a été soumise avec succès ! Nous vous contacterons bientôt.');
        
        // Réinitialisation du formulaire
        this.reset();
        champsConditionnels.innerHTML = '';
    });
    
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

