// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//selecionar todos os elementos que iram mudar
const author = document.getElementById('author')
const job = document.getElementById('job')
const img = document.getElementById('person-img')
const info = document.getElementById('info')

//selecionar os elementos que iram ter A AÇÃO
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 3
window.addEventListener('DOMContentLoaded', ()=>{
 const item = reviews[currentItem]
 img.src = item.img 
 author.textContent = item.name
 job.textContent = item.job
 info.textContent = item.text
 
})

































// let variavel1 = "variavel global"

// {
//   let variavel2 = "variavel local"
//   console.log(variavel1)
//   console.log(variavel2)
// }
// console.log(variavel1) 
// console.log(variavel2) 


// let idade = 18

// if(18 === '18' || 15 == 15){
//   console.log('bloco 01')
// }else if(5 >= 5 && 6<=6){
//   console.log('bloco 02')
// }else{
//   console.log('bloco 03')
// }


// for(let i = 1; i<= 10; i++){
//   console.log(i)
// }
// console.log(i)








