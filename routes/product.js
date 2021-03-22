module.exports = function(app){
	app.get("/product", function(req, res){
		app.controllers.ProductController.getAllProducts(app, req, res);
	});

	app.get("/product/:id", function(req, res){
		app.controllers.ProductController.getProductById(app, req, res);
	});

	app.post('/product', function(req, res){
		app.controllers.ProductController.saveProduct(app, req, res);
	});

	app.put('/product/:id', function(req, res){
		app.controllers.ProductController.updateProduct(app, req, res);
	});

	app.delete('/product/:id', function(req, res){
		app.controllers.ProductController.deleteProduct(app, req, res);
	});
};