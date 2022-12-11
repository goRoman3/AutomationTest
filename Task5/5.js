//За допомогою JS cтворити та заповнити масив об'єктів.
//Для заповнення використати:
//𝑐𝑜𝑛𝑠𝑡 𝑐𝑎𝑝𝑖𝑡𝑎𝑙𝐴𝑟𝑟𝑎𝑦 = [‘𝑇𝑜𝑘𝑖𝑜’,’𝑃𝑎𝑟𝑖𝑠’,𝐾𝑦𝑖𝑣’’,’𝐿𝑜𝑛𝑑𝑜𝑛’]
//В новий масив мають входити об'єкти типу {‘country’:’String’, ‘capital’:’String’}

const capitalArray = ['Tokio', 'Paris','Kyiv', 'London'];
let obArr = [{capital:'Paris'},{capital: 'Tokio'}, {capital: 'Kyiv'}, {capital: 'London'},{capital: 'Praga'}]

// робимо масив з обьектами столиць
function toObjArr(arrCapitals){
    const arr = []
    for (let i = 0; i < arrCapitals.length; i++) {
        obj = {capital : arrCapitals[i]}   
        arr.push({capital : arrCapitals[i]} );
    }
    
    return arr;
}

const arrObj1 = toObjArr(capitalArray);
//console.log(arrObj1);



//Ковбаса на знахдження потрібних назв столиць. І саме тут добавляю назви країн 
let result = obArr.map(obj => {
        let properties = {
          'country': obj.country,
          'capital': obj.capital
        };
        if(obj.capital == 'Tokio'){
          properties['country'] = "Japan";
        }
        else if(obj.capital == 'Paris'){
          properties['country'] = "France";
        }
        else if(obj.capital == 'Kyiv'){
            properties['country'] = "Ukraine";
        }
        else if (obj.capital == 'London'){
        properties['country'] = "England";
        }
        else{
            properties['country'] = "Unknown country"; 
        }
       
        return properties;
       });

console.log(result);
   