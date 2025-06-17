let coursesObject = [
  {
    userId: 1,
    id: 1,
    title: "Introduction to Artificial Intelligence",
    body: "Learn the basics of Artificial Intelligence and its applications in various industries.",
    link: "https://example.com/article1",
    comment_count: 8,
  },
  {
    userId: 2,
    id: 2,
    title: "Web Development with React",
    body: "Build modern web applications using React.js and explore its powerful features.",
    link: "https://example.com/article2",
    comment_count: 12,
  },
  {
    userId: 3,
    id: 3,
    title: "Data Science Fundamentals",
    body: "Dive into the world of Data Science and discover how to analyze and interpret data.",
    link: "https://example.com/article3",
    comment_count: 5,
  },
];

// JSON.stringify(): Converts a JavaScript object into a JSON string.
// let stringJson = JSON.stringify(coursesObject);
// console.log(typeof stringJson);
// console.log(stringJson);

// let stringJson = JSON.stringify(coursesObject, ["id", "title"], 4);     // To second index is for filter and third is for spaces
// console.log(stringJson);

// JSON.parse(): Converts a JSON string into a JavaScript object.
// let objectJson = JSON.parse(stringJson);
// console.log(typeof objectJson);
// console.log(objectJson);

// for (let course of coursesObject) {
//   console.log(course.title);
// }
