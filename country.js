
const mainContainer=document.querySelector('.mainContainer');
const countryNameHeading=document.querySelector('#countryNameHeading');
const flagImage=document.querySelector('.flagSection img');
const countryInfo=document.querySelector('.countryInfo b');
const nativeNames=document.querySelector('.nativeName');
const population=document.querySelector('.population');
const Region=document.querySelector('.Region');
const SubRegion=document.querySelector('.SubRegion');
const capital=document.querySelector('.capital');





const countryName=new URLSearchParams(location.search).get('name');
const url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
fetch(url).then((res)=>res.json())
.then(([country])=>{
  // console.log(country)
  flagImage.src=country.flags.svg;
  countryNameHeading.innerText=country.name.common;
  // nativeNames.innerText=(country.nativeName[0]);
  population.innerText=country.population;
  Region.innerText=country.region;
  SubRegion.innerText=country.subregion;
  capital.innerText=country.capital;
  if(country.name.nativeName){
    nativeNames.innerText=Object.values(country.name.nativeName);
  }else{
    nativeNames.innerText=country.name.nativeName;
  }
})
