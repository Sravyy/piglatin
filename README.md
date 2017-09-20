$(function(){
  $("#pig-latin").submit(function(event){
    event.preventDefault();

   var str = $("input#latin").val();
   var result = alphaBetcheck(str);

  var newArray = [];
    var arrVowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];


  // for (var i = 0; i <= arrVowel.length; i++) {
  //         if (str.charAt(0) == arrVowel[i]) {
  //           var firstPart = str.charAt(0);
  //           var secondPart = str.slice(1, str.length);
  //           alert(secondPart+firstPart+'way');
  //
  //         }
  //       }



   $("#output").text(result);
   $("#result").show();
 });

});
