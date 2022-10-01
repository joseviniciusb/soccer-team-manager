const validateInitials = (req, res, next) => {
    const { initials } = req.body;
    if (initials.length !== 3) {
        return res.status(400).json({ message: 'Iniciais do time precisam ter 3 caracteres' });
    }
    next();
};

module.exports = validateInitials;