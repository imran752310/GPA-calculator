function totalMarks(){
    // var sub1 = parseInt(document.getElementById("sub1").value);
    let sub1 = document.forms["myForm"]["sub1"].value;
    var sub2 = document.forms["myForm"]["sub2"].value;
    var sub3 = document.forms["myForm"]["sub3"].value;
    var sub4 = document.forms["myForm"]["sub4"].value;
    var sub5 = document.forms["myForm"]["sub5"].value;
    var sub6 = document.forms["myForm"]["sub6"].value;
    var marks1 = parseInt(document.getElementById("marks1").value);
    var marks2 = parseInt(document.getElementById("marks2").value);
    var marks3 = parseInt(document.getElementById("marks3").value);
    var marks4 = parseInt(document.getElementById("marks4").value);
    var marks5 = parseInt(document.getElementById("marks5").value);
    var marks6 = parseInt(document.getElementById("marks6").value);
    //  var marks7 = document.forms["myForm"]["marks6"].value ="" ;

    var total_marks = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
  var total_marks2 =  marks1 + marks2 + marks3 + marks4 + marks5 + 0
    if(marks1 >100 || marks2>100 || marks3>100 || marks4>100 || marks5>100 || marks6>100 ){
        alert("Enter value in 100 range");
    }
//     else if(marks1 != "" && marks2 != "" && marks3 != "" && marks4 != "" && marks5 != "" || marks6 != ""){
//         // document.forms["myForm"]["total"].value = 0;
//         document.getElementById("total").innerHTML = total_marks;
//     }
//    else  if(marks1 != "" || marks2 != "" || marks3 != "" || marks4 != "" || marks5 != "" || marks6 == ""){
//             // document.forms["myForm"]["total"].value = 0;
//             document.getElementById("total").innerHTML = total_marks2;
//         }
      
        // else{
        //     alert("enter");
        // }
// else if(`${marks6}` == null){
//     document.getElementById("total").innerHTML = "total marks is " + total_marks2;
// }
    //     else{
    //         alert("please enter value");
    //     }
        // else if( marks1 != null || marks2 != null || marks3 == null){
        //     document.getElementById("total").innerHTML =sub1 + " marks is: " + marks1+"<br>" +sub2 + " marks is: " + marks2+"<br>" + "Total Marks is" + total_marks;

        // }
    // else
    // {
    //         alert("Enter value");
    //     }
    //      if(marks1 != null && marks2 != null){
    //         document.getElementById("total").innerHTML =sub1 + " marks is: " + marks1+"<br>" + sub2 + " marks is: " + marks2+"<br>" + "Total Marks is" + marks1;
    //     }
    //     else{

    //     }
    //     if(){

    //     }
    

    else{
        document.getElementById("total").innerHTML = "Total marks is: " + total_marks;
    //   document.getElementById("total").innerHTML =  sub1+ " Marks is: "+marks1+"<br>"+sub2+ " Marks is: "+marks2+"<br>"+sub3+ " Marks is: "+marks3+"<br>"+sub4+ " Marks is: "+marks4+"<br>"+sub5+ " Marks is: "+marks5+"<br>"+sub6+ " Marks is: "+marks6+"<br>" + " Total Marks is: "+ total_marks;
    // <br>"+"Computer marks is: "+sub2+"<br>"+"________________"+"<br>total marks is:"+total_marks;
        }
 
            
    }
    
    // function average(){
    //     var marks1 = parseInt(document.getElementById("marks1").value);
    //     var marks2 = parseInt(document.getElementById("marks2").value);
    //     var marks3 = parseInt(document.getElementById("marks3").value);
    //     var marks4 = parseInt(document.getElementById("marks4").value);
    //     var marks5 = parseInt(document.getElementById("marks5").value);
    //     var marks6 = parseInt(document.getElementById("marks6").value);
    //     var total_marks = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
    //     var averag = total_marks/6;
    //     document.getElementById("average").innerHTML = averag;

    // }
    function percent(){
        var marks1 = parseInt(document.getElementById("marks1").value);
        var marks2 = parseInt(document.getElementById("marks2").value);
        var marks3 = parseInt(document.getElementById("marks3").value);
        var marks4 = parseInt(document.getElementById("marks4").value);
        var marks5 = parseInt(document.getElementById("marks5").value);
        var marks6 = parseInt(document.getElementById("marks6").value);
        var total_marks = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
        var per = total_marks/600*100;
        document.getElementById("percent").innerHTML = "Percentage is: " + per;
    }
    function gpa(){
        var marks1 = parseInt(document.getElementById("marks1").value);
        var marks2 = parseInt(document.getElementById("marks2").value);
        var marks3 = parseInt(document.getElementById("marks3").value);
        var marks4 = parseInt(document.getElementById("marks4").value);
        var marks5 = parseInt(document.getElementById("marks5").value);
        var marks6 = parseInt(document.getElementById("marks6").value);
        var total_marks = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
        var averag = total_marks/6;

        // console.log(total_marks);
            if(averag <=100 && averag>=85){
                // alert("4 GPA");
               document.getElementById("grade").innerHTML = "4 GPA";
            }
           else if(averag <= 84 && averag >= 72){
                // alert("3 GPA");
               document.getElementById("grade").innerHTML = "3 GPA";
            }
            else if(averag < 72 && averag >=60){
                // alert("2 GPA");
                document.getElementById("grade").innerHTML = "2 GPA";
            }
            else if(averag < 60 && averag >= 50){
                document.getElementById("grade").innerHTML = "1 GPA"
            }
            else {
                alert("Fail");
                document.getElementById("grade").innerHTML = "Fail";
            }
            // else{
            //     alert("fail");
            //     document.getElementById("grade").innerHTML = "Fail";
            // }

    }
