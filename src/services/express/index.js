import express from 'express'
import path from 'path'
import morgan from 'morgan' // middleware that log any action
import compression from 'compression' // middleware that compress data
import cors from 'cors' // secure web API
import bodyParser from 'body-parser' // POST processor
// import router from './../../api' // router from API

export default (apiRootURL, router) => { // hàm kg tên (), nên khi qua server.js có thể tùy ý đặt tên import express...
    const app = new express()

    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    
    // app.use('/api/', router) // url will be site.com/api/users/
    app.use(apiRootURL, router)
    
    const wwwRoot = path.join(__dirname, '../../../www')
    app.use(express.static(wwwRoot))
    app.get('/*', (req, res) => {
        //res.send('Hello')
        res.sendFile(path.join(__dirname, 'index.html'))
    })
    return app
}