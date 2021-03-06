const fs = require("fs");
const path = require("path");
const remark = require("remark");
const html = require("remark-html");

// look for any `.json` files in the `input` folder, then output to a single json file
const postsDirectory = [
  { inputDirectory: "public/data/posts", outputFile: "public/data/posts.json" },
];

postsDirectory.forEach(processPostsFiles);

// finds all json files in directory, processes to markdown, updates original file, updates output file
function processPostsFiles({ inputDirectory, outputFile }) {
  const postsDirectory = path.join(process.cwd(), inputDirectory);
  const filenames = fs.readdirSync(postsDirectory);

  Promise.all(
    filenames.map(async (filename) => {
      // only allow .json files
      if (!filename.endsWith(".json")) {
        return false;
      }

      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const jsonData = JSON.parse(fileContents);

      // parse / transform any contents
      if (jsonData.body) {
        jsonData.bodyHtml = (await remark().use(html).process(jsonData.body)).toString();
      }
      if (jsonData.date) {
        jsonData.dateFormatted = new Date(jsonData.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      // write transformations back to original file
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

      return jsonData;
    })
  ).then((results) => {
    const posts = results.filter(Boolean);
    // sort
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const outputPath = path.join(process.cwd(), outputFile);
    fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));

    console.log([inputDirectory, outputFile].join(" -> "), posts.length);
  });
}


