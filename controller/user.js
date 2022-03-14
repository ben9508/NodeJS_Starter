import Users from '../schema/user.schema.js';

export async function getUsers() {
    return await Users.find({});
}

export async function insertUser(req) {
    let user = new Users({
        username: req.username ? req.username : '',
        email: req.email ? req.email : '', 
        mobile: {
            code: req.mobile && req.mobile.code ? req.mobile.code : '',
            number: req.mobile && req.mobile.number ? req.mobile.number : ''
        }
    });
    console.log("user", user)

    return await user.save()
}

export async function updateUser(req) {
    return await Users.update(
    {
        _id: req.id
    }, 
    {
        email: req.email
    }, 
    {
        multi: false,
        upsert: false
    })
}


export async function deleteUser(req) {
    return await Users.deleteOne({_id: req.id})
}
