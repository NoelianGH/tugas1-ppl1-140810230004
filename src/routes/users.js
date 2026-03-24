const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {
    res.send(res.params.id)
})

router.post('/', (req, res) => {
    res.send('Hello World')
})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})
module.exports = router