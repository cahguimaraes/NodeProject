module.exports = function(app){
	app.get("/sku", function(req, res){
		app.controllers.SkuController.getAllSkus(app, req, res);
	});

	app.get("/sku/:id", function(req, res){
		app.controllers.SkuController.getSkuById(app, req, res);
	});

	app.post('/sku', function(req, res){
		app.controllers.SkuController.saveSku(app, req, res);
	});

	app.put('/sku/:id', function(req, res){
		app.controllers.SkuController.updateSku(app, req, res);
	});

	app.delete('/sku/:id', function(req, res){
		app.controllers.SkuController.deleteSku(app, req, res);
	});
};