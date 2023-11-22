const setupServer = () => {
  const express = require('express');
  const app = express();
  const PORT = 5173;
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
    try {
      console.log('GETリクエスト');
      const workSamaple = await knex.select().from(WORK_TABLE);
      await res.status(200).send(workSamaple);
    } catch (err) {
      res.status(404).send(err);
    }
  });

  app.put('/api', async (req, res) => {
    try {
      console.log('PUTリクエスト');
      await knex(WORK_TABLE).insert(req.body);
      await res.status(200).end();
    } catch (err) {
      res.status(404).send(err);
    }
  });

  app.listen(PORT, () => {
    console.log('http://localhost:5173');
  });

  return app;
};

module.exports = { setupServer };
