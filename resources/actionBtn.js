
// document.getElementById("fetchButton").addEventListener("click", function() {
//     fetch("https://jsonplaceholder.typicode.com/posts/1") // URL cụ thể
//         .then(response => response.json()) // Chuyển phản hồi thành JSON
//         .then(data => {
//             // Hiển thị dữ liệu trong phần tử HTML
//             document.getElementById("code-block").innerText = JSON.stringify(data, null, 2);
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });
// });

const urlOr="https://raw.githubusercontent.com/Khanh779/";
const a="Network_Packet_Traffic/master/Network_Packet_Traffic/Form1.cs";

function readCode(filePath) {
    fetch(urlOr+ filePath)
        .then(response => response.text())
        .then(text => {
            const markdownContainer = document.getElementById('code-block'); // Thay thế 'markdown-content' bằng ID của phần tử bạn muốn cập nhật
            if (markdownContainer) {
                markdownContainer.innerText = text; // Sử dụng thư viện 'marked' để chuyển đổi Markdown sang HTML
            }
           
        })
        .catch(error => {
            console.error('Lỗi khi tải Markdown:', error);
        });
}

function readCodeJS(filePath) {
        fetch(urlOr+ filePath) // URL cụ thể
        .then(response => response.json()) // Chuyển phản hồi thành JSON
        .then(data => {
            // Hiển thị dữ liệu trong phần tử HTML
            document.getElementById("code-block").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Read file in local 
function readFileInLocal(filePath) {
    const fileInput = origin+filePath;
    const file = fileInput.files[0]; // Lấy tệp đầu tiên được tải lên
    const reader = new FileReader(); // Tạo FileReader

    // Sự kiện khi đọc xong
    reader.onload = function(event) {
        const fileContent = event.target.result; // Nội dung của tệp
        document.getElementById("code-block").innerText = fileContent; // Hiển thị nội dung tệp
    };

    // Bắt đầu đọc tệp dưới dạng văn bản
    if (file) {
        reader.readAsText(file);
    }
}
