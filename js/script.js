// Logic Bài 1: Tìm kiếm
function searchProduct() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    let found = false;
    cards.forEach(card => {
        const name = card.querySelector('h3').innerText.toLowerCase();
        if(name.includes(input)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });
    document.getElementById('errorMsg').style.display = found ? 'none' : 'block';
}

// Logic Bài 2: Validate & LocalStorage
function validateForm(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!reg.test(pass)) return alert("Mật khẩu yếu!");
    localStorage.setItem('user_231A010984', email);
    alert("Đăng ký thành công!");
}

// Logic Bài 3: Countdown
let time = 600;
function startTimer() {
    const el = document.getElementById('timer');
    if(!el) return;
    const itv = setInterval(() => {
        let m = Math.floor(time / 60);
        let s = time % 60;
        el.innerText = `${m}:${s < 10 ? '0'+s : s}`;
        if(time <= 60) el.classList.add('warning');
        if(time <= 0) { clearInterval(itv); alert("Hết giờ!"); }
        time--;
    }, 1000);
}
window.onload = startTimer;
