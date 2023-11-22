const { setupServer } = require('./sever');
const server = setupServer();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`listening on port : ${PORT}`));
