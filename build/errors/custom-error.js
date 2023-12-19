"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
//* Abstract class determine the properties of child class
//* To create all the custom errors handling features
class CustomError extends Error {
    constructor(message) {
        super(message);
        //* Only because we are extending a build in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
