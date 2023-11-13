window.addEventListener("DOMContentLoaded", () => {
  const tabParent = document.querySelector(".tabheader__items");
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabContent = document.querySelectorAll(".tabcontent");
  const loader = document.querySelector(".loader");
//   loader begin
setTimeout(() => {
    loader.style.opacity=0
    setTimeout(() => {
    loader.style.display='none'
}, 500)
}, 1000)
//   loader end
  function hideTabContent() {
    tabContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show','fade')
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].classList.add('show','fade')
    tabContent[i].classList.remove('hide')
    tabs[i].classList.add("tabheader__item_active");
  }
   hideTabContent();
   showTabContent();

  tabParent.addEventListener('click',(event)=>{
    const target = event.target
    if(target && target.classList.contains('tabheader__item')){
      tabs.forEach((item,idx)=>{
           if (target==item) {
        hideTabContent();
        showTabContent(idx);
       }
      })
    }
  })

// Time
 // Timer

  const deadline = '2023-12-31'

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds
    const timer = Date.parse(endtime) - Date.parse(new Date())

    if (timer <= 0) {
      days = 0
      hours = 0
      minutes = 0
      seconds = 0
    } else {
      days = Math.floor(timer / (1000 * 60 * 60 * 24))
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
      minutes = Math.floor((timer / 1000 / 60) % 60)
      seconds = Math.floor((timer / 1000) % 60)
    }

    return { timer, days, hours, minutes, seconds }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updatClock, 1000)

    updatClock()

    function updatClock() {
      const t = getTimeRemaining(endtime)
      days.innerHTML = getZero(t.days)
      hours.innerHTML = getZero(t.hours)
      minutes.innerHTML = getZero(t.minutes)
      seconds.innerHTML = getZero(t.seconds)

      if (t.timer <= 0) {
        clearInterval(timeInterval)
      }
    }
  }
setClock('.timer', deadline)

// modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal=document.querySelector('.modal'),
        modalCloseBtn=document.querySelector('[data-close]')
function openModal() {
modal.classList.add('show')
modal.classList.remove('hide')
document.body.style.overflow='hidden'
clearTimeout(modalTimerId)
}
modalTrigger.forEach((item) => {
item.addEventListener('click',openModal)
});
function  closeModal() {
modal.classList.add('hide')
modal.classList.remove('show')
document.body.style.overflow=''  
}
modalCloseBtn.addEventListener('click',closeModal)

modal.addEventListener('click',(event)=>{
    const target = event.target
    if(target && target.classList.contains('modal')){
      closeModal()
    }
})
document.addEventListener('keydown',(event)=>{
    if(event.code==='Escape'&& event.classList.contains('show')){
        closeModal()
    }
})
const modalTimerId=setTimeout(openModal, 3000);


function showModelByScroll() {
 if (
    window.pageYOffset+document.documentElement.clientHeight >= document.
    documentElement.scrollHeight
    ) {
    openModal()
    window.removeEventListener('scroll',showModelByScroll)
}
}
window.addEventListener('scroll',showModelByScroll)


// class

class MenuCard {
  constructor(src,alt,title,desp,transfer,price,parentDiv, ...classes){
    this.src=src
    this.alt=alt
    this.title=title
    this.desp=desp
    this.transfer=transfer
    this.price=price
    this.classes=classes
    this.parentDiv=document.querySelector(parentDiv)
    this.transPrice()
  }
transPrice(){
    this.price=this.transfer*this.price
  }
render() {
    const element = document.createElement('div')
    if(this.classes.length===0){
    this.element='menu__item'
    element.classList.add(this.element)
    }
    else{
       this.classes.forEach((classname)=>element.classList.add(classname))
    }
   
    element.innerHTML=`
                    <img src=${this.src} alt=${this.alt} />
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desp}
                    </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Price:</div>
                        <div class="menu__item-total"><span>${this.price}</span> UZS month</div>
                    </div>
    `
    this.parentDiv.append(element)
  }
}
new MenuCard(
"img/tabs/1.png",
"vegy",
'Plan "Usual"',
' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
1225,
10,
'.menu .container',
'menu__item'
).render()

new MenuCard(
"img/tabs/2.jpg",
"elite",
'Plan “Premium”',
' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
1225,
25,
'.menu .container',
'menu__item'
).render()

new MenuCard(
"img/tabs/3.jpg",
"post",
'Plan "VIP"',
' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
1225,
30,
'.menu .container',
'menu__item'
).render()



})
