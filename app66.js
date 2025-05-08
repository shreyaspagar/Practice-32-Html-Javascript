let string = ["Shreyas" , "Sonu" , "hi" , "bye"];

function concat(string) {
    let result;

    for(let i = 0; i<string.length; i++) {
        result += string[i];
    }
 
    return result;  

}