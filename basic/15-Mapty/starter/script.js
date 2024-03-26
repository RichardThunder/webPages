/*
 * @Author: Richard yuetingpei888@gmail.com
 * @Date: 2024-03-08 00:00:31
 * @LastEditors: Richard yuetingpei888@gmail.com
 * @LastEditTime: 2024-03-22 08:09:22
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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.distance = distance; //in km
    this.duration = duration; //in min
    this.coords = coords;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.duration / this.distance; //min/km
  }
}
class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); //km/h
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 500);
// console.log(run1);
// console.log(cycling1);

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("couldn't find location");
        }
      );
    }
  }
  _loadMap(position) {
    const { longitude, latitude } = position.coords;
    //console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //if data is valid
    const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    const { lat, lng } = this.#mapEvent.latlng;
    e.preventDefault();
    //get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;
    //if workout cycling
    if (type === 'cycling') {
      const elevationGain = +inputElevation.value;
      if (
        !validInput(distance, duration, elevationGain) ||
        !allPositive(distance, duration)
      ) {
        return alert('inputs must be numbers');
      }
      workout = new Cycling([lat, lng], distance, duration, elevationGain);
    }

    //if workout running
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('inputs must be numbers');
      }
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    //add new Object to workout array
    this.#workouts.push(workout);
    //render workout on map as marker
    this.renderWorkoutMarker(workout);
    //clear input
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputDuration.elevationGain =
        '';
  }

  renderWorkoutMarker(workout) {
    let type;
    if (workout instanceof Running) {
      type = 'running';
    }
    if (workout instanceof Cycling) {
      type = 'cycling';
    }
    console.log(type);
    console.log(workout);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          miniwidth: 100,
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          //   className: `${type}-popup`,
          className: 'running-popup',
        })
      )
      .setPopupContent(workout.distance)
      .openPopup();
  }
}

const app = new App();

const w = new Workout();