const  express = require('express');
const path = require('path');
const app = express();

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

const indexPath = path.join(__dirname,'index.html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const productRouter = require('./routers/productRouter');
const categoryRouter = require('./routers/categoryRouter');
const commentsRouter = require('./routers/commentsRouter');
const ordersRouter = require('./routers/ordersRouter');
//const adminRouters = require('./routers/adminRouter');


app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/comments', commentsRouter);
app.use('/orders', ordersRouter);
//app.use('/admin', adminRouters);


app.get('/', async (req, res, next) => {
    res.sendFile(indexPath)
});


app.use('*',(req, res) =>{
    res.status(404).json('Oopps')
});

app.listen(3000, err =>{
    if (err) console.log(err);
    console.log('Server listen on port 3000');
});

const pool = require('./dataBase/index');
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err)
});

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            success: false,
            message: err.message || 'Unknown Error',
            controller: err.controller
        })
});

module.exports = app;
