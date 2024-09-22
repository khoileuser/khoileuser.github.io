// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'khoileuser', // Your GitHub org/user name. (This is the only required config) 
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 100, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2'] 
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'faberuser',
          description: '',
          imageUrl: '',
          link: 'https://github.com/faberuser',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Le Nguyen Khoi',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://khoileuser.github.io',
    phone: '',
    email: 'lengkhoi@outlook.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'C++',
    'HTML',
    'CSS',
    'Markdown',
    'Java',
    'JavaScript',
    'PowerShell',
    'Shell Script',
    'TypeScript',
    'Windows Terminal',
    'YAML',
    'Python',
    'AWS',
    'CloudFlare',
    'Git',
    'Github Actions',
    'GitHub Pages',
    'Heroku',
    'Oracle',
    'Vercel',
    'Bootstrap',
    'Django',
    'Electron',
    'Express.js',
    'FastAPI',
    'Flask',
    'IOHTTP',
    'Jinja',
    'npm',
    'Next',
    'Node.js',
    'React',
    'TailwindCSS',
    'Anaconda',
    'Context-API',
    'OpenCV',
    'Numpy',
    'Pandas',
    'Pytorch',
    'Tensorflow',
    'QT',
    'Election',
    'Adobe',
    'Blender',
    'Figma',
    'Arduino',
    'Eslint',
    'Postman',
    'Docker',
  ],
  experiences: [],
  certifications: [],
  educations: [
    {
      institution: 'RMIT',
      degree: 'Bachelor of Information Technology',
      from: '2023',
      to: 'current',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/khoileuser/khoileuser.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
