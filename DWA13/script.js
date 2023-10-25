
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'] 

//------------------------------Logging each  name to the console------------------------------------//
names.forEach((name)=>{
    console.log(name)
}) 


//------------------------------Logging Each name with the corresponding pronvince-------------------//
provinces.forEach((province, index) => {
    const name = names[index];
    console.log(`${name} (${province})`);
  }); 


//------------------------------turning all letters to caps for each province-----------------------//
const provincesUppercase = provinces.map((province) =>{
    if(typeof(province) === "string"){
        return( province.toUpperCase() )
    }
}) 
console.log(provincesUppercase)

//-------------------------------mapping names item and returning arrrays with only the length---------------------//
const namesLength = names.map((name)=>{
    return( name.length )
})

console.log(namesLength) 


//-------------------------------Sorting province on alphabetical order------------------------------------//
const sortProvinces = provinces.sort() 
console.log(sortProvinces)



//-------------------------------Filtering out all provinces that contain capes------------------------------//
const provinceWithoutCape = provinces.filter((province)=>{
    if(!province.includes("Cape")){
      return province
    }
    
}) 

console.log(provinceWithoutCape.length)  

//------------------------------------Sorting Element that contains S ------------------------------------------//

const containsS = names.map((name) => name.split('').some((char) => char === 'S'));

console.log(containsS) 


//---------------------------------------names objects from the 2 aboe arrays----------------------------//
const NamesInObject = names.reduce((obj, key, index) =>{
   
    obj[key]= provinces[index]
    
    return obj
   }, {}

)

console.log(NamesInObject)