/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-03-08 00:00:31
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-03-15 16:59:34
 * @FilePath: /webPages/basic/15-Mapty/starter/script.js
 * @Description:
 *
 */
'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;

// form.classList.toggle('hidden')
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      //console.log(pos);
      const { longitude } = pos.coords;
      const { latitude } = pos.coords;
      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 10);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function (pos) {
      console.log(pos);
      alert("couldn't find location");
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //clear input
  inputCadence.value =inputDistance.value=inputType.value=inputDuration.value= '';
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        miniwidth: 100,
        maxWidth: 250,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('workout')
    .openPopup();
});

inputType.addEventListener('change',function(e){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
