const Post = require('./db/Post');

const resolvers = {
  Query: {
    getAllPosts: async () => {
      try {
        const result = await Post.findAll();
        return result;
      } catch (error) {
        throw error;
      }
    },
    getPost: async (_, { _id }) => {
      try {
        const result = await Post.findByPk(_id);
        if (!result) {
          throw new Error('Post does not exist!');
        }
        return result;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createPost: async (_, { title, content }) => {
      try {
        const result = await Post.create({ title, content });
        return result;
      } catch (error) {
        throw error;
      }
    },
    updatePost: async (_, { _id, title, content }) => {
      try {
        const post = await Post.findByPk(_id);
        if (!post) {
          throw new Error('Post does not exist!');
        }
        post.title = title;
        post.content = content;
        await post.save();
        return post;
      } catch (error) {
        throw error;
      }
    },
    deletePost: async (_, { _id }) => {
      try {
        const result = await Post.destroy({ where: { id: _id } });
        return result === 1;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
