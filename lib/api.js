var models = require('../models');

exports.refurbisheds = {
    all: function(request, reply) {
        models.refurbished_products
            .findAll({
                attributes: [
                    'product',
                    'description',
                    'original_price',
                    'discount_price'
                    ]
                })
            .then(function(result){
                reply({
                    refurbisheds: result
                }).code(200);
            });
    },
    product_id: function(request, reply) {
        models.refurbished_products
            .findAll({
                attributes: [
                    'product',
                    'description',
                    'original_price',
                    'discount_price'
                ],
                where: {
                    product: request.params.product
                }
            }).then(function(result){
                reply(result).code(200);
            });
    },
    by_description: function(request, reply) {
        models.refurbished_products
            .findAll({
                attributes: [
                    'product',
                    'description',
                    'original_price',
                    'discount_price'
                ],
                where: {
                    description: {
                        $like: `%${request.params.description}%`
                    }
                    
                }
            }).then(function(result){
                reply(result).code(200);
            });
    }
};