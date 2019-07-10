var express = require('express');
var Task = require('../../dao/TaskCtrl')
var router = express.Router();
var controller = require('../../dao/UserCtrl');


router.post('/user', async (req, res) => {
    try {
        var user = await controller.getByEmail(req.body.email);
    } catch (error) {
        res.redirect('/error')
    }
    if(user){         
        res.status(200).send({messageCreate:"usuario ja existe"})
    }else{
        controller.create(req.body, (data) => {
            if (data) {
                res.status(200).send({message:"Usuario Criado Com Sucesso", token:data._id});
                return
            }
            else {
                res.redirect('/error')
            }
        })    
    }
});
router.get('/logout', (req, res) => {
    res.clearCookie('login');
    res.redirect('/login');
    return
})
router.post('/login', async (req, res) => {
    
    try {
        var user = await controller.getByEmail(req.body.email)
        var pass = await require('crypto').createHash('sha256').update(req.body.password).digest("hex")

    } catch (error) {
        res.redirect('/')
    }

    if (user && user.password == pass) {
        res.status(200).send({ token: user._id });
    }
    else {
        res.status(400).send({ messageLogin: 'Usuário ou senha incorretos :(!' });
    }
})
module.exports = router;