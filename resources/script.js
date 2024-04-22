

function filterMenu() {
    const searchText = document.getElementById('menuSearch').value.toLowerCase(); // Lấy văn bản từ ô tìm kiếm
    const menuItems = document.querySelectorAll('.sidebar ul li a'); // Lấy tất cả các liên kết menu
    menuItems.forEach(item => {
        const group = item.getAttribute('data-group'); // Lấy tên nhóm từ data attributes
        if (group && group.toLowerCase().includes(searchText)) {
            item.style.display = "block"; // Hiển thị nếu khớp với nhóm
        } else if (item.textContent.toLowerCase().includes(searchText)) {
            item.style.display = "block"; // Hiển thị nếu khớp với văn bản
        } else {
            item.style.display = "none"; // Ẩn nếu không khớp
        }
    });
}

function toggleSubmenu(menuId) {
    const submenu = document.getElementById(menuId);
    submenu.style.display = submenu.style.display === "none" ? "block" : "none"; // Đổi trạng thái mở rộng/thu gọn
    
}


// const readFile = (filePath) => {
//     fetch(filePath)
//         .then(response => response.text())
//         .then(text => {
//             const markdownContainer = document.getElementById('markdown-content'); // Thay thế 'markdown-content' bằng ID của phần tử bạn muốn cập nhật
//             if (markdownContainer) {
//                 markdownContainer.innerHTML = marked.parse(text); // Sử dụng thư viện 'marked' để chuyển đổi Markdown sang HTML
//             }
           
//         })
//         .catch(error => {
//             console.error('Lỗi khi tải Markdown:', error);
//         });
// };





function copyToClipboard() {
    const codeBlock = document.getElementById("code-block");
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges(); // Xóa lựa chọn hiện tại nếu có
    window.getSelection().addRange(range);
    const a=document.getElementById("copybut");
    try {
        document.execCommand("copy");
        a.innerText="Đã sao chép mã";
    } catch (e) {
        a.innerText="Lỗi sao chép ("+e.error+")";
        console.error("Copy failed", e);
    }

    window.getSelection().removeAllRanges(); // Xóa lựa chọn sau khi sao chép
}




