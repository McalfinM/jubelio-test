const controller = require('../contorller/testing')

const testing = [
  {
    method: 'Get',
    path: '/testing-transaction',
  //   options:{
  //     auth: 'jwt'
  // },
    handler: async (request,h) => {
      try{
        const data = await controller.getAll(request,h)
        return h.response(data).code(200)
      }catch(err){
        console.log(err)
        // return err.message
        return err.message
      }
    }
  },
  {
    method: 'POST',
    path: '/testing-transaction',
  //   options:{
  //     auth: 'jwt'
  // },
    handler: async (request,h) => {
      try{
        const data = await controller.create(request,h)
        return h.response({"message": "Success"}).code(201)
      }catch(err){
        console.log(err)
        // return err.message
        return err.message
      }
    }
  },
  {
    method: 'PUT',
    path: '/testing-transaction/{sku}',
  //   options:{
  //     auth: 'jwt'
  // },
    handler: async (request,h) => {
      try{
        const data = await controller.update(request,h)
        return h.response({"message": "Success"}).code(200)
      }catch(err){
        console.log(err)
        return err.message
      }
    }
  },
  {
    method: 'GET',
    path: '/testing-transaction/{id}',
  //   options:{
  //     auth: 'jwt'
  // },
    handler: async (request,h) => {
      try{
        const data = await controller.getDetail(request,h)
        return h.response(data).code(200)
      }catch(err){
        console.log(err)
        return err.message
      }
    }
  },
  {
    method: 'DELETE',
    path: '/testing-transaction/{id}',
  //   options:{
  //     auth: 'jwt'
  // },
    handler: async (request,h) => {
      try{

        const data = await controller.delete(request,h)
        return h.response({"message": "Success"}).code(200)
      }catch(err){
        console.log(err)
        return err.message
      }
    }
  },
  {
    method: 'GET',
    path: '/testing-transaction/sku/{sku}',
  //   options:{
  //     auth: 'jwt'
  // },
    handler: async (request,h) => {
      try{
        const data = await controller.getDetailSku(request,h)
        return h.response(data).code(200)
      }catch(err){
        console.log(err)
        return err.message
      }
    }
  },
]

module.exports = {testing}