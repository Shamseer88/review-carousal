const reviews = [
    {
        id: 1,
        name: 'Manchester United',
        job: 'England',
        img: 'mu.png',
        info:'Manchester United is one of the most iconic and successful football clubs in the world, based in Manchester, England. With a rich history and a passionate global fan base, they have won numerous domestic and international titles, solidifying their status as a powerhouse in the footballing world.'
    },
    {
        id: 2,
        name: 'Barcelona',
        job: 'Spain',
        img: 'barsa.png',
        info:'FC Barcelona, founded in 1899, is a renowned football club based in Barcelona, Spain, known for its successful history and distinctive playing style. The team plays their home matches at the iconic Camp Nou stadium.'
    },
    {
        id: 3,
        name: 'Bayern Munich',
        job: 'Germany',
        img: 'bayern.png',
        info:'FC Bayern Munich, commonly known as Bayern Munich or simply Bayern, is a prominent professional football club based in Munich, Germany. Founded in 1900, the club is one of the most successful in German and European football history, having won numerous domestic league titles and European trophies, including the UEFA Champions League.'
    },
    {
        id: 4,
        name: 'A C Milan',
        job: 'Italy',
        img: 'ac-milan.jpg',
        info:"Throughout its existence, AC Milan has garnered an impressive collection of domestic and international titles, including numerous Serie A (Italian top-flight) championships, Coppa Italia triumphs, and UEFA Champions League victories. The club's seven Champions League titles underline its dominance in European football, leaving an indelible mark on the sport's history."
    }
];

let currItem = 0;

const img = document.querySelector('.person-img');
const title = document.querySelector('.title');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currItem);
})

function showPerson(person) {
    let item = reviews[person];
    img.setAttribute('src', item.img);
    title.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

document.querySelector('.next-btn').addEventListener('click', function() {
    currItem++;
    console.log(currItem)
    if (currItem > reviews.length - 1) {
        currItem = 0;
    }
    showPerson(currItem);
})

document.querySelector('.prev-btn').addEventListener('click', function() {
    currItem--;
    if (currItem < 0) {
        currItem = reviews.length - 1;
    }
    showPerson(currItem);
})

// Random Review
document.querySelector('.random-btn').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    showPerson(randomNumber);
})