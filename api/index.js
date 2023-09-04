import express from 'express'

const app = express()
const port = 4000

app.use(express.json()) // irá fazer o parse de arquivos JSON
//Rotas de conteudo público
app.use('/', express.static('public'))
//Rotas da API
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Api Fatec 100% Funcional',
        version: '1.0.0'
    })

})
app.listen(port, function(){
console.log(`Servidor rodando na porta ${port}`)
})
