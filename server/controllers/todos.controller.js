const ToDo = require('../models/todo.model');

class ToDosController {
    getAll(req, res) {
        ToDo.find()
            .then(todos => res.json(todos))
            .catch(err => res.json(err));
    }
    create(req, res) {
        let todo = new ToDo(req.body);
        todo.save()
            .then(() => res.json(todo))
            .catch(err => res.json(err));
    }
    update(req, res) {
        ToDo.findByIdAndUpdate({_id: req.params._id}, req.body, {useFindAndModify: false})
            .then(() => res.json({msg: "success"}))
            .catch(err => res.json(err));
    }
}

module.exports = new ToDosController();