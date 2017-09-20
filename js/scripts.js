

$(function(){
  $("#pig-latin").submit(function(event){
    event.preventDefault();

    var str = $("input#latin").val();
    var result = alphaBetcheck(str);

    var arrVowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

            // for (var i = 0; i <= arrVowel.length; i++) {
            //         if (str.charAt(0) == arrVowel[i]) {
            //           var vowel = str+'way';
            //
            //         }
            //
            //        }
            // alert(vowel);

            // for (var i = 0; i <= arrVowel.length; i++) {
            //         if (str.charAt(0) != arrVowel[i]) {
            //           var firstPart = str.charAt(0).toUpperCase();
            //           var secondPart = str.slice(1, str.length);
            //
            //         }
            //
            //       }
            //       alert(secondPart+firstPart+'ay');

            // for (var i = 0; i <= arrVowel.length; i++) {
            //   if (str.charAt(0) == arrVowel[i]) {
            //     var vowel = str+'way';
            //   }
            //   else   {
            //
                for(var i = 0; i <= str.length; i++){
                  if (str.charAt(i) == arrVowel) {
                     var count = i;
                    for (var i= 0; i < count; i++) {
                       var part = part + str.charAt(i);
                    }


                  }

                }
            //     // var firstPart = str.charAt(0).toUpperCase();
            //     // var secondPart = str.slice(1, str.length);
            //   }
            //

            // if (str.charAt(0) != arrVowel[i]) {
            //   var firstPart = str.charAt(0).toUpperCase();
            //   var middlePart = str.charAt(1);
            //   var secondPart = str.slice(2, str.length);
            //
            // }
            // // var newArray = [];




        alert(vowel);
        alert(secondPart+firstPart+'ay');
        alert(secondPart+firstPart+middlePart+'ay');
        $("#output").text(result);
        $("#result").show();
      });
 });


    var alphaBetcheck = function(str) {
      var code, i;

      for (i = 0; i < str.length ; i++) {
        code = str.charCodeAt(i);
        if (!(code == 32) &&
        !(code > 64 && code < 91 ) && // upper alpha (A-Z)
        !(code > 96 && code < 123 )) { // lower alpha (a-z)
          return false;
        }
      }
      return true;
    }


















    // if (/[^0-9a-bA-B\s]/gi.test(fieldname.value))
    // {
    // alert ("Only alphanumeric characters and spaces are valid in this field");
