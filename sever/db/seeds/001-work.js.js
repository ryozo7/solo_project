/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('work').del();
  await knex('work').insert([
    {
      code: 'bbb',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'kakeru',
    },
    {
      code: 'bbb',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'ayumi',
    },
    {
      code: 'ccc',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'kakeru',
    },
    {
      code: 'bbb',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'ai',
    },
    {
      code: 'ccc',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'kakeru',
    },
    {
      code: 'ccc',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'kakeru',
    },
    {
      code: 'ddd',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'ayumi',
    },
    {
      code: 'bbb',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'ayumi',
    },
    {
      code: 'ccc',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'kakeru',
    },
    {
      code: 'bbb',
      start: '2023-11-25',
      end: '2023-11-25',
      name: 'kakeru',
    },
  ]);
};
