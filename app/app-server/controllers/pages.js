const login = (res, req) => {
    res.render('login', { title: "Login Page" });
};
const register = (res, req) => {
    res.render('register', { title: "Register Page" });
};
const home = (res, req) => {
    res.render('home', {
        title: 'Grocery List',
        foods: [{
            name: 'Chicken Breast',
            cost: 5.99,
            mass: 500,
            type: 'Meat',
            image: ''
        },{
            name: 'Carrot',
            cost: 2.49,
            mass: 500,
            type: 'Vegetable',
            image: ''
        },{
            name: 'Leek',
            cost: 1.29,
            mass: 600,
            type: 'Vegetable',
            image: ''
        },{
            name: 'Mushroom',
            cost: 1.79,
            mass: 250,
            type: 'Fungus',
            image: ''
        },{
            name: 'Garlic',
            cost: 0.34,
            mass: 100,
            type: 'Vegetable',
            image: ''
        },{
            name: 'Garlic Powder',
            cost: 0.49,
            mass: 75,
            type: 'Spice',
            image: ''
        },{
            name: 'Salt',
            cost: 1.24,
            mass: 300,
            type: 'Spice',
            image: ''
        },{
            name: 'Black Pepper',
            cost: 0.99,
            mass: 75,
            type: 'Spice',
            image: ''
        }]
    });
};
module.exports = {
    login,
    register,
    home
};