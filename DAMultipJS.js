
/*
File: DAMultipJS.js
GUI Assignment: Making validation, sliders and tabs using validator jquery and jquery ui for a dynamic Multiplication table
Daury Argueta, UMass Lowell Computer Science, daury_argueta@student.uml.edu 

purpose: Had to write javascript jquery, html and css inorder to display a dynamic Multiplication table. Had to
create a table completely dynamically based on parameters entered in an HTML form.For this assignment we are required
 to do the validation using the jQuery Validation plugin. This plugin will allow you to do more powerful validation and 
 make the application more responsive to users. Then, I had to explore yet another JavaScript library called the
 jQuert user interface (ui) library to see its similarities and differences as compared to the library that we have
  already looked at: the jQuery Validator plugin.

Copyright (c) 2021 by Daury. All rights reserved. May be freely copied or excerpted for educational 
purposes with credit to the author.

Updated by Daury on June 23, 2022 at 11:00 PM
  src: Sources linked are commented in the code showing where I used what.
*/
  document.addEventListener('DOMContentLoaded', function() {
    var tableCount = false;
    document.getElementById("generate").addEventListener("click", generateTable);

    function generateTable () 
    {
        
        /*
        Putting this count statement inorder to keep the same page when putting different values for the dyanmic multiplication table.
        without a count and remove table, we will get different tables scattered around the webpage. If we keep track of the count, once 
        a count start a we remove the table, we will be able to erase the previous table and display the new one.
        */
        if (tableCount)
        {
            removeTable();
        };
        /* commented out my error messages
         //Error Message if a value greater than 50 is inserted for the x min
    if(parseInt(document.getElementById("xAxisStart").value) < -50 || document.getElementById("xAxisStart").value > 50)
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the x Min";
        document.getElementById("xAxisStart").value = "";
        removeTable();
    } 
    //Error Message if a value greater than 50 is inserted for the x max
    else if(parseInt(document.getElementById("xAxisEnd").value) < -50 || document.getElementById("xAxisEnd").value > 50)
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the x Max";
        removeTable();
    } 
    //Error Message if a value greater than 50 is inserted for the y min
    else if(parseInt(document.getElementById("yAxisStart").value) < -50 || document.getElementById("yAxisStart").value > 50) 
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the y Min";
        removeTable();
    } 
    //Error Message if a value greater than 50 is inserted for the y max
    else if(parseInt(document.getElementById("yAxisEnd").value) < -50 || document.getElementById("yAxisEnd").value > 50) 
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the y Max";
        removeTable();
    } 
   
   //In JavaScript, NaN is short for "Not-a-Number". The Number.isNaN() method returns true if the value is NaN, and the type is a Number. if 
   //it is anything else other than a number, it will return false. the isNaN() function determines whether a value is NaN or not.

   //src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

    //Error Message if there is a wrong input for VALUE of the start of the X axis.
    else if(isNaN(parseInt(document.getElementById("xAxisStart").value)))
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for X min!</span>";
        removeTable();
    } 
    //Error Message if there is a wrong input for VALUE of the end of the X axis.
    else if(isNaN(parseInt(document.getElementById("xAxisEnd").value))) 
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for X max!</span>";
        removeTable();
    } 
    //Error Message if there is a wrong input for VALUE of the start of the Y axis.
    else if(isNaN(parseInt(document.getElementById("yAxisStart").value)))
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for Y min!</span>";
        removeTable();
    } 
    //Error Message if there is a wrong input for VALUE of the end of the Y axis.
    else if(isNaN(parseInt(document.getElementById("yAxisEnd").value)))
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for Y max!</span>";
        removeTable();
    }
    else 
    {
        errorMessage.innerHTML = "";
    }
    */
        //document.createElement() method creates the HTML element specified by tagName
        let div = document.createElement('div'); //will work with all what is within the div which is the user input choices box.??
        /*
        div.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
        This can then be used to manipulate the class list. src: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

        Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(). with add(),
        The add() method appends a new element with a specified value to the end of a Set object. here the new element is 'box'
        */
       div.classList.add('tableScoller');
        /*
        The JavaScript appendChild() is a method of the Node interface, used to append nodes (typically elements) at 
        the end of a specified parent node. It can be executed on existing child nodes or by creating new elements.
        src: https://flexiple.com/javascript/javascript-appendchild
        */
        document.body.appendChild(div);
        var table = document.createElement("table");
        document.body.appendChild(table);

        div.appendChild(table);

        /*
        Here I am declaring the rows and columns by selecting the value that the user inputs in the html.
        What parseInt does is that it The parseInt() function parses a string argument and returns an integer, since
        we are accepting strings, we convert it to a number. then .value represents the value of the value attribute 
        of the option element.
        */
        var rowBegin = parseInt(document.getElementById("xAxisStart").value);
        var rowEnd = parseInt(document.getElementById("xAxisEnd").value);
        var columnBegin = parseInt(document.getElementById("yAxisStart").value);
        var columnEnd = parseInt(document.getElementById("yAxisEnd").value);
        
        //xMin, xMax, Ymin, Ymax
        createTable(rowBegin, rowEnd, columnBegin, columnEnd);

        function createTable(rowBegin, rowEnd, columnBegin, columnEnd) {
            var i = columnBegin - 1;
            var j = rowBegin - 1;
            while (i < columnEnd + 1) {
              var row = document.createElement("tr");
              var NumofRow = table.appendChild(row);
              for (var j = rowBegin - 1; j < rowEnd + 1; j++) {
                var data = document.createElement("td");
                if (i == columnBegin - 1 && j == rowBegin - 1) {
                  var gridValue = "";
                  data.textContent = gridValue;
                  data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0'
                } else if (j == rowBegin - 1) {
                  var gridValue = i;
                  data.textContent = gridValue;
                  data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0; z-index: 1'
                } else if (i == columnBegin - 1) {
                  var gridValue = j;
                  data.textContent = gridValue;
                  data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; top:0 ; z-index: 2'
                } else {
                  var gridValue = i * j;
                  data.textContent = gridValue;
                  data.style.cssTest = 'z-index: 0'
                }
                NumofRow.appendChild(data);
              }
      
              i++;
            }
          }
        tableCount = true; //Table Counter
    }
    /*
    Function that will not allow the repeating of tables in the website. It will delete the table when theres a error or already a table in.
    */
    function removeTable () 
    {
        var parent = document.body;
        var child = document.getElementsByClassName("tableScoller")[0];
        parent.removeChild(child);
    }

});

/*
https://jqueryvalidation.org/documentation/
*/
var totalTabs = 1;

$(document).ready(function() {
    /*
     I used https://jsfiddle.net/tUPQc/2/ for this part. I was not sure how to make sure 
     that the use would input a number for the min input of x axis and y axis. This link gave me 
     a good undestand on how to do that. I used this as reference as how to do it.
    */
   //less than
   $.validator.addMethod("lessThan",
   function (value, element, param) {
       var $minValue = $(param);
       if (this.settings.onfocusout) {
         //.off Remove an event handler. https://api.jquery.com/off/
         //.on Attach an event handler function for one or more events to the selected elements.
         //also used https://stackoverflow.com/questions/19016053/turn-on-off-jquery-validation-for-one-input as some insight 
           $minValue.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
               $(element).valid();
           });
       } 
       return parseInt(value) < parseInt($minValue.val());
       
}, " Min value must be less than than Max value");
   //greater than
        $.validator.addMethod("greaterThan", function (value, element, param) {
            var $minValue = $(param);
            if (this.settings.onfocusout) {
                $minValue.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
                    $(element).valid();
                });
            } 
            return parseInt(value) > parseInt($minValue.val());
            
    }, " Max value must be greater than min value");
//https://www.tutorialspoint.com/How-to-validate-a-form-using-jQuery
        $("#userInputs").validate({
          //A validation rule applies one or more validation methods to an input element. 
          //You can specify validation rules via metadata or via plugin settings (option rules).
          //https://jqueryvalidation.org/reference/
          //my rules
        rules: {
            xAxisStart: {
                required: true,
                number:true,
                min: -50,
                max: 50,
                lessThan:"xAxisEnd",
            },
            xAxisEnd: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThan:"#xAxisStart",
            },
            yAxisStart: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                lessThan:"yAxisEnd",
            },
            yAxisEnd: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThan:"#yAxisStart",
            }
        },
        //Message will display when something incorrect as been inputted
        messages: {
            xAxisStart: {
                required: "It is required that you input a number for x Axis Min",
                number: "You did not enter a valid number.<br/>Enter a number between -50 and 50 for x Axis Min value.",
                min: "You DID NOT place a correct x minimum value. This number is TOO LOW! Please insert a number between -50 and 50 for the x max",
                max: "You DID NOT place a correct x minimum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the x max", 
                lessThan:"x axis min must be less than x axis Max",
            },
            xAxisEnd: {
                required: "It is required that you input a number for x Axis Max",
                number: " you did not enter a valid number.<br/>Enter a number between -50 and 50 for x Axis Max value.",
                min: "You DID NOT place a correct x maximum value. This number is TOO LOW! Please insert a number between -50 and 50 for the x max",
                max: "You DID NOT place a correct x maximum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the x max",
                greaterThan:"x axis max must be greater than x axis Min",
            },
            yAxisStart: {
                required: "It is required that you input a number for y Axis Min",
                number: " you did not enter a valid number.<br/>Enter a number between -50 and 50 for y Axis Min value.",
                min: "You DID NOT place a correct y maximum value. This number is TOO LOW! Please insert a number between -50 and 50 for the x max",
                max: "You DID NOT place a correct y maximum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the x max",
                lessThan:"y axis min must be less than x axis Max",
            },
            yAxisEnd: {
                required: "It is required that you input a number for y Axis Max",
                number: " you did not enter a valid number.<br/>Enter a number between -50 and 50 for y Axis Max value.",
                min: "You DID NOT place a correct y maximum value. This number is TOO LOW! Please insert a number between -50 and 50 for the y max",
                max: "You DID NOT place a correct y maximum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the y max",
                greaterThan:"y axis max must be greater than y axis Min",
            }
        },
        submitHandler:function(form){
            form.submit();
        }
    });

    //I will explain what is going on for one section and it will apply for the rest
    /*
    This is where I starting creating the sliders for the input of the user.
    jQuery UI slider is used to obtain a numeric value within a certain range.
    The main advantage of slider over text input is that it becomes impossible 
    for the users to enter an invalid value.
    https://www.javatpoint.com/jquery-ui-slider
    */
    $("#xAxisStart_slider").slider({
      min:-50,
      max:50,
      /*The event object is the original object that was fired, normalized by jQuery. 
      Meanwhile, the ui object contains information added by jQuery UI, depending on which interaction was used.
      https://www.codecademy.com/forum_questions/51b7b37e52f86314c5013eef
      */
      slide: function(event,ui) {
        //Get the value of the slider. This signature does not accept any arguments.
        //Get the current value of the first element in the set of matched elements or set the value of every matched element
        //https://api.jquery.com/val/
        $("#xAxisStart").val(ui.value).change();//The change() method triggers the change event, or attaches a function to run when a change event occurs. 
        //The change event is sent to an element when its value changes
      }
    });
  
    $("#xAxisEnd_slider").slider({
      min:-50,
      max:50,
      slide: function(event,ui) {
        $("#xAxisEnd").val(ui.value).change();
      }
    });
  
    $("#yAxisStart_slider").slider({
      min:-50,
      max:50,
      slide: function(event,ui) {
        $("#yAxisStart").val(ui.value).change();
      }
    });
  
    $("#yAxisEnd_slider").slider({
      min:-50,
      max:50,
      slide: function(event,ui) {
        $("#yAxisEnd").val(ui.value).change();
      }
    });

    /*
   https://infoheap.com/jquery-ui-slider-and-input-text-box-two-way-binding/
   THIS IS WHERE I START THE TWO WAY BINDING part of the assignment. 
   Used https://api.jqueryui.com/slider/#event-change
   Here,  Manipulated the slider to change the value in the corresponding text input field dynamically. There,
    moving the slider should instantly change the text input field value. Likewise, typing into the text input field 
    should change the value indicated by the slider.
    */
   //have to do the two way binding for every box user can input value in. Its pretty repretory 
   //x axis start
$("#xAxisStart").change(function(){
  var prev_val1=$("#xAxisStart_slider").slider("option", "value"); //for the slider("option", "value") used https://stackoverflow.com/questions/2833396/jquery-ui-slider-setting-programmatically
  var new_Val1 = $(this).val();
  
  if (isNaN(new_Val1) || new_Val1 < -50 || new_Val1 > 50) //making sure that the value is within the rnage
  {
        $("#xAxisStart_slider").val(prev_val1);
      } 
      else 
      {
        $("#xAxisStart_slider").slider("option", "value", new_Val1);
      }
      // Corrects vallidation so that only submits and checks when there is an input value in bot min/max
      if ($("#xAxisEnd").val()!='')
      {
        //for the .validate() used https://code.tutsplus.com/tutorials/easy-form-validation-with-jquery--cms-33096 as a reference.
        //validate It gives you additional abilities like easily displaying custom error messages and adding conditional logic to jQuery form validation
        $("#userInputs").validate().element("#xAxisStart");
        $("#userInputs").validate().element("#xAxisEnd");
      }
      if($("#yAxisEnd").val()!='' && $("#yAxisEnd").val() !='' && $("#xAxisStart").val() !='' && $("xAxisEnd").val() !='')
      {
      $("#userInputs").submit();
    }
  });
  
  //x axis end
  $("#xAxisEnd").change(function(){
  var prev_val2=$("#xAxisEnd_slider").slider("option", "value");
  var new_val2=$(this).val();
  
  if (isNaN(new_val2) || new_val2 < -50 || new_val2 > 50) {
        $("#xAxisEnd_slider").val(prev_val2);
      } else {
        $("#xAxisEnd_slider").slider("option", "value", new_val2);
      }
      // Corrects vallidation, so that only submits and checks when there is an input value in 
      if ($("#xAxisStart").val()!=''){
        $("#userInputs").validate().element("#xAxisEnd");
        $("#userInputs").validate().element("#xAxisStart");
      }
      if($("#yAxisEnd").val()!='' && $("#yAxisStart").val() !='' && $("#xAxisStart").val() !='' && $("xAxisEnd").val() !=''){
      $("#userInputs").submit();
    }
  
  });
  
  //y axis start
  $("#yAxisStart").change(function(){
  var prev_val3=$("#yAxisStart_slider").slider("option", "value");
  var new_val3=$(this).val();
  
  if (isNaN(new_val3) || new_val3 < -50 || new_val3 > 50) {
        $("#yAxisStart_slider").val(prev_val3);
      } else {
        $("#yAxisStart_slider").slider("option", "value", new_val3);
      }
      if ($("#yAxisEnd").val()!=''){
        $("#userInputs").validate().element("#yAxisEnd");
        $("#userInputs").validate().element("#yAxisStart");
      }
      if($("#yAxisEnd").val()!='' && $("#yAxisStart").val() !='' && $("#xAxisStart").val() !='' && $("xAxisEnd").val() !=''){
      $("#userInputs").submit();
    }
  });
  
  //y axis end
  $("#yAxisEnd").change(function(){
  var prev_val4=$("#yAxisEnd_slider").slider("option", "value");
  var new_val4=$(this).val();
  
  if (isNaN(new_val4) || new_val4 < -100 || new_val4 > 100) {
        $("#yAxisEnd_slider").val(prev_val4);
      } else {
        $("#yAxisEnd_slider").slider("option", "value", new_val4);
      }
      if ($('#yAxisStart').val()!=''){
        $("#userInputs").validate().element("#yAxisStart");
        $("#userInputs").validate().element("#yAxisEnd");
      }
      if($("#yAxisEnd").val()!='' && $("#yAxisStart").val() !='' && $("#xAxisStart").val() !='' && $("xAxisEnd").val() !=''){
      $("#userInputs").submit();
    }
  });


  var index = 1;//will represent tab number 1 (#1)
  /*The click() is an inbuilt method in jQuery that starts the click event or attach a function to run when a click event occurs.
  https://www.geeksforgeeks.org/jquery-click-with-examples/
  */
  $("#newTab").click(function(){
    //do not want to create a tab on improper inputs therefore
    //Created a variable so it does not create a tab when the wrong numbers are chosen
    var caution = true;

    //This is saying, if what was inputted in the forms in my html (userInputs ID) is valid, then it will 
    //turn my caution false, but if it remains true, the tab will not be generated.
    //from Juqeryvalidation.org it states .valid() Checks whether the selected form is valid or whether all selected elements are valid.
    if($('#userInputs').valid()){
      caution =false;
    }
    //So we will check userInputs, if it remains true, it will return, will not make the tab.
    if(caution == true)
    {
      return;
    }
    
    index++; //used to keep count of table

    
    totalTabs = "#" + index; //To keep track the total number of tabs. display the number with
    
    /*
    Created this to display on the tage the start x and y values and the end x and y values
    */
    var xMn = Number(document.getElementById('xAxisStart').value);
    var xMx = Number(document.getElementById('xAxisEnd').value);
    var yMn = Number(document.getElementById('yAxisStart').value);
    var yMx = Number(document.getElementById('yAxisEnd').value);
    //header for tab
    //will use this format to display the numbers
    var header = "<li class='tab'><a href='#tab-"+ index +"'> Tab " + index + " " + xMn + "," + xMx + "," + yMn + "," + yMx + "</a> <input type= 'checkbox'/> </li>"; // Used https://api.jquery.com/checkbox-selector/ for the checkBox inspiraction
    // uses tab header values to create tab header on button click
    $("#tabs ul").append(header); //.append() Inserts content, specified by the parameter, to the end of each element in the set of matched elements. Should add the table
    //Div that pertains to the content of the tab
    $("#tabs").append("<div id='"+ index + "'>" + "</div>");
    //Refresh tabs
    $("#tabs").tabs("refresh");
    //set the active tab which used https://stackoverflow.com/questions/21860658/how-to-set-active-tab-in-jquery-ui as reference.
    //was trying to put down $( "#tabs" ).tabs( "option", "active", # ); but did not work, used -1 to set first tab
    $("#tabs").tabs("option", "active", 0 );
    })
    
    //Delete tab button
    // Used https://stackoverflow.com/questions/7960208/jquery-if-checkbox-is-checked to help me out with the delete tab button

    $("#deleteTab").click(function(){
      $("#tabs ul li").each(function(){
       if ($(this).find(".checkbox_check").is(':checked')){//When it is checked and you click on delete it should delete the table that you had clicked.
        // used https://stackoverflow.com/questions/23944253/how-to-select-all-elements-with-particular-aria-value-using-jquery for aria-controls.
        // the aria-controls attribute is identifies the element (or elements) whose contents or presence are controlled by the element on which the attribute
        // is set, regardless of what type of interaction initiates the impacted behavior
       var panelId = $(this).closest("li").remove().attr("aria-controls"); //The /closest() method returns the first ancestor of the selected element. source https://www.w3schools.com/jquery/traversing_closest.asp
       $("#" + panelId).remove();
       $("#tabs").tabs("refresh"); //jQuery UI tabs() method is used to change the appearance of HTML elements inside the page
       }
      })
    });
});
