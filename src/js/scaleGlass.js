define(function () {
    return function () {
        var small_pic = document.getElementsByClassName("small_pic")[0];
        var mask = document.getElementsByClassName("small_mask")[0];
        var big_pic = document.getElementsByClassName("big_pic")[0];
        var big_img = document.getElementById("big_pic");
        small_pic.onmousemove = function (e) {
            e = e || window.event;
            var x = e.clientX - small_pic.offsetLeft;
            var y = e.clientY - small_pic.offsetTop;
            x -= mask.offsetWidth * 0.5;
            y -= mask.offsetHeight * 0.5;
            if(x < 0) {
                x = 0;
            }
            if(y < 0) {
                y = 0;
            }
            if(x > small_pic.offsetWidth - mask.offsetWidth) {
                x = small_pic.offsetWidth - mask.offsetWidth;
            }
            if(y > small_pic.offsetHeight - mask.offsetHeight) {
                y = small_pic.offsetHeight - mask.offsetHeight;
            }
            mask.style.left = x + "px";
            mask.style.top = y + "px";
            //计算比例
            var proportionX = mask.offsetLeft / small_pic.offsetWidth;
            var proportionY = mask.offsetTop / small_pic.offsetHeight;
            big_img.style.left = -big_img.offsetWidth * proportionX + "px";
            big_img.style.top = -big_img.offsetHeight * proportionY + "px";
        } 
    }
});