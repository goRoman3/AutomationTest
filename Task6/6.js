var enterParam = {
    user1: {
        name:"name1",
        phone:"phone1"
    },
    user2: {
        name:"name2",
        phone:"phone2"
    },
    user3: {
        name:"name3",
        phone:"phone3"
    },
    user4: {
        innerUser1: {
            name: "iName1",
            phone: "iPhone1"
        },
        innerUser2: {
            name: "iName2",
            phone: "iPhone2"
        },
    }
}

//виводимо обьект по параметру що передаемо після json обьекту. Теперь працюе навіть якщо в обьекті є обьекти 
function func (obj, word) { 
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            func(obj[key],word);
        } else {
            if(obj[key] === word){
                console.log(obj);
            }
        }
    }
}

func(enterParam,'iName2');

