"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const custom_error_1 = require("./custom-error");
class NotAuthorizedError extends custom_error_1.CustomError {
    constructor() {
        super('Not Authorized');
        this.statusCode = 401; //* Error code for not authorized
        //* Only because we are extending a build in class
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    //* Method to serialize error to make it uniform across all services
    serializeErrors() {
        return [{ message: 'Not Authorized' }];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
