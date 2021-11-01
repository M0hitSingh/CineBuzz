const jwt = require('jsonwebtoken');
const dotenv = require('dotenv/config');
module.exports.auth = (req ,res ,next) =>{
    const authHeader = req.get('Authorization');
    if(!authHeader){
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }
    const token = req.get('Authorization').split(' ')[1];
    console.log(token);
    let decodedToken;
    try{
        decodedToken = jwt.verify(token,process.env.tkn);
        console.log(decodedToken);
    }
    catch(err){
        err.statusCode = 500;
        throw err; 
    }
    if(!decodedToken){
        const error  = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }
    // req.userId = decodedToken.userId;
    // next();
} 