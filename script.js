const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const errorSound = document.getElementById('error-sound');

const correctUsername = "tuan";
const correctPassword = "seram123"; // Gantilah dengan password yang diinginkan

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman reload saat submit

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        alert("Selamat datang, Tuan!");
        // Arahkan ke halaman catatan pribadi atau dashboard
        window.location.href = "dashboard.html"; // Ganti dengan halaman utama
    } else {
        errorMessage.style.display = 'block';
        errorSound.play(); // Mainkan suara seram jika password salah
    }
});