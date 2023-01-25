function fizzBuzz() {
  const num = document.getElementById("numFB");
  const value = num.value;

  if (value % 5 == 0 && value % 3 == 0) {
    return (document.getElementById("numResult").innerHTML =
      '<span style="color: red";>Fizz</span><span style="color: blue";>Buzz</span> (divisible by 3 and 5)');
  } else if (value % 3 == 0) {
    return (document.getElementById("numResult").innerHTML =
      '<span style="color: red";>Fizz</span> (divisible by 3)');
  } else if (value % 5 == 0) {
    return (document.getElementById("numResult").innerHTML =
      '<span style="color: blue";>Buzz</span> (divisible by 5)');
  }
  return (document.getElementById("numResult").innerHTML =
    value + " is not divisible by 3(<span style='color: red';>Fizz</span>) or 5(<span style='color: blue';>Buzz</span>)");
}
