function swapNum(a, b){
  b = b - a;
  a = a + b;
  b = a - b;
  return b + " " + a; 
};
module.export = swapNum;