import React, { useEffect } from 'react'
import "../CSS/Photography.css"


export default function Photography() {

const state = {};
useEffect(() => {
  const carouselList = document.querySelector('.carousel__list');
console.log(carouselList);
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);
carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  const current1 = elems.find((elem) => elem.dataset.pos == 3);
  const current2 = elems.find((elem) => elem.dataset.pos == -3);
  const current3 = elems.find((elem) => elem.dataset.pos == 4);
  const current4 = elems.find((elem) => elem.dataset.pos == -4);
  const current5 = elems.find((elem) => elem.dataset.pos == 5);
  const current6 = elems.find((elem) => elem.dataset.pos == -5);
  
  current.classList.remove('carousel__item_active');
  
  [current, current2, current1,current3,current4,current5,current6, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 5) {
    return -current
  }

  return diff;
}
}, [])

  return (
    <>
      <section>
        <div id='#Photography' className="parallax-item4">
          <div className="heed">
          <h2>Photography</h2>
          </div>
          <div className="carousel">
            <ul className="carousel__list">
              <li className="carousel__item" data-pos="-2"></li>
              <li className="carousel__item" data-pos="-1"></li>
              <li className="carousel__item" data-pos="0"></li>
              <li className="carousel__item" data-pos="1"></li>
              <li className="carousel__item" data-pos="2"></li>
              <li className="carousel__item" data-pos="-3"></li>
              <li className="carousel__item" data-pos="3"></li>
              <li className="carousel__item" data-pos="-4"></li>
              <li className="carousel__item" data-pos="4"></li>
              <li className="carousel__item" data-pos="-5"></li>
              <li className="carousel__item" data-pos="5"></li>
            </ul>
          </div>
          <div className="chalo">
            <p>For more visit my instagram page <a href="https://instagram.com/chalo_chale._" target="_blank">chalo_chale._</a></p>
          </div>
        </div>

      </section></>
  )
}
