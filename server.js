const express = require('express')
const server = express()
const Routes = require('./api/characters-model')
server.use(express.json())

server.get('/',(req,res)=>{
    res.status(200).json({data: 'Good API'})
})

server.get('/characters', (req, res) => {
    Routes.find()
      .then((resp) => {
        res.status(200).json({ Data: resp });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
});
server.post('/characters', (req, res) => {
    const character = req.body;
    Routes.insert(character)
      .then((resp) => {
        res.status(201).json({ Data: resp });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
});
server.delete('/characters/:id', (req, res) => {
    const id = req.params.id;
    Routes.remove(id)
      .then((res) => {
        res.status(201).json({ Data: res });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
  });

module.exports = server 