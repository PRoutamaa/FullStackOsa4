const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 8,
    },
    {
        title: 'Go To Statement Considered Helpful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Helpful.html',
        likes: 7,
      },
      {
        title: 'Go To Statement Considered Useful',
        author: 'Edgar W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Useful.html',
        likes: 15,
      },
      {
        title: 'Go To Statement Considered Sinful',
        author: 'Edgar W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Useful.html',
        likes: 16,
      },
      {
        title: 'Go To Statement Considered full',
        author: 'Edgar W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Useful.html',
        likes: 18,
      }
      
  ] 

const nonExistingId = async () => {
  const blog = new Blog({ content: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb
}