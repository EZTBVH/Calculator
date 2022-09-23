"use strict";

const init = function () {
  const budget = document.getElementById("budget");
  const levier = document.getElementById("levier");
  const coin = document.getElementById("coin");

  document.getElementById("box-3").onclick = function () {
    document.getElementById("result").innerHTML = `--> ${Number(
      (Number(budget.value) * Number(levier.value)) / Number(coin.value)
    ).toFixed(2)} <--`;
  };
};

window.onload = init;
