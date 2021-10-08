let element = document.getElementById("dateTransfer");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; // Месяца идут с 0, так что добавляем 1.
var yyyy = today.getFullYear();
var ddmin = dd;
var ddmax = dd + 20;

if (ddmin < 10) {
  ddmin = "0" + ddmin;
}
if (mm < 10) {
  mm = "0" + mm;
}
min = yyyy + "-" + mm + "-" + ddmin;
max = yyyy + "-" + mm + "-" + ddmax;
element.setAttribute("min", min);
element.setAttribute("value", min);
element.setAttribute("max", max);
