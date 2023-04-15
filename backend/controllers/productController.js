exports.getAllProducts = (req, res) => {
    res.status(200).json({
        message: 'This route will show all products'
    });
}