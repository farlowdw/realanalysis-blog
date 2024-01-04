// the default export must be an object whose key values are
// 1-dimensional arrays comprised of objects that possess AT LEAST
// "id" and "title" property values; author, time, and link property values are optional
// property names of the default export object may be chosen at will
const bibItems = {
  francisSu: [
    {
      id: 'FS2017',
      title: `Mathematics for Human Flourishing (Article)`,
      author: 'Francis Su',
      time: '2017',
      link: 'https://mathyawp.wordpress.com/2017/01/08/mathematics-for-human-flourishing/',
    },
    {
      id: 'FS2021',
      title: `Mathematics for Human Flourishing (Book)`,
      author: 'Francis Su',
      time: '2017',
      link: 'https://www.amazon.com/Mathematics-Human-Flourishing-Francis/dp/0300258518/ref=sr_1_1',
    },
    {
      id: 'FS2013',
      title: `The Lesson of Grace in Teaching`,
      author: 'Francis Su',
      time: '2013',
      link: 'https://www.francissu.com/post/the-lesson-of-grace-in-teaching',
    },
    {
      id: 'FSYawp',
      title: `Analysis Yawp!`,
      author: 'Francis Su',
      time: '2024',
      link: 'https://analysisyawp.blogspot.com/',
    },
  ],
  analysis: [
    {
      id: 'GBRudin1',
      title: `Answers to Students' Questions`,
      author: 'George Bergman',
      time: '2006',
      link: 'https://math.berkeley.edu/~gbergman/ug.hndts/06x2+03F_104_q+a.txt',
    },
    {
      id: 'GBRudin2',
      title: `Supplements to the Exercises in Rudin`,
      author: 'George Bergman',
      time: '',
      link: 'https://math.berkeley.edu/~gbergman/ug.hndts/m104_Rudin_exs.pdf',
    },
    {
      id: 'WR1991',
      title: `Functional Analysis`,
      author: 'Walter Rudin',
      time: '1991',
      link: 'https://www.amazon.com/gp/product/0070542368',
    },
    {
      id: 'WR1976',
      title: `Principles of Mathematical Analysis`,
      author: 'Walter Rudin',
      time: '1976',
      link: 'https://www.amazon.com/gp/product/007054235X',
    },
    {
      id: 'WR1987',
      title: `Real and Complex Analysis`,
      author: 'Walter Rudin',
      time: '1987',
      link: 'https://www.amazon.com/gp/product/0070542341',
    },
    {
      id: 'TT2016V1',
      title: `Analysis I`,
      author: 'Terence Tao',
      time: '2016',
      link: 'https://www.amazon.com/gp/product/9380250649',
    },
    {
      id: 'TT2016V2',
      title: `Analysis II`,
      author: 'Terence Tao',
      time: '2016',
      link: 'https://www.amazon.com/gp/product/9380250657',
    },
    {
      id: 'HW1996',
      title: `Epsilon Sandwiches`,
      author: 'Herbert Wilf',
      time: '1996',
      link: 'https://www2.math.upenn.edu/~wilf/website/MAASpeech',
    },
    {
      id: 'SK2013',
      title: `Real Analysis and Foundations`,
      author: 'Steven Krantz',
      time: '2013',
      link: 'https://www.amazon.com/gp/product/1466587318',
    },
    {
      id: 'SL2006',
      title: `Analysis: With an Introduction to Proof`,
      author: 'Stephen Lay',
      time: '2006',
      link: 'https://www.amazon.com/gp/product/0131481010',
    },
    {
      id: 'SA2001',
      title: `Understanding Analysis`,
      author: 'Stephen Abbott',
      time: '2001',
      link: 'https://www.amazon.com/gp/product/1493927116',
    },
    {
      id: 'MS2008',
      title: `Introduction to Real Analysis`,
      author: 'Michael Schramm',
      time: '2008',
      link: 'https://www.amazon.com/gp/product/0486469131',
    },
  ],
  generalMath: [
    {
      id: 'IS1995',
      title: `Concepts of Modern Mathematics`,
      author: 'Ian Stewart',
      time: '1995',
      link: 'https://www.amazon.com/gp/product/0486284247',
    },
    {
      id: 'JS2012',
      title: `Calculus: Early Transcendentals`,
      author: 'James Stewart',
      time: '2012',
      link: 'https://www.amazon.com/gp/product/0538497904',
    },
  ]
}

export default bibItems;
