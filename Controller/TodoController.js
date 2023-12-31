const TodoModel=require('../Models/TodoModel')

module.exports.getTodo=async(req,res)=>{
    const todo=await TodoModel.find();
    res.send(todo);
}

module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body;
    TodoModel
    .create({text})
    .then((data)=>{
        console.log("added successfully");
        console.log(data);
        res.send(data);
    })
}
module.exports.updateTodo=async(req,res)=>{
    const {_id,text}=req.body;
    TodoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Update successfull"))
    .catch((err)=>console.log(err));
}
module.exports.deleteTodo = async (req, res) => { // Fix the typo in the function name
    const { _id } = req.body;
    TodoModel
      .findByIdAndDelete(_id)
      .then(() => res.send("Delete successful"))
      .catch((err) => console.log(err));
  };
