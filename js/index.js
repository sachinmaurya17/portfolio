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



let button = document.querySelector(".primary-btn");

let container = document.querySelector("#container1");

let moreContent = document.querySelector("#moreContent");
console.log(button);

button.addEventListener("click",() =>{
    container.style.display = "none";
    moreContent.style.display ="block";
});