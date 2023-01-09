function getRandom() {
  let max = document.getElementById('maxNum').value;
  let min = document.getElementById('minNum').value;
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min > max){ 
    return document.getElementById('numSort').innerHTML = "", document.getElementById('maxMin').innerHTML = "The minimun value must be less than or equal to the max value."
  }
  return document.getElementById('numSort').innerHTML = Math.floor(Math.random() * (max - min + 1) + min), document.getElementById('maxMin').innerHTML = ""
}
