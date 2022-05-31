





// vamos alterar o tipo de dado do Request do Express
// vamos adicionar o id do usuário
declare namespace Express {
    export interface Request{ // vamos alterar a classe Request do Express
        user: { // adicionar as variáveis user com o campo id
            id: string
        }
    }
}