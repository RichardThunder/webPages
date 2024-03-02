/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-02-24 18:14:46
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-03-01 16:27:52
 * @FilePath: /webPages/basic/13-Advanced-DOM-Bankist/starter/script.js
 * @Description:
 *
 */
'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector(
  '.btn--close-modal'
);
const btnsOpenModal = document.querySelectorAll(
  '.btn--show-modal'
);
//tabs content
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector(
  '.operations__tab-container'
);
const tabsContent = document.querySelectorAll(
  '.operations__content'
);
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    !modal.classList.contains('hidden')
  ) {
    closeModal();
  }
});

// //select elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

//querySelector()
//querySelectorAll()

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
//getElementById
// console.log(document.getElementById('section--1'));

//getElementsByTagName() 返回的是HTMLCollections, 会实时更新
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
//getElementsByClassName()
// console.log(document.getElementsByClassName('btn'));

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we use cookie to improved functionality and analytics.<button class="btn btn--close-cookie">got it</button>';

//##### 插入元素 #####
// 插入元素或 移动元素(因为dom中的同名对象只能有一个,所以重新插入会删除之前的元素)
// header.append(message);
// header.prepend(message);
// header.prepend(message);
//cloneNode(boolean) 复制一个元素,防止插入后,之前的元素被删除掉
//header.append(message.cloneNode(true));
header.append(message);
// header.after(message);

// ### 删除元素 ###
// remove();
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //旧式用法
    // message.parentElement.removeChild(message);
  });

//直接在DOM中添加inline内联样式
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) +
  40 +
  'px';
// console.log(message.style.height);

//scroll
const btnScrollTo = document.querySelector(
  '.btn--scroll-to'
);
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log('section1 coords', s1coords);

  console.log(
    'btn coords',
    e.target.getBoundingClientRect()
  );
  console.log(
    'current scroll (X/Y)',
    window.pageXOffset,
    window.pageYOffset
  );
  //   console.log(
  //     'height/width viewport',
  //     document.documentElement.clientHeight,
  //     document.documentElement.clientWidth
  //   );

  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: 'smooth',
  //   });
  section1.scrollIntoView({ behavior: 'smooth' });
});

//scrollIntiView()
//为section添加平滑移动 这样效率低
// document.querySelectorAll('.nav__link').forEach(nav =>
//   nav.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

document
  .querySelector('.nav__links')
  .addEventListener('click', function (e) {
    //   if (e.target.classList.contains('nav__link')) console.log(`click link`);
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document
      .querySelector(id)
      .scrollIntoView({ behavior: 'smooth' });
  });

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  //removed classes
  tabs.forEach(el =>
    el.classList.remove('operations__tab--active')
  );
  tabsContent.forEach(tc =>
    tc.classList.remove('operations__content--active')
  );
  //click actived
  clicked.classList.add('operations__tab--active');
  //content add
  document
    .querySelector(
      `.operations__content--${clicked.dataset.tab}`
    )
    .classList.add('operations__content--active');
});

//##### version1
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el != link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });
// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el != link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

//###### vsersion2
const handover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link
      .closest('.nav')
      .querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handover.bind(0.5));
nav.addEventListener('mouseout', handover.bind(1)); //隐式传递e

//scroll sticker
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   //console.log(window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
//##### 使用observer
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

//粘滞导航栏
const navHeight = nav.getBoundingClientRect().height;
const headerCallbackObs = function (entries, observer) {
  //   const [entry] = entries;
  entries.forEach(entry => {
    if (entry.isIntersecting)
      nav.classList.remove('sticky');
    else {
      nav.classList.add('sticky');
    }
  });
};
const headerObserver = new IntersectionObserver(
  headerCallbackObs,
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  }
);
headerObserver.observe(header);

//延迟显示文本
const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
};
const sectionObserver = new IntersectionObserver(
  revealSection,
  {
    root: null,
    threshold: 0.15,
  }
);
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //   section.classList.add('section--hidden');
});

//lazy-load img
const imgLazyLoad = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // const imgSrc = entry.target.dataset.src;
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
      });
      observer.unobserve(entry.target);
    }
  });
};
const imgTargets =
  document.querySelectorAll('img[data-src]');
const imgObserver = new IntersectionObserver(imgLazyLoad, {
  root: null,
  threshold: 0.2,
  rootMargin: '200px',
});
imgTargets.forEach(img => {
  imgObserver.observe(img);
});

//slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5) translateX(-600px)';
  // slider.style.overflow = 'visible';
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
  });

  let curSlide = 0;
  const slideNum = slides.length - 1;
  const dotContainer = document.querySelector('.dots');

  const createDots = () => {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDot = dot => {
    const dots = document.querySelectorAll('.dots__dot');
    dots.forEach((d, i) => {
      d.classList.remove('dots__dot--active');
    });
    document
      .querySelector(`.dots__dot[data-slide="${dot}"]`)
      .classList.add('dots__dot--active');
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = slides.length - 1;
      console.log(curSlide);
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const nextSlide = () => {
    if (curSlide === slides.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const goToSlide = slide => {
    slides.forEach((s, index) => {
      s.style.transform = `translateX(${
        100 * (index - slide)
      }%)`;
    });
  };

  document
    .querySelector('.slider__btn--right')
    .addEventListener('click', nextSlide);
  document
    .querySelector('.slider__btn--left')
    .addEventListener('click', prevSlide);
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const no = e.target.dataset.slide;
      goToSlide(no);
      activateDot(no);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
};
slider();

// document
//   .querySelector('.slider__btn--right')
//   .addEventListener('click', function (e) {
//     if (curSlide === slides.length - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     slides.forEach((slide, index) => {
//       slide.style.transform = `translateX(${
//         100 * (index - curSlide)
//       }%)`;
//     });
//   });
// document
//   .querySelector('.slider__btn--left')
//   .addEventListener('click', function (e) {
//     if (curSlide === 0) {
//       curSlide = slides.length - 1;
//       console.log(curSlide);
//     } else {
//       curSlide--;
//     }
//     slides.forEach((slide, index) => {
//       slide.style.transform = `translateX(${
//         100 * (index - curSlide)
//       }%)`;
//     });
//   });

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(
    'HTML parse and DOM Treeloaded;DOMContentLoaded'
  );
});

window.addEventListener('load', function (e) {
  e.preventDefault();
  console.log('Page fully loaded');
});

//
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = 'leave?';
});
// //更改css变量
// //document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// //Element.getAttribute()
// const logo = document.querySelector('.nav__logo');
// //standard Attributes 可以直接使用.访问
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// console.log(logo.alt);
// logo.alt = 'Beautiful Minimal Logo';
// console.log(logo.alt);

// //non standard attribute 必须使用getAttribute()访问 否则得到undefined
// console.log(logo.designer); //undefined
// console.log(logo.getAttribute('designer')); //ytp

// //使用.访问和getAttribute()访问,得到的可能不一样.
// //getAttribute()会始终返回html中的文本
// const link = document.querySelector('.twitter-link');
// console.log(link.href); //https://twitter.com/jonasschmedtman
// console.log(link.getAttribute('href')); //https://twitter.com/jonasschmedtman

// const link2 = document.querySelector('.nav__link--btn');
// console.log(link2.href); //http://127.0.0.1:8080/starter/#
// console.log(link2.getAttribute('href')); //#

// //Data attributes
// //添加 data-apple-banana="3.0"
// //访问element.dataset.appleBanana
// // 使用驼峰命名
// console.log(logo.dataset.versionNumber);

// // Classes
// // Element.classList.add();
// // Element.classList.remove();
// // Element.classList.toggle();
// // Element.classList.contains();
// logo.classList.add('c', 'j');
// console.log(logo.className); //nav__logo c j
// logo.classList.remove('c');
// console.log(logo.className); //nav__logo j
// logo.classList.toggle('j');
// console.log(logo.className); //nav__logo
// console.log(logo.classList.contains('c')); //false

// //className="........" 不要推荐使用className赋值,这样会直接覆盖
// logo.className = 'ytp';
// console.log(logo.className); //ytp

/* //##### DOM 遍历 #####
const h1 = document.querySelector('h1');
//go downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //NodeList
console.log(h1.children); //HTMLCollection
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//upwards parents
console.log(h1.parentNode);
console.log(h1.parentElement); //same

h1.closest('.header').style.background = 'var(--gradient-secondary)';

//side
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//得到父元素中所有的子元素
console.log(h1.parentElement);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (elements) {
  if (elements != h1) elements.style.transform = 'scale(0.5)';
}); */

// 建议使用addEventListener() 而不是 Element.onmouseenter()
// 因为onmouseenter()会覆盖之前的设置,不能添加多个

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! you are reading the heading :D');
// };

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };
// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget, this);
//   console.log(e.target === e.currentTarget);
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('CONTAINER', e.target);
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('NAV', e.target);
//   this.style.backgroundColor = randomColor();
// });
