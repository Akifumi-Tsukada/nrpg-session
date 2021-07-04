function pullDown() {

  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")
  const pullDownChild = document.querySelectorAll(".pull-down-list")
  const currentList = document.getElementById("current-list")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#ffb6c1")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:#ffb6c1")
  })

  pullDownButton.addEventListener('click', function() {
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
    }
  })

  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.value
      const text = list.innerHTML
      currentList.value = value
      currentList.innerHTML = text
      pullDownParents.removeAttribute("style", "display:block;")
    })
  })

}

function currentPullDownUser() {

  const pullDownButton = document.getElementById("lists-current-user")
  const pullDownParents = document.getElementById("pull-down-current-user")
  const pullDownChild = document.querySelectorAll(".pull-down-current-user")
  const currentList = document.getElementById("current-select-user")
  const yourUser = document.getElementById("your-user")
  const yourUserChat = document.getElementById("your-user-chat")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#ffb6c1")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:#ffb6c1")
  })

  pullDownButton.addEventListener('click', function() {
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
    }
  })

  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.value
      const text = list.innerHTML
      currentList.value = value
      currentList.innerHTML = text
      yourUser.innerHTML = text
      yourUserChat.innerHTML = text
      pullDownParents.removeAttribute("style", "display:block;")
    })
  })
}

function pullDownUser() {

  const pullDownButton = document.getElementById("lists-user")
  const pullDownParents = document.getElementById("pull-down-user")
  const pullDownChild = document.querySelectorAll(".pull-down-list-user")
  const currentList = document.getElementById("current-list-user")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#ffb6c1")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:#ffb6c1")
  })

  pullDownButton.addEventListener('click', function() {
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
    }
  })

  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.value
      const text = list.innerHTML
      currentList.value = value
      currentList.innerHTML = text
      pullDownParents.removeAttribute("style", "display:block;")
    })
  })
}

window.addEventListener('load', pullDown)
window.addEventListener('load', currentPullDownUser)
window.addEventListener('load', pullDownUser)
