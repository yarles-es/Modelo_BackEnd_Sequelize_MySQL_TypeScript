import User from "./database/models/user.model";
import Account from "./database/models/account.model";

(async () => {
  const users = await User.findAll({ raw: true });
  console.table(users);

  const accounts = await Account.findAll({ raw: true });
  console.table(accounts);
  
  const usersAndAccounts = await User.findAll({raw: true,  include: [
    { model: Account, as: 'accounts', attributes: { exclude: ['userId', 'password']}},
  ] });
  console.table(usersAndAccounts);
  process.exit(0);
})();