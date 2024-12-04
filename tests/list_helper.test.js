const { test, describe } = require('node:test')
const assert = require('node:assert')

const listHelper = require('../utils/list_helper')


describe('dummy', () => {
    test('test dummy to return 1', () => {
        assert.strictEqual(listHelper.dummy([]), 1)
    })
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      assert.strictEqual(result, 5)
    })

    const listWithThreeBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f6',
            title: 'Go To Statement Considered Helpful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Helpful.html',
            likes: 7,
            __v: 0
          },
          {
            _id: '5a422aa71b54a676234d17f7',
            title: 'Go To Statement Considered Useful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Useful.html',
            likes: 11,
            __v: 0
          }
      ]

    test('when list has three blogs equals the sum of likes', () => {
        const result = listHelper.totalLikes(listWithThreeBlog)
        assert.strictEqual(result, 23)
    })  
  })

  describe("favoriteBlog", () => {
    const listWithThreeBlog = [
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
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Useful.html',
            likes: 15,
          }
      ]
    test('return the blog with most likes', () => {
        const result = listHelper.favoriteBlog(listWithThreeBlog)
        assert.deepEqual(result, 
            {
                title: 'Go To Statement Considered Useful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Useful.html',
                likes: 15,
            }
        )
    }) 
  })

  describe("mostBlogs", () => {
    const listWithThreeBlog = [
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
          }
          
      ]
    test('return the author with most blogs from list of three', () => {
        const result = listHelper.mostBlogs(listWithThreeBlog)
        assert.deepEqual(result, 
            {
                author: 'Edsger W. Dijkstra',
                blogs: 2     
            }
        )
    })
    const listWithFiveBlog = [
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
      test('return the author with most blogs from list of five', () => {
        const result = listHelper.mostBlogs(listWithFiveBlog)
        assert.deepEqual(result, 
            {
                author: 'Edgar W. Dijkstra',
                blogs: 3     
            }
        )
    })
  })

describe("mostLikes", () => {
    const listWithFiveBlog = [
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
        test('return the author with most likes from list of five', () => {
            const result = listHelper.mostLikes(listWithFiveBlog)
            assert.deepEqual(result, 
                {
                    author: 'Edgar W. Dijkstra',
                    likes: 49     
                }
            )
        })
})  