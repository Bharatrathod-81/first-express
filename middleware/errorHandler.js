const errorHandler = (err, req, res, next) => {
    res.status(500).json({massage:err.massage});
};

module.exports = errorHandler