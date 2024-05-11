// INIT EXPRESS + APP
import express from 'express';
import errorHandler from './middleware/error.js';
import logger from './middleware/logger.js';
import notFound from './middleware/notFound.js';
import posts from './routes/postsRouter.js';
const PORT = process.env.PORT || 8000;

const app = express();

// BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({
  extended: false // allows us to send form data
}));

// LOGGER MIDDLEWARE
app.use(logger);

// STATIC FILES
app.use(express.static('public'));

// ROUTER
app.use('/api/posts', posts);


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


// LISTEN
app.listen(PORT, () => {
  console.log(`Express Server now running on PORT:${PORT} 😎`);
})