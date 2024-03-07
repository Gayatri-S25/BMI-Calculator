const form =document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    //we get string value convert it into integer using parseInt 
    //this is how we can get input value entered by user
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results');

    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML=`please enter a valid Number ${height}`;
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`please enter a valid Number ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span>Result :${bmi}</span>`;
    }
})