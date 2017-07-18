let resultsDisplay = document.querySelector('.results')
let searchResults = document.querySelector('#search')
let go = document.querySelector('button')
let capture = ''

let url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q='

go.addEventListener('click', () => {
  capture = searchResults.value
  console.log(capture)
  url += capture

  fetch(url).then(response => response.json()).then(data => {
    console.log(url)
    console.log(data)
    for (var i = 0; i < data.results.length; i++) {
      let newli = document.createElement('li')

      let text = document.createElement('h3')
      text.textContent = data.results[i].title
      newli.appendChild(text)

      let image = document.createElement('img')
      if (data.results[i].thumbnail === '') {
        image.setAttribute('src', 'http://via.placeholder.com/200x200')
      } else {
        image.src = data.results[i].thumbnail
      }
      newli.appendChild(image)

      let hacheref = document.createElement('a')
      hacheref.href = data.results[i].href
      hacheref.innerText = 'Recipe'
      newli.appendChild(hacheref)

      resultsDisplay.appendChild(newli)
    }
  })
})
