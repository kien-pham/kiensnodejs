import express from './services/express';
import {port, ip, env, apiRoot} from './config'
import router from './api';
import db from './db/models';

const app = express(apiRoot, router) // gọi hàm express, khởi tạo app express


db.sequelize.sync().then(() => {
    console.log('init db')
}).catch(err => {
    console.log('error', err)
})
app.listen(port, () => console.log('Server listening on http://%s:%d, in %s mode', ip, port, env))

export default app