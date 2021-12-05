// videos
import scisportsVid1 from '../assets/images/scisports/performance_beeswarm.mp4'
import scisportsVid2 from '../assets/images/scisports/sciskill_development.mp4'

import sotgVid1 from '../assets/images/sotg/test_anatomy.mp4'
import sotgVid2 from '../assets/images/sotg/football_anatomy.mp4'
import sotgVid3 from '../assets/images/sotg/kohli-10000.mp4'

// images
import scisportsThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/scisports/player_profile.jpg'
import scisportsImg2 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/scisports/load_monitoring.jpg'

import sotgThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/sotg/thumb.jpg'
// import sotgImg1 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/sotg/waterfall_innings.jpg'

import vueScrollamaThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/vue-scrollama/thumb.jpg'

import nostraThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/nostragamus/thumb.jpg'
import nostraImg1 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/nostragamus/1.jpg'
import nostraImg2 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/nostragamus/2.jpg'
import nostraImg3 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/nostragamus/3.jpg'
import nostraImg4 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/nostragamus/4.jpg'
import nostraImg5 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/nostragamus/5.jpg'
import nostraImg6 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/nostragamus/6.jpg'

import yokyThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/yoky/thumb.jpg'
import yokyImg1 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/yoky/1.jpg'
import yokyImg2 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/yoky/2.jpg'
import yokyImg3 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/yoky/3.jpg'

import airtelThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/airtel/thumb.jpg'
import airtelImg1 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/airtel/landing.jpg'
import airtelImg2 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/airtel/navigation.jpg'
// import airtelImg3 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/airtel/support.jpg'
import airtelImg4 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/airtel/sketches.jpg'

import denThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/den/thumb.jpg'
import denImg1 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/den/1.jpg'
import denImg2 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/den/2.jpg'
import denImg3 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/den/3.jpg'
import denImg4 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/den/4.jpg'

import ihThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/ih/thumb.jpg'
import ihImg1 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/ih/upcoming_treks.jpg'
import ihImg2 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/ih/reviews.jpg'
import ihImg3 from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/ih/adventure_ed.jpg'

export default [
  {
    id: 'scisports',
    thumb: scisportsThumb,
    title: 'SciSports',
    shortDesc: 'helps football clubs make data-driven decisions',
    roles: ['frontend engineering', 'prototyping', 'dataviz'],
    desc: `<p><a href="https://scisports.com" target="_blank">SciSports</a> helps football clubs and professionals make data-driven decisions. This includes helping clubs scout and identify players to sign, analysing performance in past matches and preparing for upcoming opponents.</p>
      <p>When I joined in summer 2019, our product offering was still rudimentary, the interface was basic and the speed of frontend development wasn’t fast enough for where we were in the product life cycle. Picking up from there, I lead the frontend engineering team to architect and execute a transition to a new frontend stack underpinned by a <a href="https://components.scisports.app" target="_blank">component library and design system</a> powered by <a href="https://vuejs.org" target="_blank">Vue.js</a>, <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>. We also leaned on <a href="https://d3js.org" target="_blank">D3.js</a> wherever required for interactive data visualisations.</p>
      <p>We've come a long way since to today where we're in a position to rapidly prototype and ship interfaces to customers through multiple product offerings used by <a href="https://www.scisports.com/track-record/" target="_blank">marquee customers</a>.</p>`,
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
        img: scisportsThumb,
        text: "Player profile page providing an overview of different aspects of a player's performance",
      },
      {
        video: scisportsVid1,
        text: '<a href="https://www.scisports.com/assessing-player-performances-with-scisports/" target="_blank">Contribution</a> of a player compared to players in similar positions',
      },
      {
        video: scisportsVid2,
        text: 'Charting out the development of a player\'s career with the help of the <a href="https://www.scisports.com/sciskill-index-why-and-how/" target="_blank">SciSkill</a> index',
      },
      {
        img: scisportsImg2,
        text: 'Load monitoring of players in real-time',
      },
    ],
  },
  {
    id: 'shapeofthegame',
    thumb: sotgThumb,
    title: 'Shape of the Game',
    shortDesc: 'is a collection of data-driven, interactive explorations',
    roles: ['dataviz', 'frontend engineering'],
    desc: `<p><a href="https://shapeofthegame.com" target="_blank">Shape of the Game</a> is a personal project where I experiment with data-driven, interactive explorations primarily in sports. It started out when I was using dataviz and data science tools to understand user behaviour, and started playing around with sports data in my spare time.</p>
      <p>In working on any of these explorations, I use Javascript/Python to scrape, wrangle and start running initial explorations on the data. Following that, I like to move into <a href="https://vuejs.org" target="_blank">Vue.js</a> and <a href="https://d3js.org" target="_blank">D3.js</a> to build in custom views and interactivity.</p>
      <p>The first two pieces published garnered an <a href="https://www.informationisbeautifulawards.com/showcase/3811-kohli-s-path-to-10-000-runs-charted" target="_blank">Information is Beautiful Awards shortlist</a> and a <a href="https://pudding.cool/process/pudding-cup-2019/" target="_blank">Pudding Cup</a> respectively.</p>`,
    info: [
      {
        heading: 'Links',
        content:
          '<a href="https://shapeofthegame.com" target="_blank">Website</a>',
      },
      {
        heading: 'Period',
        content: 'Aug 2018 - Present',
      },
    ],
    slides: [
      {
        video: sotgVid3,
        text: 'Charting out the top scorers over the years in One Day International Cricket',
      },
      {
        video: sotgVid2,
        text: 'Prototype to visualise possession distribution in football in space and time',
      },
      {
        video: sotgVid1,
        text: 'Prototype to bring out the ebb and flow in a cricket test match',
      },
    ],
  },
  {
    id: 'nostragamus',
    thumb: nostraThumb,
    title: 'Nostragamus',
    shortDesc: 'is a fantasy sports app to engage with upcoming live sports',
    roles: [
      'product management',
      'full stack engineering',
      'prototyping',
      'dataviz',
    ],
    desc: `<p><a href="https://nostragamus.in" target="_blank">Nostragamus</a> is a daily fantasy sports app with a twist - instead of picking a full team within constraints of a budget, users have to answer a series of questions about player or team performances. Each question comes with context and statistics, which put together, serve as a compact preview of upcoming matches. Since launch, Nostragamus has grown to over a million registered users at over tens of thousands of daily active users in traffic.</p>
      <p>I created this concept for <a href="https://sportscafe.in/" target="_blank">Sportscafe</a> in 2016, when they were exploring an interactive angle to their sports coverage. Offerings in the fantasy sports space tend to be geared towards 'Pro' users, who have the time and motivation to stay on top of sports news and carefully build a team keeping in-game budget constraints in mind. I wanted to create something that could bring more casual sports followers into the fold.</p>
      <p>I wireframed early prototypes on paper and <a href="https://www.sketchapp.com/" target="_blank">Sketch</a>, and then lead product development into launch in early 2017, working closely with the design, engineering and content teams at Sportscafe. A critical piece in the system that I architected is an admin portal + database that allows the content team to create questions and push out content on a daily basis to the app. To build this out I leaned on <a href="https://vuejs.org" target="_blank">Vue.js</a> + <a href="https://nodejs.org" target="_blank">Node.js</a> + <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>.</p>
      <p>Later on, I built tools to understand user behaviour, gameplay and spend patterns, so that it may be translated into better contest structures, features and marketing efforts.</p>`,
    info: [
      {
        heading: 'Link',
        content: '<a href="https://nostragamus.in" target="_blank">Website</a>',
      },
      {
        heading: 'With',
        content:
          '<a href="https://sportscafe.in" target="_blank">Sportscafe</a>',
      },
      {
        heading: 'Period',
        content: `Apr 2016 - Jan 2019`,
      },
    ],
    slides: [
      {
        img: nostraImg1,
        text: 'The core of the game is making predictions about player/team performance through snackable, swipeable content. You can then see where you stand on a leaderboard of other players or friends and win prizes if you join a paid contest.',
      },
      {
        img: nostraImg2,
        text: 'The content team covers multiple sports including Cricket, Football, Basketball, Tennis and Kabbadi. Users can choose between a number of contest structures, both paid as well as free.',
      },
      {
        img: nostraImg3,
        text: 'Initial iterations were done on paper, while getting feedback from the internal team and potential users.',
      },
      {
        img: nostraImg4,
        text: 'Wireframes in Sketch that served as the basis for the final designs.',
      },
      {
        img: nostraImg5,
        text: 'The CMS + admin portal (running on Vue.js talking to a Node.js + PostgreSQL backend) which the content and marketing teams use daily to push out content to the app.',
      },
      {
        img: nostraImg6,
        text: 'One of the tools I built to investigate gameplay, spend and deposit patterns.',
      },
    ],
  },
  {
    id: 'vue-scrollama',
    link: 'https://github.com/shenoy/vue-scrollama',
    thumb: vueScrollamaThumb,
    title: 'vue-scrollama',
    shortDesc:
      'is an open source Vue component to setup scroll-driven interactions (aka scrollytelling)',
    roles: ['frontend engineering'],
    desc: `
    <p><a href="https://github.com/shenoy/vue-scrollama" target="_blank">Vue-Scrollama</a> is an open source Vue component to easily setup scroll-driven interactions (aka scrollytelling) on the web.</p>
    `,
    info: [
      {
        heading: 'Links',
        content:
          '<a href="https://github.com/shenoy/vue-scrollama" target="_blank">Github</a>',
      },
      {
        heading: 'Period',
        content: 'Nov 2018 - Present',
      },
    ],
  },
  {
    id: 'indiahikes',
    thumb: ihThumb,
    title: 'indiahikes.com',
    shortDesc:
      "is the online experience of India's largest trekking provider and community",
    roles: ['prototyping'],
    desc: `
      <p><a href="https://indiahikes.com" target="_blank">Indiahikes</a> is India’s largest trekking community - they run over 20 treks in various ranges of the Himalayas, drive conservation efforts and undertake outdoor education programmes.</p>
      <p>I first came on board in 2017, when I redesigned the online flow of a user browsing treks and picking one to book themselves on. To design the new flow, we laid out all factors that trekkers might consider while making a choice including time of the year, region, snow cover, flora and fauna. We then segmented and profiled visitors according to their trekking experience. For instance, a large number of trekkers are first-timers while experienced trekkers are interested only in moderate to difficult treks. Keeping the size and needs of these segments in mind, the final design had to be a balance between recommendation, exploration and availability.</p>
      <p>In this project, I took a bit of an experimental approach of rapid prototyping in <a href="https://vuejs.org" target="_blank">Vue.js</a>. Leveraging <a href="https://bulma.io" target="_blank">Bulma</a> and open source Vue components allowed iteration at speed which I deployed using Zeit’s <a href="https://zeit.co/now" target="_blank">Now</a> to <a href="https://ih-treks.now.sh" target="_blank">ih-treks.now.sh</a>. This allowed the team at Indiahikes to see and play around with responsive, interactive versions of my design, rather than static and separate mobile, tablet and desktop versions.</p>
      `,
    info: [
      {
        heading: 'Links',
        content: '<a href="https://indiahikes.com" target="_blank">Website</a>',
      },
      {
        heading: 'With',
        content:
          '<a href="https://indiahikes.com" target="_blank">Indiahikes</a>',
      },
      {
        heading: 'Period',
        content: 'Oct 2017 - Feb 2018',
      },
    ],
    slides: [
      {
        img: ihImg1,
        text: `Trekkers who visit the website have different priorities - specific dates, taking on a challenge, snow etc. And some don't. Our design needed to balance accomodating all these.`,
      },
      {
        img: ihImg2,
        text: 'Revamped reviews section of Indiahikes - where its possible to hear what other trekkers had to say about any aspect of any trek (under content development as of this writing).',
      },
      {
        img: ihImg3,
        text: 'Revamped adventure education section targetting schools, colleges and corporates (under content development as of this writing).',
      },
    ],
  },
  {
    id: 'yoky',
    thumb: yokyThumb,
    title: 'Yoky Tag',
    shortDesc: 'is an IoT product that helps you keep track of your belongings',
    roles: [
      'product management',
      'full stack engineering',
      'industrial design',
      'prototyping',
    ],
    desc: `
      <p><a href="https://yoky.io/tag" target="_blank">Yoky Tag</a> is a Bluetooth Low Energy (BLE) powered device that helps you keep track of the belongings you tag them onto. It works in tandem with a companion app available on both Android and iOS smartphones. It was launched in 2016 and was featured in <a href="https://www.livemint.com/Leisure/oO9albNSGCcT3RZxBCxgSO/Yoky-Tag-review-For-finding-misplaced-keys-and-more.html" target="_blank">Mint</a>, <a href="https://www.business-standard.com/article/technology/yoky-because-it-s-human-to-forget-116073100790_1.html" target="_blank">Business Standard</a>, <a href="https://www.deccanchronicle.com/technology/gadgets/290716/in-a-new-yoky-state-of-find.html" target="_blank">Deccan Chronicle</a>, <a href="https://www.mid-day.com/articles/tech-new-wireless-tracker-will-ensure-youll-never-lose-your-belongings/17529176" target="_blank">Mid-Day</a> among other media outlets.</p>
      <p>While working at <a href="https://gida.in" target="_blank">Gida</a> (a product and service development company), we saw BLE maturing as a technology and decided to work on this idea. Taking it from concept to prototype and finally into production nearly two years and several design iterations.</p>
      <p>I was responsible for two major pieces of making this happen. First, the design and supply chain for all non-electronic components.  For this, I scouted, shortlisted and worked with a number of vendors (plastics, rubber, waterproofing, packaging, 3D printing) in India and China.  The second piece was the end to end purchase and shipping experience. This included development of the website where customers could learn about the product and personalise it (we offered customer-uploaded images and colors) all the way to our backend system used to assemble the ordered units and ship it with providers like FedEx.</p>
      `,
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
        img: yokyImg1,
        text: 'Apart from the ability to ring your tag with your phone and vice versa, Yoky Tag also ships with a pedometer to track your daily activity.',
      },
      {
        img: yokyImg2,
        text: 'Customers can personalise tags with the colours and stickers of their choice.',
      },
      {
        img: yokyImg3,
        text: 'Early concept sketch and the final piece attached to a set of keys.',
      },
      {
        iframe:
          '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyokysays%2Fvideos%2F1364054433605058%2F&show_text=0" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        text: 'We setup an in-house assembly line in Bangalore powered by an internal Node.js application to service customer orders - capabilities include batching and printing stickers (using a <a href="https://www.rolanddga.com/products/printers/versastudio-bn-20-t-shirt-printing-press">Roland BN20</a> printer-cutter), handling barcodes and integrating with shipping providers.',
      },
      {
        iframe:
          '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyokysays%2Fvideos%2F1234768389866997%2F&show_text=0&width=560" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        text: 'Teaser trailer I created as part of the launch. Apart from social media, we also ran on the ground activations in coffee shops and exhibitions and garnered coverage in various media publications',
      },
    ],
  },
  {
    id: 'den',
    thumb: denThumb,
    title: 'Network Rollout Manager',
    shortDesc:
      'is an internal web app for DEN Networks to monitor rollout of their broadband network',
    roles: ['full stack engineering', 'prototyping'],
    desc: `<p><a href="https://www.dennetworks.com" target="_blank">DEN Networks</a> is the largest cable TV distribution provider in India. In 2014, they doubled down on the broadband arm of their business which entailed rapid geographic expansion of their physical network.</p>
    <p>At Gida, we worked with the internal team to build and deploy a system that efficiently tracked and monitored rollouts with network tree diagrams, Gantt charts and task management modules. The system also had to allow dynamic creation of accounts and permission handling for DEN's contractors.</p>`,
    info: [
      {
        heading: 'With',
        content:
          '<a href="https://gida.in" target="_blank">Gida</a>, <a href="https://www.dennetworks.com" target="_blank">DEN Networks</a>',
      },
      {
        heading: 'Period',
        content: 'Mar 2015 - Mar 2016',
      },
    ],
    slides: [
      {
        img: denImg1,
        text: 'Network tree view for intuitive access to various nodes in a geography along with their rollout progress.',
      },
      {
        img: denImg2,
        text: 'A typical form had to capture a range of information about a node including network hierarchies, geographical attributions and lat-long locations.',
      },
      {
        img: denImg3,
        text: 'Task manager to create, assign and monitor tasks on a Gantt chart.',
      },
      {
        img: denImg4,
        text: 'Mobile app that allowed users on the field to update, close and flag tasks while on the go.',
      },
    ],
  },
  {
    id: 'airtel-chromecast',
    thumb: airtelThumb,
    title: 'Airtel/Chromecast Experience',
    shortDesc:
      'is an immersive web app to simulate the casting experience in the browser',
    roles: ['full stack engineering', 'prototyping'],
    desc: `<p>In 2014, Google partnered with <a href="https://airtel.com" target="_blank">Airtel</a> to bring the <a href="https://store.google.com/us/product/chromecast" target="_blank">Chromecast</a> to the Indian market. Gida worked on building an online experience for the launch.</p> <p>Leveraging websocket protocols, we built an immersive web experience that allowed visitors to control video playback on desktop browsers from their smartphones, thereby simulating the 'magic' and convenience of the casting experience.</p>`,
    info: [
      {
        heading: 'Links',
        content:
          '<a href="https://web.archive.org/web/20150625151013/https://chromecast.airtel.in/#home" target="_blank">Archived Link</a>',
      },
      {
        heading: 'With',
        content:
          '<a href="https://gida.in" target="_blank">Gida</a>, <a href="https://airtel.com" target="_blank">Airtel</a>',
      },
      {
        heading: 'Period',
        content: 'May 2014 - Jan 2015',
      },
    ],
    slides: [
      {
        img: airtelImg1,
        text: 'The casting experience was simulated by allowing users to cast from their own mobile phones (paired using a code) or the on-screen mobile phone.',
      },
      {
        img: airtelImg2,
        text: 'The microsite also included purchase and support sections.',
      },
      {
        img: airtelImg4,
        text: 'Sketches in Paper (By FiftyThree) were used as the basis for early discussions and iterations.',
      },
    ],
  },
]
