var space = false;
var w = false;
var a = false;
var s = false;
var d = false;
var left = false;
var right = false;
function onMouseClick(event){
    w = !w;
    a = !a;
    left = !left;
    
}

document.addEventListener('click', onMouseClick, false);

function onKeydown(event){
    if(event.keyCode == 32){
        space = true;
    }

    if(event.keyCode == 87){
        w = true;
    }

    if(event.keyCode == 65){
        a= true;
    }

    if(event.keyCode == 83){
        s= true;
    }

    if(event.keyCode == 68){
        d= true;
    }

    if(event.keyCode == 37){
        left= true;
    }

    if(event.keyCode == 39){
        right = true;
    }
}

function onKeyup(event){
    if(event.keyCode == 32){
        space = false;
    }

    if(event.keyCode == 87){
        w = false;
    }

    if(event.keyCode == 65){
        a = false;
    }

    if(event.keyCode == 83){
        s = false;
    }

    if(event.keyCode ==68){
       d = false;
    }

    if(event.keyCode == 37){
        left= false;
    }

    if(event.keyCode == 39){
        right = false;
    }
}

// function onKeydown(event){
//     if(event.keyCode == 32){
//         freeze = true;
//     }
// }

// function onKeyup(event){
//     if(event.keyCode == 32){
//         freeze = false;
//     }
// }

document.addEventListener('keydown', onKeydown, true);
document.addEventListener('keyup', onKeyup, true);