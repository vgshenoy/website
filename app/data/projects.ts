export interface ProjectSlide {
  img?: string
  video?: string
  iframe?: string
  text: string
}

export interface ProjectInfo {
  heading: string
  content: string
}

export interface Project {
  id: string
  thumb: string
  title: string
  shortDesc: string
  roles: string[]
  info: ProjectInfo[]
  slides?: ProjectSlide[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'chartr',
    link: 'https://chartr.ai',
    thumb: '/images/chartr/thumb.jpg',
    title: 'Chartr',
    shortDesc: 'is an AI-powered platform for visual storytelling',
    roles: ['product management', 'full stack engineering', 'prototyping'],
    info: [
      {
        heading: 'Links',
        content: '<a href="https://chartr.ai" target="_blank">Website</a>',
      },
      {
        heading: 'Period',
        content: 'Jan 2025 - Present',
      },
    ],
  },
  {
    id: 'scisports',
    thumb: '/images/scisports/player_profile.jpg',
    title: 'SciSports',
    shortDesc: 'helps football clubs make data-driven decisions',
    roles: ['frontend engineering', 'prototyping', 'dataviz'],
    info: [
      {
        heading: 'Links',
        content: '<a href="https://scisports.com" target="_blank">Website</a>',
      },
      {
        heading: 'Period',
        content: 'Jun 2019 - Present',
      },
    ],
    slides: [
      {
        img: '/images/scisports/player_profile.jpg',
        text: 'Player profile page providing an overview of different aspects of a player\'s performance',
      },
      {
        video: '/images/scisports/performance_beeswarm.mp4',
        text: '<a href="https://www.scisports.com/assessing-player-performances-with-scisports/" target="_blank">Contribution</a> of a player compared to players in similar positions',
      },
      {
        video: '/images/scisports/sciskill_development.mp4',
        text: 'Charting out the development of a player\'s career with the help of the <a href="https://www.scisports.com/sciskill-index-why-and-how/" target="_blank">SciSkill</a> index',
      },
      {
        img: '/images/scisports/load_monitoring.jpg',
        text: 'Load monitoring of players in real-time',
      },
    ],
  },
  {
    id: 'shapeofthegame',
    thumb: '/images/sotg/thumb.jpg',
    title: 'Shape of the Game',
    shortDesc: 'is a collection of data-driven, interactive explorations',
    roles: ['dataviz', 'frontend engineering'],
    info: [
      {
        heading: 'Links',
        content: '<a href="https://shapeofthegame.com" target="_blank">Website</a>',
      },
      {
        heading: 'Period',
        content: 'Aug 2018 - Present',
      },
    ],
    slides: [
      {
        video: '/images/sotg/kohli-10000.mp4',
        text: 'Charting out the top scorers over the years in One Day International Cricket',
      },
      {
        video: '/images/sotg/football_anatomy.mp4',
        text: 'Prototype to visualise possession distribution in football in space and time',
      },
      {
        video: '/images/sotg/test_anatomy.mp4',
        text: 'Prototype to bring out the ebb and flow in a cricket test match',
      },
    ],
  },
  {
    id: 'nostragamus',
    thumb: '/images/nostragamus/thumb.jpg',
    title: 'Nostragamus',
    shortDesc: 'is a fantasy sports app to engage with upcoming live sports',
    roles: ['product management', 'full stack engineering', 'prototyping', 'dataviz'],
    info: [
      {
        heading: 'Link',
        content: '<a href="https://nostragamus.in" target="_blank">Website</a>',
      },
      {
        heading: 'With',
        content: '<a href="https://sportscafe.in" target="_blank">Sportscafe</a>',
      },
      {
        heading: 'Period',
        content: 'Apr 2016 - Jan 2019',
      },
    ],
    slides: [
      {
        img: '/images/nostragamus/1.jpg',
        text: 'The core of the game is making predictions about player/team performance through snackable, swipeable content. You can then see where you stand on a leaderboard of other players or friends and win prizes if you join a paid contest.',
      },
      {
        img: '/images/nostragamus/2.jpg',
        text: 'The content team covers multiple sports including Cricket, Football, Basketball, Tennis and Kabbadi. Users can choose between a number of contest structures, both paid as well as free.',
      },
      {
        img: '/images/nostragamus/3.jpg',
        text: 'Initial iterations were done on paper, while getting feedback from the internal team and potential users.',
      },
      {
        img: '/images/nostragamus/4.jpg',
        text: 'Wireframes in Sketch that served as the basis for the final designs.',
      },
      {
        img: '/images/nostragamus/5.jpg',
        text: 'The CMS + admin portal (running on Vue.js talking to a Node.js + PostgreSQL backend) which the content and marketing teams use daily to push out content to the app.',
      },
      {
        img: '/images/nostragamus/6.jpg',
        text: 'One of the tools I built to investigate gameplay, spend and deposit patterns.',
      },
    ],
  },
  {
    id: 'vue-scrollama',
    link: 'https://github.com/shenoy/vue-scrollama',
    thumb: '/images/vue-scrollama/thumb.jpg',
    title: 'vue-scrollama',
    shortDesc: 'is an open source Vue component to setup scroll-driven interactions (aka scrollytelling)',
    roles: ['frontend engineering'],
    info: [
      {
        heading: 'Links',
        content: '<a href="https://github.com/shenoy/vue-scrollama" target="_blank">Github</a>',
      },
      {
        heading: 'Period',
        content: 'Nov 2018 - Present',
      },
    ],
  },
  {
    id: 'indiahikes',
    thumb: '/images/ih/thumb.jpg',
    title: 'indiahikes.com',
    shortDesc: 'is the online experience of India\'s largest trekking provider and community',
    roles: ['prototyping'],
    info: [
      {
        heading: 'Links',
        content: '<a href="https://indiahikes.com" target="_blank">Website</a>',
      },
      {
        heading: 'With',
        content: '<a href="https://indiahikes.com" target="_blank">Indiahikes</a>',
      },
      {
        heading: 'Period',
        content: 'Oct 2017 - Feb 2018',
      },
    ],
    slides: [
      {
        img: '/images/ih/upcoming_treks.jpg',
        text: 'Trekkers who visit the website have different priorities - specific dates, taking on a challenge, snow etc. And some don\'t. Our design needed to balance accomodating all these.',
      },
      {
        img: '/images/ih/reviews.jpg',
        text: 'Revamped reviews section of Indiahikes - where its possible to hear what other trekkers had to say about any aspect of any trek (under content development as of this writing).',
      },
      {
        img: '/images/ih/adventure_ed.jpg',
        text: 'Revamped adventure education section targetting schools, colleges and corporates (under content development as of this writing).',
      },
    ],
  },
  {
    id: 'yoky',
    thumb: '/images/yoky/thumb.jpg',
    title: 'Yoky Tag',
    shortDesc: 'is an IoT product that helps you keep track of your belongings',
    roles: ['product management', 'full stack engineering', 'industrial design', 'prototyping'],
    info: [
      {
        heading: 'Links',
        content: '<a href="https://yoky.io" target="_blank">Website</a>',
      },
      {
        heading: 'With',
        content: '<a href="https://gida.in" target="_blank">Gida</a>',
      },
      {
        heading: 'Period',
        content: 'Aug 2014 - Dec 2016',
      },
    ],
    slides: [
      {
        img: '/images/yoky/1.jpg',
        text: 'Apart from the ability to ring your tag with your phone and vice versa, Yoky Tag also ships with a pedometer to track your daily activity.',
      },
      {
        img: '/images/yoky/2.jpg',
        text: 'Customers can personalise tags with the colours and stickers of their choice.',
      },
      {
        img: '/images/yoky/3.jpg',
        text: 'Early concept sketch and the final piece attached to a set of keys.',
      },
    ],
  },
  {
    id: 'den',
    thumb: '/images/den/thumb.jpg',
    title: 'Network Rollout Manager',
    shortDesc: 'is an internal web app for DEN Networks to monitor rollout of their broadband network',
    roles: ['full stack engineering', 'prototyping'],
    info: [
      {
        heading: 'With',
        content: '<a href="https://gida.in" target="_blank">Gida</a>, <a href="https://www.dennetworks.com" target="_blank">DEN Networks</a>',
      },
      {
        heading: 'Period',
        content: 'Mar 2015 - Mar 2016',
      },
    ],
    slides: [
      {
        img: '/images/den/1.jpg',
        text: 'Network tree view for intuitive access to various nodes in a geography along with their rollout progress.',
      },
      {
        img: '/images/den/2.jpg',
        text: 'A typical form had to capture a range of information about a node including network hierarchies, geographical attributions and lat-long locations.',
      },
      {
        img: '/images/den/3.jpg',
        text: 'Task manager to create, assign and monitor tasks on a Gantt chart.',
      },
      {
        img: '/images/den/4.jpg',
        text: 'Mobile app that allowed users on the field to update, close and flag tasks while on the go.',
      },
    ],
  },
  {
    id: 'airtel-chromecast',
    thumb: '/images/airtel/thumb.jpg',
    title: 'Airtel / Chromecast Experience',
    shortDesc: 'is an immersive web app to simulate the casting experience in the browser',
    roles: ['full stack engineering', 'prototyping'],
    info: [
      {
        heading: 'Links',
        content: '<a href="https://web.archive.org/web/20150625151013/https://chromecast.airtel.in/#home" target="_blank">Archived Link</a>',
      },
      {
        heading: 'With',
        content: '<a href="https://gida.in" target="_blank">Gida</a>, <a href="https://airtel.com" target="_blank">Airtel</a>',
      },
      {
        heading: 'Period',
        content: 'May 2014 - Jan 2015',
      },
    ],
    slides: [
      {
        img: '/images/airtel/landing.jpg',
        text: 'The casting experience was simulated by allowing users to cast from their own mobile phones (paired using a code) or the on-screen mobile phone.',
      },
      {
        img: '/images/airtel/navigation.jpg',
        text: 'The microsite also included purchase and support sections.',
      },
      {
        img: '/images/airtel/sketches.jpg',
        text: 'Sketches in Paper (By FiftyThree) were used as the basis for early discussions and iterations.',
      },
    ],
  },
]
