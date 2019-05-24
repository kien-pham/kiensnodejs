// passport service
// functions -> middleware
// 1. function password: verify user's username, pasw is correct
// 2. function master: verify master token (incase admin want to create new user)
// 3. function token: verify jwt from client send to server

import passport from 'passport'
import { BasicStrategy } from 'passport-http'
import User from '../../db/models/user'

const masterToken = 'god' // saved on ENV file

// Docs http://www.passportjs.org/docs/authenticate/
export const password = () => (req, res, next) =>
    passport.authenticate('password', {
        session: false
    }, (err, user, info) => {
        if (err && err.param) {
            return res.status(400).json(err)
        } else if (err || !user) {
            return res.status(401).end()
        }
        req.logIn(user, {
            session: false
        }, (err) => {
            if (err) return res.status(401).end()
            next()
        })
    })(req, res, next)

const master = (req, res, next) => {

}

const token = (req, res, next) => {

}

passport.use('password', new BasicStrategy((username, password, done) => {
    const user = User.find(u => {
        return u.username === username && u.password === password
    })
    if (!user) {
        done(true)
    } else {
        done(null, user)
    }
}))