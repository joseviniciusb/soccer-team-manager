const TokenGenerator = require('uuid-token-generator');

const validateAuthorization = (req, res) => {
  let { authorization } = req.headers;

  // Gera um token limitado a 16 caracteres
  const tokgen = new TokenGenerator();
  const token = tokgen.generate().substr(0, 16);
  const validateToken = token.length === 16;

  if (validateToken) {
    authorization = token;
  }
  if (token !== authorization) {
    return res.status(400).json('Não autorizado!');
  }
  return res.status(200).json('massa');
};

module.exports = validateAuthorization;
