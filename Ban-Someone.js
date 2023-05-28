document.addEventListener('DOMContentLoaded', function() {
  // Controleer of de UserName in localStorage overeenkomt met de vereiste waarde
  if (localStorage.getItem('UserName') === '[Verbannen Gebruikersnaam]') {
    // Maak een nieuw h1-element aan
    var bannedMessage = document.createElement('h1');
    bannedMessage.textContent = 'Je bent verbannen';

    // Leeg de body van de pagina
    document.body.innerHTML = '';

    // Voeg het h1-element toe aan de body van de pagina
    document.body.appendChild(bannedMessage);
  }
});
