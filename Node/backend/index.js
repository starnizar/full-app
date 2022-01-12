const nodeEnv = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
const path = require('path');
const express = require('express');
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')


const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use(express.static(path.resolve(__dirname, 'static')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));