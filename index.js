
function receivesAFunction(soup){
        soup()
}

function returnsANamedFunction(){
    return function car(){
        console. log("I want to buy a car")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous function")
    }
}