import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Account from './account.model';

class User extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    allowNull: false,
    type: STRING,
  },
  lastName: {
    allowNull: false,
    type: STRING,
  },
},
  {
    sequelize: db,
    modelName: 'users',
    underscored: true,
    timestamps: false,
  }
);


export default User;