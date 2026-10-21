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
            image: 'https://imgs.search.brave.com/sV4ojgoMU6bzsULG_XdUTjsIcQ8lbMOxodBWyI4TZgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzkv/NDY3LzgyMC9zbWFs/bC9mcmVzaC1vcmFu/Z2UtY2Fycm90LXdp/dGgtZ3JlZW4tdG9w/cy1hZ2FpbnN0LXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n'
        },{
            name: 'Leek',
            cost: 1.29,
            mass: 600,
            type: 'Vegetable',
            image: 'https://imgs.search.brave.com/WwFQ7YAe39xINkMcX9J69V4uvb38G4dXvfCD5C8FqUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucmF3cGl4ZWwu/Y29tL2ltYWdlX3Bu/Z19zb2NpYWxfcG9y/dHJhaXQvY3pObWN5/MXdjbWwyWVhSbEwz/SmhkM0JwZUdWc1gy/bHRZV2RsY3k5M1pX/SnphWFJsWDJOdmJu/UmxiblF2Y0hVeU16/TXpOREkyTFdsdFlX/ZGxMVEF4TFdwdllq/WXlNVjh4TFd0NmNu/SnVOV1ZyTG5CdVp3/LnBuZw'
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
            image: 'https://imgs.search.brave.com/ydrmGWEua9E4DNOBzpTKZ-EnAONjapDhnxWOMcF6B0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcHNk/L2dhcmxpYy1pc29s/YXRlZC1zdHlsZS1w/bmctd2l0aC13aGl0/ZS1iYWNrZ3JvdW5k/LWdlbmVyYXRpdmUt/aWFfMjA5MTkwLTI0/NzUzNS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA'
        },{
            name: 'Garlic Powder',
            cost: 0.49,
            mass: 50,
            type: 'Spice',
            image: 'https://imgs.search.brave.com/_AbOaeQOlc-N9p-TUDKufLelylfMSaXcpGzzm2lmwUk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS84LzcvOS9p/bWdiaW4tb3JnYW5p/Yy1mb29kLWdhcmxp/Yy1wb3dkZXItY3Vy/cnktcG93ZGVyLXNw/aWNlLWdhcmxpYy1Z/dW01YmFZWXR1UFlQ/NXNrMU45aUt5Z1FN/X3QuanBn'
        },{
            name: 'Salt',
            cost: 0.49,
            mass: 60,
            type: 'Spice',
            image: 'https://imgs.search.brave.com/5s1t8bc6wAeSJieN3zRsu4RXzup4LT8tKhbOovs8T30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL21jLWNvcm1p/Y2stc2VhLXNhbHQt/Z3JpbmRlci1wcm9k/dWN0LWltYWdlLWRi/NHR0MThiczJpdWx5/bm0uanBn'
        },{
            name: 'Black Pepper',
            cost: 0.99,
            mass: 56.7,
            type: 'Spice',
            image: 'https://imgs.search.brave.com/WUHk-gy9PWtTVJh5cAXCkSjLXu7uWNIw8V2FcpCm3l4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyLzE1/L2QyLzgyMTVkMjJk/OThiMzFiNDU1MDE0/M2RlMzc4NTE0MDgz/LmpwZw'
        }]
    });
};
module.exports = {
    login,
    register,
    home
};