export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [
        {
          title: 'Name Tech',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
