const { hasUser } = require("../middlewares/guards");
const router = require('express').Router()

router.get('/userInfo', hasUser(), async (req,res)=> {
    const userEmail = req.user.email;
    const userId = req.user._id
    res.json({ email: userEmail, _id: userId })
})


module.exports = router;