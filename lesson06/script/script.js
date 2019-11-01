'use strict'

const isNum = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let start = function () {
  //  annualPlan.money = +prompt('Ваш месячный доход?', 100000);
  do {
    money = prompt('Ваш месячный доход?', 100000);
  }
  while (isNaN(money) || money === "" || money === null);

}
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {}, 
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 10,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){

    if (confirm('Есть ли у вас дополнительный заработок?')) {
      let itemIcome = prompt('Какой у вас дополнительный заработок?', "танцы");
      let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', "5000");
      appData.income[itemIcome] = cashIncome;
    }
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "car, food");
    addExpenses.toLowerCase().split(' ,');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    function expenses() {

      for (let i = 0; i < 2; i++) {

        let ask = prompt('Какие обязательные ежемесячные расходы у вас есть?', "кредит");
        let askTwo = +prompt('Во сколько это обойдется?', 12000);
        if (isNum(askTwo)) {
          appData.expenses[ask] = askTwo;
        } else {
          i -= 1;

        }

      }
      for (let item in appData.expenses) {
        if (isNum(appData.expenses[item]) === false) {
          expenses();
        }
      }
    }
    expenses();
  }

};
  appData.asking();
   console.log(appData.expenses);

let getExpensesMonth = function () {
  for (let item in appData.expenses) {
    appData.expensesMonth += appData.expenses[item];
  }
  return appData.expensesMonth;
};
  getExpensesMonth();

appData.getBudget = function () {
  appData.budgetMonth = appData.budget - appData.expensesMonth;
  appData.budgetDay = appData.budgetMonth / 30;
};

appData.getBudget();

let getTargetMonth = function(){
    appData.period = appData.mission / appData.budgetMonth;
};

getTargetMonth();

  
let getStatusIncome = function () {
  if (appData.budgetDay > 800) {
    return ('Высокий уровень дохода');
  } else if (appData.budgetDay > 300 || appData.budgetDay < 800) {
    return ('Средний уровень дохода');
  } else if (appData.budgetDay > 0 || appData.budgetDay < 300) {
    return ('Низкий уровень дохода');
  } else {
    return ('Что то пошло не так');
  }
};

  let getInfoDeposit = function() {
    if(appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?',"0.01");
      appData.moneyDeposit = prompt('Какая сумма заложена?',"100");
    }
  };
  let calcSavedMoney = function() {
    return appData.budgetMonth * appData.period;
  }
  
console.log(`calcSavedMoney: ${appData.percentDeposit , appData.moneyDeposit, appData.calcSavedMoney} ` );

getStatusIncome();
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('За какой период будет достигнута цель (в месяцах) - ' + Math.ceil(appData.period));
console.log('Уровень дохода: ' + appData.income);
  
for (let item in appData) {
  console.log("Наша программа включает в себя данные: " + item + " " + appData[item]);
};



