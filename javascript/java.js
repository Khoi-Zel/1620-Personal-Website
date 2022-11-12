class course{
    constructor(code, name) 
}

let COMM1116 = new course("COMM 1116","Business Communication");
let ACIT1620 = new course("ACIT 1620", "Fundamental Web Technologies");
let ORGB1100 = new course("ORGB 1100","Organizational Behaviour");

const courselist = {COMM1116, ACIT1620, ORGB1100};

let user;
do{
    user = prompt('Input');
} while (user.length = 4)

for (let i = 0; i < courselist.length; i++){
    if (user = courselist[i]){
        console.log(
            'Yes, I am taking the course: ${courselist[i]["code"]-${courselist[i]["name"]}');
    }
    else if (i === courselist.length - 1) {
        let new_variable = "ACIT ";
        new_variable += user;
        courselist.push(new_variable);
        courselist[courselist.length - 1] = new course(new_variable, null);
        console.log('${new_variable}');
}
}