let enterIcon = document.querySelector(".enter-icon");
// console.log(enterIcon);

enterIcon.addEventListener("click", function () {
  console.log("clicked");
  location.href = "./external page/order food.html";

})


//toggling signUp form
let mainEl = document.querySelectorAll("main,.site-content");
// console.log(mainEl);
class addBgBlur {
  //for blur an bg when clk the login or sigin btn
  added() {
    [...mainEl].forEach(function (val) {
      // console.log(val);
      val.classList.add("mainAdd");
      // console.log(val);
    })
  }
  remove() {
    [...mainEl].forEach(function (val) {
      val.classList.remove("mainAdd");
      // console.log(val);
    })
  }
}
let assuming = new addBgBlur();

//smaller device
let fetchIcon = document.querySelector(".sign-icon span");
let fetchSignUpForm = document.querySelector(".signUp")

fetchIcon.addEventListener("click", function () {
  fetchSignUpForm.hidden = false;
  assuming.added();
})


//when click login enter into login page

let fetchLoginText = document.querySelector(".signUp .content .signTxt");
let fetchLoginForm = document.querySelector(".logIn");
fetchLoginText.addEventListener("click", (event) => {
  fetchSignUpForm.hidden = true;
  fetchLoginForm.hidden = false;
})

//when click create account enter into sigup page

let fetchCreateText = document.querySelector(".logIn .content .logTxt");

// let fetchLoginForm=document.querySelector(".logIn");
fetchCreateText.addEventListener("click", (event) => {
  fetchSignUpForm.hidden = false;
  fetchLoginForm.hidden = true;


})

//when click cancel btn it will close

let fetchCancelIcon = document.querySelector(".signUp .header span");
let fetchCancelIcon2 = document.querySelector(".logIn .header span");

function removeForms(data1, data2) {
  data1.addEventListener("click", () => {
    fetchSignUpForm.hidden = true;
    assuming.remove();
  })
  data2.addEventListener("click", () => {
    fetchLoginForm.hidden = true;
    [...mainEl].forEach(function (val) {
      assuming.remove();
    })
  })
}

removeForms(fetchCancelIcon, fetchCancelIcon2);

//larger device when clk login btn popup login page

let loginBtn = document.querySelector(".buttons-group");

// console.log(loginBtn.children[0]);
loginBtn.children[0].addEventListener("click", () => {
  fetchLoginForm.hidden = false;
  assuming.added();
})
loginBtn.children[1].addEventListener("click", () => {
  fetchSignUpForm.hidden = false;
  assuming.added();
})





///////form validation---------------------------------------------------------------

let formEl = document.forms.signUpForm;
let formFullName = formEl.elements.fullname;
let formEmail = formEl.elements.email;
const wrongIcon = document.querySelector(".error-icon i");
const crtIcon = document.querySelector(".crt-icon i");



function checker() {
  const fullNameVal = formFullName.value.trim();
  const emailVal = formEmail.value.trim();

  if (fullNameVal === "") {
    setError(formFullName, "username cannot be empty");
    return false;
  } else {
    setSuccess(formFullName);
  }


  let emailCondition = /^([A-Za-z0-9_.])+\@([a-z])+\.([a-z])+$/;
  if (emailVal === "") {
    setError(formEmail, "email cannot be empty");
    return false;
  } else if (!emailCondition.test(emailVal)) {
    setError(formEmail, "Not an Valid mail");
    return false;
  } else {
    setSuccess(formEmail);
  }

}


////for loginnnn---------------------------------------------------


let formEl2 = document.forms.logIn;
let userNameEl = formEl2.elements.name;
let numEl = formEl2.elements.num;
// console.log(numEl);
function logged() {
  const userNameVal = userNameEl.value.trim();
  const numVal = numEl.value.trim();
  //   const passwordVal = password.value.trim();
  //   const password2Val = password2.value.trim();

  if (userNameVal === "") {
    setError(userNameEl, "username cannot be empty");
    return false;
  } else {
    setSuccess(userNameEl);
  }

  // let numCondition = /^([0-9]{10})+$/;
  let numCondition = /^([0-9]{10})+$/;
  if (numVal === "") {
    setError(numEl, "Number cannot be empty");
    return false;
  } else if (!numCondition.test(numVal)) {
    setError(numEl, "Not an Valid number");
    return false;
  } else {
    setSuccess(numEl);
  }

}


///for common code for login and sign up validation
function setError(input, msg) {
  const formcontrol = input;
  console.log(formcontrol);
  formcontrol.className = "form-control_error";
  const small = formcontrol.parentElement.querySelector(".small");
  small.innerText = msg;
  formcontrol.parentElement.querySelector(".error-icon i").style = "display:block";
  formcontrol.parentElement.querySelector(".crt-icon i").style = "display:none";

}

function setSuccess(input) {
  const formcontrol = input;
  console.log(formcontrol);
  formcontrol.className = "form-control_success";
  const small = formcontrol.parentElement.querySelector(".small");
  small.innerText = "";
  formcontrol.parentElement.querySelector(".crt-icon i").style = "display:block";
  formcontrol.parentElement.querySelector(".error-icon i").style = "display:none";


}
///--------end validation-----------------------------------



let inputField = document.querySelector("#autocomplete");
let enteredIcon = document.querySelector(".enter-icon");

//local storage-----------------------------------------

//set localstorage
enteredIcon.addEventListener("click", function () {
  // alert("added")
  localStorage.setItem("areaName", inputField.value);
})




//autocomplte an adress bar------------------------------------------
let inputSuggest = document.querySelector(".input-suggestion");
// let suggestionArea=document.querySelectorAll(".input-suggest-area")

function createNewElementForSuggestion(data) {

  let createDiv = document.createElement("div");
  createDiv.className = "input-suggest-area";


  let createElementP = document.createElement("p");
  let createText = document.createTextNode(data);
  createElementP.append(createText);

  let createButton = document.createElement("i");
  createButton.className = "fa fa-times"
  createDiv.append(createElementP, createButton)
  inputSuggest.append(createDiv)

}


let suggestArrays = ["ariyalur", "chennai", "coimbatore", "cuddalore", "dharmapuri", "Dindigul", "erode", "kanchipuram", "karur", "kanyakumari", "krishnagiri", "madurai", "nagapattinam", "namakal", "nilgiris", "perambalur", "pudukottai", "ramanathapuram", "salem", "sivaganga", "thanjavur", "theni", "thoothukudi", "tiruchirappalli", "tirunelveli", "tiruppur", "tiruvallur", "tiruvannamlai", "tiruvarur", "vellore", "viluppuram", "virudhunagar"];

// to change an first letter caps in suggestarrays
// let allAlphaArr=suggestArrays.map((val)=>{
// let alpha=val.charAt(0).toUpperCase();
// let words=val.slice(1)
// return alpha+words;
// })
// console.log(allAlphaArr);


function inputSuggestChecking() {

  inputField.addEventListener("input", function (e) {


    suggestArrays.map((val) => {


      if (val.slice(0, 1).includes(inputField.value.toLowerCase())) {

        // console.log(val);

        //when crtly matched ,inputsuggestion bg-color displayed

        inputSuggest.style = "display:block";
        let sugg = val.charAt(0).toUpperCase() + val.slice(1);
        createNewElementForSuggestion(sugg);

      }
    })

    //when userfiels will empty delaet all children into the inputsuggst div
    if (inputField.value == "") {
      // console.log("child", inputSuggest.children);
      [...inputSuggest.children].forEach((vals) => {
        vals.remove();
      })
      inputSuggest.style = "display:none";
    }
  })
}
inputSuggestChecking();

//when our input will backspaced one by one when it empty it will delete all input suggestion and remove input suggestion bg-color too

inputField.addEventListener("input", function (e) {

})


inputSuggest.addEventListener("click", function (event) {
  console.dir(event.target.innerText);
  if (event.target.tagName == "P") {
    inputField.value = event.target.innerText;
  }

  console.log(event.target.tagName);
  if (event.target.tagName == "I") {
    console.log(event.target.closest("div"));
    event.target.closest("div").remove();
    inputField.value = "";

    // to avoid inputSuggestion bg color
    console.log("hii", inputSuggest.children.length);
    // if ([...inputSuggest.children].length == 0) {
    //   inputSuggest.style = "display:none";
    //   console.log("clear");
    // }
  }
})


