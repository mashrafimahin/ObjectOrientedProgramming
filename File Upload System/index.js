//! OOP - File Upload System

//! Problem:
//* Upload images, videos, documents
//* Different validation rules
//* Different size limits

//! OOP Concepts:
//* Inheritance
//* Template method pattern

//! Solution:
class File {
  constructor(file, size, type) {
    ((this.file = file), (this.size = size), (this.type = type));
  }

  status() {
    const validFile = this.file;
    const validSize = this.size < 10;
    const validType = this.type === "pdf";

    if (validFile && validSize && validType) {
      const statObj = {
        file: this.file,
        size: this.size,
        fileType: this.type,
      };
      console.log(statObj);
    } else {
      console.log("Invalid file. Try again later.");
    }
  }
}

class FileData extends File {
  constructor(name, size, type) {
    super(name, size, type);
  }
  // features can be added later
}

//! Testcases:
const newFile = new FileData("mahin", 5, "pdf");

console.log(newFile.status());
