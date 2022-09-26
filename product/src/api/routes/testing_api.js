const controller = require('../controllers/testing')

const testing = [
    {
        method: 'GET',
        path: '/testing-product',
        options:{
            auth: 'jwt'
        },
        handler: (request,h) => {
            return controller.getAll(request,h)
        }
    }, 
    {
        method: 'POST',
        path: '/testing-product',
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
        path: '/testing-product/{id}',
        options:{
            auth: 'jwt'
        },
        handler:(request, h) => {
            return controller.getDetai(request,h)
        }
    },
    {
        method: 'PUT',
        path: '/testing-product/{id}',
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
        path: '/testing-product/{id}',
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
        path: '/testing-product/sku/{sku}',
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
        path: '/testing-product/sku/{sku}',
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

module.exports = {testing}