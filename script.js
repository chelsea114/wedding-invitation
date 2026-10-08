document.addEventListener("DOMContentLoaded", function () {

  // Nama pengantin
  document.getElementById("groomName").textContent = wedding.groom.name;
  document.getElementById("brideName").textContent = wedding.bride.name;

  // Nama lengkap + orang tua
  document.getElementById("groomFullName").textContent = wedding.groom.fullName;
  document.getElementById("groomParents").textContent = wedding.groom.parents;

  document.getElementById("brideFullName").textContent = wedding.bride.fullName;
  document.getElementById("brideParents").textContent = wedding.bride.parents;

  // Tanggal dan waktu
  document.getElementById("weddingDate").textContent = wedding.date;
  document.getElementById("weddingTime").textContent = wedding.time;

  // Lokasi
  document.getElementById("venueName").textContent = wedding.venue.name;
  document.getElementById("venueAddress").textContent = wedding.venue.address;

  // Pesan
  document.getElementById("openingMessage").textContent =
    wedding.message.opening;

  document.getElementById("closingMessage").textContent =
    wedding.message.closing;

});
