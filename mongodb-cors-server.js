const express = require('express');
const cors_proxy = require('cors-anywhere');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://<johnbernad>:<password123456>@cluster0.ukdiizz.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const cardSchema = new mongoose.Schema({
  gameroomid: Number,
  player1hand: [Number],
  player2hand: [Number],
  player3hand: [Number],
  player4hand: [Number],
  cards: [
    // Define your card schema here, similar to your JSON structure
  ],
});

const CardModel = mongoose.model('Card', cardSchema);

cors_proxy.createServer({
  // ... CORS Anywhere configuration ...
}).listen(8081, 'localhost', () => {
  console.log('CORS Anywhere proxy server running on http://localhost:8081');
});

app.get('/api/cards', async (req, res) => {
  const { gameroomid } = req.query;

  // ... Shuffle and distribute card logic ...

  const cardData = new CardModel({
    gameroomid: 1,
    // player1hand: player1,
    // player2hand: player2,
    // player3hand: player3,
    // player4hand: player4,
    // cards: data, // Your card data here
  });

  try {
    await cardData.save();
    console.log('Card data saved to MongoDB');

    if (gameroomid) {
      const filteredData = await CardModel.find({ gameroomid: parseInt(gameroomid) });
      res.json(filteredData);
    } else {
      const allData = await CardModel.find();
      res.json(allData);
    }
  } catch (error) {
    console.error('Error saving card data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ... Other routes ...

app.listen(port, () => {
  console.log(`REST API server running on http://localhost:${port}`);
});
