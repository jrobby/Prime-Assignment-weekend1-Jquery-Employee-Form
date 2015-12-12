var array = [];
var annualSalaries = 0;


$(document).ready(function(){
	$("#employeeinfo").on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})

		$("#employeeinfo").find("input[type=text]").val("");

		annualSalaries+=Number(values.salary);

		appendDom(values);

		array.push(values);
		console.log(array);
		
    });

});


function appendDom(object){
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();
	// $el.addClass(object.employeeNumber);

	$el.append("<p>" + object.firstname + "</p>");
	$el.append("<p>" + object.lastname + "</p>");
	$el.append("<p>" + object.employeeNumber + "</p>");
	$el.append("<p>" + object.jobTitle + "</p>");
	$el.append("<p>" + object.salary + "</p>");
	$el.append("<p>" + "Monthly cost of salaries: " + Math.round(annualSalaries/12) + "</p>");
	$el.append("<p>" + "<button class = 'button'>" +  "Remove " + object.firstname +  " " + 
		object.lastname + "</button>" + "</p>")

	$('button').on('click', function() {
    $(this).parent().parent().remove();
});


}


