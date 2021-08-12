const firstPayment = parseFloat(prompt('начальный взнос'));
const percentInYear = parseFloat(prompt('проценты прироста депозита в год'));
const percentIncomeTax = parseFloat(prompt('процент налога на прибыль'));
const depositMonth = parseFloat(prompt('на сколько месцев депозит'));
const percentInMonth = percentInYear / 12 / 100;
const resultTaxMonth = percentIncomeTax / 12 / 100;
const fiftyYearsMonth = 50 * 12; //50 years
let result = firstPayment;
let resultFiftyYears = firstPayment;

for (let i = 0; i < depositMonth; i++) {
  const profit = result * percentInMonth;
  const tax = profit * resultTaxMonth;
  result += profit - tax;
}
alert(result);

for (let i = 0; i < fiftyYearsMonth; i++) {
  const profit = resultFiftyYears * percentInMonth;
  const tax = profit * resultTaxMonth;
  resultFiftyYears += profit - tax;
}
alert(resultFiftyYears);
