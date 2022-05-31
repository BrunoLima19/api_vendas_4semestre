
// importa a classe router da dependência express
import {Router} from 'express'
import productRouter from '../../../modules/products/routes/product.routes'

// cria um objeto da classe Router


let routes = Router()


routes.use('/products', productRouter)

// rota GET padrão /
routes.get('/', (request, response) => {

    // retorna uma mensagem no formato json
    return response.json({
        message: 'Funcionou meu primeiro exemplo'
    })

})

// exportar o objeto para o uso em outro arquivo
export default routes;