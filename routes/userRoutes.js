import express from 'express';
import * as user from '../controller/user.js';
const UserRoute = express.Router()

UserRoute.get('/userlist', async (req, res) => {
    let users = await user.getUsers()
    if(users && users.length > 0) {
        return res.send({
            status: 200, 
            data: users,
            message: "Users retrieved successfully"
        })
    } else {
        return res.send({
            status: 200, 
            data: [],
            message: "No Users found"
        })
    }
})

UserRoute.post('/insertUser', async(req, res) => {
    let newUser = await user.insertUser(req.body);
    if(newUser) {
        return res.send({
            status: 200, 
            data: newUser,
            message: "User Created Successfully"
        })
    } else {
        return res.send({
            status: 300, 
            data: [],
            message: "Failed to create user"
        })
    }
})

UserRoute.put('/updateUser', async(req, res) => {
    let updated = await user.updateUser(req.body);
    if(updated.modifiedCount === 1) {
        return res.send({
            status: 200, 
            message: "User data updated successfully"
        })
    } else {
        return res.send({
            status: 500, 
            message: "Failed to update User"
        }) 
    }
})

UserRoute.delete('/deleteUser/:id', async(req, res) => {
    let removeUser = await user.deleteUser(req.params)
    if(removeUser.deletedCount === 1) {
        return res.send({
            status: 200, 
            message: "User deleted successfully"
        })
    } else {
        return res.send({
            status: 500, 
            message: "Failed to delete User"
        }) 
    }
})

export default UserRoute;