const validateAuthorization = (req, res) => {
  const authorization = req.headers;
  res.status(200).json('massa');
  console.log(authorization);
};

module.exports = validateAuthorization;
