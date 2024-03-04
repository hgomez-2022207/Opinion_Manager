import mongoose from 'mongoose';

const PublicationSchema = mongoose.Schema({
    
    qualification:{
        type: String,
        required: [true, 'The name is required']
    },
    category:{
        type:String,
        required: [true, 'The category is required']
    },
    text:{
        type:String,
        required: [true,'The name is required']
    },
    state:{
        type: Boolean,
        default: true
    },
    user:{
        type: [String],
    },
    comentary:{
        type: [String],
    }
},{
    versionKey: false 
});

export default mongoose.model('Public', PublicationSchema);