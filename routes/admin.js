const express = require(`express`)
const controller = require(`../controllers/admin`)
const keys = require(`../config/keys`)
const router = express.Router()


router.post(`/login`, controller.login)
router.get(`/logout`, controller.register)
if (keys.regpage) {
  router.post(`/register`, controller.register)
}




module.exports = router
