// TODO Add a couple lines about each project
const data = [
  {
    title: 'Full Stack Web Application: WaterGit ',
    subtitle: 'A platform for drinking water engineer community and water lovers!',
    link: 'https://watergit.herokuapp.com/',
    image: '/images/projects/WaterGit.png',
    date: 'January 2022 – April 2022',
    desc:
    [
      'Developed a full stack web application for reviewing drinking water quality in different cities. This web application can help users publish review with uploading images and rate other reviews',
      'Used Bootstrap 4 to develop client-side interface and Middleware for authentication and authorization. All pages were designed to be responsive on enhancing user experiences',
      'Used Node.js and Express to implement a servlet as backend server and called APIs in backend, retrieved data deployed in Mongo Cloud to manage web pages in server-side and client-side',
    ]
  },
  {
    title: 'Full Stack Web Application: Electroice ',
    subtitle: 'Shopping your favorite electronic accessories!',
    link: 'https://github.com/yuehaoshi/Electroice_Frontend_Angular',
    image: '/images/projects/Electroice.jpg',
    date: 'May 2022 – July 2022',
    desc:
    [
      'Developed a full-stack e-commerce web application about electronic accessories shopping, performed REST client calls between Angular and Spring Boot and leverage the Hibernate API to develop a CRUD app',
      'Accelerated development process with Spring Data REST and JPA at back-end to connect with MySQL database',
      'Created Angular components and services at front-end for pagination, navigation, validation, and custom searching',
    ]
  },
  {
    title: 'Super Resolution GAN Implementation',
    subtitle: 'Trained GAN model for increasing image resolution',
    link: 'https://github.com/yuehaoshi/cs445-final-project',
    image: '/images/projects/SRGAN.png',
    date: 'March 2022 – May 2022',
    desc:
    [
      'Trained a generative adversarial network for super-resolution image processing using designed generator and discriminator network architecture using Google Cloud Platform',
      'Evaluated up-sampled results with PSNR and SSIM scores and gained performance better than bicubic algorithm super resolution method',
    ]
  },
  {
    title: 'Solar Energy Explorer',
    subtitle: 'Visualization for Solar Energy Distribution',
    link: 'https://github.com/yuehaoshi/Solar_Energy_Appliation',
    image: '/images/projects/SolarExplorer.png',
    date: 'September 2021 – December 2021',
    desc:
    [
      'Constructed a solar-earth system visualization model with Python Plotly module to demonstrate the distinct solar energy distribution on the Earth’s surface. ',
      'Depicted a national solar intensity map using mpl_toolkits module in Python and converted the map into contour to highlight ideal locations for solar panel application. ',
      'Designed a solar panel installation interactive contour using Python Plotly and matplotlib modules to recommend the best installation tilts and azimuths for using solar panels.',
    ]
  },
  {
    title: 'WhereToGo Trip Advisor',
    subtitle: 'Travel Destination Planner',
    link: 'https://github.com/yuehaoshi/WhereToGo_Trip_Advisor',
    image: '/images/projects/WhereToGo.png',
    date: 'July 2021 – August 2021',
    desc:
    [
      'Designed and implemented front-end using Flask to allow users to enter their preference of the tour place and showed the results acquired from the project database. ',
      'Read data from Excel using Python Pandas and stored into MySQL database using Pyodbc to integrate information from different sources into a connected database stored in Google Cloud Platform. ',
      'Developed back-end integrated with Flask to analyze user input based on classification methods to build an interactive user interface and recommend the desired travel destination results.',
    ]
  },
];

export default data;
