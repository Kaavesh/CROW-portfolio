$(document).ready(function(){
    $('#testbtn').click(function() {
      //  alert('Hello guyz');
      $('.box').fadeToggle(3000);
    });
 $('.box').mouseenter(function(){
    $(this).css({"background-color": "lightblue"});
 })
 $('.box').mouseleave(function(){
    $(this).css({"background-color": "black"});
 });

 $('#name').blur(function() {
    var userInput =$(this).val();
    if(userInput.length <5){
    $('.error').show()
    }
 })
});