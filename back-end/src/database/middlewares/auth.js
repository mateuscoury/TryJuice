const JWT = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const getToken = (data) => {
  try {
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const { password, ...dataUser } = data;
    const secret = fs.readFileSync(path.join(__dirname + '../../../../jwt.evaluation.key'), 'utf-8')
    const token = JWT.sign({ dataUser }, secret, jwtConfig)
    return token;
  } catch (error) {
    return { message: error.message };
  }
}  

module.exports = getToken;
