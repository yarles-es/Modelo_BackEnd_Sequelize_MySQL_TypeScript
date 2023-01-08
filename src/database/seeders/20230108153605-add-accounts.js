"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "accounts",
      [
        {
          email: "yarles100@gmail.com",
          password: "12345678910",
          user_id: 1,
        },
        {
          email: "lusinete100@gmail.com",
          password: "10987654321",
          user_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};
