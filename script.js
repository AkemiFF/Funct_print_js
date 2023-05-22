

function imprimerPage() {
    window.print();
}

function downloadAsPDF() {
    // Masquer les éléments non nécessaires pour l'impression
    // var elementsToHide = document.querySelectorAll('.blog-header, .nav-scroller, .p-4, .col-md-8, .col-md-4, .p-4, .blog-footer');
    // elementsToHide.forEach(function (element) {
    //     element.style.display = 'none';
    // });

    // Ajouter une classe pour réduire la taille de police pour l'impression
    // document.body.classList.add('print-mode');

    // Appeler window.print() pour afficher l'aperçu d'impression
    window.print();

    // Rétablir les éléments masqués et la taille de police après l'impression
    // elementsToHide.forEach(function (element) {
    //     element.style.display = '';
    // });
    // document.body.classList.remove('print-mode');
}

// Appeler la fonction pour télécharger en PDF lorsque l'utilisateur clique sur un bouton ou un lien
var downloadButton = document.getElementById('download-button'); // Remplacez "download-button" par l'ID de votre bouton de téléchargement
downloadButton.addEventListener('click', downloadAsPDF);
