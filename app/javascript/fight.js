function fightSelect() {

  const SelectUser1 = document.getElementById("select-user1")
  const SelectUser2 = document.getElementById("select-user2")
  const fightAction = document.getElementById("action")
  const fightAttack = document.getElementById("attack")
  const fightDefence = document.getElementById("defence")
  const fightEscape = document.getElementById("escape")
  const fightReset = document.getElementById("reset")
  const currentList = document.getElementById("current-list")
  const currentListUser = document.getElementById("current-list-user")
  const user1Hp = document.getElementById("user1-hp")
  const user2Hp = document.getElementById("user2-hp")

  fightAction.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#FFBEDA;")
  })

  fightAction.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:#FFBEDA;")
  })

  fightAction.addEventListener('click', function() {

    /* User1の戦闘処理 */
    if (currentList.innerHTML == fightAttack.innerHTML && currentListUser.innerHTML == SelectUser1.innerHTML) {
      user1Hp.value = Math.floor(parseInt(user1Hp.value) - 10);
      infoMessage.innerHTML = currentListUser.innerHTML + "は攻撃を受けた"
    }
    else if (currentList.innerHTML == fightDefence.innerHTML  && currentListUser.innerHTML == SelectUser1.innerHTML) {
      user1Hp.value = Math.floor(parseInt(user1Hp.value) + 5);
      infoMessage.innerHTML = currentListUser.innerHTML + "は防御した"
    }
    else if (currentList.innerHTML == fightEscape.innerHTML  && currentListUser.innerHTML == SelectUser1.innerHTML) {
      user1Hp.value = Math.floor(parseInt(user1Hp.value) + 10);
      infoMessage.innerHTML = currentListUser.innerHTML + "は回避した"
    }
    else if(currentList.value == fightReset.innerHTML  && currentListUser.value == SelectUser1.innerHTML) {
      user1Hp.value = 100;
      infoMessage.innerHTML = "戦闘が終了した"
    }
    else {
    }

    if (user1Hp.value > 100) {
      user1Hp.value = 100;
    }

    if (user1Hp.value < 0) {
      user1Hp.value = 0;
    }

    /* User2の戦闘処理 */
    if (currentList.innerHTML == fightAttack.innerHTML && currentListUser.innerHTML == SelectUser2.innerHTML) {
      user2Hp.value = Math.floor(parseInt(user2Hp.value) - 10);
      infoMessage.innerHTML = currentListUser.innerHTML + "は攻撃を受けた"
    }
    else if (currentList.innerHTML == fightDefence.innerHTML  && currentListUser.innerHTML == SelectUser2.innerHTML) {
      user2Hp.value = Math.floor(parseInt(user2Hp.value) + 5);
      infoMessage.innerHTML = currentListUser.innerHTML + "は防御した"
    }
    else if (currentList.innerHTML == fightEscape.innerHTML  && currentListUser.innerHTML == SelectUser2.innerHTML) {
      user2Hp.value = Math.floor(parseInt(user2Hp.value) + 10);
      infoMessage.innerHTML = currentListUser.innerHTML + "は回避した"
    }
    else if(currentList.value == fightReset.innerHTML  && currentListUser.value == SelectUser2.innerHTML) {
      user2Hp.value = 100;
      infoMessage.innerHTML = "戦闘が終了した"
    }
    else {
    }

    if (user2Hp.value > 100) {
      user2Hp.value = 100;
    }

    if (user2Hp.value < 0) {
      user2Hp.value = 0;
    }

  })

  infoMessage.addEventListener('click', function() {
    infoMessage.innerHTML = ""
  })

}

window.addEventListener('load', fightSelect)