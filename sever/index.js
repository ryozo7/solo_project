const setupServer = require('./sever');

const PORT = process.env.PORT || 8080;

setupServer.listen(PORT, () => console.log(`listening on port : ${PORT}`));
