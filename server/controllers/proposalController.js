const { create, getById } = require("../services/proposalService");
const { hasUser } = require("../middlewares/guards");
const parseError = require("../util/parser");
const router = require('express').Router();

// router.get('/proposals', async (req,res)=>{
//     let items = await getAll();
//     res.json(items)
// })

router.post('/proposals', hasUser(), async (req,res)=>{
    try{
        const data = req.body
        const item = await create(data)
        res.json(item)
    }catch (err) {
        const message = parseError(err)
        res.status(400).json({message})
    }
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