// script.js

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  menu.style.flexDirection = 'column';
}

function navigate(section) {
  const content = document.getElementById('content');
  if (section === 'mine') {
    content.innerHTML = '<h2>Menambang</h2><p>Mulai menambang token RJ sekarang...</p>';
  } else if (section === 'withdraw') {
    content.innerHTML = '<h2>Menarik Pendapatan</h2><p>Silakan masukkan jumlah token RJ yang ingin Anda tarik.</p>';
  } else if (section === 'income') {
    content.innerHTML = '<h2>Pendapatan</h2><p>Statistik penghasilan token Anda akan ditampilkan di sini.</p>';
  } else if (section === 'swap') {
    content.innerHTML = '<h2>Swap Token</h2><p>Tukar token RJ Anda ke Diamond 💎 di sini.</p>';
  }
}

function analyzeToken() {
  const content = document.getElementById('content');
  content.innerHTML = '<h2>Hasil Analisis Token RJ</h2><p>RJ saat ini stabil dan siap untuk ditambang atau ditukar ke Diamond!</p>';
}
