// const displayname=require("./func")
// const namee=require("./names")
// const data=require("./alternateExport")
// require("./newfunction")
// require("./OSbuiltInModule")
// require("./pathBuiltInModule")

// console.log(data)
// displayname(namee.vivek)
// displayname(namee.rohit)



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   
/*
//fs used for reading or writing in a file
const {readFileSync,writeFileSync}=require("fs")
//Below code will read from the given file
const first=readFileSync("./Content/Subfolder/first.txt","utf8");
const second=readFileSync("./Content/Subfolder/second.txt","utf8");
console.log(first,second)
//below code will write in a file or will create a file if such a file dont exists
//this code ill overwrite the previus data of the file
writeFileSync("./Content/CreatedByNode.txt","This is the resultant text "+first+" "+second)
//if you want to append the text, u can add {flag:a} as a parameter
writeFileSync("./Content/CreatedByNode.txt","This is the appended text",{flag:'a'}) 
*/
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  we could read and write file asynchronously also , as like event listners,we pass a callback 
const {readFile,writeFile}=require("fs")
readFile("./Content/Subfolder/first.txt","UTF8",(err,result)=>{
    if(err)
    {console.log(err)
    return}
    console.log(result)}
)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx