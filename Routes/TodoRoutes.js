const { Router } = require("express");
const { getTodo, saveTodo, deleteTodo, updateTodo } = require("../Controller/TodoController");

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.post('/delete', deleteTodo); // Fix the typo in the function name
router.post('/update', updateTodo);

module.exports = router;
