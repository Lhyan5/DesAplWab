(function () {
    
    var MusicBox = function () {
        var colection = [];
        return {
            
            "favoriteAlbum": function (colection) {
                if (colection.length === 0) {
                    return;
                }
                var mas_reproducido = colection[0].obtenercount(),
                    mas_indice = 0;
                for (var i = 0, len = colection.length; i < len; i++) {
                    if (colection[i].tocado > mas_reproducido) {
                        mas_reproducido = colection[i].tocado;
                        mas_indice = i;
                    }
                }
                return { play: mas_reproducido };
            },
            "addAlbum": function (x) {
                colection.push(x);
            }
        };
    };
    var Album = function (cancion, cantante) {
        var cont = 0;
        return {
            cancion: cancion,
            cantante: cantante,
            play: function () {
                cont += 1;
                console.log("Tocando " + cancion + " " + cantante);
            },
            obtenercount: function () { return cont;}
        };
    };
    var box = MusicBox(),
        a1 = Album("The Who", "Tommy"),
        a2 = Album("Tom Waits", "Closing Time"),
        a3 = Album("John Cale", "Paris 1919"),
        favorito;
    box.addAlbum(a1);
    box.addAlbum(a2);
    box.addAlbum(a3);
    a1.play();
    a2.play();
    a3.play();
    a2.play();
    favorito = box.favoriteAlbum();
    console.log("Tu album favorito es " + favorito);
}());