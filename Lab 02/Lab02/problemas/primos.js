(function () {
    var esprimo = function (o1) {
        if (Number.isInteger(o1)) {
            if (o1 > 0) {
                var primo = true;
                if (o1 > 2) {
                    for (var i = 2; i < o1; i++) {
                        if (o1 % i == 0) {
                            primo = false;
                        }
                    }
                }
                if (primo === true) {
                    console.log("Es primo");
                } else {
                    console.log("No es primo");
                }
            } else {
                console.log("Numero no valido");
            }
            
        } else {
            console.log("No es un numero");
        }
    };
    esprimo(61);
    esprimo("hola");
    esprimo(true);
    esprimo(-45);
    esprimo(25);
    esprimo("159");
}());