const express = require('express');
const app = express();
const PORT = 8080;
app.use('/', express.static('public'));
app.use(express.json());
// const knex = require('../knex');
//CORSエラーの解消
const cors = require('cors');
const config = require('./knexfile');
const knex = require('knex')(config);

app.use(
  cors({
    origin: 'http://localhost:5173', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

const WORK_TABLE = 'work';

app.get('/api', async (req, res) => {
  const workSamaple = await knex.select().from(WORK_TABLE);
  res.send(workSamaple);
});

app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
  console.log('http://localhost:8080');
});
