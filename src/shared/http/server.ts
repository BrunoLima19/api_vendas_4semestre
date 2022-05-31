
// importa a dependência do express
import express, { NextFunction, Request, response, Response } from 'express';
// importar a depenência do express para erro
import 'express-async-errors'

// vamos utilzar a dependência celebrate
import {errors} from 'celebrate'

// vamos utilzar a classe AppError
import AppError from '../../shared/errors/AppErrors'

// cria um servidor express
let servidor = express();

import routes from './routes/routes'

// servidor suprota converter dados do formulário para json
servidor.use(express.json())

// associa as rotas ao servidor
servidor.use(routes)

// servidor vai poder tratar erro do celebrate
servidor.use(errors())

// importar e executa conexão co o banco de dados
import './../typeorm' //../ quer dizer voltar atrás em um diretório

// tratar o erro
servidor.use(
    (error:Error, request: Request, reponse: Response, next: NextFunction) => {
        if (error instanceof AppError){ // este erro vamos tratar
            return response.status(error.statusCode). json({
                status: 'error',
                message: error.message
            })
        }

        // erro não está tratado por nós
        return response.status(500).json({
            status:'error',
            message: 'internal server error'
        })
    }
)
// 
// sobre o servidor, que fica escutando e aguardando as requisições
servidor.listen(3333, () => {
    console.log(`SERVER UP AND RUNNING`)
})