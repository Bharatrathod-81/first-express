const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middleware/authMiddleWare');

let allData = [
    {
        id:'123',
        name:'bharat',
        quality:'smart'
    },
    {
        id:'124',
        name:'nikhil',
        quality:'productive'
    },
    {
        id:'125',
        name:'manoj',
        quality:'backchodi'
    },
];

router.get('/',(req, res, next) => {
    res.status(200).json({allData})
});


router.post('/:id',authMiddleWare,(req, res, next) => {
    const { id } = req.params;
    const { candidate } = req.body;
    allData = allData.map(e => e.id === id ? {...e,...candidate}:e);
    res.status(200).json({allData})
});

router.delete('/:id',authMiddleWare,(req, res, next) => {
    const { id } = req.params;
    allData = allData.filter(e => e.id !== id);
    res.status(200).json({allData})
})

module.exports = router