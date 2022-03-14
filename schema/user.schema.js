import mongoose from 'mongoose';
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String},
    email: {type: String, unique: true},
    mobile: {
        code: {type: String},
        number: {type: String, unique: true}
    }
}, {
    timestamps: true
})

const Users = mongoose.model('users', UserSchema, 'users');

export default Users;