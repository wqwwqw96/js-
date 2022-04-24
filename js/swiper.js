window.addEventListener('load', function () {
    //获取swiper的元素
    var lis = document.querySelectorAll('#J_swiperUl li')
    var imgs = document.querySelectorAll('#J_swiperUl li a')
    var ols = document.querySelector('.swpier-bar')
    var btns = document.querySelectorAll('.J_btn')
    var timer = null
    var isClick = true
    var nowIndex = 0

    // 根据li个数，创建小按钮
    for (var i = 0; i < lis.length; i++) {
        var liObj = document.createElement('li')
        //console.log(liObj)
        ols.appendChild(liObj)
        //给ol下的li添加下的属性
        liObj.setAttribute('index', i)
        //点击圆点切换图片
        liObj.onclick = function () {
            nowIndex = this.getAttribute("index")
            changeImg()
        }
        //鼠标划入停止轮播
        liObj.onmouseover = function () {
            clearInterval(timer)
        }
        //鼠标离开开始轮播
        liObj.onmouseout = function () {
            bannerPlay()
        }
    }
    //设置ol中第一个li有背景颜色
    ols.children[nowIndex].className = "current";
    //遍历隐藏图片
    function hiddenImg() {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = "0"
            // imgs[i].style.display = "none"

        }
    }
    //遍历隐藏小按钮
    function hiddenOl() {
        for (var i = 0; i < ols.children.length; i++) {
            ols.children[i].removeAttribute("class")
        }
    }
    //全部隐藏与显示
    function changeImg() {
        hiddenImg()
        hiddenOl()
        
        imgs[nowIndex].style.opacity = 1;
        //imgs[nowIndex].style.display = "block"
        ols.children[nowIndex].className = "current";
    }
    function bannerPlay() {
        timer = setInterval(function () {
            nowIndex++
            //判断超出回归
            if (nowIndex > imgs.length - 1) {
                nowIndex = 0
            }
            changeImg()
        }, 4000)
        
    }
    bannerPlay()
    //鼠标移入停止轮播
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            clearInterval(timer)
        }
        lis[i].onmouseout = function () {
            bannerPlay()
        }
    }
    //轮播左右箭头划入停止轮播
    for (var i = 0; i < btns.length; i++) {
        btns[i].onmouseover = function () {
            clearInterval(timer)
        }
        btns[i].onmouseout = function () {
            bannerPlay()
        }
    }
    //点击左箭头切换图片
    btns[0].onclick = function () {
        if (isClick) {
            isClick = false
            nowIndex--
           
            if (nowIndex < 0) {
                nowIndex = imgs.length - 1
            }
            changeImg()
            //定时器
            setTimeout(function () {
                isClick = true;
            }, 1200);//一秒内不能重复点击

        }
    }
    //点击右箭头切换图片
    btns[1].onclick = function () {
        if (isClick) {
            isClick = false
            nowIndex++
            if (nowIndex > imgs.length - 1) {
                nowIndex = 0
            }
            changeImg()
            //定时器
            setTimeout(function () {
                isClick = true;
            }, 1200);//一秒内不能重复点击
        }
    }
})