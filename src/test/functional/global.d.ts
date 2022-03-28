declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').supertest<import('supertest').Test>;
  }
}
