"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidationError extends custom_error_1.CustomError {
    constructor(errors) {
        super("Invalid request parameter");
        this.errors = errors;
        this.statusCode = 400; //* Error code 400 for validation error
        //* Only because we are extending a build in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    //* Method to serialize error to make it uniform across all services
    serializeErrors() {
        return this.errors.map((err) => {
            if (err.type == "field") {
                return { message: err.msg, field: err.path };
            }
            return { message: err.msg, field: err.type };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
