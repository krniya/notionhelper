"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
    //* Handling all kind of custom error
    //* Check custom-error.ts for implementation
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    //* General error when its not been handled
    res.status(400).send({
        errors: [
            {
                message: `Error: ${err}`,
            },
        ],
    });
};
exports.errorHandler = errorHandler;
