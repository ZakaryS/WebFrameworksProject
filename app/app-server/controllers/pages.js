const login = (req, res) => {
    res.render('login', { title: "Login Page" });
};
const register = (req, res) => {
    res.render('register', { title: "Register Page" });
};
const home = (req, res) => {
    res.render('home', {
        title: 'Grocery List',
        foods: [{
            name: 'Chicken Breast',
            cost: 5.99,
            mass: 500,
            type: 'Meat',
            image: 'https://imgs.search.brave.com/94-xqtzfMuwbt0bxyJqV0ibUI3tnK3YszEU5-XS2v-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzcv/MDkzLzA1NS9zbWFs/bC9yYXctY2hpY2tl/bi1icmVhc3QtbWVh/dC1mcmVzaC1wb3Vs/dHJ5LXByb2R1Y3Qt/Zm9yLWNvb2tpbmct/YW5kLXJlY2lwZXMt/aGVhbHRoeS1wcm90/ZWluLXNvdXJjZS1m/cmVlLXBuZy5wbmc'
        },{
            name: 'Carrot',
            cost: 2.49,
            mass: 500,
            type: 'Vegetable',
            image: 'https://imgs.search.brave.com/nmx1IUWLZVQ04xjR7qnDXv87S8aDY6eqRRhgyntdjIs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/NzE3LzI1Ni9zbWFs/bC9mcmVzaGx5LWhh/cnZlc3RlZC1vcmdh/bmljLWNhcnJvdC13/aXRoLXZpYnJhbnQt/Z3JlZW4tbGVhdmVz/LW9uLXdoaXRlLWJh/Y2tncm91bmQtcG5n/LnBuZw'
        },{
            name: 'Leek',
            cost: 1.29,
            mass: 600,
            type: 'Vegetable',
            image: 'https://imgs.search.brave.com/O3dAnKgVaTnFhPp6JHf2udNKbi3PcfuvQPusOx9Fd-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/NTE0LzYzMy9zbWFs/bC93YXRlcmNvbG9y/LWxlZWstaGFuZC1w/YWludGVkLXZlZ2V0/YWJsZXMtY2xpcGFy/dC1wbmcucG5n'
        },{
            name: 'Mushroom',
            cost: 1.79,
            mass: 250,
            type: 'Fungus',
            image: 'https://imgs.search.brave.com/sqHlrZ4vfqFR9VzCC3VUSNgC4cB-aHliN9DAcA6DiEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/MjUxLzg1Mi9zbWFs/bC9tdXNocm9vbS1j/bG9zZS11cC1vbi10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLXBu/Zy5wbmc'
        },{
            name: 'Garlic',
            cost: 0.34,
            mass: 100,
            type: 'Vegetable',
            image: 'https://imgs.search.brave.com/UnmSixpxpRsPl0NUMlVc8J9k5SK1AmrYhwdZbPFrcJI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzAv/ODA5Lzg3NC9zbWFs/bC9nYXJsaWMtbm8t/YmFja2dyb3VuZC1m/b29kLWZyZWUtcG5n/LnBuZw'
        },{
            name: 'Garlic Powder',
            cost: 0.49,
            mass: 75,
            type: 'Spice',
            image: 'https://imgs.search.brave.com/WC0p4oZe69mQD2pJAMUtth3bS5ykIv5MPYUHPTtUGNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MzQxLzM0MS9zbWFs/bC9mcmVzaC1nYXJs/aWMtYnVsYi1jbG92/ZXMtYW5kLWdhcmxp/Yy1wb3dkZXItZm9y/LWNvb2tpbmctZnJl/ZS1wbmcucG5n'
        },{
            name: 'Salt',
            cost: 1.30,
            mass: 300,
            type: 'Spice',
            image: 'https://imgs.search.brave.com/MR7jhzUs7j34pVSSsci55_-J9IgWeD2JMx3EXA-Cnzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDY5LzE4OC9zbWFs/bC9nbGFzcy1zYWx0/LXNoYWtlci13aXRo/LW1ldGFsLWNhcC1m/aWxsZWQtd2l0aC1j/b2Fyc2UtZ3JhaW5z/LW9mLXNhbHQtcG5n/LnBuZw'
        },{
            name: 'Black Pepper',
            cost: 0.99,
            mass: 75,
            type: 'Spice',
            image: 'https://imgs.search.brave.com/J6ASlchj5QFIfCL7y1ZWzwsfoN1vTNAmOXYQd4s3QuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MDk0LzUxMS9zbWFs/bC9ibGFjay1wZXBw/ZXItb24tdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC1oaWdoLXJl/cy04ay1mcmVlLXBu/Zy5wbmc'
        }]
    });
};
module.exports = {
    login,
    register,
    home
};