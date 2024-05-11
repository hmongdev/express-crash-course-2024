// MOCK DATABASE
let posts = [
  { id: 1, title: 'Post One'},
  { id: 2, title: 'Post Two'},
  { id: 3, title: 'Post Three'},
]

// GET all posts
// GET /api/posts
export const getPosts = (req, res, next) => {
  // limit => parseInt
  const limit = parseInt(req.query.limit);
  
  // check limit => .slice(0, limit)
  if(!isNaN(limit) && limit > 0) {
    return res
      .status(200)
      .json(posts.slice(0, limit));
  }
  
  res.status(200).json(posts)
}

// GET single post
// GET /api/posts/:id
// GET single post
export const getOnePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  
  // if no post...
  if (!post) {
    const error = new Error(`Post with id: ${id} does not exist.`);
    error.status = 404; // define error code
    return next(error);
  }
  // if post...
  res.status(200).json(post);
}

// CREATE post
// CREATE /api/posts
export const createPost = (req, res, next) => {
  // newPost
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  }
  
  // !newPost.title
  if (!newPost.title) {
    const error = new Error(`Please include a title.`);
    error.status = 404; // define error code
    return next(error);
  }
  
  // newPost
  posts.push(newPost);
  res.status(201).json(posts);
}

// PUT post
// PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  // id
  const id = parseInt(req.params.id);
  // post
  const post = posts.find((post) => post.id === id);
  
  // !post
  if (!post) {
    return res
      .status(404)
      .json({
      msg: `Post with id ${id} was not found.`
    })
  }
  
  // *post
  post.title = req.body.title;
  res.status(200).json(posts);
}

// DELETE post
// DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
  // id
  const id = parseInt(req.params.id);
  // post
  const post = posts.find((post) => post.id === id);
  
  // !post
  if (!post) {
    return res
      .status(404)
      .json({
      msg: `Post with id ${id} was not found.`
    })
  }
  
  // *post
  posts = posts.filter((post) => post.id !== id)
  res.status(200).json(posts);
}