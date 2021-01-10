export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffab8d493ca4a8b58652f63',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ktnd5weq',
                  apiId: '646b3b9d-7bb8-4452-a681-dbc258b2fedd'
                },
                {
                  buildHookId: '5ffab8d4eb91b792a228dff0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2n5exn3j',
                  apiId: '487e49c3-8249-4e3c-98db-01630ef80403'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajmalbabu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2n5exn3j.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
