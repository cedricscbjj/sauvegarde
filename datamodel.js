const mongoose = require ('mongoose');

const dataschema = mongoose.Schema({


lien:{
    type: String,
    required: true,
},

description:{
    type: String,
    required: false,

},

theme1:{
    type: String,
    required: true,
},

theme2:{
    type: String,
    required: false,
}

},
{
    timestamps: true
}

)

const Datalink = mongoose.model('Datalink' , dataschema )
module.exports = Datalink;