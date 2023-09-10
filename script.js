// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loadFactBtn = document.getElementById('loadFactBtn');
    const factText = document.getElementById('factText');
    const dogImage = document.getElementById('dogImage');

    loadFactBtn.addEventListener('click', () => {
        // URL für die API, um einen Hundefakt abzurufen
       const factApiUrl = 'https://dog-api.kinduff.com/api/facts?raw=true';

        // API-URL für zufälliges Hundebild
        const imageUrlApiUrl = 'https://dog.ceo/api/breeds/image/random';

        // Mit Fetch die Hundefakten von der API abrufen
       fetch(factApiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkfehler beim Abrufen der Hundefakten');
                }
                return response.text(); // Als Text abrufen
            })
            .then(data => {
                // Den Hundefakt aus der Antwort verwenden
                const dogFact = data;

                // Den Hundefakt im HTML-Element anzeigen
                factText.textContent = dogFact;

                // Hier kannst du weitere Aktionen für die Hundefakten ausführen, falls erforderlich
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Hundefakten:', error);
                // Hier kannst du Fehlerbehandlung implementieren, z.B. eine Meldung anzeigen
            });  


            
        // Fetch-Anfrage an die API für das Bild
        fetch(imageUrlApiUrl)
            .then(response => {
                // Überprüfen, ob die Antwort erfolgreich ist
                if (!response.ok) {
                    throw new Error('Fehler beim Abrufen des Bildes');
                }
                // Antwort in JSON umwandeln
                return response.json();
            })
            .then(data => {
                // Bild-URL aus der API-Antwort extrahieren
                const imageUrl = data.message;

                // Das Bild in das IMG-Element einfügen
                dogImage.src = imageUrl;
                dogImage.alt = 'Hundebild';
            })
            .catch(error => {
                console.error('Fehler: ', error);
                // Hier kannst du eine Fehlermeldung anzeigen, wenn etwas schief geht.
            });
    });
});    
