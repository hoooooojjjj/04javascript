function fibonacci(num) {
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
  
  for (var i = 0; i < 10; i++) {
    console.log(fibonacci(i));
  }
  fibonacci(5);