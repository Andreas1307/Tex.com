let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.closeShopping');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let quantity = document.querySelector('.quantity');
let total = document.querySelector('.total');
let list = document.querySelector('.slider');
let list2 = document.querySelector('.slider-2');
let list3 = document.querySelector('.slider-3');
let listOpt1 = document.querySelector('.slider-opt1');
let listOpt2 = document.querySelector('.slider-opt2');
let listOpt3 = document.querySelector('.slider-opt3');
let listOpt4 = document.querySelector('.slider-opt4');
let listOpt5 = document.querySelector('.slider-opt5');
let changePro = document.querySelector('.changePro');
let changePro1 = document.querySelector('.changePro1');
let changePro2 = document.querySelector('.changePro2');
let changePro3 = document.querySelector('.changePro3');
let changePro4 = document.querySelector('.changePro4');
let sliderOffers = document.querySelector('.slider-offers');
let notWorking = document.querySelectorAll('.notWorking');


const account = document.querySelector(".account");
const noAccount = document.querySelector(".no-account");
const options = document.querySelector(".options");
let feedback = document.querySelector(".feedback");
let feedback1 = document.querySelector(".feedback1");
let feedback2 = document.querySelector(".feedback2");
let feedback3 = document.querySelector(".feedback3");
let feedback4 = document.querySelector(".feedback4");
let feedback5 = document.querySelector(".feedback5");
const yesButton = document.querySelector(".yes-button");
const yesButton1 = document.querySelector(".yes-button1");
const yesButton2 = document.querySelector(".yes-button2");
const yesButton3 = document.querySelector(".yes-button3");
const yesButton4 = document.querySelector(".yes-button4");
const yesButton5 = document.querySelector(".yes-button5");
const noButton = document.querySelector(".no-button");
const noButton1 = document.querySelector(".no-button1");
const noButton2 = document.querySelector(".no-button2");
const noButton3 = document.querySelector(".no-button3");
const noButton4 = document.querySelector(".no-button4");
const noButton5 = document.querySelector(".no-button5");
var display = 0;

openShopping.addEventListener('click', () => {
    body.classList.toggle('active')
})
closeShopping.addEventListener('click', () => {
    body.classList.toggle('active')
})



const header = document.getElementById("header");
const bar = document.getElementById("bar");
const close = document.getElementById("close-icon")

if (bar) {
    bar.addEventListener('click', () => {
        header.classList.add("activ")
    })
}
if (close) {
    close.addEventListener('click', () => {
        header.classList.remove("activ")
    })
}


const accountBtn = document.querySelector(".account-sbox")
const accountBlock = document.querySelector(".no-account")

accountBtn.addEventListener('click', () => {
    accountBlock.classList.toggle("logIN")
})













let search_bx2 = document.getElementsByClassName('result-box')[0];
 
window.addEventListener('load', () => {
    allProducts.forEach(element => {
        const { name, image, price, source } = element;
        let card = document.createElement('a');
        card.href = source;
        card.innerHTML = `
        <div class="search-item">
        <img src="img/${image}">
            <div class="content2">
                <h6>${name}</h6>
                <p>${price}</p>
            </div>
        </div>
        
        `;
        search_bx2.appendChild(card);
    });
});

let search = document.getElementById('search');
search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0].textContent;
        if (c.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible"
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden"
        }
    }
});

let allProducts = [
    {
        id: 1,
        name: 'Samsung Galaxy s23 Ultra 5G, 512GB, 12GB RAM, Dual Sim',
        image: `samsung s23 ultra 1.jpg`,
        price: '$1379.99',
        source: 'samsung s23ultra pp.html'
    },
    {
        id: 2,
        name: 'Samsung QLED Smart Tv Ultra HD 4K, HDR',
        image: 'samsung qled tv 1.jpg',
        price: '$339.99',
        source: 'samsung qled tv pp.html'
    },{
        id: 3,
        name: 'Laptop Lenovo Ideapad 1,AMD Ryzen 7,Full HD, 12Gb DDR4, SSD 512GB,AMD Radeon Graphics',
        image: 'lenovo ideapad 1.jpg',
        price: '$445.50',
        source: 'Lenovo ideapad 1 pp.html'
    },{
        id: 4,
        name: 'Samsung Galaxy Tab A9, 64GB, 4GB RAM, WI-FI, Silver',
        image: 'samsung tab 1.jpg',
        price: '$185.99',
        source: 'samsung tab a9 pp.html'
    },{
        id: 5,
        name: 'Gaming Console Playstation 5 Slim (PS5) 1TB, D-Chassis, White',
        image: 'ps5 1.jpg',
        price: '$540.00',
        source: 'ps5 pp.html'
    }, {
        id: 6,
        name: 'Gaming Console NINTENDO Switch (Joy-Con Neon Red/Blue) HAD',
        image: `nintendo 1.jpg`,
        price: '$320.00',
        source: 'nintendo switch pp.html'
    },
    {
        id: 7,
        name: 'Gaming Pc Powered by Asus, IntelCore i5, 16Gb, SSD 1TB, NVIDIA GeForce RTX 4060 8GB',
        image: 'gaming pc 1.jpg',
        price: '$1199.99',
        source: 'pc asus.html'
    },
    {
        id: 8,
        name: 'Pc All In One ASUS, AMD Ryzen 5, 23.8" Full HD, 8GB, SSD 512GB,AMD Radeon Graphics',
        image: 'pc all-in-one 1.jpg',
        price: '$850.00',
        source: 'pc all in one pp.html'
    },{
        id: 9,
        name: 'Portable Speaker JBL Charge Essential 2, Bluetooth, Powerbank, Waterproof',
        image: 'jbl 1.jpg',
        price: '$190.00',
        source: 'JBL speaker pp.html'
    },{
        id: 10,
        name: 'Smartwatch HUAWEI Watch 4, LTE, Wi-Fi, 32GB, 2GB RAM, Android/iOS, Black',
        image: 'huawei smartwatch 1.jpg',
        price: '$765.50',
        source: 'huawei watch 4 pp.html'
    },{
        id: 16,
        name: 'Washing Machine WHIRPOOL FFB 7459 WV EE, 6th Sense, 7kg',
        image: `washing machine 1.jpg`,
        price: '$349.99',
        source: 'washing machine 1 pp.html'
    },
    {
        id: 17,
        name: 'Washing Machine VORTEX VMA610D01V, 6kg, Class D, white',
        image: 'washing 2 machine 1.jpg',
        price: '$239.99',
        source: 'washing machine 2 pp.html'
    },{
        id: 18,
        name: 'Washing Machine BEKO B5WFU78235WB, 8kg, Class C,white',
        image: 'washing 3 machine 1.jpg',
        price: '$299.95',
        source: 'washing machine 3 pp.html'
    },{
        id: 19,
        name: 'Washing Machine SAMSUNG WW90TA046AT/LE, 9kg, Class A, white',
        image: 'washing 4 machine 1 .jpg',
        price: '$390.00',
        source: 'washing machine 4 pp.html'
    },{
        id: 20,
        name: 'Washing Machine Vertical INDESIT BTW S60400, 6kg, Class C, white',
        image: 'washing 5 machine 1.jpg',
        price: '$289.99',
        source: 'washing machine 5 pp.html'
    },{
        id: 1,
        name: 'Hot Air Fryer HISENSE HAF2900D, 8.6l, 1700W, black-silver',
        image: `fryer 1.jpg`,
        price: '$99.99',
        source: 'air fryer hisense pp.html'
    },
    {
        id: 2,
        name: 'Hot Air Fryer MYRIA MY4467, 6,5l, 1700W, black',
        image: 'fryer 2 1.jpg',
        price: '$59.99',
        source: 'air fryer myria pp.html'
    },{
        id: 3,
        name: 'Hot Air Fryer BEKO ExpertFry FRL2244B, 1kg, 3.9l, 1500W, black-silver',
        image: 'fryer 3 1.jpg',
        price: '$94.99',
        source: 'air fryer beko pp.html'
    },{
        id: 4,
        name: 'Hot Air Fryer PHILIPS Airfryer Essential HD9252/90, 0.8kg, 4.1l, 1400W, black',
        image: 'fryer 4 1.jpg',
        price: '$90.00',
        source: 'air fryer philips pp.html'
    },{
        id: 5,
        name: 'Hot Air Fryer MYRIA MY4493WH, 6.7l, 1800W',
        image: 'fryer 5 1.jpg',
        price: '$85.50',
        source: 'air fryer myria 2 pp.html'
    },{
        id: 1,
        name: 'LED TV Smart VORTEX V32R0212VS, HD',
        image: `tv 1.jpg`,
        price: '$159.99',
        source: 'tv smart vortex pp.html'
    },
    {
        id: 2,
        name: 'LED TV SCHNEIDER 32-SC410K, HD',
        image: 'tv 2 1.jpg',
        price: '$109.99',
        source: 'tv schneider pp.html'
    },{
        id: 3,
        name: 'LED TV Smart VORTEX V40ET1VS, Full HD',
        image: 'tv 3 1.jpg',
        price: '$200.00',
        source: 'tv smart vortex v40 pp.html'
    },{
        id: 4,
        name: 'LED TV VORTEX V32R0212, HD',
        image: 'tv 4 1.jpg',
        price: '$89.99',
        source: 'tv vortex pp.html'
    },{
        id: 5,
        name: 'LED TV Smart SAMSUNG 50AU7092, Ultra HD 4K, HDR',
        image: 'tv 5 1.jpg',
        price: '$365.50',
        source: 'tv smart samsung pp.html'
    },{
        id: 1,
        name: 'Laptop HP 15s-fq5051nq, Intel Core i5-1235U up to 4.4GHz, 15.6" Full HD, 8GB, SSD 512GB, silver',
        image: `laptop 1.jpg`,
        price: '$420.00',
        source: 'laptop hp 15s-fq pp.html'
    },
    {
        id: 2,
        name: 'Laptop ASUS VivoBook 15 R1504ZA, Intel Core i5-1235U up to 4.4GHz, 16GB, SSD 1TB, Quiet Blue',
        image: 'laptop 2 1.jpg',
        price: '$549.99',
        source: 'laptop asus vivobook pp.html'
    },{
        id: 3,
        name: 'Laptop Gaming HP Omen 16, Intel Core i5 16GB, SSD 512GB, NVIDIA GeForce RTX 4050 6GB, black',
        image: 'laptop 3 1.jpg',
        price: '$950.00',
        source: 'laptop hp omen pp.html'
    },{
        id: 4,
        name: 'Laptop ASUS VivoBook 15, Intel Core i7, 15.6" Full HD, 16GB, SSD 1TB, Intel Iris Xe Graphics, Blue',
        image: 'laptop 4 1.jpg',
        price: '$790.00',
        source: 'asus vivobook 15 pp.html'
    },{
        id: 5,
        name: 'Laptop LENOVO IdeaPad 1, 15.6" Full HD, 12GB, SSD 512GB, AMD Radeon Graphics, grey',
        image: 'laptop 5 1.jpg',
        price: '$445.50',
        source: 'lenovo ideapad pp.html'
    }, {
        id: 1,
        name: 'Laptop ASUS Vivobook Go 15 L1504FA-BQ917, 15.6" Full HD, 8GB, SSD 512GB',
        image: `laptop asus 1.jpg`,
        price: '$320.20',
        source: 'laptop asus vivobook go pp.html'
    },
    {
        id: 2,
        name: 'Built-in hob BEKO HII64200SFMT, Induction, 4 burners, Touch Control, black',
        image: 'beko hub 1.jpg',
        price: '$214.99',
        source: 'hob beko pp.html'
    },{
        id: 3,
        name: 'Air conditioning BOSCH Climate 5000i, 12000 BTU, A+++/A+, Heating function,, white',
        image: 'bosch climate 1.jpg',
        price: '$430.50',
        source: 'air conditioning pp.html'
    },{
        id: 4,
        name: 'Built-in oven WHIRLPOOL W9 OM2 4S1 P BSS, Electric, Pyrolytic Self-Cleaning,, Class A+,Wi-Fi',
        image: 'whirpool oven 1.jpg',
        price: '$449.99',
        source: 'oven pp.html'
    },{
        id: 5,
        name: 'Air conditioner HISENSE Mini Apple Pie TG70BB0C, 24000 BTU, A++/A+, Inverter, Wi-Fi, white',
        image: 'hisense 1.jpg',
        price: '$630.00',
        source: 'air conditioner pp.html'
    },
    
    
    
    
    {
        id: 4,
        name: 'Microsoft Xbox Series X 1TB console, black',
        image: 'xbox x 1.jpg',
        price: '$500.99',
        source: 'xbox x pp.html'
    },
    {
        id: 2,
        name: 'LENOVO Legion Go portable gaming console, 512GB, black',
        image: 'lenovo legion 1.jpg',
        price: '$699.99',
        source: 'LENOVO Legion Go pp.html'
    },{
        id: 1,
        name: 'Gaming Chair MYRIA MG7403RD, black-red',
        image: `gaming chair 11.jpg`,
        price: '$100.00',
        source: 'gaming chair myria MG74 pp.html'
    },{
        id: 4,
        name: 'EA Sports FC 24 PS5',
        image: 'fifa 24 1.jpg',
        price: '$70.00',
        source: 'fifa pp.html'
    }, {
        id: 2,
        name: 'Gaming chair MYRIA MG7408, black-red',
        image: 'gaming chair  2 1.jpg',
        price: '$214.99',
        source: 'gaming chair myria MG08 pp.html'
    },{
        id: 3,
        name: 'Gaming chair MYRIA MG7407GR, black-green',
        image: 'gaming chair 3 1.jpg',
        price: '$255.00',
        source: 'gaming chair myria MGGR pp.html'
    },{
        id: 4,
        name: 'Portable console Nintendo Switch Lite Coral Isabelles Aloha Edition (Joy-Con Green and Red)',
        image: 'n switch 1.jpg',
        price: '$260.00',
        source: 'nintendo aloha edition pp.html'
    },
    {
        id: 2,
        name: 'The Crew 2 PS4',
        image: 'the crew 2 1.jpg',
        price: '$11.99',
        source: 'the crew 2 pp.html'
    },{
        id: 2,
        name: 'Console SONY PlayStation 4 Slim (PS4 Slim) 512GB, Jet Black, F-Chassis',
        image: 'ps4 1.jpg',
        price: '$300.99',
        source: 'ps4 pp.html'
    },{
        id: 4,
        name: 'Gaming chair MARVO CH-116PK, pink',
        image: 'gaming chair 4 1.jpg',
        price: '$190.00',
        source: 'gaming chair marvo pp.html'
    },
    {
        id: 2,
        name: 'LENOVO Tab K10 tablet, 10.3", 3GB RAM, 32GB, 4G + Wi-Fi, Abyss Blue',
        image: 'lenovo tab k10 1.jpg',
        price: '$169.99',
        source: 'lenovo tab k10 pp.html'
    },{
        id: 3,
        name: 'Tablet SAMSUNG Galaxy Tab A9 Plus, 11", 64GB, 4GB RAM, Wi-Fi + 5G, Graphite',
        image: 'samsung tab a9 plus 1.jpg',
        price: '$359.99',
        source: 'samsung tab a9 plus pp.html'
    },{
        id: 4,
        name: 'Tablet APPLE iPad 9 (2021), 10.2", 64GB, Wi-Fi, Space Gray',
        image: 'ipad 9 1.jpg',
        price: '$420.00',
        source: 'ipad 9 pp.html'
    },{
        id: 1,
        name: 'Tablet APPLE iPad Pro 11" 4th Gen (2022), 128GB, Wi-Fi, Silver',
        image: `ipad pro 11 1.jpg`,
        price: '$989.99',
        source: 'ipad pro 11 pp.html'
    },{
        id: 2,
        name: 'Tablet SAMSUNG Galaxy Tab A8, 10.5", 32GB, 3GB RAM, Wi-Fi + 4G, Pink Gold',
        image: 'samsung tab a8 1.jpg',
        price: '$299.99',
        source: 'samsung tab a8 pp.html'
    },{
        id: 3,
        name: 'Tablet APPLE iPad 10 (2022), 10.9", 256GB, Cellular, Pink',
        image: 'ipad 10 1.jpg',
        price: '$899.99',
        source: 'ipad 10 pp.html'
    },{
        id: 4,
        name: 'Tablet OPPO Pad Air, 10.36", 128GB, 4GB RAM, Wi-Fi, Grey',
        image: 'oppo pad air 1.jpg',
        price: '$340.00',
        source: 'oppo pad air pp.html'
    },{
        id: 1,
        name: 'Tablet LENOVO Tab M10 HD (2nd Gen) TB-X306F, 10.1", 32GB, 3GB RAM, Wi-Fi, Iron Grey',
        image: `lenovo tab m10 1.jpg`,
        price: '$199.99',
        source: 'lenovo tab m10 pp.html'
    },
    {
        id: 2,
        name: 'Tablet SAMSUNG Galaxy Tab S8+, 12.4", 128GB, 8GB RAM, Wi-Fi, Silver',
        image: 'samsung tab s8 1.jpg',
        price: '$859.99',
        source: 'samsung tab s8+ pp.html'
    },{
        id: 3,
        name: 'Tablet HUAWEI MatePad Paper, 10.3", 64GB, 4GB RAM, Wi-Fi, Black',
        image: 'matepad paper 1.jpg',
        price: '$300.00',
        source: 'huawei matepad paper pp.html'
    },{
        id: 4,
        name: 'Tablet APPLE iPad Pro 11" 4th Gen (2022), 2TB, Cellular, Space Gray',
        image: 'ipad 11 1.jpg',
        price: '$2499.99',
        source: 'apple ipad pro 11 pp.html'
    },
    {
        id: 2,
        name: 'Smart LED TV HISENSE 75A6K, Ultra HD 4K, HDR, 189cm',
        image: 'hisense 50 1.jpg',
        price: '$369.99',
        source: 'tv hisense 75 pp.html'
    },{
        id: 3,
        name: 'Smart LED TV PHILIPS 43PUS7608, Ultra HD 4K, HDR10, 108cm',
        image: 'philips tv 1.jpg',
        price: '$349.99',
        source: 'tv philips pp.html'
    },{
        id: 2,
        name: 'Samsung QLED Smart Tv Ultra HD 4K, HDR, 108 cm',
        image: 'samsung qled tv 1.jpg',
        price: '$339.99',
        source: 'samsung qled tv pp.html'
    },
    {
        id: 2,
        name: 'MOTOROLA Moto E13 phone, 64GB, 2GB RAM, Dual SIM, Aurora Green',
        image: 'moto e 1.jpg',
        price: '$89.99',
        source: 'motorola moto e13 pp.html'
    },{
        id: 3,
        name: 'APPLE phone iPhone 15 Pro Max 5G, 256GB, Natural Titanium',
        image: 'iphone pm 1.jpg',
        price: '$1599.99',
        source: 'iphone 15 pro max pp.html'
    },{
        id: 4,
        name: 'Phone SAMSUNG Galaxy A54 5G, 256GB, 8GB RAM, Dual SIM, Awesome Lime',
        image: 'samsung a54 1.jpg',
        price: '$490.00',
        source: 'samsung a54.html'
    },{
        id: 1,
        name: 'HONOR X6a phone, 128GB, 4GB RAM, Dual SIM, Cyan Lake',
        image: `honor x6a 1.jpg`,
        price: '$119.99',
        source: 'honor x6a pp.html'
    },{
        id: 2,
        name: 'Phone XIAOMI Redmi Note 13, 256GB, 8GB RAM, Dual Sim, Green',
        image: 'x redmi note 13 1.jpg',
        price: '$239.99',
        source: 'xiaomi redmi note 13 pp.html'
    },{
        id: 3,
        name: 'Phone SAMSUNG Galaxy A14, 128GB, 4GB RAM, Dual SIM, Black',
        image: 'samsung a14 1.jpg',
        price: '$199.99',
        source: 'samsung a14 pp.html'
    },{
        id: 4,
        name: 'HONOR Magic6 Lite 5G phone, 256GB, 8GB RAM, Dual SIM, Emerald Green',
        image: 'honor magic6 1.jpg',
        price: '$350.00',
        source: 'honor magic 6 pp.html'
    },
    {
        id: 1,
        name: 'APPLE iPhone 11 phone, 64GB, Black',
        image: `iphone 11 11.jpg`,
        price: '$399.99',
        source: 'iphone 11 pp.html'
    },
    {
        id: 2,
        name: 'MOTOROLA Moto G84 5G phone, 256GB, 12GB RAM, Midnight Blue',
        image: 'moto g84 1.jpg',
        price: '$259.99',
        source: 'motorola moto g84 pp.html'
    },{
        id: 3,
        name: 'HONOR X7b phone, 128GB, 6GB RAM, Dual SIM, Emerald Green',
        image: 'honor x7b 1.jpg',
        price: '$200.00',
        source: 'honor x7b pp.html'
    },{
        id: 4,
        name: 'Phone NOKIA 130 2017, 4MB RAM, 2G, Dual SIM, Black',
        image: 'nokia 130 1.jpg',
        price: '$32.00',
        source: 'nokia 130 pp.html'
    },{
        id: 1,
        name: 'HONOR 90 5G phone, 256GB, 8GB RAM, Dual SIM, Emerald Green',
        image: `honor 90 1.jpg`,
        price: '$499.99',
        source: 'honor 90 pp.html'
    },
    {
        id: 2,
        name: 'Phone SAMSUNG Galaxy S22 5G, 256GB, 8GB, RAM, Dual SIM, Phantom Black',
        image: 'samsung s22 1.jpg',
        price: '$594.99',
        source: 'samsung s22 pp.html'
    },{
        id: 3,
        name: 'Phone MYRIA Endless Power U1 MY9067BL, 32MB RAM, 2G, Dual SIM, Black-Blue',
        image: 'myria u1.jpg',
        price: '$24.99',
        source: 'myria power U1 pp.html'
    },{
        id: 4,
        name: 'Phone OPPO A78 5G, 128GB, 4GB RAM, Dual SIM, Glowing Black',
        image: 'oppo a78 1.jpg',
        price: '$190.00',
        source: 'oppo a78.html'
    },{
        id: 3,
        name: 'Laptop Lenovo Ideapad 1,AMD Ryzen 7,Full HD, 12Gb DDR4, SSD 512GB,AMD Radeon Graphics',
        image: 'lenovo ideapad 1.jpg',
        price: '$445.50',
        source: 'Lenovo ideapad 1 pp.html'
    },{
        id: 5,
        name: 'Laptop LENOVO IdeaPad 1, 15.6" Full HD, 12GB, SSD 512GB, AMD Radeon Graphics, grey',
        image: 'laptop 5 1.jpg',
        price: '$445.50',
        source: 'lenovo ideapad pp.html'
    },{
        id: 5,
        name: 'Laptop Gaming ASUS TUF F15 FX507ZC4-HN073, Intel Core i5, 16GB, 512GB,GeForce RTX 3050 4GB',
        image: 'asus tuf 1.jpg',
        price: '$900.00',
        source: 'laptop asus tuf pp.html'
    },{
        id: 5,
        name: 'Laptop HP 15-fc0, AMD Ryzen 3 7320U up to 4.1GHz, 8GB, SSD 512GB, AMD Radeon Graphics',
        image: 'hp 15 1.jpg',
        price: '$299.99',
        source: 'laptop hp 15-fc0 pp.html'
    }
]













let changeTxt = document.querySelector(".change-txt");
const btnChange1 = document.querySelector(".btn-change1");
const btnChange2 = document.querySelector(".btn-change2");
const btnChange3 = document.querySelector(".btn-change3");

function changeBtnText() {
    changeTxt.textContent = btnChange1.innerHTML;
    btnChange1.style.border = "2px solid #fccb38";
    btnChange2.style.border = "1px solid #999";
    btnChange3.style.border = "1px solid #999";
}
function changeBtnText2() {
    changeTxt.textContent = btnChange2.innerHTML;
    btnChange1.style.border = "1px solid #999";
    btnChange2.style.border = "2px solid #fccb38";
    btnChange3.style.border = "1px solid #999";
}
function changeBtnText3() {
    changeTxt.textContent = btnChange3.innerHTML;
    btnChange1.style.border = "1px solid #999";
    btnChange2.style.border = "1px solid #999";
    btnChange3.style.border = "2px solid #fccb38";
}
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".home-page", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

function changeText() {
    feedback.textContent = "Thanks,your response has been submited";
    yesButton.style.display = "none";
    noButton.style.display = "none"
}
function changeText1() {
    feedback1.textContent = "Thanks,your response has been submited";
    yesButton1.style.display = "none";
    noButton1.style.display = "none"
}
function changeText2() {
    feedback2.textContent = "Thanks,your response has been submited";
    yesButton2.style.display = "none";
    noButton2.style.display = "none"
}
function changeText3() {
    feedback3.textContent = "Thanks,your response has been submited";
    yesButton3.style.display = "none";
    noButton3.style.display = "none"
}
function changeText4() {
    feedback4.textContent = "Thanks,your response has been submited";
    yesButton4.style.display = "none";
    noButton4.style.display = "none"
}
function changeText5() {
    feedback5.textContent = "Thanks,your response has been submited";
    yesButton5.style.display = "none";
    noButton5.style.display = "none"
}

function changeProduct() {
    changePro.style.borderBottom = '3px solid #c00033';
    changePro1.style.borderBottom = '0';
    changePro2.style.borderBottom = '0';
    changePro3.style.borderBottom = '0';
    changePro4.style.borderBottom = '0';
     listOpt1.style.display = 'grid';
     listOpt2.style.display = 'none';
     listOpt3.style.display = 'none';
     listOpt4.style.display = 'none';
     listOpt5.style.display = 'none';
     listOpt1.classList.add("grid") 
 }
 function changeProductFry() {
     changePro.style.borderBottom = '0';
     changePro4.style.borderBottom = '0';
     changePro2.style.borderBottom = '0';
     changePro3.style.borderBottom = '0';
     changePro1.style.borderBottom = '3px solid #c00033';
      listOpt1.style.display = 'none';
      listOpt2.style.display = 'grid';
      listOpt3.style.display = 'none';
      listOpt4.style.display = 'none';
      listOpt5.style.display = 'none'; 
      listOpt2.classList.add("grid")
  }
  function changeProductTv() {
     changePro.style.borderBottom = '0';
     changePro1.style.borderBottom = '0';
     changePro2.style.borderBottom = '3px solid #c00033';
     changePro3.style.borderBottom = '0';
     changePro4.style.borderBottom = '0';
      listOpt1.style.display = 'none';
      listOpt2.style.display = 'none';
      listOpt3.style.display = 'grid';
      listOpt4.style.display = 'none';
      listOpt5.style.display = 'none'; 
      listOpt3.classList.add("grid1")
  }
  function changeProductLaptop() {
     changePro.style.borderBottom = '0';
     changePro1.style.borderBottom = '0';
     changePro2.style.borderBottom = '0';
     changePro3.style.borderBottom = '3px solid #c00033';
     changePro4.style.borderBottom = '0';
      listOpt1.style.display = 'none';
      listOpt2.style.display = 'none';
      listOpt3.style.display = 'none';
      listOpt4.style.display = 'grid';
      listOpt5.style.display = 'none';
      listOpt4.classList.add("grid1") 
  }
  function changeProductChair() {
     changePro.style.borderBottom = '0';
     changePro1.style.borderBottom = '0';
     changePro2.style.borderBottom = '0';
     changePro3.style.borderBottom = '0';
     changePro4.style.borderBottom = '3px solid #c00033';
      listOpt1.style.display = 'none';
      listOpt2.style.display = 'none';
      listOpt3.style.display = 'none';
      listOpt4.style.display = 'none';
      listOpt5.style.display = 'grid';
      listOpt5.classList.add("grid1")
  }



  let products = [
    {
        id: 1,
        name: 'Samsung Galaxy s23 Ultra 5G, 512GB, 12GB RAM, Dual Sim',
        image: `samsung s23 ultra 1.jpg`,
        price: '$1379.99',
        source: 'samsung s23ultra pp.html'
    },
    {
        id: 2,
        name: 'Samsung QLED Smart Tv Ultra HD 4K, HDR',
        image: 'samsung qled tv 1.jpg',
        price: '$339.99',
        source: 'samsung qled tv pp.html'
    },{
        id: 3,
        name: 'Laptop Lenovo Ideapad 1,AMD Ryzen 7,Full HD, 12Gb DDR4, SSD 512GB,AMD Radeon Graphics',
        image: 'lenovo ideapad 1.jpg',
        price: '$445.50',
        source: 'Lenovo ideapad 1 pp.html'
    },{
        id: 4,
        name: 'Samsung Galaxy Tab A9, 64GB, 4GB RAM, WI-FI, Silver',
        image: 'samsung tab 1.jpg',
        price: '$185.99',
        source: 'samsung tab a9 pp.html'
    },{
        id: 5,
        name: 'Gaming Console Playstation 5 Slim (PS5) 1TB, D-Chassis, White',
        image: 'ps5 1.jpg',
        price: '$540.00',
        source: 'ps5 pp.html'
    }
]

let products2 = [
    {
        id: 6,
        name: 'Gaming Console NINTENDO Switch (Joy-Con Neon Red/Blue) HAD',
        image: `nintendo 1.jpg`,
        price: '$320.00',
        source: 'nintendo switch pp.html'
    },
    {
        id: 8,
        name: 'Pc All In One ASUS, AMD Ryzen 5, 23.8" Full HD, 8GB, SSD 512GB,AMD Radeon Graphics',
        image: 'pc all-in-one 1.jpg',
        price: '$850.00',
        source: 'pc all in one pp.html'
    },
    {
        id: 7,
        name: 'Gaming Pc Powered by Asus, IntelCore i5, 16Gb, SSD 1TB, NVIDIA GeForce RTX 4060 8GB',
        image: 'gaming pc 1.jpg',
        price: '$1199.99',
        source: 'pc asus.html'
    },{
        id: 9,
        name: 'Portable Speaker JBL Charge Essential 2, Bluetooth, Powerbank, Waterproof',
        image: 'jbl 1.jpg',
        price: '$190.00',
        source: 'JBL speaker pp.html'
    },{
        id: 10,
        name: 'Smartwatch HUAWEI Watch 4, LTE, Wi-Fi, 32GB, 2GB RAM, Android/iOS, Black',
        image: 'huawei smartwatch 1.jpg',
        price: '$765.50',
        source: 'huawei watch 4 pp.html'
    }
]

let productsOpt1 = [
        {
            id: 16,
            name: 'Washing Machine WHIRPOOL FFB 7459 WV EE, 6th Sense, 7kg',
            image: `washing machine 1.jpg`,
            price: '$349.99',
            source: 'washing machine 1 pp.html'
        },
        {
            id: 17,
            name: 'Washing Machine VORTEX VMA610D01V, 6kg, Class D, white',
            image: 'washing 2 machine 1.jpg',
            price: '$239.99',
            source: 'washing machine 2 pp.html'
        },{
            id: 18,
            name: 'Washing Machine BEKO B5WFU78235WB, 8kg, Class C,white',
            image: 'washing 3 machine 1.jpg',
            price: '$299.95',
            source: 'washing machine 3 pp.html'
        },{
            id: 19,
            name: 'Washing Machine SAMSUNG WW90TA046AT/LE, 9kg, Class A, white',
            image: 'washing 4 machine 1 .jpg',
            price: '$390.00',
            source: 'washing machine 4 pp.html'
        },{
            id: 20,
            name: 'Washing Machine Vertical INDESIT BTW S60400, 6kg, Class C, white',
            image: 'washing 5 machine 1.jpg',
            price: '$289.99',
            source: 'washing machine 5 pp.html'
        }
]

let productsOpt2 = [
    {
        id: 1,
        name: 'Hot Air Fryer HISENSE HAF2900D, 8.6l, 1700W, black-silver',
        image: `fryer 1.jpg`,
        price: '$99.99',
        source: 'air fryer hisense pp.html'
    },
    {
        id: 2,
        name: 'Hot Air Fryer MYRIA MY4467, 6,5l, 1700W, black',
        image: 'fryer 2 1.jpg',
        price: '$59.99',
        source: 'air fryer myria pp.html'
    },{
        id: 3,
        name: 'Hot Air Fryer BEKO ExpertFry FRL2244B, 1kg, 3.9l, 1500W, black-silver',
        image: 'fryer 3 1.jpg',
        price: '$94.99',
        source: 'air fryer beko pp.html'
    },{
        id: 4,
        name: 'Hot Air Fryer PHILIPS Airfryer Essential HD9252/90, 0.8kg, 4.1l, 1400W, black',
        image: 'fryer 4 1.jpg',
        price: '$90.00',
        source: 'air fryer philips pp.html'
    },{
        id: 5,
        name: 'Hot Air Fryer MYRIA MY4493WH, 6.7l, 1800W',
        image: 'fryer 5 1.jpg',
        price: '$85.50',
        source: 'air fryer myria 2 pp.html'
    }
]

let productsOpt3 = [
    {
        id: 1,
        name: 'LED TV Smart VORTEX V32R0212VS, HD',
        image: `tv 1.jpg`,
        price: '$159.99',
        source: 'tv smart vortex pp.html'
    },
    {
        id: 2,
        name: 'LED TV SCHNEIDER 32-SC410K, HD',
        image: 'tv 2 1.jpg',
        price: '$109.99',
        source: 'tv schneider pp.html'
    },{
        id: 3,
        name: 'LED TV Smart VORTEX V40ET1VS, Full HD',
        image: 'tv 3 1.jpg',
        price: '$200.00',
        source: 'tv smart vortex v40 pp.html'
    },{
        id: 4,
        name: 'LED TV VORTEX V32R0212, HD',
        image: 'tv 4 1.jpg',
        price: '$89.99',
        source: 'tv vortex pp.html'
    },{
        id: 5,
        name: 'LED TV Smart SAMSUNG 50AU7092, Ultra HD 4K, HDR',
        image: 'tv 5 1.jpg',
        price: '$365.50',
        source: 'tv smart samsung pp.html'
    }
]

let productsOpt4 = [
    {
        id: 1,
        name: 'Laptop HP 15s-fq5051nq, Intel Core i5-1235U up to 4.4GHz, 15.6" Full HD, 8GB, SSD 512GB, silver',
        image: `laptop 1.jpg`,
        price: '$420.00',
        source: 'laptop hp 15s-fq pp.html'
    },
    {
        id: 2,
        name: 'Laptop ASUS VivoBook 15 R1504ZA, Intel Core i5-1235U up to 4.4GHz, 16GB, SSD 1TB, Quiet Blue',
        image: 'laptop 2 1.jpg',
        price: '$549.99',
        source: 'laptop asus vivobook pp.html'
    },{
        id: 3,
        name: 'Laptop Gaming HP Omen 16, Intel Core i5 16GB, SSD 512GB, NVIDIA GeForce RTX 4050 6GB, black',
        image: 'laptop 3 1.jpg',
        price: '$950.00',
        source: 'laptop hp omen pp.html'
    },{
        id: 4,
        name: 'Laptop ASUS VivoBook 15, Intel Core i7, 15.6" Full HD, 16GB, SSD 1TB, Intel Iris Xe Graphics, Blue',
        image: 'laptop 4 1.jpg',
        price: '$790.00',
        source: 'asus vivobook 15 pp.html'
    },{
        id: 5,
        name: 'Laptop LENOVO IdeaPad 1, 15.6" Full HD, 12GB, SSD 512GB, AMD Radeon Graphics, grey',
        image: 'laptop 5 1.jpg',
        price: '$445.50',
        source: 'lenovo ideapad pp.html'
    }
]

let productsOpt5 = [
    {
        id: 1,
        name: 'Gaming Chair MYRIA MG7403RD, black-red',
        image: `gaming chair 11.jpg`,
        price: '$100.00',
        source: 'gaming chair myria MG74 pp.html'
    },
    {
        id: 2,
        name: 'Gaming chair MYRIA MG7408, black-red',
        image: 'gaming chair  2 1.jpg',
        price: '$214.99',
        source: 'gaming chair myria MG08 pp.html'
    },{
        id: 3,
        name: 'Gaming chair MYRIA MG7407GR, black-green',
        image: 'gaming chair 3 1.jpg',
        price: '$255.00',
        source: 'gaming chair myria MGGR pp.html'
    },{
        id: 4,
        name: 'Gaming chair MARVO CH-116PK, pink',
        image: 'gaming chair 4 1.jpg',
        price: '$190.00',
        source: 'gaming chair marvo pp.html'
    },{
        id: 5,
        name: 'Gaming chair MYRIA MG7409, black-red',
        image: 'gaming chair 5 1.jpg',
        price: '$230.00',
        source: 'gaming chair myria MG09 pp.html'
    }
]

let productOffers = [
    {
        id: 1,
        name: 'Laptop ASUS Vivobook Go 15 L1504FA-BQ917, 15.6" Full HD, 8GB, SSD 512GB',
        image: `laptop asus 1.jpg`,
        price: '$320.20',
        source: 'laptop asus vivobook go pp.html'
    },
    {
        id: 2,
        name: 'Built-in hob BEKO HII64200SFMT, Induction, 4 burners, Touch Control, black',
        image: 'beko hub 1.jpg',
        price: '$214.99',
        source: 'hob beko pp.html'
    },{
        id: 3,
        name: 'Air conditioning BOSCH Climate 5000i, 12000 BTU, A+++/A+, Heating function,, white',
        image: 'bosch climate 1.jpg',
        price: '$430.50',
        source: 'air conditioning pp.html'
    },{
        id: 4,
        name: 'Built-in oven WHIRLPOOL W9 OM2 4S1 P BSS, Electric, Pyrolytic Self-Cleaning,, Class A+,Wi-Fi',
        image: 'whirpool oven 1.jpg',
        price: '$449.99',
        source: 'oven pp.html'
    },{
        id: 5,
        name: 'Air conditioner HISENSE Mini Apple Pie TG70BB0C, 24000 BTU, A++/A+, Inverter, Wi-Fi, white',
        image: 'hisense 1.jpg',
        price: '$630.00',
        source: 'air conditioner pp.html'
    }
]



let listCards = [];
let listCards2 = [];
let listCardsOpt1 = [];
let listCardsOpt2 = [];
let listCardsOpt3 = [];
let listCardsOpt4 = [];
let listCardsOpt5 = [];
let listCardsOffers = [];
function initApp2() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box" >
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                    <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCard(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        list.appendChild(newDiv)
    })

    products2.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box">
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                    <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCard2(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        list2.appendChild(newDiv)
    })

    // Slider Opt 

    productsOpt1.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box">
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                    <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCardOpt1(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        listOpt1.appendChild(newDiv)
    });

    productsOpt2.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box">
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                    <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCardOpt2(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        listOpt2.appendChild(newDiv)
    });

    productsOpt3.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box">
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                    <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCardOpt3(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        listOpt3.appendChild(newDiv)
    });

    productsOpt4.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box">
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                   <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCardOpt4(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        listOpt4.appendChild(newDiv)
    });

    productsOpt5.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box">
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                   <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCardOpt5(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        listOpt5.appendChild(newDiv)
    });
    // Offers
    productOffers.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div class="slider-box">
                    <button class="heartBtn" onclick="alert('You need an account first')"><i class="fa-regular fa-heart"></i></button>
                   <a href="${value.source}"><img class="valueImg" src="img/${value.image}"></a>
                    <div class="slider-text">
                        <p class="value-name">${value.name}</p>
                        <p class="in-stock"><i class="fa-solid fa-barcode"></i> in stock</p>
                        <div class="stars">
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-solid fa-star" id="colored-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price-cut">
                            <h2>$1459.99</h2>
                            <span>-23%</span>
                        </div>
                        <h2 class="actuall-price">
                            ${value.price.toLocaleString()}
                        </h2>
                        <button onclick="addToCardOffers(${key})">Add To Cart</button>
                    </div>
                </div>
        `
        sliderOffers.appendChild(newDiv)
    }); 
}
initApp2()
function addToCard(key){
    if(listCards[key] == null) {
     listCards[key] = products[key];
     listCards[key].quantity = 1;
 }    
 reloadCard();
}
function addToCard2(key){
 if(listCards2[key] == null) {
     listCards2[key] = products2[key];
     listCards2[key].quantity = 1;
 }
 reloadCard();
}
 // Slider Opt 
function addToCardOpt1(key){
     if(listCardsOpt1[key] == null) {
         listCardsOpt1[key] = productsOpt1[key];
         listCardsOpt1[key].quantity = 1;
     }
     reloadCard();
}
function addToCardOpt2(key){
     if(listCardsOpt2[key] == null) {
         listCardsOpt2[key] = productsOpt2[key];
         listCardsOpt2[key].quantity = 1;
     }
     reloadCard();
}
function addToCardOpt3(key){
     if(listCardsOpt3[key] == null) {
         listCardsOpt3[key] = productsOpt3[key];
         listCardsOpt3[key].quantity = 1;
     }
     reloadCard();
}
function addToCardOpt4(key){
     if(listCardsOpt4[key] == null) {
         listCardsOpt4[key] = productsOpt4[key];
         listCardsOpt4[key].quantity = 1;
     }
     reloadCard();
}
function addToCardOpt5(key){
     if(listCardsOpt5[key] == null) {
         listCardsOpt5[key] = productsOpt5[key];
         listCardsOpt5[key].quantity = 1;
     }
     reloadCard();
}
 // Offers
function addToCardOffers(key){
 if(listCardsOffers[key] == null) {
     listCardsOffers[key] = productOffers[key];
     listCardsOffers[key].quantity = 1;
 }
 reloadCard();
}

function reloadCard() {

    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;



    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });
    listCards2.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity1(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });
    
    listCardsOpt1.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity2(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });

    listCardsOpt2.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity3(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });


    listCardsOpt3.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity4(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });

    listCardsOpt4.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity5(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });

    listCardsOpt5.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity6(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });
    
    listCardsOffers.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"</div>
            <div class="valueName">${value.name}</div>
            <div>${value.price.toLocaleString()}</div>  
            <div>
            <button class="changeQuantity" onclick="changeQuantity7(${key}, ${value.quantity - 1})">Remove</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    });

    
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard()
}
function changeQuantity1(key, quantity) {
    if (quantity == 0) {
        delete listCards2[key];
    } else {
        listCards2[key].quantity = quantity;
        listCards2[key].price = quantity * products[key].price;
    }
    reloadCard()
}
function changeQuantity2(key, quantity) {
    if (quantity == 0) {
        delete listCardsOpt1[key];
    } else {
        listCardsOpt1[key].quantity = quantity;
        listCardsOpt1[key].price = quantity * products[key].price;
    }
    reloadCard()
}

function changeQuantity3(key, quantity) {
    if (quantity == 0) {
        delete listCardsOpt2[key];
    } else {
        listCardsOpt2[key].quantity = quantity;
        listCardsOpt2[key].price = quantity * products[key].price;
    }
    reloadCard()
}
function changeQuantity4(key, quantity) {
    if (quantity == 0) {
        delete listCardsOpt3[key];
    } else {
        listCardsOpt3[key].quantity = quantity;
        listCardsOpt3[key].price = quantity * products[key].price;
    }
    reloadCard()
}
function changeQuantity5(key, quantity) {
    if (quantity == 0) {
        delete listCardsOpt4[key];
    } else {
        listCardsOpt4[key].quantity = quantity;
        listCardsOpt4[key].price = quantity * products[key].price;
    }
    reloadCard()
}
function changeQuantity6(key, quantity) {
    if (quantity == 0) {
        delete listCardsOpt5[key];
    } else {
        listCardsOpt5[key].quantity = quantity;
        listCardsOpt5[key].price = quantity * products[key].price;
    }
    reloadCard()
}
function changeQuantity7(key, quantity) {
    if (quantity == 0) {
        delete listCardsOffers[key];
    } else {
        listCardsOffers[key].quantity = quantity;
        listCardsOffers[key].price = quantity * products[key].price;
    }
    reloadCard()
}