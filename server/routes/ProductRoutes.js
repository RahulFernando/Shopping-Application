const router = require("express").Router();
const Products = require('../model/Product');

/*Router to get all Products from db*/
router.get("/", (req, res) => {
    Products.find()
        .then(products => res.send(products))
        .catch(err => res.status(400).send('Error: ' + err))

});

/*Router to get ProductById from db*/
router.get("/:id", (req, res) => {
    Products.findById(req.params.id)
        .then((product) => res.send(product))
        .catch(err => res.status(400).send("Error : " + err))
});

/*Router to get ProductByCategory from db*/
router.get("/productByCategory/:category", (req, res) => {
    Products.find({productCategory : req.params.category})
        .then((products) => res.send(products))
        .catch(err => res.status(400).send("Error : " + err))
});

/*Router to add Products to db*/
router.post('/AddProduct', (req, res) => {
    let product = new Products({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productCategory: req.body.productCategory,
        productImageURLS: req.body.productImageURLS,
        productBrand: req.body.productBrand,
        productWatchers: req.body.productWatchers,
        detailsWithSize: req.body.detailsWithSize,
    });

    product.save()
        .then((product) => res.send(product))
        .catch(err => res.status(400).send('Error: ' + err))
});

/*Router to delete Products from db*/
router.delete("/DeleteProduct/:id", (req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(() => res.send(req.params.id + " Deleted!"))
        .catch(err => res.status(400).send("Error : " + err))
});

/*Router to Update Products*/
router.put("/UpdateProduct/:id", (req, res) => {
    Products.findById(req.params.id)
        .then(product => {
            product.productName = req.body.productName;
            product.productDescription = req.body.productDescription;
            product.productCategory = req.body.productCategory;
            product.productImageURLS = req.body.productImageURLS;
            product.productBrand = req.body.productBrand;
            product.productWatchers = req.body.productWatchers;
            product.detailsWithSize = req.body.detailsWithSize;

            product.save()
                .then(() => res.send({productID: product._id}))
                .catch(err => res.status(400).send('Error: ' + err))
        })
        .catch(err => res.status(400).send("Error : " + err))
});

/*Route To update the Product View count*/
router.put("/UpdateProductWatchers/:id", (req, res) => {
    Products.findById(req.params.id)
        .then(product => {
            product.productWatchers += 1;

            product.save()
                .then(() => res.send({productID: product._id}))
                .catch(err => res.status(400).send('Error: ' + err))
        })
        .catch(err => res.status(400).send("Error : " + err))
});

module.exports = router;
