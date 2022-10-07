let cls = document.getElementById("celsius");
let fhr = document.getElementById("fahrenheit");

cls.oninput = () => {
  let output = (parseFloat(cls.value) * 9) / 5 + 32;
  fhr.value = parseFloat(output.toFixed(2));
};

fhr.oninput = () => {
  let output = ((parseFloat(fhr.value) - 32) * 5) / 9;
  cls.value = parseFloat(output.toFixed(2));
};
