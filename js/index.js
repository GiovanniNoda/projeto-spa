const appClass = document.getElementById('app')
const main = document.getElementById('main')

const routes = {
    "/": "/pages/home.html",
    "/universe": "/pages/universe.html",
    "/explorer": "/pages/explorer.html"
}

// Função para remover todas as classes de um elemento
function removeAllClasses(element1, element2) {
    element1.className = ''
    element2.className = ''
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

window.route = () => route()

function handle() {
    const { pathname } = window.location
    const route = routes[pathname]

    fetch(route).then(data => data.text()).then(html => {
        document.getElementById('main').innerHTML = html
        console.log(route)
        if(route == "/pages/universe.html") {
            removeAllClasses(appClass, main)
            appClass.classList.add('img2')
            main.classList.add('universe')
        } 
        else if (route == "/pages/explorer.html") {
            removeAllClasses(appClass, main)
            appClass.classList.add('img3')
            main.classList.add('explorer')
        } else {
            removeAllClasses(appClass, main) 
            appClass.classList.add('img1')
            main.classList.add('home')
        }
    })
}

function clickButton() {
    window.history.pushState({}, "", "/universe");

    handle()
}

window.clickButton = () => clickButton()

handle()
