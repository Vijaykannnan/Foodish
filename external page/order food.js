
let formEl=document.forms.myForm;
let dishInput=formEl.elements.addressbar;
let inputSuggest=document.querySelector(".input-suggestion");
let suggestionArea=document.querySelectorAll(".input-suggest-area")


//create new element for suggestion whwn inputsuggestionchecking is correct
function createNewElementForSuggestion(data){
 
    let createDiv=document.createElement("div");
    createDiv.className="input-suggest-area";
    
    let createElementP=document.createElement("p");
    let createText=document.createTextNode(data);
    createElementP.append(createText);    
    
    let createButton=document.createElement("i");
    createButton.className="fa fa-times"    
   
    createDiv.append(createElementP,createButton)
    inputSuggest.append(createDiv)
}


let suggestArrays=["banana","beef","bread","brie","broccoli","chicken","egg","fennel","honey","lamb","mustard","salmon","sugar","rice"];

// to change an first letter caps in suggestarrays
// let allAlphaArr=suggestArrays.map((val)=>{
//   let alpha=val.charAt(0).toUpperCase();
//   let words=val.slice(1)
//   return alpha+words;
//   })

function inputSuggestChecking(){

dishInput.addEventListener("input",function(e){
  suggestArrays.map((val)=>{

  
 
if(dishInput.value.toLowerCase().includes(val.slice(0,1))){
  

    //when crtly matched ,inputsuggestion bg-color displayed
    inputSuggest.style="display:block";
    let sugg=val.charAt(0).toUpperCase()+val.slice(1);
    createNewElementForSuggestion(sugg);
   }
})

//when our input will backspaced one by one when it empty it will delete all input suggestion and remove input suggestion bg-color too
if(dishInput.value==""){

    // console.log(inputSuggest.children);
    [...inputSuggest.children].forEach((vals)=>{
        vals.remove();
    })
    
    inputSuggest.style="display:none";
}
//when the user enter so many words the suggestion height will enlarged so reduce and put max height 200px when it reach above 4 words
if(inputSuggest.children.length>4){
  
  // console.log(inputSuggest.children.length);
  inputSuggest.style.maxHeight="200px";
}

//when dishinput empty all dishes will removed
if(dishInput.value==""){
  [...foodList.children].forEach((vals)=>{
  vals.remove();
  })
  }
// console.log("nn",[...foodList.children]);
}) 
}
inputSuggestChecking();





// filling input via suggest element

inputSuggest.addEventListener("click",function(event){
// console.dir(event.target.innerText);
dishInput.value=event.target.innerText;
// console.log(event.target.tagName);
if(event.target.tagName=="I"){
    // console.log(event.target.closest("div"));
    event.target.closest("div").remove();
    dishInput.value="";

    // to avoid inputSuggestion bg color
    if([...inputSuggest.children].length==0){
        inputSuggest.style="display:none";
    }
}
})

let enteredIcon=document.querySelector(".enter-icon");
enteredIcon.addEventListener("click",()=>{
//when clk right icon btn all suggetion will remove
[...inputSuggest.children].forEach((vals)=>{
      vals.remove();
    })
  inputSuggest.style="display:none";
})

// fetch foods api
let result=document.querySelector(".result");
let foodList=document.querySelector(".food-list");
function entered(){

    if(!dishInput.value==""){
let url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${dishInput.value}`
fetch(url)
.then((data) => {
  if (data.ok) {
    console.log(data);
    return data.json();
  } else {
    throw new Error("failed to fetch bro");
  }
})
.then((obj) => {
  console.log(obj);
//   console.log(obj.meals);
if(obj.meals){
  obj.meals.forEach((val)=>{
//   console.log(val);
 let apiElement =`<div class="foods-details">
                    <img src=${val.strMealThumb} alt="" id=${val.idMeal}>
                   <div class="food-content">
                    <h1>${val.strMeal.slice(0,15)}</h1>
                    <p>120 Colories</p>
                   <hr>
                   <div class="offer">
                   <div>
                      <span>Discount</span>
                       <p>20%</p>
                     </div>
                     <span><i class="fa fa-bookmark"></i></span>
                  </div>
                 <button>order Now</button>
                 </div>`
                 foodList.innerHTML +=apiElement;
                 result.innerText=""

  })
}
else{

result.innerText=`${dishInput.value}, Has No Result`
result.style="display:block";
foodList.innerHTML="";
}
  
})
.catch((err) => {
  console.log(err);
});
}
}




//set an areaName in food details via localStorage

let areaName=document.querySelector(".left-side .texts span")

areaName.innerHTML=localStorage.getItem("areaName")

