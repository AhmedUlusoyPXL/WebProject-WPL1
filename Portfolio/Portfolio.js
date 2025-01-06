
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toonOpdracht() {
    let select = document.getElementById('opdrachtSelect');
    let keuze = select.value;
    let opdrachten = document.getElementsByClassName('opdracht');

    for (let i = 0; i < opdrachten.length; i++) {
        opdrachten[i].style.display = 'none';
    }

    document.getElementById(keuze).style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
    toonOpdracht();
});

