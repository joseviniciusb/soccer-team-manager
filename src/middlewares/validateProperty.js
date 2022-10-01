const validateProp = (req, res, next) => {
    const requiredProperties = ['name', 'initials'];
    if (!requiredProperties.every((property) => property in req.body)) {
       return res.sendStatus(400).json({ message: 'Nome e iniciais do time são obrigatórios' });
    }
    next();
};

module.exports = validateProp;