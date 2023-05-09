let current_date = new Date();
let current_day = current_date.getDate();
let current_month = current_date.getMonth() + 1;
let current_year = current_date.getFullYear();

let entered_day = document.getElementById("input_Day");
let entered_month = document.getElementById("input_Month");
let entered_year = document.getElementById("input_Year");
let leap_year_checker = entered_year % 2;

let days_number = 0;
let years_number = 0;
let months_number = 0;

let possible = true;
document.getElementById('arrow_Btn').addEventListener();

function valid_date_checker(day, month, year) {
    if (year > current_year) {
        possible = false;
    }
    else if (year == current_year && month > current_month) {
        possible = false;
    }
    else if (year == current_year && month == current_month && day > current_day) {
        possible = false;
        
    }
    else if (month == 1 | 3 | 5 | 7 | 8 | 10 | 12 && day > 31) {
        possible = false;
    }
    else if (month == 1 | 3 | 5 | 7 | 8 | 10 | 12 && day <= 31) {
        days_number += (31 - day);
    }
    else if (month == 4 | 6 | 9 | 11 && day > 30) {
        possible = false;
    }
    else if (month == 4 | 6 | 9 | 11 && day <= 30) {
        days_number += (30 - day);
    }
    else if (month == 2 && day > 29 && leap_year_checker == 0) {
        possible = false;
    }
    else if (month == 2 && day > 28 && leap_year_checker !== 0) {
        possible = false;
    }
    else if (month == 2 && day <= 29 && leap_year_checker == 0) {
        days_number += (29 - day);
    }
    else if (month == 2 && day <= 28 && leap_year_checker !== 0) {
        days_number += (28 - day);
    }
    
    
    
};

function calculate_days(days) {
    days_number += days;
    if (days_number >= 30) {
        days_number -= 31;
        months_number += 1;
    }
};

function calculate_months(months) {
    months_number += (12 - months - 1 + current_month);
    if (months_number >= 12 | months_number == 0) {
        years_number += 1;
        months_number -= 12;
    }
};

function calculate_years(years) {
    years_number += (current_year - years - 1);
};



function result() {
    valid_date_checker(entered_day, entered_month, entered_year);
    calculate_years(entered_year);
    calculate_days(current_day);
    calculate_months(entered_month);
    
    
    if (possible) {
        console.log(years_number + ' years');
        console.log(months_number + ' months')
        console.log(days_number + ' days');
        
        console.log(possible);
    }
    else {
        console.log(possible);
    }
};
result();
