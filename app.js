const sun = document.querySelector('#sun')

//const sunX ,sunY gunesi X ve Y oxu uzre merkezde yerlesdirir.
const sunX = 850
const sunY = 380


const px = (n) => n  + 'px' //bu kod ile px tapiriq.
const rad = (deg,speed) => deg * speed / 180 //bu kod ile radian olcusunu tapiriq.

sun.style.left = px(sunX) //bu kod ile gunesi x oxu uzre soldan merkeze dogru iteleyir. 
sun.style.top = px(sunY) //bu kod ile gunesi topdan asagiya dogru iteleyir.

//setPlanet adinda bir funksiya yaradiriq bu funksiya ile planetler gunes etrafinda hereket edir.
function setPlanet(id,radius,speed,startDeg = 0,direction = 'noclock'){ //funksiya icinde vrilen parametrlere gore planetin id-si,radiusu,sureti,baslangic derecesi ve saat eksi istiqametinde firlanir.
    let deg = startDeg
    const planet = document.querySelector('#'+id)//('#'+id) her bir planeti oz id-sini bildirir.
    const increment = direction == 'noclock' ? -1 : 1//planetlerin istiqameti saatin eksi istiqametindedise ternary operatoru istifade edirik -1 elave edir deyilse 1.

    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg,speed))//bu kodda planetin X oxu uzre gunes etrafinda hansi derece ve suretde firlanmasini hesablayir.
        const y = sunY + radius * Math.sin(rad(deg,speed))//bu kodda planetin Y oxu uzre gunes etrafinda hansi derece ve suretde firlanmasini hesablayir.
        planet.style.left = px(x)//bu kodda ise yuxardaki hesablamadan alinan neticeni style tetbiq edir
        planet.style.top = px(y)
        deg += increment//increment deyerlerini deg uzerine gelir
    }, 10);
}


function setSatellite(id,planetId,radius,speed,startDeg = 0,direction = 'noclock'){ //funksiya icinde vrilen parametrlere gore planetin id-si,radiusu,sureti ve saat eksi istiqametinde firlanir.
    let deg = startDeg
    const satellite = document.querySelector('#' + id)
    const increment = direction == 'noclock' ? -1 : 1
    const planet = document.querySelector('#'+planetId)

    setInterval(() => {
        const planetX = Number(planet.style.left.slice(0, -2))
        const planetY = Number(planet.style.top.slice(0, -2))
        const x = planetX + radius * Math.cos(rad(deg,speed))
        const y = planetY + radius * Math.sin(rad(deg,speed))
        satellite.style.left = px(x)
        satellite.style.top = px(y)
        deg += increment
    }, 10);
}

//burda funksiyani asagida cagirib planetlerin deyerlerini daxil edirik 
setPlanet('earth',210,2,200)
setPlanet('mercury',100,5,100)
setPlanet('venera',150,4,150)
setPlanet('mars',250,2.8,320)
setPlanet('jupiter',320,2.4,210)
setPlanet('saturn',370,2.2,120)
setPlanet('uran',410,2,180)
setPlanet('neptun',450,1.8,240)
setSatellite('moon','earth',25,10)

screenWidth = window.innerWidth -10;//bu kodda ulduzlarin ekranda hansi width yerlesmesi teyin edilir
screenHeight = window.innerHeight -10;

for(let i = 0; i<1000; i++){//bu kodda ulduzlari for salib 1000 dene ulduz veririk
    const star = document.createElement('div')//div tag yaradirig
    star.classList.add('star')//daha sonra star class yaradiriq
    const x = Math.round(Math.random() * screenWidth)//bu kodda ulduzlarin  random sekilde X oxu uzre yerlesmesi hesablanir.
    const y = Math.round(Math.random() * screenHeight)//bu kodda ulduzlarin height random sekilde Y oxu uzre yerlesmesi hesablanir.
    const delay = Math.round(Math.random() * 200) / 100//random sekilde mueyyen zaman erzinde yanib sonmesini teyin edirik
    const size = Math.floor(1 + Math.random() * 4)//random sekilde olcusu teyin olunur
    star.style.left = px(x)//bu kodda ise yuxarida hesablanmis left den mesafe style tetbiq edilir
    star.style.top = px(y)//bu kodda ise yuxarida hesablanmis top dan mesafe  style tetbiq edilir
    star.style.width = px(size)//bu kodda random sekilde alinmis width olcusu style tetbiq edilir
    star.style.height = px(size)//bu kodda random sekilde alinmis height olcusu style tetbiq edilir
    star.style.animationDelay = delay + 's'//ulduzlarin mueyyen saniye erzinde yanib sonmesi bildirir
    document.body.append(star)//daha sonra bu ulduzlari background elave edir
}
//meteor 3 saniye erzinde kecmesi gosterirlir.
setTimeout(() => {
    const meteor = document.querySelector('.meteor')
    meteor.classList.add('meteor-action')
}, 3000);



// const sun = document.querySelector('#sun')

// const sunX = 920
// const sunY = 450

// const px = (n) => n + 'px'
// const rad = (deg, speed) => deg * speed / 180

// sun.style.left = px(sunX)
// sun.style.top = px(sunY)


// function setPlanet(id, radius, speed, startDeg=0, direction='noclock') {
//     let deg = startDeg
//     const planet = document.querySelector('#' + id)
//     const increment = direction == 'noclock' ? -1 : 1
//     setInterval(() => {
//         const x = sunX + radius * Math.cos(rad(deg, speed))
//         const y = sunY + radius * Math.sin(rad(deg, speed))
//         planet.style.left = px(x)
//         planet.style.top = px(y)
//         deg += increment
//     }, 20);
// }

// function setSatellite(id, planetId, radius, speed, startDeg=0, direction='noclock') {
//     let deg = startDeg
//     const satellite = document.querySelector('#' + id)
//     const increment = direction == 'noclock' ? -1 : 1
//     const planet = document.querySelector('#' + planetId)
//     setInterval(() => {
//         const planetX = Number(planet.style.left.slice(0, -2))
//         const planetY = Number(planet.style.top.slice(0, -2))
//         const x = planetX + radius * Math.cos(rad(deg, speed))
//         const y = planetY + radius * Math.sin(rad(deg, speed))
//         satellite.style.left = px(x)
//         satellite.style.top = px(y)
//         deg += increment
//     }, 20);
// }

// setPlanet('earth', 210, 3, 200)
// setPlanet('mercury', 100, 5, 100)
// setPlanet('venera', 150, 4, 150)
// setPlanet('mars', 250, 2.8, 320)
// setPlanet('jupiter', 320, 2.4, 210)
// setPlanet('saturn', 370, 2.2, 120)
// setPlanet('uran', 410, 2, 180)
// setPlanet('neptun', 450, 1.8, 240)
// setSatellite('moon', 'earth', 25, 10)



// screenWidth = window.innerWidth - 10;
// screenHeight = window.innerHeight - 10;


// for (let i=0; i < 50; i++) {
//     const star = document.createElement('div')
//     star.classList.add('star')
//     const x = Math.round(Math.random() * screenWidth)
//     const y = Math.round(Math.random() * screenHeight)
//     const delay = Math.round(Math.random() * 200) / 100
//     const size = Math.floor(1 + Math.random() * 4)

//     star.style.left = px(x)
//     star.style.top = px(y)
//     star.style.width = px(size)
//     star.style.height = px(size)
//     star.style.animationDelay = delay + 's'
//     document.body.append(star)
// }



// setTimeout(() => {
//     const meteor = document.querySelector('.meteor')
//     meteor.classList.add('meteor-action')
// }, 3000);


