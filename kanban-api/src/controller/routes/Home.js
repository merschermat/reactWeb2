var express = require('express');
var Task = require('../../dao/TaskCtrl')
var List = require('../../dao/ListCtrl')

var router = express.Router();
var controller = require('../../dao/UserCtrl');

router.get('/', async (req, res) => {
    let userId = req.cookies.login
    var lists = [];
    console.log(req);
    

    if (req.cookies && req.cookies.login) {
        try {
            var list = await List.getByUser(userId);
            var task = await Task.getByUser(userId)
        } catch (err) {
            console.log(err)
        }
        list.forEach(async (e) => {
            lists.push({
                id: e._id,
                name: e.name,
                task: task.filter(m => m.listId == e._id)
            })
        })
        res.send({ list: lists })
        return
    }else {
        res.redirect('/');
}
})
module.exports = router;