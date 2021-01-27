import apiGrowdevers from '../services/growdeverAPI';

class UserController {
  async index(request, response) {
    try {
      const authHeader = request.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowdevers.get('/users', options);

      return response.json(data);
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ error_message: error.response.data.message });
    }
  }

  async store(request, response) {
    try {
      const user = request.body;

      const { data } = await apiGrowdevers.post('/users', user);

      return response.json(data);
    } catch (error) {
      return response
        .status(error.response.status || 400)
        .json({ error_message: error.response.data.message });
    }
  }
}

export default new UserController();
