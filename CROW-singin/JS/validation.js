$(document).ready(function(){
$('#signin').validate({
    rules:{
        fname:{
            required:true,
            minlength:5,
        },
        lname:{
            required:true,
            minlength:5,
        },
        mobile:{
            required:true,
            
        },
        pass:{
            required:true,
            minlegth:8,
        },
        day:{
            required:true,
            
        },
        month:{
            required:true,
            
        },
        year:{
            required:true,
        
        },
        Female:{
            required:true,
        },
        Male:{
            required:true,
        },
        com:{
            required:true,
        },
        

       
    },
    messages:{
        fname: {
            required:"please enter your first name ",
            minlength:"please enter minmum 5 letter above" 
            
        },
        lname: {
            required:"please enter your last name ",
            minlength:"please enter minmum 2 letter above" 
            
        },
        pass: {
            required:"please enter your Password ",
        
            
        }



        
    }
})
});