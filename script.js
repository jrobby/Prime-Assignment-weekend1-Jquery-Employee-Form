var array = [];
var annualSalaries = 0;

$(document).ready(function(){
	$("#employeeinfo").on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})

		// $("button").click(function(){

  //       $("#container").remove();
  //   		});
		
		$("#employeeinfo").find("input[type=text]").val("");


		annualSalaries+=Number(values.salary);
		appendDom(values);


		array.push(values);
		console.log("array: " + array);
		
	});

});


// $("button").click(function(){
//         $("#container").remove();
//     });



function appendDom(object){
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();

	$el.append("<p>" + object.firstname + "</p>");
	$el.append("<p>" + object.lastname + "</p>");
	$el.append("<p>" + object.employeeNumber + "</p>");
	$el.append("<p>" + object.jobTitle + "</p>");
	$el.append("<p>" + object.salary + "</p>");
	$el.append("<p>" + "Monthly cost of salaries: " + Math.round(annualSalaries/12) + "</p>");
	

	// $("#container").append("<p>" + "<button>Remove " + object.firstname + "</button>" + "</p>")
 
}


