/*
Obter a média a partir de um array
0-59 : F
60 - 69 : D
70 - 79 : C
80 -  89 : B
90 - 100: A
*/

var note = [];
var period;
var output = document.getElementById("output");

//function to get the numbers
var getNumber = function () {
  let output = document.getElementById("output");
  let elements;
  note.push(Number(document.getElementById('numP').value)), console.log(note);
  for (elements in note) {
    output.innerHTML = `${Number(elements) + 1} - ${note}`
  }
}

//function to remove the last number

const removeNumber = function () {
  let output = document.getElementById("output");
  let elements;
  note.pop();
  if (note.length > 0) {
    for (elements in note) {
      if (note.length > 0) {
        output.innerHTML = `${Number(elements) + 1} - ${note}`
      } else if (note.length == 0) {
        output.innerHTML = `${Number(elements)} -${note}`
      } else {
        output.innerHTML = ""
      }
    }
  } else {
    output.innerHTML = ""
  }
}

//function to get the average
const averageResult = function () {
  let aluno = function (array) {
    if (array == '') {
      return document.getElementById("numResult").innerHTML =
        "You need to add at least 1 number"
    }
    let total = 0;
    for (let value in array) {
      total += array[value];
    }
    let media = total / array.length;
    if (media > 100) {
      return (document.getElementById("numResult").innerHTML =
        "Enter only values up to 100");
    } else {
      return media;
    }
  }

  let x = Math.round(aluno(note));

  if (x <= 59) {
    return (document.getElementById("numResult").innerHTML =
      "The student had an average of: " + x + ",resulting in E");
  } else if (x <= 69) {
    return (document.getElementById("numResult").innerHTML =
      "The student had an average of: " + x + ",resulting in D");
  } else if (x <= 79) {
    return (document.getElementById("numResult").innerHTML =
      "The student had an average of: " + x + ",resulting in C");
  } else if (x <= 89) {
    return (document.getElementById("numResult").innerHTML =
      "The student had an average of: " + x + ",resulting in B");
  } else if (x <= 100) {
    return (document.getElementById("numResult").innerHTML =
      "The student had an average of: " + x + ",resulting in A");
  } else {
    return console.log("You entered a value outside the parameters");
  }
};
