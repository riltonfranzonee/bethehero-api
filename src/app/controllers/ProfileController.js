import connection from '../../database/connection';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
