"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_error_1 = require("./custom-error");
class DatabaseConnectionError extends custom_error_1.CustomError {
    constructor() {
        super('Error Connecting to DB');
        this.reason = 'Error Connecting to database'; //* reason property for better understanding
        this.statusCode = 503; //* Error code 503 for service unavailable as unable to connect with DB
        //* Only because we are extending a build in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    //* Method to serialize error to make it uniform across all services
    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
