// Hàm mở/đóng menu 3 gạch
function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");

    menu.classList.toggle("is-active");
    navList.classList.toggle("active");
}

// Hàm đóng menu khi nhấn vào một liên kết
function closeMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");

    menu.classList.remove("is-active");
    navList.classList.remove("active");
}

// Hàm điều khiển Modal
function openModal() { 
    document.getElementById("connectionModal").classList.add("active"); 
}

function closeModal() { 
    document.getElementById("connectionModal").classList.remove("active"); 
}

// Đóng modal khi nhấn ra ngoài vùng nội dung
window.onclick = function(event) {
    let modal = document.getElementById("connectionModal");
    if (event.target == modal) closeModal();
}
