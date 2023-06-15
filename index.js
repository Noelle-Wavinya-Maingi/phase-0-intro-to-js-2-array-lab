// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function beforeEach(){
    console.log(cats);
}

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newName = [...cats, name ]
    return newName;

}

function prependCat(name){
    const newName = [name, ...cats]
    return newName;
}

function removeLastCat(){
    const newName = cats.slice(0,-1);
    return newName;
}
function removeFirstCat(){
    const newName = cats.slice(1, 3);
    return newName;
}