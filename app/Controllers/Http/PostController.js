'use strict'

const Post = use("App/Models/Post");

class PostController {

  async create ({ request, response }){
    const data = request.only(['title', 'body']);

    const posts = await Post.create(data);

    return response.send(posts);
  }

  async update({ params, request, response }){
    const post = await Post.findOrFail(params.id);
    const data = request.only(['title', 'body']);

    post.merge(data);
    await post.save();

    return response.send(post);
  }

  async excluir({ params, request, response }){
    try {
      const post = await Post.findOrFail(params.id);

      await post.delete();

      return response.json({ message: "deletado com sucesso!" })
    } catch (error) {
      console.log(error);
      return response.send({ message: "algo de errado"})
    }
  }

  async index({ response, request }){
    try {
      const posts = await Post.all();

      return response.send(posts);
    } catch (error) {
      console.log(error);
      return response.send({ message: "Algo errado!!"})
    }
  }

}

module.exports = PostController
