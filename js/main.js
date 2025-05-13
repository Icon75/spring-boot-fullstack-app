// Seleziono il form
const form = document.getElementById('iscrittoForm');

// Listener al submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita il refresh della pagina

    // Recupero i dati dal form
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;

    // Creo un oggetto con i dati da inviare
    const iscritto = {
        nome: nome,
        cognome: cognome,
        email: email
    };

    // Eseguo la chiamata POST
    fetch('http://localhost:8080/api/iscritto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(iscritto)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Iscritto salvato con ID: ${data.id}`);
        // Pulisco i campi dopo il salvataggio
        form.reset();
    })
    .catch(error => {
        console.error('Errore nel salvataggio:', error);
    });
});
