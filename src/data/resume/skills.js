// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Dev.', 'Languages & Tools'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Dev.'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Dev.'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Dev.'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Dev.'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Dev.', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Web Dev.', 'Databases', 'Languages & Tools'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Dev.'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Dev.', 'Python'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Languages & Tools'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Dev.', 'Languages & Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages & Tools', 'Python'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages & Tools'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages & Tools'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages & Tools'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'OpenCV',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Unreal4',
    competency: 4,
    category: ['Languages & Tools'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Visual Molecular Dynamics',
    competency: 4,
    category: ['Bioinfo', 'Data Science'],
  },
  {
    title: 'NAMD',
    competency: 3,
    category: ['Bioinfo', 'Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#FF0018',
  '#FFA52C',
  '#FFFF41',
  '#008018',
  '#0000F9',
  '#86007D',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
