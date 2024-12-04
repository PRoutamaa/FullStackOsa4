const app = require('../app')
const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const Blog = require('../models/blog')

const tester = supertest(app)
describe('Initialize test database', () => {
  beforeEach(async () => {
      await Blog.deleteMany({})
      await Blog.insertMany(helper.initialBlogs)
    })

  describe('Tests for correct blogpost format', () => {
    test('blogsposts are returned as json, and there are five of them', async () => {
      const res = await tester
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        assert.strictEqual(res.body.length, 5)
    })
    
    test('blog id field is formed as "id"', async () => {
      const res = await tester.get('/api/blogs')

      const ids = res.body.map(n => Object.keys(n))    
      ids.forEach(arr => assert(arr.includes("id")))
    })
  })
  describe('Tests for blogpost functionalities', () => {
    test('a valid blog can be added ', async () => {
      const newBlog = {
        title: 'async/await is nearly as difficult as living in modern society',
        author: "Oscar Wetear",
        url: "http://helloworld.com",
        likes: 0
      }
    
      await tester
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    
      const response = await tester.get('/api/blogs')
    
      const titles = response.body.map(r => r.title)
    
      assert.strictEqual(response.body.length, helper.initialBlogs.length + 1)
    
      assert(titles.includes('async/await is nearly as difficult as living in modern society'))
    })

    test('blog entry can be deleted', async () => {
      const blogs = await tester.get('/api/blogs')
      const [id, title] = blogs.body.map(blog => [blog.id, blog.title])[0]
      const initialLength = blogs.body.length

      await tester.delete(`/api/blogs/${id}`)
      const response = await tester.get('/api/blogs')
      const titles  = response.body.map(blog => blog.title)

      assert.strictEqual(response.body.length, initialLength - 1)
      assert(!titles.includes(title))
    })

    test('blog can be added without likes', async () => {
      const newBlog = {
        title: 'async/await is nearly as difficult as living in modern society',
        author: "Oscar Wetear",
        url: "http://helloworld.com"
      }
    
      await tester
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    
      const response = await tester.get('/api/blogs')
      const blog = response.body.filter(n => n.title === newBlog.title)[0]
      assert.strictEqual(blog.likes, 0)
    })

    test('blog can be modified', async () => {
      const blogs = await tester.get('/api/blogs')
      const [id, title, author, url] = blogs.body.map(blog => [blog.id, blog.title, blog.author, blog.url])[0]
      const newBlog = {
        title: title,
        author: author,
        url: url,
        likes: 5555
      }
      await tester.put(`/api/blogs/${id}`).send(newBlog).expect(201)

      const res = await tester.get('/api/blogs')
      const blogList = res.body.map(blog => [blog.id, blog.likes])
      const updatedBlog = blogList.filter(blog => blog[0] === id)[0]

      assert.strictEqual(updatedBlog[1], 5555)
    })
  })
})  
  after(async () => {
    await mongoose.connection.close()
  })