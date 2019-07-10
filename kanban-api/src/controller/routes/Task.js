var express = require('express');
var router = express.Router();
var controller = require('../../dao/TaskCtrl');


router.post('/task', (req, res) => {
    controller.create(req.body, req.cookies.login, (data) => {
        if (data) {
            res.status(200).end();
            return
        }
        res.status(500).end();

    }
    )
});
router.post('/task/:id', (req, res) => {
    let id = req.params.id,
        listId = req.body.listId;
    console.log(listId)
    controller.updateById(id, listId, (data, err) => {
        if (data) {
            res.status(200).end();
            return
        }else{
            res.status(500).send(err);
        }
    }
    )
})
module.exports = router;