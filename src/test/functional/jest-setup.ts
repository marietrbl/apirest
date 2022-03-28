import {setupServer} from ''
import supertest from 'supertest';

beforeAll(() => {
  const server = new setupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
