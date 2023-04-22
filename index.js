let list = [];

let newUser = document.getElementById("addUser");
let filter = document.getElementById("filter");

function printList(){
    let profession = document.getElementById("profession");
    let listPrint = document.getElementById("list");
    if(profession.value == "Profession"){
        alert("Select a profession first!");
    }
    listPrint.innerHTML="";
    if(profession.value == "admin"){
        let x=1;
        for(let i=0;i<list.length;i++){
            if(list[i].profession.toLowerCase() === "admin"){
                let listItem = document.createElement("div");
                listItem.class = listItem;
                let number = document.createElement("p");
                let name = document.createElement("p");
                let Profession = document.createElement("p");
                let age = document.createElement("p");
                number.innerText = x++ + ".";
                name.innerText = "Name : " + list[i].name;
                Profession.innerText = "Profession : " + list[i].profession;
                age.innerText = "Age : " + list[i].age;
                listItem.appendChild(number);
                listItem.appendChild(name);
                listItem.appendChild(Profession);
                listItem.appendChild(age);
                listPrint.appendChild(listItem);
            }
        }
    }
    if(profession.value == "developer"){
        let x=1;
        for(let i=0;i<list.length;i++){
            if(list[i].profession.toLowerCase() === "developer"){
                let listItem = document.createElement("div");
                listItem.class = listItem;
                let number = document.createElement("p");
                let name = document.createElement("p");
                let Profession = document.createElement("p");
                let age = document.createElement("p");
                number.innerText = x++ + ".";
                name.innerText = "Name : " + list[i].name;
                Profession.innerText = "Profession : " + list[i].profession;
                age.innerText = "Age : " + list[i].age;
                listItem.appendChild(number);
                listItem.appendChild(name);
                listItem.appendChild(Profession);
                listItem.appendChild(age);
                listPrint.appendChild(listItem);
            }
        }
    }
}

function addUser(){
    let input = document.getElementsByTagName("input");
    for(let i of input){
        if(i.value===""){
            alert("Please input all values before adding new user!")
            return;
        }
    }
    let obj = {
        name:input[0].value,
        profession:input[1].value,
        age:input[2].value
    };
    console.log(obj);
    list.push(obj);
    for(let i of input){
        i.value="";
    }
    let profession = document.getElementById("profession");
    if(profession.value===obj.profession.toLowerCase())
        printList();
}

filter.addEventListener("click", printList);

newUser.addEventListener("click", addUser);
