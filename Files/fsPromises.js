const path = require("node:path");
const fsPromises = require("node:fs").promises;

const filePlays = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "lorem.txt"), "utf-8");
    console.log(data)
  } catch (error) {
    console.error(error);

  }
}

filePlays()