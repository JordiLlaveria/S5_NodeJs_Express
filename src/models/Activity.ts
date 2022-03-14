import {Schema, model} from 'mongoose';
import User from '../models/User';

const ActivitySchema = new Schema({
    name: {type:String, unique:true},
    description: {type:String},
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    languages: [{
        type: String
    }],
    location: [{
        type: String
    }],
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]
    //Evaluations array
})

export default model('Activity', ActivitySchema);