"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    underscored: true,
    timestamps: false,
});
exports.default = User;
