const {getAll, create, getById} = require("../services/freelancerService");
const parseError = require('../util/parser')
const {hasUser} = require("../middlewares/guards");
const router = require('express').Router();

router.get('/freelancers', async (req,res)=>{
    let items = await getAll();
    res.json(items)
})

router.post('/freelancers',hasUser(),async (req,res)  => {
  try{
      const data = Object.assign({_ownerId: req.user._id}, req.body)
      const item = await create(data)
      res.json(item)
  }catch (err) {
      const message = parseError(err)
      res.status(400).json({message})
  }
})

router.get('/freelancers/:id', async (req,res) =>{
    const id = req.params.id
    const item = await getById(id);
    res.json(item)
})


module.exports = router;