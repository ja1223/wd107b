
var a, b, X;

function m357( a, b ){
    for( X=a ; X<=b ; X++ )
    {
       if( X %3 == 0 || X %5 == 0 || X %7 == 0 )
        {
           console.log( X + "," );
        }
    }
}

a = 10 , b = 30 ;
console.log( m357 ( a , b ) );