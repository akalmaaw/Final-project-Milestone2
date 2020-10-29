 var value1=window.prompt("please enter your name")
 document.write(value1 + ", welcome to exercise website");
 document.write(" ");
 var value2=window.prompt("please enter your age")
 document.write("  age :"+value2 );

function button(){
	var value3=window.prompt("please enter your weight in(kg)")
	var value4=window.prompt("please enter your height in(cm)")
	var weightP= (50 + 0.75*(value4 - 150) + (value2 - 20));
	if (value3>weightP){
		var loseWeight=value3-weightP;
		window.alert("you need to lose weight by " +loseWeight +" kg");}
	 else if(weightP>value3){
		var gainWeight= weightP-value3;
	window.alert("you need to gain weight by " +gainWeight+" kg");}
	else
		window.alert("your weight is perfect");
}