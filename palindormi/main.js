// immetto una parola 
const word = prompt('Immetti Parola');
// verifico che la parola sia palindroma
const check = Palindrome(word);
// immetto la funzione per farlo verifiare
function Palindrome(word) {
    const len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return 'la parola non è Palindroma';
        }
    }
    return 'la parola è palindroma';
}
// stampo il risultato
console.log(check);