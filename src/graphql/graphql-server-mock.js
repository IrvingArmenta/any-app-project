// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('@faker-js/faker').faker;

const randomMessages = new Array(30).fill(null).map((message, i) => {
  return {
    id: i + 1,
    channel_id: faker.random.arrayElements(
      ['general', 'technology', 'lgtm'],
      1
    )[0],
    user_id: faker.random.arrayElements(['1', '2', '3'], 1)[0],
    date: faker.date.recent(),
    content: faker.lorem.sentences()
  };
});

module.exports = {
  channels: [
    {
      name: 'General Channel',
      id: 'general'
    },
    {
      name: 'Technology Channel',
      id: 'technology'
    },
    {
      name: 'LGTM Channel',
      id: 'lgtm'
    }
  ],
  users: [
    {
      id: 1,
      name: 'Joyse'
    },
    {
      id: 2,
      name: 'Sam'
    },
    {
      id: 3,
      name: 'Russell'
    }
  ],
  messages: randomMessages
};
