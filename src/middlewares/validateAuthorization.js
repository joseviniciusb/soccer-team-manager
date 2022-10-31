const validateAuthorization = (req, res) => {
  const { authorization } = req.headers;
  const token = Math.random().toString(36).substr(2);
  if (token !== authorization) {
   return res.status(400).json('Não autorizado!');
  }
 return res.status(200).json('massa');
};

module.exports = validateAuthorization;
