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
  const infoMessage = document.getElementById("fight-log-message")

  fightAction.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#ffb6c1")
  })

  fightAction.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:#ffb6c1")
  })

  fightAction.addEventListener('click', function() {

    //関数の定義
    const reset = function(){
      if (user1Hp.value > 100) {
        user1Hp.value = 100;
      }
      else if (user1Hp.value < 0) {
        user1Hp.value = 0;
      }
    }

    /* User1の戦闘処理 */
    if (currentList.innerHTML == fightAttack.innerHTML && currentListUser.innerHTML == SelectUser1.innerHTML) {
      user1Hp.value = Math.floor(parseInt(user1Hp.value) - 10);
      reset();
      infoMessage.insertAdjacentHTML('afterbegin', currentListUser.innerHTML + "は攻撃を受けた");
    }
    else if (currentList.innerHTML == fightDefence.innerHTML  && currentListUser.innerHTML == SelectUser1.innerHTML) {
      user1Hp.value = Math.floor(parseInt(user1Hp.value) + 5);
      reset();
      infoMessage.innerHTML = currentListUser.innerHTML + "は防御した"
    }
    else if (currentList.innerHTML == fightEscape.innerHTML  && currentListUser.innerHTML == SelectUser1.innerHTML) {
      user1Hp.value = Math.floor(parseInt(user1Hp.value) + 10);
      reset();
      infoMessage.innerHTML = currentListUser.innerHTML + "は回避した"
    }
    else {
      return 0;
    }

    /*else if(currentList.value == fightReset.innerHTML  && currentListUser.value == SelectUser1.innerHTML) {
      user1Hp.value = 100;
      infoMessage.innerHTML = "戦闘が終了した"
    }*/

    /* User2の戦闘処理 */
    if (currentList.innerHTML == fightAttack.innerHTML && currentListUser.innerHTML == SelectUser2.innerHTML) {
      user2Hp.value = Math.floor(parseInt(user2Hp.value) - 10);
      reset();
      infoMessage.innerHTML = currentListUser.innerHTML + "は攻撃を受けた"
    }
    else if (currentList.innerHTML == fightDefence.innerHTML  && currentListUser.innerHTML == SelectUser2.innerHTML) {
      user2Hp.value = Math.floor(parseInt(user2Hp.value) + 5);
      reset();
      infoMessage.innerHTML = currentListUser.innerHTML + "は防御した"
    }
    else if (currentList.innerHTML == fightEscape.innerHTML  && currentListUser.innerHTML == SelectUser2.innerHTML) {
      user2Hp.value = Math.floor(parseInt(user2Hp.value) + 10);
      reset();
      infoMessage.innerHTML = currentListUser.innerHTML + "は回避した"
    }
    else if(currentList.value == fightReset.innerHTML  && currentListUser.value == SelectUser2.innerHTML) {
      user2Hp.value = 100;
      infoMessage.innerHTML = "戦闘が終了した"
    }
    else {
      return 0;
    }

  })
}

window.addEventListener('load', fightSelect)