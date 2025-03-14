import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'github_users',
        columns: [
          { name: 'login', type: 'string' },
          { name: 'url', type: 'string' },
          { name: 'avatar_url', type: 'string' },
        ],
      }),
  ]
})