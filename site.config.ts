import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '9f0e19dedcdf43cda2ce9155b3ad4bc5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ryan Ma Portfolio',
  domain: 'yutengma.me',
  author: 'Ryan Ma',

  // open graph metadata (optional)
  description: 'Ryan Ma\'s Portfolio',

  // social usernames (optional)
  // twitter: '',
  github: 'goblinrum',
  linkedin: 'ryan-ma-30',
  fun: 'fun',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/fun': '50063d9cdb074e73b1eb111962f05fba'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Experience',
      pageId: 'e0dff3733e2041fc85919b22aade3355'
    },
    {
      title: 'Projects',
      pageId: '86674c8c778a4fae9045619080753c2d'
    },
    {
      title: 'Blog',
      pageId: '9c47eb6726c3404ead6b54fb3f2a8ea2'
    },
  ]
})
