function average(numbers_list) {
	var sum = 0;//variable to store the value of the sum at the end. here 'i' is a counter variable which helps us loop through the array.
	for (var i = 0; i < numbers_list.length; i++) {//loop through the array of the number list using for loop.this loop runs till the end of the array, numbers_list.length this function helps us do that.
		sum = sum + numbers_list[i];//store all the values of the arrays in the variable sum defined above
	}//so at the end we get the sum of all the values of the array numbers_list
	return (sum / numbers_list.length);//we divide the sum of all the numbers by the length of the array 'numbers_list'
}//and we return that value.

function assignGrade(grade) {//this particular case can also be solved via the switch case method.
	if (grade>=90) {//Using the if/else if/else method.
		return 'A';// if grade>=90 it will return grade'A'
	}
	else if (grade>=80) {//else if grade>=80 it will return the grade 'B'. 
		return 'B';//the reason that i didn't gave the upper limit in this statement is if the grade is >=90 it would have already returned the grade'A'.
	}//that is it will not come to this else if if the grade is >= 90.
	else if (grade>=70) {//else if grade>=70.
		return 'C';//it will return the grade 'C'.
	}
	else if (grade>=60) {//else if grade>=60.
		return 'D';//it will return the grade 'D'.
	}
	else{//else if the grade is any lower than 60 it will return the grade 'F'.
		return 'F';
	}

}

function pluralize(num, noun) {
	if (num === 1) {//if the number is exactly equal to 1
		return num + " " + noun;//it would return a string: (number + " " + noun)
	}
	else{
		return num + " " + noun + "s";//else if the number is !==(not equal to) 1 it would return the same string but just with an "s" added at the end of the noun.
	}

}

function longestWord(sentence) {
	var str = sentence.split(" ");//sentence.split(" ") method is used to split a string into an array of substrings, and returns the new array.
    var longest = 0;//define a variable longest and set its value to be zero.
    var word = null;//define a variable word and set its value to be null.
    for (var i = 0; i <= str.length - 1; i++) {//run a loop through all the substrings that we just split upto the entire length of each substring.
        if (longest < str[i].length) {//use if to check whether the value of longest is less than the length of each of the substring that you split up
            longest = str[i].length;//if the value of longest is less than the length of the substring then assign longest the value of length of that particular substring 
            word = str[i];//and assign word that particular substring which was the longest.
        }//here i acts as a counter-variable to change the substrings while moving in the loop.
    }
    return word;//then return that particular word.

}

function palindrome(word) {
	var str = word;//define a variable str and make it equal to the word that user enters.
	var i=0;//define a counter-variable i and make it equal to 0.
	var j=str.length-1;//define a counter-variable j and make it equal to str.length-1.
	while(str[i] === str[j]){//run a while loop by giving a check condition of equality of letters of the str.
		i++;//add one to i;
		j--;//subtract one from j;
		if(i>j){//now we have moved a loop from both the ends of the word if the both the loops crosses by that is i becomes greater than j then return 'yes'.
			return "yes";//because if the loops cross by then we are successful, the given word is a palindrome. 
		}

	}
	if (i<j) {//if somehow str[i] !== str[j] then i<j so at this moment return no.
		return "no";//because if at any moment str[i] !== str[j] then i<j always.
	
	}
}
function letterCounter(phrase, letter) {
	var sum = 0;//define a variable sum and make it equal to 0;
	for(var i = 0; i < phrase.length; i++){//run a loop through the phrase entered by the user
		if (phrase[i] === letter) {//now if while running the loop any letter in the phrase becomes exactly equal to the entered letter by the user
			(sum = sum + 1);//the value of sum will increase by 1 every time the above happens. we can also use sum +=1 here.
		}//this code will also tell you the number of spaces that we have in our phrase.
	}
			return sum;//now we return the sum value at the end of the entire loop.this will give us the number of times the particular letter appeard in the phrase.

}

function longestPalindrome(sentence) {
	var str = sentence.split(" ");//define a var str and make it equal to sentence.split(" ").This method is used to split a string into an array of substrings, and returns the new array.
	var longest = 0;//define a variable longest and set its value to be zero.
    var word = null;//define a variable word and set its value to be null.
    for (var i = 0; i <= str.length - 1; i++) {//run a loop through all the substrings that we just split upto the entire length of each substring.
        if (longest < str[i].length) {//use if to check whether the value of longest is less than the length of each of the substring that you split up
            longest = str[i].length;//if the value of longest is less than the length of the substring then assign longest the value of length of that particular substring 
            word = str[i];//and assign word that particular substring which was the longest.
        }
    }
    var i = 0;//define a counter-variable i and make it equal to 0.
    var j = (word.length - 1);//define a counter-variable j and make it equal to str.length-1.
    while(word[i] === word[j]){//run a while loop by giving a check condition of equality of letters of the longest word that we just found out.
    	i++;//add one to i;
    	j--;//subtract one from j;
    	if(i>j){//now we have moved a loop from both the ends of the word if the both the loops crosses by that is i becomes greater than j then return .
    		return (word + " is a palindrome");//then return the string (word + " is a palindrome")
    	}
    }
    if(i<j){//if somehow word[i] !== word[j] then i<j so at this moment return the string ("sentence is not a palindrome").
    		return ("sentence is not a palindrome");
    	}


}

function doItTwice(f) {//call the function twice and add them and retuen that value. 
	return (f() + f());//if there are numbers they will get added and if it is a string then both the string will combine
	                     // to make a whole new string without any space in between them.
}

function objectFun(first, last, age, email, color) {//create an object by the name myObject
	var myObject = {//add keywords first_name, last_name, age, email, fav_color.
		first_name : first,//so as the user enters 'first' in the function objectFun it will be equal to first_name. 
		last_name : last,//last_name will be equal to last.
		age : age,//age will be equal to age.
		email : email,//email will be equal to email.
		fav_color : color//fav_color will be equal to color.
	};
	return myObject;//returned the object so whenever user tries to access any member of it it will be able to do so.
}

function numChildren(obj) {
		return obj.children.length;//returned the member.length of the object 'obj' that have been defined.
}//we just needed to access the chlidren array of the object and find its length.

function greeting(name) {
	return (name);//returned name so that name can be entered in the string that is retuened in the function sayHello.
}

function sayHello(first, last, greet) {
	name = (first + " " + last);//firstly completed the name by combining the first and last name that a person enters in the function sayHello using the + operator.
	return ("Hello, " + greeting(name) + "!"); //returned the string ("Hello, " + called the greeting function so that the name can be placed here + "!");

}

function goodnight(name) {
	return (name);//returned name so that name can be entered in the string that is retuened in the function sayGoodnight.
}

function sayGoodnight(name, status, message) {
	if(status === "Night"){//if the user enters the status as 'Night' then it will return the string ("Goodnight, " + goodnight(name) + "!")
		return ("Goodnight, " + goodnight(name) + "!");//call the function gooonight so that name can be entered here.
	}
	else{
		return ("It's not bedtime!");//else if the user enters the status as 'Morning' then it will return the string ("It's not bedtime!")
	}

}
