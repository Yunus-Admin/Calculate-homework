const firstPayment = parseFloat(prompt('начальный взнос'));
const percentInYear = parseFloat(prompt('проценты прироста депозита в год'));
const percentIncomeTax = parseFloat(prompt('процент налога на прибыль'));
const depositMonth = parseFloat(prompt('на сколько месцев депозит'));
const percentInMonth = percentInYear / 12 / 100;
const resultTaxMonth = percentIncomeTax / 12 / 100;
let result = firstPayment;

for (let i = 0; i < depositMonth; i++) {
  const profit = result * percentInMonth;
  const tax = profit * resultTaxMonth;
  result += profit - tax;
}
alert(result);
