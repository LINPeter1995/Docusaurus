import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusaurus/blog',
    component: ComponentCreator('/Docusaurus/blog', '1cf'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/archive',
    component: ComponentCreator('/Docusaurus/blog/archive', 'cd9'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/authors',
    component: ComponentCreator('/Docusaurus/blog/authors', '6e8'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Docusaurus/blog/authors/all-sebastien-lorber-articles', 'a8f'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/authors/yangshun',
    component: ComponentCreator('/Docusaurus/blog/authors/yangshun', '846'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/first-blog-post',
    component: ComponentCreator('/Docusaurus/blog/first-blog-post', 'e3f'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/long-blog-post',
    component: ComponentCreator('/Docusaurus/blog/long-blog-post', '8c2'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/Docusaurus/blog/mdx-blog-post', '2c9'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags',
    component: ComponentCreator('/Docusaurus/blog/tags', '6e0'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/Docusaurus/blog/tags/docusaurus', 'a2c'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/facebook',
    component: ComponentCreator('/Docusaurus/blog/tags/facebook', '7e3'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/hello',
    component: ComponentCreator('/Docusaurus/blog/tags/hello', '790'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/hola',
    component: ComponentCreator('/Docusaurus/blog/tags/hola', 'b54'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/welcome',
    component: ComponentCreator('/Docusaurus/blog/welcome', 'dd4'),
    exact: true
  },
  {
    path: '/Docusaurus/markdown-page',
    component: ComponentCreator('/Docusaurus/markdown-page', '7c9'),
    exact: true
  },
  {
    path: '/Docusaurus/docs',
    component: ComponentCreator('/Docusaurus/docs', '618'),
    routes: [
      {
        path: '/Docusaurus/docs',
        component: ComponentCreator('/Docusaurus/docs', '004'),
        routes: [
          {
            path: '/Docusaurus/docs',
            component: ComponentCreator('/Docusaurus/docs', '243'),
            routes: [
              {
                path: '/Docusaurus/docs/category/tutorial---basics',
                component: ComponentCreator('/Docusaurus/docs/category/tutorial---basics', '0c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/category/tutorial---extras',
                component: ComponentCreator('/Docusaurus/docs/category/tutorial---extras', '86e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/intro',
                component: ComponentCreator('/Docusaurus/docs/intro', '484'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Docusaurus/docs/tutorial-basics/congratulations', '1ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Docusaurus/docs/tutorial-basics/create-a-blog-post', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Docusaurus/docs/tutorial-basics/create-a-document', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Docusaurus/docs/tutorial-basics/create-a-page', '909'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Docusaurus/docs/tutorial-basics/deploy-your-site', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Docusaurus/docs/tutorial-basics/markdown-features', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Docusaurus/docs/tutorial-extras/manage-docs-versions', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Docusaurus/docs/tutorial-extras/translate-your-site', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Docusaurus/',
    component: ComponentCreator('/Docusaurus/', 'c47'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
