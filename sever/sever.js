const express = require('express');
const app = express();
const PORT = 8080;
app.use('/', express.static('public'));
app.use(express.json());

const config = require('./knexfile');
const knex = require('knex')(config);

// CORSエラーの解消;
const cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:5173', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

const WORK_TABLE = 'work';

app.get('/api', async (req, res) => {
  console.log('GETリクエスト');
  const workSamaple = await knex.select().from(WORK_TABLE);
  res.send(workSamaple);
});

app.put('/api', async (req, res) => {
  console.log('PUTリクエスト');
  await knex(WORK_TABLE).insert(req.body);
  res.status(200).end();
});

app.listen(PORT, () => {
  console.log('http://localhost:5173');
});
