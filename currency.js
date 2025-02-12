const Base_url='https://2024-03-06.currency-api.pages.dev/v1/currencies/usd/inr}.json'
const dropdown=document.querySelectorAll('dropdown.select')

for(let select of dropdown){
    for(code in countryList){
        let newOption = document.createElement('option');
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name=="from" && currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name=="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption)
    }
    select.addEventListener("change",(e)=>{
        update_flag(e.target);
    })
}
const update_flag=(element)=>{
    let currCode=element.value;
    console.log(currCode);
};