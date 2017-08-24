/*
AUTONOMOUS TRACTOR
THE OHIO STATE UNIVERSITY
BY: ANGELO JOAQUIM SEOLIN DA SILVA 
    WAGNER ZAY FERRARI
VISITOR SCHOLARS FROM BRAZIL
FOOD, AGRICULTURAL, AND BIOLOGICAL ENGINEERING
*/

function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "1"){
    } else {
        document.getElementById("botao").innerHTML="<a href='/Drive' class='botao'>Drive</a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "1"){
        document.getElementById("botao_2").innerHTML="<a href='/Brake' class='botao_2'>Brake</a>";
    } else {
        document.getElementById("botao_2").innerHTML="<a href='/Brake' class='botao_2'>Brake</a>";
    }
}

function AlteraRele3(){
    var estado_3 = document.getElementById("estado_3").innerHTML;
    if(estado_3 === "1"){
        document.getElementById("botao_3").innerHTML="<a href='/Left' class='botao_3'>Left</a>";
    } else {
        document.getElementById("botao_3").innerHTML="<a href='/Left' class='botao_3'>Left</a>";
    }
}

function AlteraRele4(){
    var estado_4 = document.getElementById("estado_4").innerHTML;
    if(estado_4 === "1"){
        document.getElementById("botao_4").innerHTML="<a href='/Right' class='botao_4'>Right</a>";
    } else {
        document.getElementById("botao_4").innerHTML="<a href='/Right' class='botao_4'>Right</a>";
    }
}

function AlteraRele5(){
    var estado_5 = document.getElementById("estado_5").innerHTML;
    if(estado_5 === "1"){
    } else {
        document.getElementById("botao_5").innerHTML="<a href='/STOP' class='botao_5'>STOP</a>";
    }
}

function AlteraRele6(){
    var estado_6 = document.getElementById("estado_6").innerHTML;
    if(estado_6 === "1"){
        document.getElementById("botao_6").innerHTML="<a href='/ON' class='botao_6'>Turn ON Engines</a>";
    } else {
        document.getElementById("botao_6").innerHTML="<a href='/ON' class='botao_6'>Turn ON Engines</a>";
    }
}

function AlteraRele7(){
    var estado_7 = document.getElementById("estado_7").innerHTML;
    if(estado_7 === "1"){
        document.getElementById("botao_7").innerHTML="<a href='/OFF' class='botao_7'>Turn OFF Engines</a>";
    } else {
        document.getElementById("botao_7").innerHTML="<a href='/OFF' class='botao_7'>Turn OFF Engines</a>";
    }
}

var estado8 = document.getElementById('estado8');
$('#onoff1').on('change', function() {
    var el = this;
    estado8.innerHTML = el.checked ? 'ligado' : 'desligado';

    // aqui podes juntar a lógica do ajax
    $.ajax({
        url: "some.php",
        data: {
            estado8: this.checked
        }
    }).done(function(msg) {
        if (msg == 'failed') return el.checked = !el.checked; // caso o servidor retorne "failed" mudar o estado do botão
        else alert("Info gravada: " + msg);
    });
});
