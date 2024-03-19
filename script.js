document.addEventListener("DOMContentLoaded", function () {
    var showPopupBtn = document.getElementById('showPopupBtn');
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('closeBtn');

    showPopupBtn.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
