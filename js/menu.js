// Recupero il riferimento al corpo della tabella
const tableBody = document.getElementById('iscrittiTableBody');

// Funzione per recuperare i dati dal backend
function caricaIscritti() {
    fetch('http://localhost:8080/api/iscritti')
        .then(response => response.json())
        .then(data => {
            // Svuoto il contenuto della tabella prima di ricaricare i dati
            tableBody.innerHTML = '';

            // Popolo la tabella con i dati ricevuti
            data.forEach(iscritto => {
                const row = `
                    <tr id="row-${iscritto.id}">
                        <td>${iscritto.id}</td>
                        <td>${iscritto.nome}</td>
                        <td>${iscritto.cognome}</td>
                        <td>${iscritto.email}</td>
                       <td>
    <button class="btn btn-warning btn-sm" onclick="modificaIscritto(${iscritto.id})">
        Modifica
    </button>
    <button class="btn btn-danger btn-sm" onclick="eliminaIscritto(${iscritto.id})">
        X
    </button>
</td>

                        
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Errore nel caricamento dei dati:', error));
}

// Funzione per eliminare un iscritto
function eliminaIscritto(id) {
    if (confirm("Sei sicuro di voler eliminare questo iscritto?")) {
        fetch(`http://localhost:8080/api/iscritti/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Rimuovo la riga dalla tabella
                document.getElementById(`row-${id}`).remove();
                alert("Iscritto eliminato con successo.");
            } else {
                alert("Errore nell'eliminazione dell'iscritto.");
            }
        })
        .catch(error => {
            console.error('Errore:', error);
            alert("Si è verificato un errore.");
        });
    }
}

// Funzione per aprire un form di modifica
function modificaIscritto(id) {
    // Recupera i dati dell'iscritto
    fetch(`http://localhost:8080/api/iscritti/${id}`)
        .then(response => response.json())
        .then(iscritto => {
            // Chiede i nuovi dati tramite prompt (puoi migliorare con un form)
            const nome = prompt("Modifica Nome:", iscritto.nome);
            const cognome = prompt("Modifica Cognome:", iscritto.cognome);
            const email = prompt("Modifica Email:", iscritto.email);

            // Controlla che i campi non siano vuoti
            if (nome && cognome && email) {
                const updatedIscritto = {
                    nome: nome,
                    cognome: cognome,
                    email: email
                };

                // Esegue la chiamata PUT
                fetch(`http://localhost:8080/api/iscritti/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedIscritto)
                })
                .then(response => {
                    if (response.ok) {
                        alert("Iscritto aggiornato correttamente!");
                        caricaIscritti(); // Ricarica la tabella
                    } else {
                        alert("Errore nell'aggiornamento dell'iscritto.");
                    }
                })
                .catch(error => console.error('Errore:', error));
            }
        })
        .catch(error => console.error('Errore nel recupero dei dati:', error));
}


// Quando la pagina viene caricata, eseguo il fetch
window.onload = caricaIscritti;
