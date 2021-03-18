

let context = document.getElementById('totaal');

let inputNaam = document.getElementById('textbox-naam');
let outputNaam = document.getElementById('recipe-naam');
let outputSelect = document.getElementById('recipe-stoelen');
let ticket = document.getElementById('recipe-ticket');
let email = document.getElementById('textbox-email');
let outputEmail = document.getElementById('recipe-email');
let vak = document.getElementById('selecteer');
let outputVak = document.getElementById('recipe-vak');
let allSeats = document.getElementsByClassName('seat');



let selectA = 0;
let selectB = 0;
let selectC = 0;
let selectD = 0;
let selectE = 0;
let selectF = 0;
let selectG = 0;

let selectAPrijs = 120;
let selectBPrijs = 110;
let selectCPrijs = 100;
let selectDPrijs = 90;
let selectEPrijs = 85;
let selectFPrijs = 80;
let selectGPrijs = 80;

let form = document.forms[0];

let extra = 9;







form.addEventListener('click', event => {
    event.preventDefault();

    let prijs =
        (selectG * selectGPrijs +
            selectF * selectFPrijs +
            selectE * selectEPrijs +
            selectD * selectDPrijs +
            selectC * selectCPrijs +
            selectB * selectBPrijs +
            selectA * selectAPrijs) + extra;

    context.innerHTML = '&nbsp;Totale prijs: &euro; ' + prijs;


    outputNaam.innerHTML = '&nbsp;Naam: ' + '<strong>' + inputNaam.value + '</strong>';
    outputSelect.innerHTML = '&nbsp;Aantal geselecteerde <br>&nbsp;stoelen: ' + parseInt(selectA + selectB + selectC + selectD + selectE + selectF + selectG);
    outputEmail.innerHTML = 'E-Mail: ' + '<br>' + '<strong>' + email.value + '</strong>';
    outputVak.innerHTML = '&nbsp;Vak: ' + vak.value;


    console.clear()
    console.log('selectA = ' + selectA);
    console.log('selectB = ' + selectB);
    console.log('selectC = ' + selectC);
    console.log('selectD = ' + selectD);
    console.log('selectE = ' + selectE);
    console.log('selectF = ' + selectF);
    console.log('selectG = ' + selectG);
    console.log('Prijs = ' + prijs);
});





function openList() {
    let lijst = document.getElementById('prijzenpopup');
    lijst.style.display = 'block';
    let pay = document.getElementById('betalenpopup');
    pay.style.display = 'none';

}
function closeList() {
    let lijst = document.getElementById('prijzenpopup');
    lijst.style.display = 'none';

}
function openPayment() {
    let pay = document.getElementById('betalenpopup');
    pay.style.display = 'block';
    let lijst = document.getElementById('prijzenpopup');
    lijst.style.display = 'none';

}
function closePay() {
    let pay = document.getElementById('betalenpopup');
    pay.style.display = 'none';

}
function payment() {

    actions.request.post()
    return res.id;
}


// Canvas

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 20, 520, 100);
ctx.fillStyle = 'lightgray';
ctx.fill();







// Stoelen 1/10

// Stoel 1

let clickCounter = 0;
function test() {
    let seat = document.getElementById('seat1');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter++;

    if (clickCounter <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter = 0;
    }



}

// Stoel 2
let clickCounter2 = 0;
function test2() {
    let seat = document.getElementById('seat2');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter2++;

    if (clickCounter2 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter2 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter2 = 0;
    }



}

// Stoel 3
let clickCounter3 = 0;
function test3() {
    let seat = document.getElementById('seat3');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter3++;

    if (clickCounter3 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter3 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter3 = 0;
    }



}

// Stoel 4
let clickCounter4 = 0;
function test4() {
    let seat = document.getElementById('seat4');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter4++;

    if (clickCounter4 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter4 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter4 = 0;
    }



}

// Stoel 5
let clickCounter5 = 0;
function test5() {
    let seat = document.getElementById('seat5');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter5++;

    if (clickCounter5 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter5 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter5 = 0;
    }



}

// Stoel 6
let clickCounter6 = 0;
function test6() {
    let seat = document.getElementById('seat6');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter6++;

    if (clickCounter6 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter6 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter6 = 0;
    }



}

// Stoel 7
let clickCounter7 = 0;
function test7() {
    let seat = document.getElementById('seat7');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter7++;

    if (clickCounter7 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter7 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter7 = 0;
    }



}

// Stoel 8
let clickCounter8 = 0;
function test8() {
    let seat = document.getElementById('seat8');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter8++;

    if (clickCounter8 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter8 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter8 = 0;
    }



}

// Stoel 9
let clickCounter9 = 0;
function test9() {
    let seat = document.getElementById('seat9');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter9++;

    if (clickCounter9 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter9 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter9 = 0;
    }



}

// Stoel 10
let clickCounter10 = 0;
function test10() {
    let seat = document.getElementById('seat10');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter10++;

    if (clickCounter10 <= 1) {
        seat.style.filter = selected;
        selectG++;
    }
    else if (clickCounter10 > 1) {
        seat.style.filter = unselected;
        selectG--;
        clickCounter10 = 0;
    }



}




// Stoelen 11/20

// Stoel 11
let clickCounter11 = 0;
function test11() {
    let seat = document.getElementById('seat11');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter11++;

    if (clickCounter11 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter11 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter11 = 0;
    }



}

// Stoel 12
let clickCounter12 = 0;
function test12() {
    let seat = document.getElementById('seat12');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter12++;

    if (clickCounter12 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter12 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter12 = 0;
    }



}

// Stoel 13
let clickCounter13 = 0;
function test13() {
    let seat = document.getElementById('seat13');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter13++;

    if (clickCounter13 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter13 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter13 = 0;
    }



}

// Stoel 14
let clickCounter14 = 0;
function test14() {
    let seat = document.getElementById('seat14');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter14++;

    if (clickCounter14 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter14 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter14 = 0;
    }



}

// Stoel 15
let clickCounter15 = 0;
function test15() {
    let seat = document.getElementById('seat15');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter15++;

    if (clickCounter15 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter15 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter15 = 0;
    }



}

// Stoel 16
let clickCounter16 = 0;
function test16() {
    let seat = document.getElementById('seat16');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter16++;

    if (clickCounter16 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter16 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter16 = 0;
    }



}

// Stoel 17
let clickCounter17 = 0;
function test17() {
    let seat = document.getElementById('seat17');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter17++;

    if (clickCounter17 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter17 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter17 = 0;
    }



}

// Stoel 18
let clickCounter18 = 0;
function test18() {
    let seat = document.getElementById('seat18');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter18++;

    if (clickCounter18 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter18 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter18 = 0;
    }



}

// Stoel 19
let clickCounter19 = 0;
function test19() {
    let seat = document.getElementById('seat19');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter19++;

    if (clickCounter19 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter19 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter19 = 0;
    }



}

// Stoel 20
let clickCounter20 = 0;
function test20() {
    let seat = document.getElementById('seat20');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter20++;

    if (clickCounter20 <= 1) {
        seat.style.filter = selected;
        selectF++;
    }
    else if (clickCounter20 > 1) {
        seat.style.filter = unselected;
        selectF--;
        clickCounter20 = 0;
    }



}
// Stoelen 21/30

// Stoel 21
let clickCounter21 = 0;
function test21() {
    let seat = document.getElementById('seat21');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter21++;

    if (clickCounter21 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter21 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter21 = 0;
    }



}

// Stoel 22
let clickCounter22 = 0;
function test22() {
    let seat = document.getElementById('seat22');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter22++;

    if (clickCounter22 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter22 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter22 = 0;
    }



}

// Stoel 23
let clickCounter23 = 0;
function test23() {
    let seat = document.getElementById('seat23');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter23++;

    if (clickCounter23 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter23 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter23 = 0;
    }



}

// Stoel 24
let clickCounter24 = 0;
function test24() {
    let seat = document.getElementById('seat24');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter24++;

    if (clickCounter24 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter24 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter24 = 0;
    }



}

// Stoel 25
let clickCounter25 = 0;
function test25() {
    let seat = document.getElementById('seat25');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter25++;

    if (clickCounter25 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter25 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter25 = 0;
    }



}

// Stoel 26
let clickCounter26 = 0;
function test26() {
    let seat = document.getElementById('seat26');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter26++;

    if (clickCounter26 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter26 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter26 = 0;
    }



}

// Stoel 27
let clickCounter27 = 0;
function test27() {
    let seat = document.getElementById('seat27');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter27++;

    if (clickCounter27 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter27 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter27 = 0;
    }



}

// Stoel 28
let clickCounter28 = 0;
function test28() {
    let seat = document.getElementById('seat28');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter28++;

    if (clickCounter28 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter28 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter28 = 0;
    }



}

// Stoel 29
let clickCounter29 = 0;
function test29() {
    let seat = document.getElementById('seat29');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter29++;

    if (clickCounter29 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter29 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter29 = 0;
    }



}

// Stoel 30
let clickCounter30 = 0;
function test30() {
    let seat = document.getElementById('seat30');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter30++;

    if (clickCounter30 <= 1) {
        seat.style.filter = selected;
        selectE++;
    }
    else if (clickCounter30 > 1) {
        seat.style.filter = unselected;
        selectE--;
        clickCounter30 = 0;
    }



}

// Stoelen 31/40

// Stoel 31
let clickCounter31 = 0;
function test31() {
    let seat = document.getElementById('seat31');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter31++;

    if (clickCounter31 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter31 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter31 = 0;
    }



}

// Stoel 32
let clickCounter32 = 0;
function test32() {
    let seat = document.getElementById('seat32');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter32++;

    if (clickCounter32 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter32 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter32 = 0;
    }



}

// Stoel 33
let clickCounter33 = 0;
function test33() {
    let seat = document.getElementById('seat33');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter33++;

    if (clickCounter33 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter33 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter33 = 0;
    }



}

// Stoel 34
let clickCounter34 = 0;
function test34() {
    let seat = document.getElementById('seat34');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter34++;

    if (clickCounter34 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter34 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter34 = 0;
    }



}

// Stoel 35
let clickCounter35 = 0;
function test35() {
    let seat = document.getElementById('seat35');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter35++;

    if (clickCounter35 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter35 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter35 = 0;
    }



}

// Stoel 36
let clickCounter36 = 0;
function test36() {
    let seat = document.getElementById('seat36');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter36++;

    if (clickCounter36 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter36 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter36 = 0;
    }



}

// Stoel 37
let clickCounter37 = 0;
function test37() {
    let seat = document.getElementById('seat37');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter37++;

    if (clickCounter37 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter37 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter37 = 0;
    }



}

// Stoel 38
let clickCounter38 = 0;
function test38() {
    let seat = document.getElementById('seat38');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter38++;

    if (clickCounter38 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter38 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter38 = 0;
    }



}

// Stoel 39
let clickCounter39 = 0;
function test39() {
    let seat = document.getElementById('seat39');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter39++;

    if (clickCounter39 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter39 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter39 = 0;
    }



}

// Stoel 40
let clickCounter40 = 0;
function test40() {
    let seat = document.getElementById('seat40');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter40++;

    if (clickCounter40 <= 1) {
        seat.style.filter = selected;
        selectD++;
    }
    else if (clickCounter40 > 1) {
        seat.style.filter = unselected;
        selectD--;
        clickCounter40 = 0;
    }



}

// Stoelen 41/50

// Stoel 41
let clickCounter41 = 0;
function test41() {
    let seat = document.getElementById('seat41');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter41++;

    if (clickCounter41 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter41 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter41 = 0;
    }



}

// Stoel 42
let clickCounter42 = 0;
function test42() {
    let seat = document.getElementById('seat42');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter42++;

    if (clickCounter42 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter42 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter42 = 0;
    }



}

// Stoel 43
let clickCounter43 = 0;
function test43() {
    let seat = document.getElementById('seat43');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter43++;

    if (clickCounter43 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter43 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter43 = 0;
    }



}

// Stoel 44
let clickCounter44 = 0;
function test44() {
    let seat = document.getElementById('seat44');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter44++;

    if (clickCounter44 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter44 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter44 = 0;
    }



}

// Stoel 45
let clickCounter45 = 0;
function test45() {
    let seat = document.getElementById('seat45');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter45++;

    if (clickCounter45 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter45 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter45 = 0;
    }



}

// Stoel 46
let clickCounter46 = 0;
function test46() {
    let seat = document.getElementById('seat46');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter46++;

    if (clickCounter46 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter46 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter46 = 0;
    }



}

// Stoel 47
let clickCounter47 = 0;
function test47() {
    let seat = document.getElementById('seat47');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter47++;

    if (clickCounter47 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter47 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter47 = 0;
    }



}

// Stoel 48
let clickCounter48 = 0;
function test48() {
    let seat = document.getElementById('seat48');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter48++;

    if (clickCounter48 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter48 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter48 = 0;
    }



}

// Stoel 49
let clickCounter49 = 0;
function test49() {
    let seat = document.getElementById('seat49');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter49++;

    if (clickCounter49 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter49 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter49 = 0;
    }



}

// Stoel 50
let clickCounter50 = 0;
function test50() {
    let seat = document.getElementById('seat50');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter50++;

    if (clickCounter50 <= 1) {
        seat.style.filter = selected;
        selectC++;
    }
    else if (clickCounter50 > 1) {
        seat.style.filter = unselected;
        selectC--;
        clickCounter50 = 0;
    }



}
// Stoelen 51/60

// Stoel 51
let clickCounter51 = 0;
function test51() {
    let seat = document.getElementById('seat51');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter51++;

    if (clickCounter51 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter51 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter51 = 0;
    }



}

// Stoel 52
let clickCounter52 = 0;
function test52() {
    let seat = document.getElementById('seat52');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter52++;

    if (clickCounter52 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter52 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter52 = 0;
    }



}

// Stoel 53
let clickCounter53 = 0;
function test53() {
    let seat = document.getElementById('seat53');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter53++;

    if (clickCounter53 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter53 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter53 = 0;
    }



}

// Stoel 54
let clickCounter54 = 0;
function test54() {
    let seat = document.getElementById('seat54');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter54++;

    if (clickCounter54 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter54 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter54 = 0;
    }



}

// Stoel 55
let clickCounter55 = 0;
function test55() {
    let seat = document.getElementById('seat55');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter55++;

    if (clickCounter55 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter55 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter55 = 0;
    }



}

// Stoel 56
let clickCounter56 = 0;
function test56() {
    let seat = document.getElementById('seat56');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter56++;

    if (clickCounter56 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter56 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter56 = 0;
    }



}

// Stoel 57
let clickCounter57 = 0;
function test57() {
    let seat = document.getElementById('seat57');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter57++;

    if (clickCounter57 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter57 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter57 = 0;
    }



}

// Stoel 58
let clickCounter58 = 0;
function test58() {
    let seat = document.getElementById('seat58');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter58++;

    if (clickCounter58 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter58 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter58 = 0;
    }



}

// Stoel 59
let clickCounter59 = 0;
function test59() {
    let seat = document.getElementById('seat59');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter59++;

    if (clickCounter59 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter59 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter59 = 0;
    }



}

// Stoel 60
let clickCounter60 = 0;
function test60() {
    let seat = document.getElementById('seat60');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter60++;

    if (clickCounter60 <= 1) {
        seat.style.filter = selected;
        selectB++;
    }
    else if (clickCounter60 > 1) {
        seat.style.filter = unselected;
        selectB--;
        clickCounter60 = 0;
    }



}
// Stoelen 61/70

// Stoel 61
let clickCounter61 = 0;
function test61() {
    let seat = document.getElementById('seat61');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter61++;

    if (clickCounter61 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter61 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter61 = 0;
    }



}

// Stoel 62
let clickCounter62 = 0;
function test62() {
    let seat = document.getElementById('seat62');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter62++;

    if (clickCounter62 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter62 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter62 = 0;
    }



}

// Stoel 63
let clickCounter63 = 0;
function test63() {
    let seat = document.getElementById('seat63');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter63++;

    if (clickCounter63 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter63 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter63 = 0;
    }



}

// Stoel 64
let clickCounter64 = 0;
function test64() {
    let seat = document.getElementById('seat64');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter64++;

    if (clickCounter64 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter64 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter64 = 0;
    }



}

// Stoel 65
let clickCounter65 = 0;
function test65() {
    let seat = document.getElementById('seat65');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter65++;

    if (clickCounter65 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter65 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter65 = 0;
    }



}

// Stoel 66
let clickCounter66 = 0;
function test66() {
    let seat = document.getElementById('seat66');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter66++;

    if (clickCounter66 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter66 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter66 = 0;
    }



}

// Stoel 67
let clickCounter67 = 0;
function test67() {
    let seat = document.getElementById('seat67');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter67++;

    if (clickCounter67 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter67 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter67 = 0;
    }



}

// Stoel 68
let clickCounter68 = 0;
function test68() {
    let seat = document.getElementById('seat68');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter68++;

    if (clickCounter68 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter68 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter68 = 0;
    }



}

// Stoel 69
let clickCounter69 = 0;
function test69() {
    let seat = document.getElementById('seat69');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter69++;

    if (clickCounter69 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter69 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter69 = 0;
    }



}

// Stoel 70
let clickCounter70 = 0;
function test70() {
    let seat = document.getElementById('seat70');

    let selected = "brightness(1) invert(0.5) sepia(1) hue-rotate(1420deg) saturate(300%)";
    let unselected = "brightness(0) invert(0) sepia(0) hue-rotate(0deg) saturate(0%)";
    clickCounter70++;

    if (clickCounter70 <= 1) {
        seat.style.filter = selected;
        selectA++;
    }
    else if (clickCounter70 > 1) {
        seat.style.filter = unselected;
        selectA--;
        clickCounter70 = 0;
    }



}

