// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


//  for addig a element at the end of the array
function destructivelyAppendCat(name){
    cats.push(name)
}

//  adding a element at the beginning of the array
function destructivelyPrependCat(name){
    cats.unshift(name);
}

//  remove the last element of the array
function destructivelyRemoveLastCat(){
    cats.pop();
}

// remove the first element in array
function destructivelyRemoveFirstCat(){
     cats.shift();
}


function appendCat(name){
    const Cats = cats.slice();
     Cats.push(name);
    return Cats;

}

function prependCat(name){
    const Cats = cats.slice();
    Cats.unshift(name);
    return Cats;

    }

    
function removeLastCat(name){
    const Cats = cats.slice();
    Cats.pop(name);
    return Cats;
}

function removeFirstCat(name){
    const Cats = cats.slice();
    Cats.shift(name);
    return Cats;
}