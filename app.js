$(document).ready(function(){
	var numLength = function(number) {
        if (number.length > 9) {
            total.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                total.text("Error");
            }
        } 
    };
	var number = "";
    var newNum = "";
    var operator = "";
    var total = $("#answer");
    total.text("0");

    $("#numbs a").not("#clear,#clrAll").click(function(){
		number += $(this).text();
		total.text(number);
		numLength(number);
    });
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newNum = number;
		number = "";
		total.text("0");
    });
    $("#clear").click(function(){
		number = "";
		total.text("0");
		if ($(this).attr("id") === "clrAll") {
			newNum = "";
		}
    });

    $("#clrAll").click(function(){
		number = "";
		total.text("0");
		if ($(this).attr("id") === "clrAll") {
			newNum = "";
		}
    });

	
    
    $("#equals").click(function(){
    	if (operator === "+"){
    		number = (parseInt(number, 10) + parseInt(newNum,10)).toString(10);
    	} else if (operator === "-"){
    		number = (parseInt(newNum, 10) - parseInt(number,10)).toString(10);
    	} else if (operator === "÷"){
    		number = (parseInt(newNum, 10) / parseInt(number,10)).toString(10);
    	} else if (operator === "×"){
    		number = (parseInt(newNum, 10) * parseInt(number,10)).toString(10);
    	}
    	total.text(number);
    	numLength(number);
    	number = "";
    	newNum = "";
    });
	
});
