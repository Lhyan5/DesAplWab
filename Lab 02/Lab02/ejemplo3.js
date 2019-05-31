function funcionExterna(variable){
    var variableDeLaFuncionExterna = variable;
    return function funcionInterna() {
        return variableDeLaFuncionExterna;
    }
}

var foo = funcionExterna(20);
console.log(foo());