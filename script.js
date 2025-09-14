let ws = new WebSocket("wss://websocket-m24h.onrender.com/:443");
let id = 2233999;

let controllTD = document.querySelector('.controllTD') ;
controllTD.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 
  'slider1': controllTD.value / 100,
  'ID': id
}));
}, false);

ws.addEventListener('open', (event) => {
  console.log('Socket connection open!');
  // alert('Successfully connected to socket server 🎉');
  ws.send('pong');
});

ws.addEventListener('error', (error) => {
    console.error('Error in the connection', error);
    alert('error connecting socket server', error);
});

ws.addEventListener('close', (event) => {
    console.log('Socket connection closed');
    alert('closing socket server');
});
