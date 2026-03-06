const facultyImages = [
  'https://picsum.photos/id/100/200/300',
  'https://picsum.photos/id/200/200/300',
  'https://picsum.photos/id/300/200/300',
  'https://picsum.photos/id/400/200/300',
  'https://picsum.photos/id/500/200/300',
  'https://picsum.photos/id/600/200/300',
];

const courseImages = [
  'https://picsum.photos/id/101/200/150',
  'https://picsum.photos/id/102/200/150',
  'https://picsum.photos/id/103/200/150',
  'https://picsum.photos/id/104/200/150',
  'https://picsum.photos/id/106/200/150',
  'https://picsum.photos/id/107/200/150',
];

const videoUrls = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
];

export const faculties = [
  {
    id: 'f1',
    name: 'Faculty of Design Innovation',
    image: facultyImages[0],
    courses: [
      { id: 'c1', name: 'Diploma in Creative Advertising', description: 'Develop creative concepts and campaigns for brands.', image: courseImages[0], video: videoUrls[0] },
      { id: 'c2', name: 'Diploma in Graphic Design', description: 'Master visual communication and digital design.', image: courseImages[1], video: videoUrls[1] },
      { id: 'c3', name: 'Diploma in Fashion and Apparel Design', description: 'Learn fashion illustration, pattern making and garment construction.', image: courseImages[2], video: videoUrls[2] },
      { id: 'c4', name: 'Diploma in Interior Design', description: 'Create functional and aesthetic interior spaces.', image: courseImages[3], video: videoUrls[3] },
      { id: 'c5', name: 'Diploma in Multimedia Design', description: 'Combine graphics, animation and interactive media.', image: courseImages[4], video: videoUrls[4] },
    ],
  },
  {
    id: 'f2',
    name: 'Faculty of Communication, Media and Broadcasting',
    image: facultyImages[1],
    courses: [
      { id: 'c6', name: 'Degree in Professional Communication', description: 'Strategic communication for corporate and public relations.', image: courseImages[0], video: videoUrls[0] },
      { id: 'c7', name: 'Degree in Broadcasting & Journalism', description: 'News reporting, production and ethical journalism.', image: courseImages[1], video: videoUrls[1] },
      { id: 'c8', name: 'Diploma in Television and Film Production', description: 'Hands‑on training in directing, editing and cinematography.', image: courseImages[2], video: videoUrls[2] },
      { id: 'c9', name: 'Diploma in Broadcasting (Radio and TV)', description: 'Techniques for live broadcasting and content creation.', image: courseImages[3], video: videoUrls[3] },
      { id: 'c10', name: 'Diploma in Public Relations', description: 'Manage brand image and media relations.', image: courseImages[4], video: videoUrls[4] },
      { id: 'c11', name: 'Diploma in Journalism and Media', description: 'Write, edit and produce news for multiple platforms.', image: courseImages[5], video: videoUrls[5] },
    ],
  },
  {
    id: 'f3',
    name: 'Faculty of Architecture and the Built Environment',
    image: facultyImages[2],
    courses: [
      { id: 'c12', name: 'Diploma in Architectural Technology', description: 'Technical and design skills for building projects.', image: courseImages[0], video: videoUrls[0] },
      { id: 'c13', name: 'Diploma in Interior Architecture', description: 'Spatial design and renovation of interior environments.', image: courseImages[1], video: videoUrls[1] },
      { id: 'c14', name: 'Diploma in Landscape Architecture', description: 'Design outdoor spaces, parks and gardens.', image: courseImages[2], video: videoUrls[2] },
      { id: 'c15', name: 'Diploma in Urban Planning', description: 'Plan sustainable communities and cities.', image: courseImages[3], video: videoUrls[3] },
      { id: 'c16', name: 'Diploma in Construction Management', description: 'Oversee building projects from start to finish.', image: courseImages[4], video: videoUrls[4] },
    ],
  },
  {
    id: 'f4',
    name: 'Faculty of Business and Globalization',
    image: facultyImages[3],
    courses: [
      { id: 'c17', name: 'Degree in International Business', description: 'Global trade, cross‑cultural management and strategy.', image: courseImages[0], video: videoUrls[0] },
      { id: 'c18', name: 'Degree in Entrepreneurship', description: 'Start and scale innovative ventures.', image: courseImages[1], video: videoUrls[1] },
      { id: 'c19', name: 'Degree in Human Resource Management', description: 'Talent acquisition, development and labour relations.', image: courseImages[2], video: videoUrls[2] },
      { id: 'c20', name: 'Diploma in Business Management', description: 'Foundations of managing organisations and operations.', image: courseImages[3], video: videoUrls[3] },
      { id: 'c21', name: 'Diploma in Retail Management', description: 'Merchandising, customer service and retail operations.', image: courseImages[4], video: videoUrls[4] },
      { id: 'c22', name: 'Diploma in Marketing', description: 'Market research, branding and digital marketing.', image: courseImages[5], video: videoUrls[5] },
    ],
  },
  {
    id: 'f5',
    name: 'Faculty of Creativity in Tourism and Hospitality',
    image: facultyImages[4],
    courses: [
      { id: 'c23', name: 'Degree in Tourism Management', description: 'Strategic planning and marketing for tourism.', image: courseImages[0], video: videoUrls[0] },
      { id: 'c24', name: 'Diploma in Tourism Management', description: 'Travel operations, tour guiding and destination management.', image: courseImages[1], video: videoUrls[1] },
      { id: 'c25', name: 'Diploma in Hotel Management', description: 'Front office, housekeeping and food & beverage management.', image: courseImages[2], video: videoUrls[2] },
      { id: 'c26', name: 'Diploma in Events Management', description: 'Plan and execute conferences, weddings and festivals.', image: courseImages[3], video: videoUrls[3] },
      { id: 'c27', name: 'Diploma in Travel Operations', description: 'Ticketing, tour packaging and customer service.', image: courseImages[4], video: videoUrls[4] },
    ],
  },
  {
    id: 'f6',
    name: 'Faculty of Information and Communication Technology',
    image: facultyImages[5],
    courses: [
      { id: 'c28', name: 'Degree in Software Engineering with Multimedia', description: 'Build software with rich media and interactive elements.', image: courseImages[0], video: videoUrls[0] },
      { id: 'c29', name: 'Degree in Business Information Technology', description: 'Apply IT to solve business problems.', image: courseImages[1], video: videoUrls[1] },
      { id: 'c30', name: 'Degree in Information Technology', description: 'Networks, databases and systems administration.', image: courseImages[2], video: videoUrls[2] },
      { id: 'c31', name: 'Diploma in Multimedia and Software Engineering', description: 'Combine programming with digital media production.', image: courseImages[3], video: videoUrls[3] },
      { id: 'c32', name: 'Diploma in Business Information Technology', description: 'Practical IT skills for business environments.', image: courseImages[4], video: videoUrls[4] },
      { id: 'c33', name: 'Diploma in Information Technology', description: 'Core concepts in computing and technical support.', image: courseImages[5], video: videoUrls[5] },
    ],
  },
];