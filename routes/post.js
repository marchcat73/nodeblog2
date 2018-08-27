const express = require(`express`)
const passport = require(`passport`)
const upload = require(`../middleware/upload`)
const controller = require('../controllers/post')
const router = express.Router()


router.get(`/`, controller.getAll)
router.get(`/:id`, controller.getById)

router.post(`/`, passport.authenticate(`jwt`, {session: false}), upload.single(`image`), controller.create)
router.delete(`/:id`, passport.authenticate(`jwt`, {session: false}), controller.remove)
router.patch(`/:id`, passport.authenticate(`jwt`, {session: false}), upload.single(`image`), controller.update)



module.exports = router