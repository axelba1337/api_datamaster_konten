export const authorizationErrorHandler = (req, res, next) => {
    const error = new Error('Access forbidden');
    res.status(403);
    next(error);
};
