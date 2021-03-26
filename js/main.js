/*
    BURGER JS
*/

// Referenze
var bottone = document.getElementById('button');
var nomeBurger = document.getElementById('name');
var ingredienti = document.getElementsByClassName('ingredient-checkbox');
var prezzoAggiornato = document.getElementById('price');
var sconto = document.getElementById('coupon');
var addBottone = document.getElementsByClassName('ingredient-add');

var coupon = ['12354ABCDEF','12FF4ABC5EF','12FFJA5CXEF']


// Add cliccabili
for (var i = 0; i < addBottone.length; i++) {
    var add = addBottone[i];
    
    add.addEventListener('click', function () {
        var checkbox = this.previousElementSibling;
        checkbox.checked = ! checkbox.checked;
    })
}

// Calcolo prezzo
bottone.addEventListener('click', function() {
    var nome = nomeBurger.value;
    
    // Nome obbligatorio
    if (nome.length === 0) {
        alert('Inserisci nome valido')
    } else {

        // Aggiunta prezzo ingredienti al prezzo base
        var prezzo = 50;

        for (var i = 0; i < ingredienti.length; i++) {
            var ingredientiCheck = ingredienti[i];

            if (ingredientiCheck.checked) {
                prezzo += parseInt(ingredientiCheck.value);
            }
        }

        // Applicare lo sconto
        var scontoCode = sconto.value;

        if (coupon.includes(scontoCode)) {
            prezzo -= prezzo * 0.2; 
        }
        
        // Stampa il prezzo
        prezzoAggiornato.innerHTML = prezzo.toFixed(2);
    }
})