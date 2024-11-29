const blog = require("../models/blog")

const dummy = (blogs) => {
    return 1
  }
  


 const totalLikes = (blogs) => {
    let result = 0
    blogs.forEach(item => result += item.likes)
    return result
 } 

const favoriteBlog = (blogs) => {
    let result = {}
    for (let i = 0; i < blogs.length; i++) {
        if (!result) {
            blogs[i]
        } else {
            result = result.likes >= blogs[i].likes
                     ? result
                     :blogs[i]   
        }
    }
    return result
}

const mostBlogs = (blogs) => {
    let author = ""
    let noBlogs = 0
    for (let i = 0; i < blogs.length; i++) {
        if (!author) {
            author = blogs[i].author
            noBlogs = blogs.filter(blog => blog.author === author).length
        } else {
            const curAuthor = blogs[i].author
            const curNoBlogs = blogs.filter(blog => blog.author === curAuthor).length
            if (curNoBlogs > noBlogs) {
                author = curAuthor
                noBlogs = curNoBlogs
            }
        }
    }
    return { author: author, blogs: noBlogs}
}

const mostLikes = (blogs) => {
    let author = ""
    let likes = 0
    for (let i = 0; i < blogs.length; i++) {
        if (!author) {
            author = blogs[i].author
            likes = blogs.filter(blog => blog.author === author)
                    .reduce((cur, add) => cur + add.likes, 0)
        } else {
            const curAuthor = blogs[i].author
            const curLikes = blogs.filter(blog => blog.author === curAuthor)
                                  .reduce((cur, add) => cur + add.likes, 0)
            if (curLikes > likes) {
                author = curAuthor
                likes = curLikes
            }
        }
    }
    return { author: author, likes: likes}
}

module.exports = {
 dummy,
 totalLikes,
 favoriteBlog,
 mostBlogs,
 mostLikes
} 