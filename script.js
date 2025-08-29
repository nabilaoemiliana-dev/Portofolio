// === Toggle Navbar ===
function toggleMenu(){
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('open');
}

// === Update Tahun Otomatis ===
(function(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();

// === Modal (Popup) ===
function openModal(id) {
  document.getElementById(id).style.display = "flex";
  
}


function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


// Klik luar modal untuk tutup
window.onclick = function(event) {
  let modals = document.querySelectorAll(".modal");
  modals.forEach(m => {
    if (event.target == m) {
      m.style.display = "none";
    }
  });
}


