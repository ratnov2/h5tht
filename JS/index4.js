let accommodationContent = document.querySelector('.accommodation_content');
let jsNoDisplay = document.querySelectorAll('.jsNoDisplay');
let headerTableOfContents = document.querySelector('.header_table_of_contents');
let glass2 = document.querySelectorAll('.glass2');
let glass2_2 = document.querySelectorAll('.glass2_2');
let headerFixed = document.querySelector('.header');
let pobAccommodation = document.querySelectorAll('.pob_accommodation');

window.addEventListener('scroll', () => {
  //console.log(document.body.scrollTop());
  if (window.pageYOffset > 20) {
    headerFixed.classList.add('fixed');
    document.body.style.marginTop = "194px";
  } else {
    headerFixed.classList.remove('fixed');
    document.body.style.marginTop = "0";
  }
});

for (let i = 5; i < 9; i++) {
  glass2[i].addEventListener('click', () => {
    let j = i;
    for (let i = 0; i < 3; i++) {
      pobAccommodation[i].style.color = '#727BBA';
    }
    for (let g of jsNoDisplay) {
      g.style.display = 'none';
      pobAccommodation[i - 6].style.color = 'rgb(105, 60, 28)';
    }
    jsNoDisplay[j - 6].style.display = 'flex';
    console.log(i);
    // funcglass2);
  })
};
for (let i = 0; i < 3; i++) {
  glass2_2[i].addEventListener('click', () => {
    let j = i;
    for (let i = 0; i < 3; i++) {
      pobAccommodation[i].style.color = '#727BBA';
    }
    for (let g of jsNoDisplay) {
      g.style.display = 'none';
    }
    pobAccommodation[i].style.color = 'rgb(105, 60, 28)';
    jsNoDisplay[j].style.display = 'flex';
    console.log(i);
    // funcglass2);
  })
};
// function funcglass2() {
//   for (let i of jsNoDisplay) {
//     i.style.display = 'none';
//   }
//   this.display = 'flex';
// }

// headerTableOfContents.addEventListener('click', () => {
//   for (let i = 0; i < 3; i++) {
//     jsNoDisplay[i].style.display = 'none';
//   }
//   if (window.location.hash == '#hotel') {
//     jsNoDisplay[0].style.display = 'flex';
//   }
//   if (window.location.hash == '#gost_house') {
//     jsNoDisplay[1].style.display = 'flex';
//   }
//   if (window.location.hash == '#kemp') {
//     jsNoDisplay[2].style.display = 'flex';
//   }
//   console.log('grgr');

// })
if (window.location.hash == '#hotel') {
  jsNoDisplay[0].style.display = 'flex';
  pobAccommodation[0].style.color = 'rgb(105, 60, 28)';
}
if (window.location.hash == '#gost_house') {
  jsNoDisplay[1].style.display = 'flex';
  pobAccommodation[1].style.color = 'rgb(105, 60, 28)';
}
if (window.location.hash == '#kemp') {
  jsNoDisplay[2].style.display = 'flex';
  pobAccommodation[2].style.color = 'rgb(105, 60, 28)';
}
console.log(window.location.hash);
