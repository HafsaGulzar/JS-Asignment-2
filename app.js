                    //   __________......Ch#(21-25)......___________
                    //          Task :01

    //  var fName=prompt("Enter your first name ","Your first name is: ");
    //  var lName=prompt("Enter your last name ","Your last name is: ");
    //  var fullName=fName+lName;
    //  document.write(" Hello! " +fullName);

                   //          Task :02

    // var fvrtMobile=prompt("Enter yours favorite mobile phone model","Favourite mobile model is:");
    // var length=fvrtMobile.length;
    // document.write("<br>")
    // document.write(" My favourite phone is: " +fvrtMobile);
    // document.write("<br>")
    // document.write(" Length of string: " +length)
    

                      //          Task :03
        


// var country= "pakistan";
// for (i=0 ; i< country.length; i++)
// {
//      if(country.slice(i,i+1)==="n")
//      {
//          document.write("<br>")
//          document.write("String is " +country);
//          document.write("<br>")
//          document.write("Index of 'n' : " +i);
//      }
// }


//                       //         Task :04
//  var str = "Hello World"
// var lindex = str.lastIndexOf("l");
// document.write("String: "+ str + "<br>"+ "Last Index of l is:" +lindex)



//                        //         Task :05
// var str = "Pakistani"
// var index = str.substring(3,4)
// document.write("String: "+ str + "<br>"+ "Character at index 3 is: "+index)
                       


//                         //         Task :06

// var str1 = prompt("Enter your first name?")
// var str2 = prompt("Enter your last name?")
// var full = str1.concat(str2)
// document.write(full + "<br>" + "Welcome to this site.")


//                              // Task #07
//   var text = "Hyderabad"    
//    var replace = text.replace("Hyder", "Islam") 
//   document.write("City: "+text+"<br>"+"After Replacement: "+replace)

//                            //  Task #08
//  var message = "Ali and Sami are best friends. They play cricket and football together."; 
//  var replace = message.replace(/and/g, "&") 
//  document.write(replace)


//                             // Task #09
// var num = '472'
// document.write("Value: "+num+"<br>"+ "Type: string")
// var num1 = parseInt('472')
// document.write("<br>Value: "+num1 +"<br>"+ "Type: number")


//                        // Task #10
// var text = prompt("Enter any name/thing?")
// var capital = text.toUpperCase()
// document.write("User Input: "+text+"<br>Upper case: "+capital)


        //            //  Task #11
// var text = prompt("Enter any name/thing?")
// document.write(text[0].toUpperCase() + text.slice(1))


//                      // Task #12
// var num = 35.36;
// var strReplace = num.toString().replace(".", "")
// document.write("Number: "+ num+ "<br>Result: "+ strReplace)



//                         // Task #16
// var university = "U\nn\ni\nv\ne\nr\ns\ni\nt\ny\n o\nf\n K\na\nr\na\nc\nh\ni\n"; 
// var arr = university.split(" ")
// document.write(arr)


//                             // Task #17
// var input = prompt("Enter something")
// var lastChar = input.slice(-1)
// document.write("user input: "+input + "<br>Last  character of input: "+lastChar)


//                          // Task #18
// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var text="the quick brown fox jumps over the lazy dog"; 
//  var count=countOccurences(text,"the");
// document.write("text: "+text+"<br>There are "+count+" occurences of word the.")




//               // __________......Ch#(26-30)......___________


//                             //  Task:01
// var num = prompt("Enter a positive number");
// // num1 = Math.random(0, num);
// document.write(" The number you enter is : " + num );
// var round = Math.round(num);
// document.write( "<br>Round off value is:" + round);
// var floor = Math.floor(num);
// document.write("<br>Floor value :" + floor);
// var ceil = Math.ceil(num);
// document.write("<br> Ceil Value: " +  ceil);

//                             //  Task:02

// var num = prompt("Enter a negative floating point  number");
// // num1 = Math.random(0, num);
// document.write(" <br><br>The number you enter is : " + num );
// var round = Math.round(num);
// document.write( "<br>Round off value is:" + round);
// var floor = Math.floor(num);
// document.write("<br>Floor value :" + floor);
// var ceil = Math.ceil(num);
// document.write("<br> Ceil Value: " +  ceil);

//                             //  Task:03

// var num1 = prompt("Enter a positive or negative number");
// var num2 = Math.abs(num1);
// document.write(" <br><br>The absolute value of number is " +  num1 + " is " + num2);


//                             //  Task:04


// var num3 = Math.floor(Math.random() * 6) + 1 
// document.write("<br><br> Random dice value is " + num3)



//                             //  Task:05
// var num4 = Math.floor(Math.random() * 2) + 1 
// document.write("<br><br>  " + num4);
// if( num4 == 2)
// {

//     document.write("<br> Random coin values is : Head" );
// }
// if(num4 == 1 )
// {

//     document.write("<br> Random coin values is : Tail" );
// }


//                             //  Task:06
// var num3 = Math.floor(Math.random() * 100) + 1 
// document.write("<br><br> Random dice value between 1 and 100 is " + num3)

//                             //  Task:07

// var weight = prompt("Enter your weight ");
// document.write("The weight of user is: " + weight);


//                             //  Task:08
// var num3 = Math.floor(Math.random() * 10) + 1 
// document.write("<br><br>The random number is : " + num3);
// var num4 = prompt("Enter a value from range 1 to 10");
// document.write("<br> The user input number is : " + num4 );
// if(num3 == num4 )
// {
//     alert("Congratulation! You guess the secret number");
// }else
// {
//     alert("Try again");
// }

   //                     // __________......Ch#(31-34)......__________

   // Task#1
// var a = new Date()
// document.write(a)


// Task #2
// var m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
//                'August', 'September', 'October', 'November', 'December'];
// d = new Date();
// var n = m_names[d.getMonth()]; 
// document.write(n)


// Task #3
// var today = new Date();
//   var day = today.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   document.write("Today is : " + dayNames[day] + ".");


// Task #4
// var today = new Date();
// var day = today.getDate();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// daylist =0;
// if(daylist == daylist[0] || daylist[6]){
//     document.write("Its Funday.")
// }



// Task #6
// var a = new Date()
// document.write(a)
// var b = a.getTime()
// document.write("<br>Elapsed milliseconds since January 1, 1970: " +b)

// var date = new Date( "Jan 1, 1970")
// var datemili = date.getTime()

// var today = new Date()
// var todaymili =today.getTime()


// var diff = (todaymili - datemili);
// var accuage = Math.floor(diff/(1000*60))

// document.write("<br>Elapsed minutes since January 1, 1970:"+accuage)


// Task #7
// var dt = new Date();
//     var h =  dt.getHours(), m = dt.getMinutes();
//     var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
//     console.log(_time)



// Task #14
// var name = prompt("Enter your name?")
// var today = new Date();
//   var day = today.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   document.write("<b>K-Electric Bill</b>"+"<br>Customer Name: "+name+"<br>Today is : " + dayNames[day] + ".");
// var UnitNo = +prompt("Enter number of units:")
// var ChargePerUnit = +prompt("Enter charges per unit:")
// document.write("<br>number of units: "+UnitNo+"<br>charges per unit:"+ChargePerUnit)
// surCharge = 350;
// var NetAmountPayable = UnitNo*ChargePerUnit;
// GrossamountPayable = NetAmountPayable + surCharge;
// document.write("<br>Net Amount Payable(within due date): "+ NetAmountPayable+"<br>Late payment surcharge: "+surCharge+"<br>Gross Amount Payable(after due date): "+GrossamountPayable)


// Task #13
// var dob = new Date(prompt("Enter your DOB", "Aug 31, 1999"))
// var dobmili = dob.getTime()
// var today = new Date()
// var todaymili =today.getTime()
// var diff = (todaymili - dobmili);
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("your age is: "+accuage)


    //                     // __________......Ch#(35-38)......___________
    //     // Task.NO.01
    //     var date=new Date();
    //     document.write("<br>");
    //     document.write(date);

    //     // Task.NO.02

    // function greets(){
    //     var fName=prompt("Enter your first name","First name is : ");
    //     var lName=prompt("Enter your last name","First name is : ");
    //     document.write("<br>");
    //     document.write("Hello " +fName +lName);

    // }

    // greets();



    //    // Task.NO.03 

    // function add(){
    //     var num1 =+prompt("Enter first number");
    //     var num2 =+prompt("Enter second number") ;
    //     var sum=num1+num2;
    //     return sum
    // }

    // var sum=add();
    // document.write("<br>");
    // document.write("The sum of 2 number is : " +sum);



//           // Task.NO.04
     
// function calculator(){
//     var num1 =+prompt("Enter first number");
//     var num2 =+prompt("Enter second number") ;
//     var oprtr=prompt("Enter operator");
//     var res;
//     if(oprtr=="+"){
//        res = num1 + num2; 
//     }
//     else
//     if(oprtr=="-"){
//         res = num1 - num2; 
//      }
//      else
//      if(oprtr=="*"){
//          res = num1 * num2; 
//       }
//       else
//       if(oprtr=="/"){
//           res = num1/num2; 
//        }
//        else
//        if(oprtr=="%"){
//            res = num1 % num2; 
//         }
//         else
//         {
    // document.write("<br>");
//         document.write("You enter wrong input"); 
//          }
//          return res;
// }
 
// var res=calculator();
// document.write("<br>");
// document.write("Output is " +res);


      

    //         // Task.NO.05
    //     var num =prompt("Enter a number you want to square");

    // function square(num){
    //     var res = num*num;
    // document.write("<br>");
    //     document.write("Square of a number is " +res);
    // }
    
    // square(num);



    //            // Task.NO.06
        
    // var num =prompt("Enter a number for factorial");

    // function factorial(num){
    //     var fac=1
    //      for(i=1 ;i<=num;i++)
    //        {
    //            fac=fac*i;
    //        }
    // document.write("<br>");
    //        document.write("Factorial of number is " +fac);
    // }

    // factorial(num);


                
    //          // Task.NO.07

    // function counting(){
    //     var sNum=+prompt("Enter starting number of counting");
    //     var eNum=+prompt("Enter ending number of counting");

    //     for(i=sNum;i<=eNum;i++)
    //     {
    //         document.write("<br>");
    //         document.write(i);
    //     }
    // }

    // counting();


    //            // Task.NO.08
       
    //    var base=2;
    //    var perpendicular=2;        

    // function calculateHypotenuse(base,perpendicular){
    //        var hyp=base+perpendicular;
    //        document.write("<br>");
    //        document.write("The Hypotenuse is " +hyp);
    //        calculateSquare(base,perpendicular);

    //        function  calculateSquare(base,perp,hyp)
    //        {
    //               var hypSquar= (base*base)+(perp*perp);
    //               document.write("<br>");
    //               document.write("The square of Hypotenuse is " +hypSquar)
    //        }
           
    // }

    // calculateHypotenuse(base,perpendicular);





    // //  Task.NO.09  (i)
        
    // function area(w,h){
    //     var area = w*h
    //     document.write("<br>");
    //     document.write("Area of squrae by using Arguments as value is : "+area )
    // }
  
    // area(10,10);

    // //  Task.NO.09  (ii)

    // var width=9;
    // var height=9;

    // function area1(w,h){
    //     var area = w*h
    //     document.write("<br>");
    //     document.write("Area of squrae by using Arguments as variables is "+area )
    // }

    // area1(width,height);



//   //   Task.NO.10
// var str_entry = prompt("Enter string to check plindrome or not");
// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             document.write("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//             document.write("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 document.write("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         document.write("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome(str_entry);


// //   Task.NO.11
// var str = prompt("Enter a string to capital first letter of each word");
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase(str));

// //   Task.NO.12
// var str = prompt("Enter a string to find longest word from the string");
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word(str));


// //   Task.NO.13
// var str = prompt("Enter the string");
// var letter = prompt("Enter letter to find maximum occurance");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count(str, letter));

// //   Task.NO.14
// var radius = prompt("Enter the radius");
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("<br>The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("<br>The area is " + x + ".");
//   }
  
//   calcCircumfrence(radius);
//   calcArea(radius);
