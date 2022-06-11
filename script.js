'use strict';

const lesson11 = function () {
  const btn = document.getElementById('btn');
  const input = document.getElementById('text');
  const square = document.getElementById('square');
  const btnDispNone = document.getElementById('e_btn');
  const inputRange = document.getElementById('range');
  const circle = document.getElementById('circle');

  btn.addEventListener("click", function () {
    let val = input.value;
    square.style.backgroundColor = val;
    input.value = "";
  });

  btnDispNone.style.display = "none";

  inputRange.addEventListener("input", function () {
    let val = inputRange.value;
    circle.style.width = val + '%';
    circle.style.height = val + '%';

    console.log(val);
  });
};

lesson11();