// 'use strict'

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
// let i=0
// const btns = document.querySelectorAll('.btn')
// const addElement=(event)=>{
//     i++
//     console.log(i)
// }
// btns.forEach((item)=> {
// item.addEventListener('click',addElement)
// })
//    event.target.remove() // shu elementi o'chiradi
//    target bu aynan o'sha elemntni qaytaradi

// console.log(document.body.childNodes)
// console.log(document.body.firstChild);
// console.log(document.querySelector('.btn').nextElementSibling);
/* <script defer scr></script> defer bu daslab dom ishledi keyin jslar ishledi */
/* <script async scr></script> async jslani hajmiga qarab ishga tushadi */
// function name1() {
//     console.log('Birinchi breakpoint');
// }
// name1()
// function name2() {
//     console.log('Ikkinchi breakpoint');
// }
// name2()

// const btns=document.querySelectorAll('button')

// btns.forEach((item,idx,btns)=>{
//     item.addEventListener('click',()=>{
// if (item.classList.contains('btn-info')) { //contains bu agar mavjud bo'lsa true qaytadi
// item.classList.remove('btn-info')
// item.classList.add('btn-success')
// }
// else {
// item.classList.remove('btn-success')
// item.classList.add('btn-info')
// }
// item.classList.toggle('btn-info') // true bo'lsa false qiladi false bo'lsa true qiladi
//     })

// })
// const wrapper=document.querySelector('.wrapper')
// wrapper.addEventListener('click',(event)=>{
//     if (event.target && event.target.classList.contains('btn-danger')) {
//     console.log(event.target);
//     }
// })
// const btn=document.createElement('button')
// btn.classList.add('btn')
// btn.classList.add('btn-danger')
// wrapper.append(btn)

// event.target.matches('button.btn-danger') bu o'xshashlik bo'lsa degani
// function Car(name){
// this.name=name
// }
// const bmw =new Car('BMW')
// console.log(bmw);
window.addEventListener("DOMContentLoaded", () => {
// function qosh(a,b) {
//     this.a=a
//     this.b=b
//     function summ() {
//         return this.a+this.b
//     }
//     console.log(summ());
// }
// qosh(2,3)
// function logger(z) {
//     this.z=z
//     console.log(this);
// }
// const obj={
//     x:15,
//     y:23,
//     z:24,
// }
// function qosh(num){
//     return this*num
// }
// const logg=qosh.bind(2)
// console.log(logg(20))
// logger.call(obj,200)
// logger.apply(obj,[200])
//apply, call // bu funcsiyani oyektga qaram qilib qo'yadi
// class Car{
//     constructor(type_divigatel){
//         this.type_divigatel=type_divigatel
//     }
// }
// class Gm extends Car{
//     constructor(type_divigatel,type){
//         super(type_divigatel,type)
//         this.type=type
//     }
// }
// const spark=new Gm('gibrid emas','spark')
// console.log(spark)

// function logger(a,b,...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// logger(1,2,3,3,4,5)
// const car={
//     name:'Spark',
//     type_mator:1.25
// }
// const objToJson=JSON.stringify(car)
// const jsonToObj=JSON.parse(objToJson)
// console.log(objToJson);
// console.log(jsonToObj);

// const clone=JSON.parse(JSON.stringify(car)) bu obj dan clone olish deyiladi
const item_name=document.querySelector('#item_name')
const item_phone=document.querySelector('#item_phone')
item_name.addEventListener('input',(e)=>{
    const request=new XMLHttpRequest()
    request.open('GET','json/current.json') //readyState =1
    request.setRequestHeader('Content-Type','application/json; charset=utf-8') ////readyState =2
    request.send() // readyState =3
    // request.response 
    request.addEventListener('readystatechange',()=>{
        if (request.readyState==4 && request.status==200) {
            console.log(request.response);
        }
    })
   })
})