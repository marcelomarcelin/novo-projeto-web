const porta=3003

const express=require('express')

const app=express()

const bodyParser=require('body-parser')

const bancoDados=require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos',(req,res,next)=>{
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    const produto=bancoDados.salvarProdutos({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id',(req,res,next)=>{
    const produto=bancoDados.salvarProdutos({
        nome:req.body.nome,
        id:req.params.id,
        preco:req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id',(req,res,next)=>{
    const produto=bancoDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})