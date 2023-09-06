const express = require('express');
const cors_proxy = require('cors-anywhere');

const app = express();
const port = 3000; // Use any port number you prefer for the REST API server
let roomId = 1111;
const gameRooms = {};
// Create the CORS Anywhere server to handle CORS headers and proxy requests to the API server
cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(8081, 'localhost', () => {
  console.log('CORS Anywhere proxy server running on http://localhost:8081');
});

// Sample data for the API


const cards = [

  { "id": 1, "name": "cardDiamonds_A" },
  { "id": 2, "name": "cardDiamonds_2" },
  { "id": 3, "name": "cardDiamonds_3" },
  { "id": 4, "name": "cardDiamonds_4" },
  { "id": 5, "name": "cardDiamonds_5" },
  { "id": 6, "name": "cardDiamonds_6" },
  { "id": 7, "name": "cardDiamonds_7" },
  { "id": 8, "name": "cardDiamonds_8" },
  { "id": 9, "name": "cardDiamonds_9" },
  { "id": 10, "name": "cardDiamonds_10" },
  { "id": 11, "name": "cardDiamonds_J" },
  { "id": 12, "name": "cardDiamonds_Q" },
  { "id": 13, "name": "cardDiamonds_K" },

  { "id": 14, "name": "cardHearts_A" },
  { "id": 15, "name": "cardHearts_2" },
  { "id": 16, "name": "cardHearts_3" },
  { "id": 17, "name": "cardHearts_4" },
  { "id": 18, "name": "cardHearts_5" },
  { "id": 19, "name": "cardHearts_6" },
  { "id": 20, "name": "cardHearts_7" },
  { "id": 21, "name": "cardHearts_8" },
  { "id": 22, "name": "cardHearts_9" },
  { "id": 23, "name": "cardHearts_10" },
  { "id": 24, "name": "cardHearts_J" },
  { "id": 25, "name": "cardHearts_Q" },
  { "id": 26, "name": "cardHearts_K" },

  { "id": 27, "name": "cardClubs_A" },
  { "id": 28, "name": "cardClubs_2" },
  { "id": 29, "name": "cardClubs_3" },
  { "id": 30, "name": "cardClubs_4" },
  { "id": 31, "name": "cardClubs_5" },
  { "id": 32, "name": "cardClubs_6" },
  { "id": 33, "name": "cardClubs_7" },
  { "id": 34, "name": "cardClubs_8" },
  { "id": 35, "name": "cardClubs_9" },
  { "id": 36, "name": "cardClubs_10" },
  { "id": 37, "name": "cardClubs_J" },
  { "id": 38, "name": "cardClubs_Q" },
  { "id": 39, "name": "cardClubs_K" },

  { "id": 40, "name": "cardSpades_A" },
  { "id": 41, "name": "cardSpades_2" },
  { "id": 42, "name": "cardSpades_3" },
  { "id": 43, "name": "cardSpades_4" },
  { "id": 44, "name": "cardSpades_5" },
  { "id": 45, "name": "cardSpades_6" },
  { "id": 46, "name": "cardSpades_7" },
  { "id": 47, "name": "cardSpades_8" },
  { "id": 48, "name": "cardSpades_9" },
  { "id": 49, "name": "cardSpades_10" },
  { "id": 50, "name": "cardSpades_J" },
  { "id": 51, "name": "cardSpades_Q" },
  { "id": 52, "name": "cardSpades_K" }

];

const path = require('path'); // Import the path module

app.use(express.static(path.join(__dirname)));

app.get('/Support', (req, res) => {
  res.sendFile(path.join(__dirname, 'Support.html'));
});

app.get('/Privacypolicy', (req, res) => {
  res.sendFile(path.join(__dirname, 'Privacypolicy.html'));
});

app.get('/Marketing', (req, res) => {
  res.sendFile(path.join(__dirname, 'Marketing.html'));
});

app.get('/CV', (req, res) => {
  res.sendFile(path.join(__dirname, 'CV.html'));
});



// Update the /api/cards endpoint to accept a query parameter
app.get('/api/cards', (req, res) => {

  

  const { gameroomid } = req.query;


 



  if (gameroomid) {
    const filteredData = data.filter((item) => item.gameroomid == gameroomid);
    res.json(filteredData);
  } else {
    res.json(data);
  }
});

// REST API routes
app.get('/api/users', (req, res) => {
  res.json(cards);
});


app.get('/api/create-room', (req, res) => {


 const totalCards = 52;
  const players = 4;
  
// Create an array of all possible card indexes (1 to 52)
const allIndexes = Array.from({ length: totalCards }, (_, index) => index + 1);

  // Shuffle the array to create a random order
  const shuffledIndexes = allIndexes.sort(() => Math.random() - 0.5);
  
  // Divide the shuffled indexes among players
  const playerIndexes = Array.from({ length: players }, (_, player) => []);
  for (let i = 0; i < totalCards; i++) {
    const currentPlayer = i % players;
    playerIndexes[currentPlayer].push(shuffledIndexes[i]);
  }
  
  // Save each array in separate variables
  const player1 = playerIndexes[0];
  const player2 = playerIndexes[1];
  const player3 = playerIndexes[2];
  const player4 = playerIndexes[3];

const data = [
  {
    gameroomid: roomId,
    player1hand: player1,
    player2hand: player2,
    player3hand: player3,
    player4hand: player4,

  },
  
  // ... other player objects ...
];


  let gameroomid = req.query.gameroomid;
 if (gameroomid) {
    const filteredData = {
      gameroomid: Number(gameroomid),
      data : gameRooms[gameroomid] || [],

    };
    res.json([filteredData]);
  } else {


// console.log(gameRooms)
  // console.log(roomId)


  gameRooms[roomId] = data;



  
  

// Generate and retrieve unique combinations

// console.log("Player 1:", player1);
// console.log("Player 2:", player2);
// console.log("Player 3:", player3);
// console.log("Player 4:", player4);






  res.json(data);
  console.log("player1's hand to be deleted",gameRooms[roomId][0].player1hand)
  delete gameRooms[roomId][0].player1hand;

  roomId += 1; // Increment room id 

  console.log("created game room:", roomId);

}

});

app.get('/api/join-room', (req, res) => {
  const { gameroomid } = req.query;
  console.log("Reached")

  if (gameroomid && gameRooms[gameroomid]) {
    res.json(gameRooms[gameroomid]);
  console.log(gameRooms[gameroomid][0].player2hand)

  if (gameRooms[gameroomid][0].player2hand!== undefined) {
  delete gameRooms[gameroomid][0].player2hand;
  }
  else{
    if (gameRooms[gameroomid][0].player3hand!== undefined) {
  delete gameRooms[gameroomid][0].player3hand;
  }
  else{
      if (gameRooms[gameroomid][0].player4hand!== undefined) {
  delete gameRooms[gameroomid][0].player4hand;
  }
  }

  }


  } else {
    res.status(404).json({ error: 'Room not found' });
  }
});


// app.get('/api/join-room/:gameroomid', (req, res) => {
//   const gameroomid = parseInt(req.params.gameroomid);
//   const roomData = gameRooms[gameroomid];
//   console.log("Reached")
//   if (roomData) {
//     res.json(roomData);
//   } else {
//     res.status(404).json({ error: 'Room not found' });
//   }
// });

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = data.find((user) => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Start the REST API server
app.listen(port, () => {
  console.log(`REST API server running on http://localhost:${port}`);
});
