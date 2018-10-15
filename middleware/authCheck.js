const JWT = require('../helpers/jwt-helper');

module.exports = (req, res, next) => {
    JWT.verifyToken(req.headers['x-access-token'])
    .then(data => data ? next() : res.json({msg: 'Invalid JWT'}));
}