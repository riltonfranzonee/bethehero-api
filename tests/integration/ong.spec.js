import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ong', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'VITAL',
      email: 'vital@help.org',
      whatsapp: '24 97401-9486',
      city: 'Campinas',
      uf: 'SP',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
