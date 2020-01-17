export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e2200d3f1f8868d7f39c7f4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-j6vogwix',
                  apiId: '440ce5a8-466b-4176-8425-ee2855c6ccc1'
                },
                {
                  buildHookId: '5e2200d439926083210c42a0',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-cudft9ro',
                  apiId: '64c00b27-2c5c-45ec-bb10-cbcc10d45b0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edgwatson1/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-cudft9ro.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
