import express from 'express';
const testRoute = express.Router()


testRoute.get('/sample', (req, res) => {
    /* do something and respond */

    let sampleObj = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
    }

    return res.send({
        status: 200,
        data: sampleObj
    })
})

export default testRoute;