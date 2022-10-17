const controller = require('../contorller/adjustTransaction')

const plugin = {
  'hapi-rate-limitor': {
    max: 100,              // a maximum of 5 requests
    duration: 60 * 1000, // per minute
    enabled: true       // but it’s actually not enabled ;-)
  }
}
const transaction = [
  {
    method: 'Get',
    path: '/transaction',
  //   options:{
  //     auth: 'jwt'
  // },
  
    options: {
      handler: async (request,h) => {
        try{
          const data = await controller.getAll(request,h)
          return h.response(data).code(200)
        }catch(err){
          console.log(err)
          // return err.message
          return err.message
        }
      },
      plugins: plugin
    },
  },
  {
    method: 'POST',
    path: '/transaction',
  //   options:{
  //     auth: 'jwt'
  // },
  options: {
    handler: async (request,h) => {
      try{
        const data = await controller.create(request,h)
        return h.response({"message": "Success"}).code(201)
      }catch(err){
        console.log(err)
        // return err.message
        return err.message
      }
    },
    plugins: plugin
}
   
  },
  {
    method: 'PUT',
    path: '/transaction/{sku}',
  //   options:{
  //     auth: 'jwt'
  // },
  options: {
    handler: async (request,h) => {
      try{
        const data = await controller.update(request,h)
        return h.response({"message": "Success"}).code(200)
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
    path: '/transaction/{id}',
  //   options:{
  //     auth: 'jwt'
  // },
  options: {
    handler: async (request,h) => {
      try{
        const data = await controller.getDetail(request,h)
        return h.response(data).code(200)
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
    path: '/transaction/{id}',
  //   options:{
  //     auth: 'jwt'
  // },
  options: {
    handler: async (request,h) => {
      try{

        const data = await controller.delete(request,h)
        return h.response({"message": "Success"}).code(200)
      }catch(err){
        console.log(err)
        return err.message
      }
    },
    plugins: plugin
}
   
  },

]

module.exports = {transaction}