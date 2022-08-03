const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 
}

const app = express();
const port = 3000;

app.use(cors(corsOptions));



const post = {
  content: 'mock post contend :D',
  title: 'a title',
  author: 'an author',
  time: `${new Date()}`,
  thumbsUp: 0, 
  thumbsDown: 0
};

const result = [];
for (let i = 0; i < 100; i++){
  result.push({...post});
}



app.get('/data', (req, res) => {
  res.send(JSON.stringify(result))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});