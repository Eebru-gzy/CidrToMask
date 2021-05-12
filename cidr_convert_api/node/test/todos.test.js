import app from '../server';
import chai from 'chai';
import request from 'supertest';

const expect = chai.expect;

describe('Todos list API Integration Tests', function() {
  describe('#GET /_health/', function() {
    it('should get server health', function(done) {
      request(app).get('/_health/')
        .end((err, res)=> {
          expect(200).to.equal(res.status);
          expect(res.body).to.be.an('string');
          expect(res.body).to.have.string('OK');
          done();
        });
    });
  });
});
