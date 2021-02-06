
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/SocialFollow',
  component: ComponentCreator('/SocialFollow'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/CustomFilter',
  component: ComponentCreator('/blog/CustomFilter'),
  exact: true,
  
},
{
  path: '/blog/JavaHistory',
  component: ComponentCreator('/blog/JavaHistory'),
  exact: true,
  
},
{
  path: '/blog/Keys_Linux',
  component: ComponentCreator('/blog/Keys_Linux'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/cryptography',
  component: ComponentCreator('/blog/tags/cryptography'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/filter',
  component: ComponentCreator('/blog/tags/filter'),
  exact: true,
  
},
{
  path: '/blog/tags/java',
  component: ComponentCreator('/blog/tags/java'),
  exact: true,
  
},
{
  path: '/blog/tags/linux',
  component: ComponentCreator('/blog/tags/linux'),
  exact: true,
  
},
{
  path: '/blog/tags/ssl',
  component: ComponentCreator('/blog/tags/ssl'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  exact: true,
  
},
{
  path: '/search',
  component: ComponentCreator('/search'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3'),
  exact: true,
  
},
{
  path: '/docs/effectivejava',
  component: ComponentCreator('/docs/effectivejava'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
},
{
  path: '/docs/rust',
  component: ComponentCreator('/docs/rust'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
