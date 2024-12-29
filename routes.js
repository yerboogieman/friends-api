const express = require('express');
const router = express.Router();

const friends = {};

// Define routes
router.get('/friends', (req, res) => {

   let friendsToDisplay = [];

   for (let key in friends) {
      const friend = friends[key];
      friendsToDisplay.push(friend);
   }

   res.json(friendsToDisplay);
});

router.get('/friends/:id', (req, res) => {
   const id = req.params.id;
   const friend = friends[id];
   res.json(friend);
});

router.post('/friends', (req, res) => {
   const newFriend = req.body;
   const id = Object.keys(friends).length + 1;
   newFriend.id = id;
   friends[id] = newFriend;
   res.send('Create a new friend');
});

router.put('/friends/:id', (req, res) => {
   const id = req.params.id;
   const friend = req.body;
   friends[id] = friend;
   res.send(`Update friend ${id}`);
});

router.delete('/friends/:id', (req, res) => {
   const id = req.params.id;
   delete friends[id];
   res.send(`Deleted friend ${id}`);
});

module.exports = router;