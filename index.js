let home = 0
let guest = 0

let homeScore = document.getElementById("home-score")

function oneHome() {
  home += 1
  homeScore.textContent  = home
}

function twoHome() {
  home += 2
  homeScore.textContent  = home
}

function threeHome() {
  home += 3
  homeScore.textContent  = home
}

function deleteHome() {
  home -= 1
  homeScore.textContent  = home
}

function resetHome() {
  home = 0
  homeScore.textContent  = home
}

let guestScore = document.getElementById("guest-score")

function oneGuest() {
  guest += 1
  guestScore.textContent  = guest
}

function twoGuest() {
  guest += 2
  guestScore.textContent  = guest
}

function threeGuest() {
  guest += 3
  guestScore.textContent  = guest
}

function deleteGuest() {
  guest -= 1
  guestScore.textContent  = guest
}

function resetGuest() {
  guest = 0
  guestScore.textContent  = guest
}