const controller = require('../controllers/product')
const plugin = {
    'hapi-rate-limitor': {
      max: 50,              // a maximum of 5 requests
      duration: 60 * 1000, // per minute
      enabled: true       // but it’s actually not enabled ;-)
    }
  }
const product = [
    {
        method: 'GET',
        path: '/product',
        options: {
            handler: async (request,h) => {
            return await controller.getAll(request,h)
            },
            plugins: plugin
        }
    }, 
    {
        method: 'POST',
        path: '/product',
        options: {
            handler: async (request, res) => {
                try{
                    const data = await controller.create(request,res)
                    
                    return res.response(data).code(201)
                }catch(err){
                    console.log(err)
                    return err.message
                }
            },
            plugins: plugin
        }
       
    },
    {
        method: 'GET',
        path: '/product/{id}',
        // options:{
        //     auth: 'jwt'
        // },
        options: {
            handler:(request, h) => {
                return controller.getDetai(request,h)
            },
            plugins: plugin
        }
       
    },
    {
        method: 'PUT',
        path: '/product/{id}',
        // options:{
        //     auth: 'jwt'
        // },
       
        options: {
            handler: async (request, res) => {
                try{
                    const data = await controller.update(request,res)
                    
                    return res.response(data).code(201)
                }catch(err){
                    console.log(err)
                    return err.message
                }
            },
            plugins: plugin
        }
    },
    {
        method: 'DELETE',
        path: '/product/{id}',
        // options:{
        //     auth: 'jwt'
        // },
       
        options: {
            handler: async (request, res) => {
                try{
                    const data = await controller.delete(request,res)
                    
                    return res.response(data).code(201)
                }catch(err){
                    console.log(err)
                    return err.message
                }
            },
            plugins: plugin
        }
    },
    {
        method: 'DELETE',
        path: '/product/sku/{sku}',
        // options:{
        //     auth: 'jwt'
        // },
       
        options: {
            handler: async (request, res) => {
                try{
                    const data = await controller.deleteSku(request,res)
                    
                    return res.response(data).code(200)
                }catch(err){
                    console.log(err)
                    return err.message
                }
            },    
            plugins: plugin
        }
        
    },
    {
        method: 'GET',
        path: '/product/sku/{sku}',
        // options:{
        //     auth: 'jwt'
        // },
        options: {
            handler: async (request, res) => {
                try{
                    const data = await controller.getDetailSku(request,res)
                    
                    return res.response(data).code(200)
                }catch(err){
                    console.log(err)
                    return err.message
                }
            },   
            plugins: plugin
        }
       
    },
    {
        method: 'GET',
        path: '/jwt',
        handler: function (request, h) {

            return h.file('jwt.json');
        }
    }
]

module.exports = {product}