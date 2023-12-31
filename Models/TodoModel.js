const mongoose=require('mongoose')

const todoScehma=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('Todo',todoScehma);