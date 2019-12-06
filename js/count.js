$(document).ready(function(){
    /// click add and get value from input 
    $("#add").on('click',function(){
        var input = $("#num").val();
        addNum(input);
    })
    //// click minus and get value from input 
    $('#minus').on('click',function(){
        var input = $("#num").val();
        minusNum(input);
    })
});
////increas Number 
var addNum = (num) => {
    var add = parseInt( num) + 1;
    if( add <= 15){
        $("#num").val(add);
        // var result = add * 5;
        // $("#result").html(result);
        compute(add);
      
    }
};
//// Decreas Number 
var minusNum = (num) => {
    var minus = parseInt(num ) -1;
    if( minus >= 0){
        $("#num").val(minus);
        var results = minus * 5;
        $('#result').html(results)
    }
}

///// function compute to html
function compute (num) {
    var computes = num * 5;
    $('#result').html(computes)
}
// function 
// $("#progres").width(computes);