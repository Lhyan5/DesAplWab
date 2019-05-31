(function () {
    var mayor = function (o1, o2) {
        if (o1.tamano > o2.tamano) {
            console.log(o1 + " es mayor")
        } else {
            console.log(o2 + " es mayor")
        }
    };

    var x = 85;
    var y = 185;

    mayor(x, y);
}());