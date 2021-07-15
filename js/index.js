// const data = [{
//     id:Date.now(),
//     img:"https://i.ytimg.com/vi/7Rg0y7NT1gU/maxresdefault.jpg"
//     },
//     {
//         id:Date.now(),
//         img:"https://dailyresearchplot.com/wp-content/uploads/2020/12/See-Season-2-1200x900.jpg"

//     }
// ]

// let imgs = document.querySelector('.images');
 
// data.map((props)=>{
//     let createDiv = document.createElement("img");
//     createDiv.setAttribute('src',props.img);
//     createDiv.setAttribute("data-key",props.id);
//     console.log(createDiv);
//     imgs.append(createDiv);
// });

let flag = true

let button = document.querySelector(".primary-btn");

let container = document.querySelector("#container1");

let ed = document.querySelector(".education");

let backBtn = document.getElementById("back-btn");
button.addEventListener("click",() =>{
    if(flag){
        container.style.display ="none";
        ed.classList.add("active");
        console.log(flag);
        flag=false;
        console.log(flag);
    }
});
backBtn.addEventListener("click",()=>{
    if(flag === false){
        container.style.display ="block";
        ed.classList.remove("active");
        flag = true
    }
});

