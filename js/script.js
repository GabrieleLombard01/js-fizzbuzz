//JS RESET
console.log('JS OK')

/*
# Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero per i multipli di 5 stampi “Buzz” al posto del numero. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

​
**QUANDO** apro la console
- creo un contatore da 1 a 100
- individuo i multipli di 3 
- individuo i multipli di 5 
- individuo i multipli sia di 3 che di 5

    **QUANDO** stampo in console i numeri 

    **SE** stampo i multipli di 3
    - sostituisco i numeri con la parola FIZZ  

    **SE** stampo i multipli di 5
    - sostituisco i numeri con la parola Buzz

    **SE** stampo i multipli sia di 3 che di 5
    - sostituisco i numeri con la parola FIZZBUZZ

**FINE**

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||NB: PER ARRIVARE A QUESTO RISULTATO CI SERVIREMO DI FOR E DI IF|||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

*/


//QUANDO apro la console

    //Creo un contatore da 1 a 100
    for (let i = 1; i <= 100; i++){
        console.log(i);

        //individuo i multipli di 3 e 5
            //sostituisco i numeri con la parola FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")

        //individuo i multipli di 5
            //sostituisco i numeri con la parola Buzz
        } else if (i % 5 === 0) {
            console.log("Buzz")

        //individuo i multipli di 3
            //sostituisco i numeri con la parola Fizz   
        } else if (i % 3 === 0) {
            console.log("Fizz")

        //Tutti gli altri numeri    
        } else {
            console.log(i)
        }

    }
    
