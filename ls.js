const fs = require("fs").promises; //require the Promises version of the fs library so that it can be used with the await keyword.
// import { promises as fs } from "fs";

async function listFiles() {
  try {
    var dir = ".";

    //Check if user provided a directory argument
    if (process.argv[2]) {
      dir = process.argv[2];
    }

    const files = await fs.readdir(dir);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.error(err);
  }
}

listFiles();
