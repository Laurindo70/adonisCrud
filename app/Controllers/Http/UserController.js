'use strict'

const User = use('App/Models/User');

class UserController {

  async store({ request, response }){
    const data = request.only([ 'username', 'password', 'email' ]);

    const user = await User.create(data);

    return response.send(user);
  }

  async index({ request, response}){
    const users = await User.all();

    return response.send(users);
  }

  async login({ request, response, auth}){
    try {
      const { email, password } = request.all();

      const token = await auth.attempt(email, password);

      return response.send(token);
    } catch (error) {

    }
  }

}

module.exports = UserController
