const express = require('express')
const app = express()

//http://localhost:3000/Fer123

app.get('/:user/:password',(req, res) => {
    const {user, password} = req.params

    if(user === 'Fer' && password === '123'){
    res.json({msg: 'Inicio de sesion exitosa'})
    return
}
res.json({msg:'Error en el usuario o la contraseña'})
})

//http://localhost:3000/login?user=Fer&password=123
app.get('/login',(req,res)=>{ //endponit
    const {user, password} = req.query
    if(!user || password){
        res.status(400).json({
            msg:'You need to provide <user> and <password> parameters'
        })
    }

    if(user === 'Fer' && password === '123'){
    res.json({msg: 'Inicio de sesion exitosa'})
    return
}
res.json({msg:'Error en el usuario o la contraseña'})
})


app.post('/',(req,res) => {res.json({msg:'HOLA POST'})})
app.put('/',(req,res) => {res.json({msg:'HOLA PUT'})})
app.patch('/',(req,res) => {res.json({msg:'HOLA PATCH'})})
app.delete('/',(req,res) => {res.json({msg:'HOLA DELETE'})})


app.listen(3000, () =>{
    console.log('listening on port 3000')
})

