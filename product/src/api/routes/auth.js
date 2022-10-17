const controller = require('../controllers/auth')

const auth = [
    {
        method: 'POST',
        path: '/login',
        // options:{
        //     auth: 'jwt'
        // },
        handler:  (request,h) => {
            const data = controller.login(request,h)
            return h.response({access_token: data})
        }
    },
]

module.exports = {auth}