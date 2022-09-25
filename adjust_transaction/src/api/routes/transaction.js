const controller = require('../contorller/adjustTransaction')

const transaction = [
  {
    method: 'Get',
    path: '/transaction',
    handler: (request,h) => {
      return 'trasaction conncet'
    }
  },
  {
    method: 'POST',
    path: '/transaction',
    handler: async (request,h) => {
      try{
        const data = await controller.create(request,h)
        return h.response({"message": "Success"}).code(200)
      }catch(err){
        console.log(err)
        // return err.message
        return err.message
      }
    }
  },
  {
    method: 'PUT',
    path: '/transaction/{sku}',
    handler: async (request,h) => {
      try{
        console.log(request,'req')
        const data = await controller.update(request,h)
        return h.response({"message": "Success"}).code(200)
      }catch(err){
        console.log(err)
        return err.message
      }
    }
  },

]

module.exports = {transaction}