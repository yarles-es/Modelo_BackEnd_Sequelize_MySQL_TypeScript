"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          first_name: "Yarles",
          last_name: "de Andrade Espirito Santo",
        },
        {
          id: 2,
          first_name: "Lusinete",
          last_name: "Moreira de Andrade",
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
