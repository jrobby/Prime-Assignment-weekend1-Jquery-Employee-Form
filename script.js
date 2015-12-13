var array = [];
var annualSalaries = 0;

// $("div").data("foo", 44);
// $( "body" ).data( "foo", 52 );


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
	
	$el.data("employeeNumber", object.employeeNumber);
	$el.append("<p>" + object.firstname + "</p>");
	$el.append("<p>" + object.lastname + "</p>");
	$el.append("<p>" + object.employeeNumber + "</p>");
	$el.append("<p>" + object.jobTitle + "</p>");
	$el.append("<p>" + object.salary + "</p>");
	$el.append("<p>" + "Monthly cost of salaries: " + "<br>" + Math.round(annualSalaries/12) + "</p>");
	$el.append("<p>" + "<button class = 'button'>" +  "Fire " + object.firstname +  " " + 
		object.lastname + "</button>" + "</p>")

	
	$('button').on('click', function() {					

			//Remove employee from array
	    for (var i=0; i<array.length;i++) {

	    	if (array[i].employeeNumber == $(this).parent().parent().data().employeeNumber) {
	    		
	    		//This part is just for fun
	    		//Judgmental popup to confirm the user wants to fire the employee

	    		var Fires = ["Do you really want to do this? " + array[i].firstname + " is a valuable employee and a human being with feelings and dignity.", 
	    		"Are you sure? Press 'ok' to confirm that your heart pumps ice and that " + array[i].firstname + " is just a number to you.", 
	    		"With the holidays coming up? Well, if crushing " + array[i].firstname + " makes you feel like a big man (or woman!), then go ahead." ];

	   
				var pickAFire = function () {
					return Fires[Math.floor(Math.random() * Fires.length)];;
				};

				var txt;
				var yesFire = confirm(pickAFire());

				if (yesFire == true) {
			    	txt = pickAFire;
				} else {
			    	alert("You've got a heart after all! Let's see if it lasts this time.");
				}

	    		//adjust total spent on annual salary 
	    		annualSalaries-=Number(array[i].salary);

	    		//remove employee from array
	    		array.splice(i,1);
	    		$("#container").children().last().append("<p>" + "Monthly cost of salaries: " + Math.round(annualSalaries/12) + "</p>");
	    	};	
	    }	

	    //Remove employee from html 
		$(this).parent().parent().remove();
	});	

	

}













