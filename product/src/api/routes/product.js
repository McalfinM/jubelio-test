const controller = require('../controllers/product')

const product = [
    {
        method: 'GET',
        path: '/product',
        options:{
            auth: 'jwt'
        },
        handler: (request,h) => {
            return controller.getAll(request,h)
        }
    }, 
    {
        method: 'POST',
        path: '/product',
        handler: async (request, res) => {
            try{
                const data = await controller.create(request,res)
                
                return res.response(data).code(201)
            }catch(err){
                console.log(err)
                return err.message
            }
        }
    },
    {
        method: 'GET',
        path: '/product/{id}',
        options:{
            auth: 'jwt'
        },
        handler:(request, h) => {
            return controller.getDetai(request,h)
        }
    },
    {
        method: 'PUT',
        path: '/product/{id}',
        options:{
            auth: 'jwt'
        },
        handler: async (request, res) => {
            try{
                const data = await controller.update(request,res)
                
                return res.response(data).code(201)
            }catch(err){
                console.log(err)
                return err.message
            }
        }
    },
    {
        method: 'DELETE',
        path: '/product/{id}',
        options:{
            auth: 'jwt'
        },
        handler: async (request, res) => {
            try{
                const data = await controller.delete(request,res)
                
                return res.response(data).code(201)
            }catch(err){
                console.log(err)
                return err.message
            }
        }
    },
    {
        method: 'DELETE',
        path: '/product/sku/{sku}',
        options:{
            auth: 'jwt'
        },
        handler: async (request, res) => {
            try{
                const data = await controller.deleteSku(request,res)
                
                return res.response(data).code(200)
            }catch(err){
                console.log(err)
                return err.message
            }
        }
    },
    {
        method: 'GET',
        path: '/product/sku/{sku}',
        options:{
            auth: 'jwt'
        },
        handler: async (request, res) => {
            try{
                const data = await controller.getDetailSku(request,res)
                
                return res.response(data).code(200)
            }catch(err){
                console.log(err)
                return err.message
            }
        }
    },
]

module.exports = {product}