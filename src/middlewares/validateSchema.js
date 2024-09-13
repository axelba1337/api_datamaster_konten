import kontenSchema from "../validations/konten-validation.js";

const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            // Validasi body sesuai dengan schema
            schema.parse(req.body);
            next();
        } catch (err) {
            res.status(400).json({
                error: "Validation Error",
                message: err.errors ? err.errors[0].message : err.message,
            });
        }
    };
};

export default validateSchema;
