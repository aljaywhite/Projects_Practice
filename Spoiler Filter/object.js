
//object literal
//name = property
//Lauren = Value
var person = {
name: "Lauren",
student: true
}

var student = person.name + ' ' + person.student;




$(".btn").click(function(){
	$("#student").append("<h2>" + student + "</h2>");
});