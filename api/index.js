import express from 'express'

const app = express()
const port = 4000

app.use(express.json()) // irá fazer o parse de arquivos JSON
//Rotas de conteudo público
app.use('/', express.static('public'))
//configura o favicon
app.use('/favicon.ico', express.static('public/images/computador.png'))

//Rotas da API
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Api Fatec 100% Funcional',
        version: '1.0.0'
    })

})
//rotas de exceção - deve ser a ultima!!!
app.use(function (req, res){
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `A rota ${req.originalUrl} não existe nesta API!`,
            param: 'Invalid route'
        }]
    })
})

app.listen(port, function(){
console.log(`Servidor rodando na porta ${port}`)
})
