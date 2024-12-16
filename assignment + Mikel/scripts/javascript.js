document.write( "<p id = Divide >0</p>" )

let foo
foo = 0
let bar
bar = 0
let Divide
Divide = foo / bar

console.log(Divide)

function isNumberKey(evt) {     // input tags där man bara kan skriva nummer är inte min. hittade denna online här: https://stackoverflow.com/questions/13952686/how-to-make-html-input-tag-only-accept-numerical-values
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }