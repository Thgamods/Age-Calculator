
let current_date = new Date();
let current_day = current_date.getDate();
let current_month = current_date.getMonth() + 1;
let current_year = current_date.getFullYear();

let entered_day = document.getElementById("input_Day").value;
let entered_month = document.getElementById("input_Month").value;
let entered_year = document.getElementById("input_Year").value;
let leap_year_checker = entered_year % 2;

let days_number = 0;
let years_number = 0;
let months_number = 0;

let empty = false;
let invalid = false;
let empty_Day = false;
let empty_Month = false;
let empty_Year = false;
let invalid_Day = false;
let invalid_Month = false;
let invalid_Year = false;

function empty_Date_Checker(day, month, year) {
    if (!day) {
        empty = true;
        empty_Day = true;
    }
    if (!month) {
        empty = true;
        empty_Month = true;
    }
    if (!year) {
        empty = true;
        empty_Year = true;
    }
}

function valid_date_checker(day, month, year) {
    if (empty !== true) {
        if (day > 31 | month > 12) {
            if (day > 31) {
                invalid_Day = true;
                invalid = true;
            }
            if (month > 12) {
                invalid_Month = true;
                invalid = true;
            }
            if (year > current_year) {
                invalid = true;
                invalid_Year = true;
            }
        }
        else {

            if (year > current_year) {
                invalid = true;
                invalid_Year = true;
            }
            else if (year == current_year && month > current_month) {
                invalid = true;
                invalid_Month = true;
            }
            else if (year == current_year && month == current_month && day > current_day) {
                invalid = true;
                invalid_Day = true;
            }


            if (month == 1 | 3 | 5 | 7 | 8 | 10 | 12 && day > 31) {
                invalid = true;
                invalid_Month = true;
            }
            else if (month == 1 | 3 | 5 | 7 | 8 | 10 | 12 && day <= 31) {
                days_number += (31 - day);
            }


            if (month == 4 | 6 | 9 | 11 && day > 30) {
                invalid = true;
                invalid_Month = true;
                invalid_Day = true;
            }
            else if (month == 4 | 6 | 9 | 11 && day <= 30) {
                days_number += (30 - day);
            }


            if (month == 2 && day > 29 && leap_year_checker == 0) {
                invalid = true;
                invalid_Day = true;
                invalid_Month = true;
            }
            else if (month == 2 && day > 28 && leap_year_checker !== 0) {
                invalid = true;
                invalid_Day = true;
                invalid_Month = true;
            }
            else if (month == 2 && day <= 29 && leap_year_checker == 0) {
                days_number += (29 - day);
            }
            else if (month == 2 && day <= 28 && leap_year_checker !== 0) {
                days_number += (28 - day);
            }
        }
    }
};

function calculate_days(days) {
    days_number += days;
    for (let i = 30; i <= days_number; i + 30) {
        if (days_number >= 30) {
            days_number -= 31;
            months_number += 1;
        }
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

function changeImage() {
    document.getElementById("arrow_Btn");
    Image.src = "./assets/images/icon-arrow(2).svg";
}

function revert_To_Normal() {
    empty_Day = false;
    empty_Month = false;
    empty_Year = false;
    invalid_Day = false;
    invalid_Month = false;
    invalid_Year = false;
    empty = false;
    invalid = false;
    days_number = 0;
    months_number = 0;
    years_number = 0;
    $(".invalid").css('display', 'none');
    $(".entry").css('color', 'black');
    $(".entry input").css('border-color', 'black');
}

function result() {
    revert_To_Normal();
    entered_day = document.getElementById("input_Day").value;
    entered_month = document.getElementById("input_Month").value;
    entered_year = document.getElementById("input_Year").value;
    empty_Date_Checker(entered_day, entered_month, entered_year);
    valid_date_checker(entered_day, entered_month, entered_year);
    leap_year_checker = entered_year % 2;
    if (invalid !== true && empty !== true) {
        calculate_years(entered_year);
        calculate_days(current_day);
        calculate_months(entered_month);
        document.getElementById("dash_Year").innerText = years_number;
        document.getElementById("dash_Month").innerText = months_number;
        document.getElementById("dash_Day").innerText = days_number;
        let img = document.getElementById("arrow_Btn");
        img.src = "./assets/images/icon-arrow(2).svg";
        $(".empty").css({
            'display': 'none',
        });
        $(".invalid").css({
            'display': 'none',
        })
        $(".entry input").css({
            'border-color': 'black',
        });
        $(".entry").css({
            'color': 'hsl(0, 1%, 44%)',
        });
    }
    else if (empty) {
        if (empty_Day) {
            $("#entry_Day").css('color', 'red');
            $("#entry_Day input").css('border-color', 'red');
            $("#empty_Day").css('display', 'grid');
        }
        if (empty_Month) {
            $("#entry_Month").css('color', 'red');
            $("#entry_Month input").css('border-color', 'red');
            $("#empty_Month").css("display", "grid");
        }
        if (empty_Year) {
            $("#entry_Year").css('color', 'red');
            $("#entry_Year input").css('border-color', 'red');
            $("#empty_Year").css("display", "grid");
        }
    }
    else if (invalid) {


        if (invalid_Day) {
            $("#entry_Day").css('color', 'red');
            $("#entry_Day input").css('border-color', 'red');
            $("#invalid_Day").css('display', 'grid');
        }
        if (invalid_Month) {
            $("#entry_Month").css('color', 'red');
            $("#entry_Month input").css('border-color', 'red');
            $("#invalid_Month").css("display", "grid");
        }
        if (invalid_Year) {
            $("#entry_Year").css('color', 'red');
            $("#entry_Year input").css('border-color', 'red');
            $("#invalid_Year").css("display", "grid");
        }
    }

};



document.getElementById('arrow_Btn').onclick = result;
/* $(document).keydown(result(event) { 
    if (_event.keyCode === 13) {
        $('#arrow_Btn').click()
    }
}); */

