import models from './../../db/models'

const User = models.User;

export const index = (req, res) => {
    User.findAll().then(data => { // if product, createdBy
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const show = (req, res) => {
    const id = req.params.id
    User.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const create = (req, res, next) => {
    const body = req.body
    User.create(body).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const update = (req, res) => {
    const id = req.params.id
    const body = req.body
    User.update(body, { where: { id: id } }).then(data => {
        res.status(201).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const remove = (req, res) => {
    const id = req.params.id
    User.destroy({ where: { id: id } }).then(data => {
        res.status(200).send()
    }).catch(err => {
        res.status(404).json(err)
    })
}