import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import User from './user.model';

class Account extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare userId: number;
}

Account.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
},
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'accounts',
  });

User.hasOne(Account, { foreignKey: 'userId', as: 'accounts'});
Account.belongsTo(User, { foreignKey: 'userId', as: 'accounts'});

export default Account;