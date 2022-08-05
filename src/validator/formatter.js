function trim(str){
    const newStr = str.trim();
    console.log(newStr)
}
function changetoLowerCase(str){
    const lower = str.toLowerCase();
    console.log(lower);
}
function changetoUpperCase(str){
    const upper = str.toUpperCase();
    console.log(upper);
}
module.exports.trim = trim ;
module.exports.lower = changetoLowerCase ;
module.exports.upper = changetoUpperCase;
