function quick_Sort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {
        var nuevo = [];
        var lef = [];
        var rig = [];

        var pivot = origArray.pop();

        for (var i = 0; i < origArray.length; i++) {
            if (origArray[i] <= pivot) {
                rig.push(origArray[i]);
            } else {
                lef.push(origArray[i]);
            }
        }

        return nuevo.concat(quick_Sort(rig), pivot, quick_Sort(lef));
    }
}

var prueba = [-3, 250, 27, 13, 19, 29, 85, 168, 43];
console.log("Array Desordenado: " + prueba);

var orden = quick_Sort(prueba);
console.log("Array Ordenado: " + orden);