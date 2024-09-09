
const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"//usd.min.json"
 //"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdowns select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg")



 for (let select of dropdown) {
    for(Currcode in counteyList){
        let newOption = document.createElement("option");
        newOption.innerText = Currcode;
        newOption.value = Currcode;
        if (select.name === "from" && Currcode === "CAD") {
            newOption.selected = "selected"
        } else if (select.name === "to" && Currcode === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption);
       
        
     }
     select.addEventListener('change', (evt) => {
        updateFlag(evt.target);

    });
}
const updateExchangeRate=async()=>{
    
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
   
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value,toCurr.value);
    
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.min.json`;///${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let from=fromCurr.value.toLowerCase();
    console.log(from);
    let to=toCurr.value.toLowerCase();
    console.log(to);
    let rate=data[from][to];
    let finalamt=amtval*rate;
    msg.innerText=`${amtval}${fromCurr.value}=${finalamt}${toCurr.value}}`;
}
const updateFlag=(element)=>{
    let Currcode = element.value;
    let countryCode=counteyList[Currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
    
};


btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    // let amount = document.querySelector(".amount input");
    // let amtval = amount.value;
   
    // if (amtval === "" || amtval < 1) {
    //     amtval = 1;
    //     amount.value = "1";
    // }
    // // console.log(fromCurr.value,toCurr.value);
    
    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.min.json`;///${toCurr.value.toLowerCase()}.json`;
    // let response = await fetch(URL);
    // let data = await response.json();
    // console.log(data);
    // let from=fromCurr.value.toLowerCase();
    // console.log(from);
    // let to=toCurr.value.toLowerCase();
    // console.log(to);
    // let rate=data[from][to];
    // let finalamt=amtval*rate;
    // msg.innerText=`${amtval}${fromCurr.value}=${finalamt}${toCurr.value}}`;
    updateExchangeRate();
    
    
    

    
    

 
    
    
});
window.addEventListener("load",() => {
    updateExchangeRate();
  });
  
    

 