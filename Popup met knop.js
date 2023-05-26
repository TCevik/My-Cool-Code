document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('Popup-Clicked')) {
    var popup = document.createElement('div');
    popup.id = 'popup';
    popup.className = 'popup';

    var text = '[TEXT IN POPUP]';
    popup.innerHTML = text;

    var button = document.createElement('button');
    button.innerHTML = '[TEXT IN KNOP]';

    button.addEventListener('click', function() {
      popup.style.display = 'none';

      localStorage.setItem('Popup-Clicked', 'true');
    });

    popup.appendChild(button);

    document.body.appendChild(popup);
  }
});
