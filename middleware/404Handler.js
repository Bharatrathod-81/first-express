const pageNotFound = (req, res, next) => {
    res.status(404).json({massage:"page not found"});
};

module.exports = pageNotFound