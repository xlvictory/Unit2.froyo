let flavors = prompt(
    "Please enter the froyo flavors desired, separated by a comma:",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const stringArray = flavors.split(",");
//console.log(stringArray);

const froyo = [];
for (i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    froyo.push(str);
};

const flavCount = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
};

for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    if (str === "vanilla") {
        flavCount.vanilla += 1;
    } else if (str === "strawberry") {
        flavCount.strawberry += 1;
    } else if (str === "coffee") {
        flavCount.coffee += 1;
    }

};

console.log(flavCount);

/*function froyoCount(flavCount) {
    const count = {};
    for(key in flavCount){
if(count[])
    }
}*/