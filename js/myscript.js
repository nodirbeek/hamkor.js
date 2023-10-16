'use strict'
// const ism =prompt('Ismiz nima ?');
// const fam =prompt('Familyangiz nima ?');
// console.log(`${ism} ${fam}`);


// const ism =`Nodibek`;
// const fam ="G'ulomov";
// console.log(`${ism} ${fam}`);

// let a=10;
// let b=10;

// console.log(++a);
// console.log(--b);
// logger("salom");

// function logger (params) {
//     console.log(params);
// }

// logger=function (params) {
//     console.log(params);
// }
// logger("salomw");

// const logger = (params)=> {
//     console.log(params);
// }
// logger("salom");
// const text='Nodirbek';
// console.log(text.langth);
// const text='Nodirbek';
// console.log(text.indexOf("e")); // N nechanchi o'rinda turgani
// -1 bu falseni ham beradi

// const hello="Hello world !!!";
// console.log(hello.slice(0,5));
// console.log(hello.slice(-6,-1)); //minus qiymatni qabul qiladi
//slice bu matinni qirqadi
//substring bu matinni qirqadi minusni qabul qilmaydi

// console.log(hello.substr(6,4)); 6dan keyin 4 ta element chiqar
// parseInt('13.3px') bu 13ni oladi
// parseFloat('13.3px') bu 13.3ni oladi

// delete odam.boy; // boyni oyecktdan o'chiradi;
// Object.keys(odam) faqat uzunligini oladi

// for (let key in odam){
//     if(typeof odam[key] == 'object'){
// for (let i in odam[key]){
// console.log(`Odam key= ${key} va value=${odam[key][i]}`);
//         }
//     }
//     else{
// console.log(`Odam key= ${key} va value=${odam[key]}`);
//     }
// }
// odam.kasbi('dasturchi');
// const odam = {
//     soch:{
//         rang:{
//             kod:'#ddd',
//             nomi:'qora'
//         },
//         leng:'kalta'
//     },
//     boy:'uzun',
//     kasbi:function (params) {
//         console.log(`uning kasbi: ${params}`);
//     }
// }

// const {kod,nomi}=odam.soch.rang; Destruptizatsiya
// console.log(kod);
// console.log(nomi);

// // massiv
// const arr=[1,21,13,4,5,6];
// // arr[10]=10;
//  console.log(arr.sort());

// arr.pop() oxiridan o'chiradi
// arr.push(7) ; oxiriga qoshadi
// arr.shift(); boshidan 0 elementni ochiradi
// arr.unshift(); boshiga element qoshadi
// for (const val of arr) {
// console.log(val);
// }
//split bu stringni massivga aylantiradi
// text.split(',');
// arr.forEach(function (item,index,arr) {
//     console.log(`item : ${item} , index: ${index}, arr: ${arr}`)
// });
// const odam = {
//     soch:{
//         rang:{
//             kod:'#ddd',
//             nomi:'qora'
//         },
//         leng:'kalta'
//     },
//     boy:'kalta',
// }
// const newOdam=Object.assign({},odam) // clon oladi faqat birinchi elementdan
// odam.soch.rang.nomi='oq'
// newOdam.boy='uzun'
// // slice bu ham massivdan clon oladi
// console.log(typeof String(4))

// btn.onclick=()=>{
//     alert('aas')
// } bunda bitta xodisa yoziladi sababi eng oxirgisini qabul qiladi

// btn.addEventListener('click',()=>{
//     alert('asas')
// })
// }bunda barcha xodilasalarni ishlatadi
let i=0
const btns = document.querySelectorAll('.btn')
const addElement=(event)=>{
    i++
    console.log(i)
}
btns.forEach((item)=> {
item.addEventListener('click',addElement)
})
//    event.target.remove() // shu elementi o'chiradi
//    target bu aynan o'sha elemntni qaytaradi