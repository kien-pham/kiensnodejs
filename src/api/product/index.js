import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => res.send('Get list products'))
router.get('/:id', (req, res) => res.send('Get product detail'))
router.post('/', (req, res) => res.send('Post product'))
router.put('/', (req, res) => res.send('Put product'))
router.delete('/', (req, res) => res.send('Delete product'))

export default router