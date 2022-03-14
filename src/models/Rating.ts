import {Schema, model} from 'mongoose';
import User from './User';

const RatingSchema = new Schema({
    name: {type:String, required:true},
    rating: {type:String, required:true},
    description: {type:String}
})