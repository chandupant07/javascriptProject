// const body=document.querySelector('body');
// const darkTheme=document.querySelector('.header-right i');
// console.log(body)
const countrySection=document.querySelector('.countrySection')

const selectRegion=document.querySelector('#region');
const inputCountry=document.querySelector('.inputBox');

const url='https://restcountries.com/v3.1/all';
fetch(url).then((res)=>res.json())
.then((data)=>{
  data.forEach(element => {
    const countryCard =document.createElement('a');
    countryCard.href=`/country.html?name=${element.name.common}`
    countryCard.classList.add('card')
    countryCard.innerHTML=`
    <img src="${element.flags.svg}" alt="" class="flagImage">
    <div class="card-header">
      <h1>${element.name.common}</h1>
    </div>
    <div class="card-text">
      <p><b>Population: </b>${element.population.toLocaleString()}</p>
      <p><b>Region: </b>${element.region}</p>
     <p> <b>Capital: </b>${element.capital}</p>
     
    </div>
    `
    countrySection.appendChild(countryCard);
 
 });
})  

region.addEventListener('change',(e)=>{
  // console.log(e.target.value)
  
const url=`https://restcountries.com/v3.1/region/${selectRegion.value}`;
fetch(url).then((res)=>res.json())
.then((data)=>{
  countrySection.innerHTML='';
  data.forEach(element => {

    const countryCard =document.createElement('a');
    countryCard.href=`/country.html?name=${element.name.common}`
    countryCard.classList.add('card')
    countryCard.innerHTML=`
    <img src="${element.flags.svg}" alt="" class="flagImage">
    <div class="card-header">
      <h1>${element.name.common}</h1>
    </div>
    <div class="card-text">
      <p><b>Population: </b>${element.population.toLocaleString()}</p>
      <p><b>Region: </b>${element.region}</p>
     <p> <b>Capital: </b>${element.capital}</p>
     
    </div>
    `
    countrySection.appendChild(countryCard);
 
 });
})  

})
inputCountry.addEventListener('input',(e)=>{
console.log(e.target.value)
// https://restcountries.com/v3.1/name/{name}
const url=`https://restcountries.com/v3.1/name/${inputCountry.value.trim()}`;
fetch(url).then((res)=>res.json())
.then((data)=>{
  countrySection.innerHTML='';
  data.forEach(element => {

    const countryCard =document.createElement('a');
    countryCard.href=`/country.html?name=${element.name.common}`
    countryCard.classList.add('card')
    countryCard.innerHTML=`
    <img src="${element.flags.svg}" alt="" class="flagImage">
    <div class="card-header">
      <h1>${element.name.common}</h1>
    </div>
    <div class="card-text">
      <p><b>Population: </b>${element.population.toLocaleString()}</p>
      <p><b>Region: </b>${element.region}</p>
     <p> <b>Capital: </b>${element.capital}</p>
     
    </div>
    `
    countrySection.appendChild(countryCard);
 
 });
}) 
})