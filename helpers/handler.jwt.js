const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../configuration/config')

const generateToken = (user) => {
    const token = jwt.sign(
        {
            _id: user.id,
            _name: user.name,
        },
        JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )
    return token;
}

const validateToken = (token) => {

    const dataToken = jwt.verify(token, JWT_SECRET);
    return dataToken; 
}

module.exports = {
    generateToken,
    validateToken
}