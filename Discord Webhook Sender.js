var xhr = new XMLHttpRequest();
var url = '[WEBHOOK]';
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

var message = {
  content: '[BERICHT]'
 };

xhr.send(JSON.stringify(message));
