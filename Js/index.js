document.getElementById('favoriteButton').addEventListener('click', function() {
    // 創建提示框
    var alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerText = '已加入收藏';

    // 將提示框添加到頁面
    document.body.appendChild(alertBox);

    // 顯示提示框
    alertBox.style.display = 'block';

    // 設置2秒後隱藏提示框並移除
    setTimeout(function() {
        alertBox.style.display = 'none';
        document.body.removeChild(alertBox);
    }, 2000);
});