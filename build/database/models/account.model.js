"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const user_model_1 = __importDefault(require("./user.model"));
class Account extends sequelize_1.Model {
}
Account.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    timestamps: false,
    modelName: 'accounts',
});
user_model_1.default.hasOne(Account, { foreignKey: 'userId', as: 'accounts' });
Account.belongsTo(user_model_1.default, { foreignKey: 'userId', as: 'accounts' });
exports.default = Account;
