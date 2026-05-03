// Kullanıcı verilerini tutacak dizi
let users = [];

// Admin Giriş Fonksiyonu
function openAdminPanel() {
    const adminCode = prompt("Admin kodunu giriniz:");
    const adminPanel = document.getElementById('admin-panel');

    if (adminCode === "bbonwerson") {
        adminPanel.style.display = 'block';
        updateAdminList();
    } else {
        alert("Hatalı kod!");
    }
}

// Kayıt Olma Fonksiyonu
function register() {
    const nick = prompt("İsim (Nick) giriniz:");
    const pass = prompt("Şifre giriniz:");

    // Şifre kriter kontrolü (@#₺_ ve rakamlar)
    const criteria = /[0-9]|[@#₺_]/;
    
    if (!nick || !pass) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    if (!criteria.test(pass)) {
        alert("Uyarı: Şifrede @#₺_ 123... gibi kriterler kullanılmalıdır!");
        return;
    }

    alert("UYARI: Gerçek bilgilerinizi yazmayınız!");

    // Kullanıcıyı listeye ekle
    users.push({ nick: nick, pass: pass });
    alert("Başarıyla kayıt olundu!");
    
    if(document.getElementById('admin-panel').style.display === 'block') {
        updateAdminList();
    }
}

// Admin Panelindeki Listeyi Güncelleme
function updateAdminList() {
    const list = document.getElementById('user-list');
    list.innerHTML = ""; // Listeyi temizle

    users.forEach((user, index) => {
        const div = document.createElement('div');
        div.className = "user-item";
        div.innerHTML = `
            <span><strong>Nick:</strong> ${user.nick} | <strong>Şifre:</strong> ${user.pass}</span>
            <button onclick="removeUser(this)" style="background:red;">Ban</button>
            <button onclick="removeUser(this)" style="background:orange;">Mute</button>
        `;
        list.appendChild(div);
    });
}

// Ban ve Mute basınca yok etme fonksiyonu
function removeUser(element) {
    // Butonun içindeki bulunduğu satırı (parent) siler
    element.parentElement.remove();
}

// Olay Dinleyicileri (HTML'deki ID'lere göre)
document.addEventListener('DOMContentLoaded', () => {
    // Kayıt ol butonu
    const regBtn = document.getElementById('register-btn');
    if(regBtn) regBtn.addEventListener('click', register);

    // Küçük kırmızı kare (Admin tetikleyici)
    const adminTrigger = document.getElementById('admin-trigger');
    if(adminTrigger) adminTrigger.addEventListener('click', openAdminPanel);
});

