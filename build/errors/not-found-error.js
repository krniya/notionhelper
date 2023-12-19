"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom-error");
class NotFoundError extends custom_error_1.CustomError {
    constructor() {
        super('Route not found');
        this.statusCode = 404; //* Error code 404 for Not Found errors
        //* Only because we are extending a build in class
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    //* Method to serialize error to make it uniform across all services
    serializeErrors() {
        return [{ message: 'Not Found' }];
    }
}
exports.NotFoundError = NotFoundError;
