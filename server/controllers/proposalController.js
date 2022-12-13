const {getAll, getById} = require("../services/freelancerService");
const router = require('express').Router();

router.get('/proposals', async (req,res)=>{
    let items = await getAll();
    res.json(items)
})

router.get('/proposals/:id', async (req,res)=>{
    const id = req.params.id
    let item = await getById(id);
    res.json(item)
})

//TODO implement post request
// router.post('/proposals/:id', async (req,res)=>{
//     const id = req.params.id
//     let item = await getById(id);
//     res.json(item)
// })

module.exports = router;