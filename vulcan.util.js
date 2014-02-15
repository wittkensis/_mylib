function clog(m){console.log(m);return m;}

util = {
    getCircPoint: function( atom, atomR2, angle ) { // To-do: Switch atomR2 and angle to make atomR2 optional
        var a = angle * Math.PI / 180,
            r = atom.attr('r') + atomR2,
            centerX = atom.attr('cx'),
            centerY = atom.attr('cy');
        return [ centerX + (r * Math.cos(a)), centerY + (r * Math.sin(a)) ];
    },
    $id: function( s ) {
        return document.getElementById( s );
    },
    $c: function( s ) {
        return document.getElementsByClassName( s );
    },
    clear: function( el ) {
        el.parentNode.removeChild( el );
    },
    getQueryString: function( name ) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
};