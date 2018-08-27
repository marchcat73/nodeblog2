const express = require(`express`)
const controller = require(`../controllers/portfolio`)
const router = express.Router()


router.get(`/`, controller.overview)


module.exports = router