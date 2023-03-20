let User = {
    userName: 'Ivan999',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age:22,
    phones: [911,01,9874],
    address:{
        city: 'Moscow',
        street: 'Pushkina',
        house:45,
        str:23
    }
};


let domVDerevne={
    materialWall:'woods',
    floor:3,
    windows:5,
    materialRoof: 'metal',
    adress:{
    city:'Okunevo',
    street:'Cenralnaya',
    dom:36
    }
};
//console.log('Материал: '+domVDerevne.materialWall,'Окон: '+domVDerevne.windows,'Город: '+domVDerevne.adress.city);

let users = [
    {
    userName: 'Ivan999',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 11,
    phones: ['911', '01', '9874'],
    },
    {
    userName: 'Anna123',
    firstName: 'Anna',
    lastName: 'Ivanova',
    age: 13,
    phones: ['456', '04', '546221'],
    },
    {
    userName: 'Sergey19',
    firstName: 'Sergey',
    lastName: 'Petrov',
    age: 33,
    phones: ['2345', '3423', '345234'],
    }
    ];
    console.log(users[2].firstName);

    console.log(`${users[1].userName},${users[0].age},
    ${users[0].userName},${users[1].phones[2]},
    ${users[2].lastName},${users[2].phones[1]}`);