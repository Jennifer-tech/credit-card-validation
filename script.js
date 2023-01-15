//visa card validation
function validate_creditcardNo(visa_cardNo){
    var visa_cardNo = prompt("Enter your card number");
    const regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if(visa_cardNo.value.match(regEx)){
        return true;
    }else{
        alert("card is invalid");
    }
}

/*for a visa card no, the following requirements are needed
1) The string should not contain any special characters, alphabets or whitespaces
2) The string hould start with 4
3)The number of charactrs has to be equal to 13 or 16. Old visa cards have 13 characters while the new visa cards have 16 characters.
4)if the number of characters must be equal to 13, the last 12 digitsmust be a number between 0 to 9.
5) If the number of characters is equal to 17, the last 15 digits must be a number between 0 to 9

from the regex above,
^- This matches the beginning of input. Therefore ^4 ensures that the first input starts with 4
[0-9]- it shows a range of character and it accepts any one of the character in the range i.e from 0-9
{12}- this means that the numeric characters are matched exactly 12 times
()- it is used to group a series of pattern elements to a single element
?:- it is used to match the preceeding number zero or one time
$- it shows end of line
*/