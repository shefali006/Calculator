let input=document.getElementById("output");  /* Use of DOM for interaction between HTML & JS */

/*For displaying the input*/
function display(num){
    input.value +=num;
}

/*For performing Calculation */
function calculate()
{
    input.value=eval(input.value);
}

/*For clearing the screen */
function Clear()
{
    input.value = "";
}
 /*For deleting values */
function del(){
    input.value=input.value.slice(0,-1);
}