alert('Disclaimer!!! This is a 5.0 scale Calculator');

let x1 = document.getElementById('cu1');
let x2 = document.getElementById('cu2');
let x3 = document.getElementById('cu3');
let x4 = document.getElementById('cu4');
let x5 = document.getElementById('cu5');
let x6 = document.getElementById('cu6');
let x7 = document.getElementById('cu7');
let x8 = document.getElementById('cu8');
let x9 = document.getElementById('cu9');
let x10 = document.getElementById('cu10');
let y1, y2, y3, y4, y5, y6, y7, y8, y10;
let g1, g2, g3, g4, g5, g6, g7, g8, g9, g10;
let totalCredit, tg, wgp, gpa;
let wgp1, wgp2;







function pint(p) {
    if (p.length > 0) {
        p = parseInt(p);
        return p;
    }
    else {
        p = 0;
        return p;

    }
};



function sum(a, b, c, d, e, f, g, h, i, j) {
    return a + b + c + d + e + f + g + h + i + j
}

function multiply(a, b) {
    return a * b;
}

function TotalCU() {


    y1 = pint(x1.value);
    y2 = pint(x2.value);
    y3 = pint(x3.value);
    y4 = pint(x4.value);
    y5 = pint(x5.value);
    y6 = pint(x6.value);
    y7 = pint(x7.value);
    y8 = pint(x8.value);
    y9 = pint(x9.value);
    y10 = pint(x10.value);



    totalCredit = sum(y1, y2, y3, y4, y5, y6, y7, y8, y9, y10);

}


function GradePoint() {
    const form = document.forms.gp;

    g1 = pint(form.querySelector('input[name="grade1"]:checked').value);
    g2 = pint(form.querySelector('input[name="grade2"]:checked').value);
    g3 = pint(form.querySelector('input[name="grade3"]:checked').value);
    g4 = pint(form.querySelector('input[name="grade4"]:checked').value);
    g5 = pint(form.querySelector('input[name="grade5"]:checked').value);
    g6 = pint(form.querySelector('input[name="grade6"]:checked').value);
    g7 = pint(form.querySelector('input[name="grade7"]:checked').value);
    g8 = pint(form.querySelector('input[name="grade8"]:checked').value);
    g9 = pint(form.querySelector('input[name="grade9"]:checked').value);
    g10 = pint(form.querySelector('input[name="grade10"]:checked').value);


}

function weightedgrade() {
    let m1 = multiply(y1, g1);
    let m2 = multiply(y2, g2);
    let m3 = multiply(y3, g3);
    let m4 = multiply(y4, g4);
    let m5 = multiply(y5, g5);
    let m6 = multiply(y6, g6);
    let m7 = multiply(y7, g7);
    let m8 = multiply(y8, g8);
    let m9 = multiply(y9, g9);
    let m10 = multiply(y10, g10);

    wgp = sum(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10);
}


function calc() {
    TotalCU();
    GradePoint();
    weightedgrade();
    let gpa = wgp / totalCredit;
    gpa = gpa.toFixed(2);

    let table = document.getElementById('table');
    let showTable= document.getElementById('showTable');
    

    let td1 = document.getElementById('td1');
    td1.innerHTML = wgp;

    let td2 = document.getElementById('td2');
    td2.innerHTML = totalCredit;

    let td3 = document.getElementById('td3');
    td3.innerHTML = gpa;


    showTable.style.display = 'contents';
    


    if (gpa <= 2.40) {
        td3.style.color = 'red';
    }





}






function cgpa() {
    let wgp1 = parseFloat(document.getElementById('wgp1').value);
    let wgp2 = parseFloat(document.getElementById('wgp2').value);
    let tcu1 = parseFloat(document.getElementById('tcu1').value);
    let tcu2 = parseFloat(document.getElementById('tcu2').value);
    let cgpa = (wgp1 + wgp2) / (tcu1 + tcu2);
    cgpa = cgpa.toFixed(2);



    let table2 = document.getElementById('table2');
    let showTable2= document.getElementById('showTable2')
    
    let td4 = document.getElementById('td4');
    td4.innerHTML = wgp1 + wgp2;

    let td5 = document.getElementById('td5');
    td5.innerHTML = tcu1 + tcu2;

    let td6 = document.getElementById('td6');
    td6.innerHTML = cgpa;

    showTable2.style.display = 'contents';

    


    if (cgpa <= 2.40) {
        td6.style.color = 'red';
    }


}









