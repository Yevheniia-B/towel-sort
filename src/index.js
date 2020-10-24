
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
let newArray = [];
  
for (let i = 0; i < matrix.length; i++) {

  if (i % 2 !== 0) {
     newArray = newArray.concat(matrix[i].sort((a,b) => b - a));
    }
     else if (i % 2 === 0) {
    newArray = newArray.concat(matrix[i].sort((a,b) => a - b));
    
  }
 }
 return newArray;
}
