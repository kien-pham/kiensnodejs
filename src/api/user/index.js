import {Router} from 'express'
import { create, index, show, update, remove } from './controller'
import multer from 'multer'

const router = new Router()

const storageAvatar = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({storage: storageAvatar}).single('avatar');
/**
 * 
 * @api {get} /user/:id Get User information
 * @apiName GetUser
 * @apiGroup User
 *
 */

router.get('/', index)
router.get('/:id', show)
router.post('/', create) // router.post('/', (req, res) => res.send('POST USER'))
router.put('/', update)
router.delete('/', remove)

export default router