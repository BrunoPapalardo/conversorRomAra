limitarChar();

function limitarChar() {
    if (document.getElementById("lgd1").textContent == "Numeração árabe:") {
        document.getElementById("campo1").onkeypress = function (e) {
            var chr = String.fromCharCode(e.which);
            if ("1234567890".indexOf(chr) < 0)
                return false;
        };
    }

    if (document.getElementById("lgd1").textContent == "Numeração romana:") {
        document.getElementById("campo1").onkeypress = function (e) {
            var chr = String.fromCharCode(e.which);
            if ("icdlmvxICDLMVX".indexOf(chr) < 0)
                return false;
        };
    }
}

function romanToArab(value) {
    algarismos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    var lista = [];
    var resultado = 0;
    var numRomano = value;

    for (c in numRomano) {

        lista.push(algarismos[numRomano[c]]);
    }
    lista.push(0);

    var contador = 0;
    for (var e in lista) {

        if (lista[contador] < lista[contador + 1]) {
            resultado = resultado - lista[e];
        } else {
            resultado = resultado + lista[e];
        }
        contador = contador + 1;
    }
    return (resultado);
}

function arabToRoman(value) {
    var algarismos = [
        {
            '0': '',
            '1': 'I',
            '2': 'II',
            '3': 'III',
            '4': 'IV',
            '5': 'V',
            '6': 'VI',
            '7': 'VII',
            '8': "VIII",
            '9': 'IX',
        },

        {
            '0': '',
            '1': 'X',
            '2': 'XX',
            '3': 'XXX',
            '4': 'XL',
            '5': 'L',
            '6': 'LX',
            '7': 'LXX',
            '8': 'LXXX',
            '9': 'XC',
        },

        {
            '0': '',
            '1': 'C',
            '2': 'CC',
            '3': 'CCC',
            '4': 'CD',
            '5': 'D',
            '6': 'DC',
            '7': 'DCC',
            '8': 'DCCC',
            '9': 'CM',
        },

        {
            '0': '',
            '1': 'M',
            '2': 'MM',
            '3': 'MMM',
        }
    ];
    var numArabico = value;
    var numArabicoConv = '';

    for (var c in numArabico) {
        numArabicoConv = numArabicoConv + algarismos[numArabico.length - c - 1][numArabico[c]];
    }
    return (numArabicoConv);
}

function converter() {
    if (document.getElementById("lgd1").textContent == "Numeração árabe:") {
        if (parseInt(document.getElementById("campo1").value) < 1) {
            document.getElementById("campo1").value = 1;
            alert('O número mínimo para conversão é "1"!');
        }
        if (parseInt(document.getElementById("campo1").value) > 3999) {
            document.getElementById("campo1").value = 3999;
            alert('O número máximo para conversão é "3999"!');
        }
        document.getElementById("campo2").value = arabToRoman(document.getElementById("campo1").value);
    } else {
        if (romanToArab(document.getElementById("campo1").value) > 3999) {
            alert('O algarismo máximo para conversão é "MMMCMXCIX" (3999)!');
            document.getElementById("campo1").value = "MMMCMXCIX";
        }
        document.getElementById("campo2").value = romanToArab(document.getElementById("campo1").value);
        document.getElementById("campo1").value = arabToRoman(document.getElementById("campo2").value);
    }
}

function trocar() {
    if (document.getElementById("lgd1").textContent == "Numeração árabe:") {
        if (parseInt(document.getElementById("campo1").value) < 1) {
            document.getElementById("campo1").value = 1;
        }
        if (parseInt(document.getElementById("campo1").value) > 3999) {
            document.getElementById("campo1").value = 3999;
        }

        document.getElementById("lgd1").textContent = "Numeração romana:";
        document.getElementById("lgd2").textContent = "Numeração árabe:";
        document.getElementById("campo1").value = arabToRoman(document.getElementById("campo1").value);
        document.getElementById("campo2").value = romanToArab(document.getElementById("campo1").value);
    } else {
        if (romanToArab(document.getElementById("campo1").value) > 3999) {
            document.getElementById("campo1").value = "MMMCMXCIX";
        }
        document.getElementById("lgd1").textContent = "Numeração árabe:";
        document.getElementById("lgd2").textContent = "Numeração romana:";
        document.getElementById("campo1").value = romanToArab(document.getElementById("campo1").value);
        document.getElementById("campo2").value = arabToRoman(document.getElementById("campo1").value);
    }
    limitarChar();
}