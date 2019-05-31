(function () {
    var Sumar = function () {
        var acumulador = 0;
        return {
            "obtenerSumaActual": function () {
                return acumulador;
            },
            "agregar": function (suma) {
                if (suma > 0) acumulador += suma;
            }
        };
    };

    var s1 = Sumar();
    var s2 = Sumar();

    s1.agregar(10);
    s1.agregar(20);

    s2.agregar(30);
    s2.agregar(5);

    console.log(s1.obtenerSumaActual());
    console.log(s2.obtenerSumaActual());
}());