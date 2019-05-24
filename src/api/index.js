import {Router} from 'express'
import user from './user'
// import product from './product'
import auth from './auth'

const router = new Router()
router.use('/users', user)
// router.use('/products', product)
router.use('/auth', auth)

export default router