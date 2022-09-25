const transaction = [{
    method: 'Get',
    path: '/transaction',
    handler: (request,h) => {
      return 'trasaction conncet'
    }
}]

module.exports = {transaction}