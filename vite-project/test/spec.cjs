const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { setupServer } = require('../../sever/sever');

const server = setupServer();
let request;
describe('solo_MVP test', () => {
  beforeEach(() => {
    request = chai.request(server);
  });

  it('全リストを返してください', () => {
    request.get('/api').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(JSON.parse(res.text).length).to.equal(2);
      expect(err).to.be.null;
    });
  });
});
