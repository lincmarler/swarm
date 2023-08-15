const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]



function drawPeople() {
    locations.forEach((location) => {
        console.log(location)
        let inLocation = people.filter((people) => people.location == location)
        let peopleEmoji = inLocation.map((people) => people.picture)
        console.log(peopleEmoji)
        document.getElementById(location).innerText = peopleEmoji.join(', ')
    })
}



function bitePeople(location) {
    console.log(location, 'bite people');
    let inLocation = people.filter((people) => people.location == location)
    inLocation.map((people) => people.picture = '🦇')
    console.log(inLocation)
    runAway()
    drawPeople()
    Victory()
}

function Victory() {
    let dead = people.filter(people => people.picture == '🦇')
    if (dead.length == people.length) {
        window.alert("You Win")
    }
}

function runAway() {
    people.forEach(person => {
        if (person.picture != '🦇') {
            let randomIndex = Math.floor(Math.random() * locations.length)
            person.location = locations[randomIndex]
        }
    })
}

function sunRise() {
    let hoursLeft = 7

}






drawPeople()
