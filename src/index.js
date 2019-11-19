import './normal.less'
import './style.css'

var add = (x, y) => {
  return new Promise(function (resolve, reject) {
    resolve(x + y)
  })
}

add(1, 1).then(function (res) {
  return console.log(res)
})

function component () {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())
