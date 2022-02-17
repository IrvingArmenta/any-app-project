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
  messages: [
    {
      id: 1,
      channel_id: 'general',
      user_id: 1,
      date: new Date(2022, 02, 10),
      content: 'Hello'
    },
    {
      id: 2,
      channel_id: 'lgtm',
      date: new Date(2022, 02, 12),
      user_id: 2,
      content: 'Does it look good to you?'
    },
    {
      id: 3,
      channel_id: 'technology',
      date: new Date(2022, 02, 10),
      user_id: 3,
      content: 'Technology is cool'
    }
  ]
};
