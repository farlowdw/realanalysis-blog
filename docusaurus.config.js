// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const katexMacros = require('./katex-macros');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Real Analysis',
  tagline: 'The proof is trivial.',
  favicon: 'img/favicon.ico',
  url: 'https://realanalysis.blog',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  customFields: {
    forbiddenGiscusDocPaths: [
      '/docs/intro'
    ],
    forbiddenGiscusBlogPaths: [
      '/blog/2024/01/04/2024/first-post'
    ],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/farlowdw/realanalysis-blog/tree/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {
            throwOnError: true,
            globalGroup: true,
            macros: katexMacros
          }]],
          showLastUpdateTime: true
        },

        blog: {
          showReadingTime: false,
          editUrl:
            'https://github.com/farlowdw/realanalysis-blog/tree/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {
            throwOnError: true,
            globalGroup: true,
            macros: katexMacros
          }]],
          blogTitle: 'Real Analysis Blog',
          blogDescription: 'This blog is dedicated to all posts concerning real analysis',
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          sortPosts: 'descending',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },

        pages: {
          rehypePlugins: [[rehypeKatex, {
            throwOnError: true,
            globalGroup: true,
            macros: katexMacros
          }]],
        },

      }),
    ],
  ],

  stylesheets: [
    // KaTeX
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    // Pseudocode (ref: https://www.npmjs.com/package/pseudocode)
    {
      href: 'https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  scripts: [
    // KaTeX
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.7/katex.min.js",
      async: true,
    },
    // Pseudocode (ref: https://www.npmjs.com/package/pseudocode)
    {
      src: "https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.js",
      async: true,
    },
  ],

  plugins: [
    [
      'docusaurus2-dotenv',
      {
        path: "./.env", // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      }
    ],
    'docusaurus-plugin-sass',
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'Real Analysis',
        hideOnScroll: true,
        logo: {
          alt: 'Title Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Core Content',
            position: 'left',
            activeBaseRegex: `/docs/(?!tags)`,
          },
          {
            to: '/docs/tags',
            label: 'Tags',
            position: 'left',
            activeBaseRegex: `/docs/tags`,
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
            activeBaseRegex: `/blog(?!/archive|/tags)`,
          },
          {
            to: '/blog/archive',
            label: 'Blog Archive',
            position: 'left'
          },
          {
            to: '/blog/tags',
            label: 'Blog Tags',
            position: 'left'
          },
          {
            href: 'https://analysisyawp.blogspot.com/',
            label: 'Analysis Yawp!',
            position: 'right',
          },
          {
            href: 'https://github.com/farlowdw/realanalysis-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Core',
            items: [
              {
                label: 'Intro Doc',
                to: '/docs/intro',
              },
              {
                label: 'Francis Su Lecture Notes',
                to: '/docs/francis-su-analysis-lectures/construction-of-the-rational-numbers',
              },
              {
                label: 'Reference List',
                to: '/docs/references',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Welcome Post',
                to: '/blog/2024/01/04/2024/welcome',
              },
            ],
          },
          {
            title: 'Reference',
            items: [
              {
                label: 'KaTeX',
                href: 'https://katex.org/docs/supported',
              },
              {
                label: 'Pseudocode',
                href: 'https://www.npmjs.com/package/pseudocode',
              },
            ],
          },
          {
            title: 'External',
            items: [
              {
                label: 'Analysis Yawp! (Francis Su)',
                href: 'https://analysisyawp.blogspot.com/',
              },
              {
                label: 'Solutions to Baby Rudin by Roger Cooke',
                href: 'https://minds.wisconsin.edu/handle/1793/67009',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} REALANALYSIS.BLOG`,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-error-next-line',
            block: { start: 'highlight-error-start', end: 'highlight-error-end' },
          },
          {
            className: 'code-block-success-line',
            line: 'highlight-success-next-line',
            block: { start: 'highlight-success-start', end: 'highlight-success-end' },
          },
        ],
        additionalLanguages: [
          "apacheconf",
          "applescript",
          "asciidoc",
          "aspnet",
          "awk",
          "bash",
          "basic",
          "c",
          "clojure",
          "cpp",
          "csharp",
          "css",
          "csv",
          "docker",
          "editorconfig",
          "ejs",
          "elixir",
          "erlang",
          "excel-formula",
          "flow",
          "fortran",
          "git",
          "go",
          "go-module",
          "graphql",
          "handlebars",
          "http",
          "java",
          "javadoclike",
          "javascript",
          "js-extras",
          "jsdoc",
          "json",
          "jsonp",
          "jsx",
          "latex",
          "less",
          "lisp",
          "log",
          "lua",
          "makefile",
          "markdown",
          "markup",
          "markup-templating",
          "mermaid",
          "mongodb",
          "nginx",
          "perl",
          "php",
          "php-extras",
          "phpdoc",
          "plsql",
          "powerquery",
          "powershell",
          "pug",
          "python",
          "r",
          "regex",
          "ruby",
          "rust",
          "sas",
          "sass",
          "scheme",
          "scss",
          "shell-session",
          "sql",
          "systemd",
          "toml",
          "tsx",
          "turtle",
          "typescript",
          "vim",
          "visual-basic",
          "wasm",
          "wiki",
          "wolfram",
          "yaml"
        ]
      },
    }),
};

export default config;