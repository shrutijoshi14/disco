color = 'red'
function shuffleColor () {
    if ( color == 'red' )
        color = 'green'
    else if ( color == 'green' )
        color = 'blue'
    else if ( color == 'blue' )
        color = 'red'

    document.getElementById( "colo" ).style.backgroundColor = color
}
setInterval( shuffleColor, 1000 );