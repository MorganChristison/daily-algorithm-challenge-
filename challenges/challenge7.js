function swapNum(a, b){
  b = b - a;
  a = a + b;
  b = a - b;
  return a + " " + b; 
};
module.exports = swapNum;