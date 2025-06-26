function tampilkan(bentuk) {
    const sections = document.querySelectorAll('.bangun-section');
  
    sections.forEach(section => {
      if (!section.classList.contains('hidden')) {
        section.classList.add('fade-out');
        setTimeout(() => {
          section.classList.remove('fade-out');
          section.classList.add('hidden');
        }, 500);
      }
    });
  
    const target = document.getElementById(bentuk);
    if (target) {
      target.classList.remove('hidden');
      target.classList.add('fade-in');
      setTimeout(() => {
        target.classList.remove('fade-in');
      }, 500);
    }
  }
  
  // SEGITIGA
  function hitungLuasSegitiga() {
    const alas = parseFloat(document.getElementById('alasSegitiga')?.value || 0);
    const tinggi = parseFloat(document.getElementById('tinggiSegitiga')?.value || 0);
    const hasil = document.getElementById('hasilLuasSegitiga');
    const error = document.getElementById('errorLuasSegitiga');
  
    if (alas > 0 && tinggi > 0) {
      const luas = 0.5 * alas * tinggi;
      hasil.textContent = "Luas: "+ luas.toFixed(2);
      error.textContent = '';
    } else {
      hasil.textContent = '';
      error.textContent = '⚠️ Mohon isi alas dan tinggi dengan angka lebih dari 0!';
    }
  }
  
  function hitungKelilingSegitiga() {
    const a = parseFloat(document.getElementById('sisiA')?.value || 0);
    const b = parseFloat(document.getElementById('sisiB')?.value || 0);
    const c = parseFloat(document.getElementById('sisiC')?.value || 0);
    const hasil = document.getElementById('hasilKelilingSegitiga');
    const error = document.getElementById('errorKelilingSegitiga');
  
    if (a > 0 && b > 0 && c > 0) {
      const keliling = a + b + c;
      hasil.textContent = "Keliling: "+ keliling.toFixed(2);
      error.textContent = '';
    } else {
      hasil.textContent = '';
      error.textContent = '⚠️ Mohon isi ketiga sisi dengan angka lebih dari 0!';
    }
  }
  
  // PERSEGI PANJANG
  function hitungLuasPersegi() {
    const p = parseFloat(document.getElementById('panjang')?.value || 0);
    const l = parseFloat(document.getElementById('lebar')?.value || 0);
    const hasil = document.getElementById('hasilLuasPersegi');
    const error = document.getElementById('errorLuasPersegi');
  
    if (p > 0 && l > 0) {
      const luas = p * l;
      hasil.textContent = "Luas: "+ luas.toFixed(2);
      error.textContent = '';
    } else {
      hasil.textContent = '';
      error.textContent = '⚠️ Mohon isi panjang dan lebar dengan angka lebih dari 0!';
    }
  }
  
  function hitungKelilingPersegi() {
    const p = parseFloat(document.getElementById('kelPanjang')?.value || 0);
    const l = parseFloat(document.getElementById('kelLebar')?.value || 0);
    const hasil = document.getElementById('hasilKelilingPersegi');
    const error = document.getElementById('errorKelilingPersegi');
  
    if (p > 0 && l > 0) {
      const keliling = 2 * (p + l);
      hasil.textContent = "Keliling: "+ keliling.toFixed(2);
      error.textContent = '';
    } else {
      hasil.textContent = '';
      error.textContent = '⚠️ Mohon isi panjang dan lebar dengan angka lebih dari 0!';
    }
  }
  
  // LINGKARAN
  function hitungLuasLingkaran() {
    const r = parseFloat(document.getElementById('jariLuas')?.value || 0);
    const hasil = document.getElementById('hasilLuasLingkaran');
    const error = document.getElementById('errorLuasLingkaran');
  
    if (r > 0) {
      const luas = Math.PI * r * r;
      hasil.textContent = "Luas: "+ luas.toFixed(2);
      error.textContent = '';
    } else {
      hasil.textContent = '';
      error.textContent = '⚠️ Mohon isi jari-jari dengan angka lebih dari 0!';
    }
  }
  
  function hitungKelilingLingkaran() {
    const r = parseFloat(document.getElementById('jariKeliling')?.value || 0);
    const hasil = document.getElementById('hasilKelilingLingkaran');
    const error = document.getElementById('errorKelilingLingkaran');
  
    if (r > 0) {
      const keliling = 2 * Math.PI * r;
      hasil.textContent = "Keliling: "+ keliling.toFixed(2);
      error.textContent = '';
    } else {
      hasil.textContent = '';
      error.textContent = '⚠️ Mohon isi jari-jari dengan angka lebih dari 0!';
    }
  }
  
  // Tampilkan segitiga di awal
  document.addEventListener('DOMContentLoaded', () => tampilkan('segitiga'));