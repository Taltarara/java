
/*
                                    Variable Definitions
*/
var words ;
var file = "./test.html";
var posWord = "./textwl.txt";
var outputDoc = "./testput.txt";
var numberTrue = 1
var testwords = ["stack", "cat", "dog"]
/*
                                Word List function (wordFunc)
*/
function wordFunc(){
  var fs = require("fs");
  var positiveWords = fs.readFileSync(posWord, 'utf8', function (err,){;
    if (err) {console.log("There was an error in reading the Positive Word list, refer to wordFunc()")}})
    words = positiveWords.split(',')
  console.log(words)
}
wordFunc();
/*
                                Read/Write function(readFunc)
*/
function readFunc(){
  var fs = require("fs");
  var outputRead = fs.readFileSync(file, 'utf8', function(err){
   if (err){console.log("There was an error in reading, refer to readFunc")
 }
}
);
// Data has been read by now
  fs.writeFile(outputDoc, "heya " + outputRead, function(err){
    if (err){console.log("There was an error in writing, refer to readFunc")
  }
  }
);
  console.log("Writing Output Successful")
}
readFunc()                    /*CALLING READ/WRITE FUNCTION*/
// Data has been ouputted to testput by now
/*
                              Word Finding Function (findFunc)
*/
function findFunc()
{
  var fs = require("fs");
  var readableData = fs.readFile(outputDoc, 'utf8', function(err, data){
    if (err)
    {
      console.log("There was an error while reading outputDoc, refer to findFunc")
    }
  var  readableData = data
  var wordChk = readableData.includes(words);
  console.log(wordChk)
  if (wordChk == true) {
    numberTrue = numberTrue + 1
    console.log(readableData)
  }
  }
);
}
findFunc()                     /*CALLING FIND FUNCTION*/
