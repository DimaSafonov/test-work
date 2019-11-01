'use strict';

const valid = function (data) {
    return (isNaN(data) || data === '' || data === null) ? false : true;
};

let money,
    start = function () {
        do {
            money = prompt('Ваш ежемесячный доход?', 33800);
        } while (valid(money) === false);
    };

start();

let monthlyRequiredCosts1,
    monthlyRequiredCosts2;

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 300000,
    period: 8,
    asking: function () {
        let addExpenses = prompt('Перичислите возможные расходы через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');
        function expenses(){
            for (let i = 0; i < 2; i++) {

                if (i === 0) {
                    Object.defineProperty(appData.expenses, 
                        prompt('Введите обязательную статью расходов', 'Оплата съемной квартиры'),
                        {value : +prompt('Во сколько это обойдётся?', 2500),
                        writable : true,
                        enumerable : true,
                        configurable : true});
                }
                if (i === 1) {
                    Object.defineProperty(appData.expenses, 
                        prompt('Введите обязательную статью расходов', 'Интернет'),
                        {value : +prompt('Во сколько это обойдётся?', 2500),
                        writable : true,
                        enumerable : true,
                        configurable : true});
                }
            }
            for(let item in appData.expenses){
                if(valid(appData.expenses[item]) === false){
                    expenses();
                }
            }
        }
        expenses();
    },
    budget: +money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
};

appData.asking();

appData.getExpensesMonth = function () {
    for(let item in appData.expenses){
        appData.expensesMonth += appData.expenses[item];
    }
    return appData.expensesMonth;
};
appData.getExpensesMonth();

appData.getBudget = function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
};

appData.getBudget();

let getTargetMonth = function(){
    appData.period = appData.mission / appData.budgetMonth;
};

getTargetMonth();

let getStatusIncome = function(){
        if(appData.budgetDay < 300){
            appData.income = 'Низкий уровень дохода';
        } else if(appData.budgetDay <= 800){
            appData.income = 'Средний уровень дохода';
        } else {
            appData.income = 'Высокий уровень дохода';
        }
    };
getStatusIncome();
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('За какой период будет достигнута цель (в месяцах) - ' + Math.ceil(appData.period));
console.log('Уровень дохода: ' + appData.income);

for(let item in appData){
    console.log("Наша программа включает в себя данные: " + item + " " + appData[item]);
}