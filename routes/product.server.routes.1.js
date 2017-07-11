module.exports = function(app){

 var Products = require('./../controllers/Products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/products/list')
    .get(products.listview);
    
 app.route('/api/Products')
	.get(Products.list)
	.post(users.requiresLogin, Products.create);

  app.route('/api/Products/:ProductId')
	.get(Products.read)
  .delete(users.requiresLogin, Products.delete);

	app.route('/api/Products/edit/:ProductId')
	.get(Products.read)
	.put(users.requiresLogin, Products.update);


app.param('ProductId', Products.ProductByID);


}
