/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-03-08 00:00:31
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-03-13 01:08:20
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

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      //console.log(pos);
      const { longitude } = pos.coords;
      const { latitude } = pos.coords;
      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 10);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      map.on('click', function (mapEvent) {
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
      });
    },
    function (pos) {
      console.log(pos);
      alert("couldn't find location");
    }
  );
}
