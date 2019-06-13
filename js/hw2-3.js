
function a(n){
    var x=1;
    for( var y=1;y<n;y+=0.1 )
    { 
        if( y*y>n ) 
        {
            console.log(y);
            break;
        }
    }
}

a(4);