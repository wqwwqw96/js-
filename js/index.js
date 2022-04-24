window.onload = function () {
    //---------------顶部导航栏二维码开始--------------
    const topbarApp = document.getElementById('J_topbarApp')
    //鼠标悬停显示与删除二维码类
    topbarApp.onmouseover = function () {
        //添加类名
        topbarApp.classList.add('active')
    }
    topbarApp.onmouseout = function () {
        //删除类名
        topbarApp.classList.remove('active')
    }
    //---------------顶部导航栏二维码结束-----------------------
    //--------------JS头部显示与隐藏下拉菜单开始-------------
    // 获取需要悬浮的对象
    const navItem = document.getElementsByClassName('J_navItem')
    const childrenList = document.getElementsByClassName('children-list')
    // 获取被隐藏的菜单
    const headerNavMenu = document.getElementById('J_headerNavMenu')
    var x;
    //鼠标悬停显示菜单
    for (let i = 0; i < navItem.length; i++) {
        //鼠标悬停显示下拉菜单
        navItem[i].onmouseover = function () {
            headerNavMenu.style.borderTop = ('1px solid #e0e0e0')
            headerNavMenu.style.height = ('220px')
            childrenList[i].style.display = 'block'
            headerNavMenu.style.transition = ('box-shadow 0.3s, height 0.5s')
            x = i
        }
        //鼠标离开隐藏菜单
        navItem[i].onmouseleave = function () {
            headerNavMenu.style.height = ('0')
            childrenList[i].style.display = 'none'
            headerNavMenu.style.borderTop = ('0')
            headerNavMenu.addEventListener('mouseover', function () {
                headerNavMenu.style.transition = ('')
            })
        }



        //鼠标悬停菜单显示菜单
        headerNavMenu.onmouseover = function () {
            headerNavMenu.style.transition = ('')
            headerNavMenu.style.borderTop = ('1px solid #e0e0e0')
            headerNavMenu.style.height = ('220px')
            childrenList[x].style.display = 'block'
        }
        //鼠标离开菜单隐藏菜单
        headerNavMenu.onmouseleave = function () {
            headerNavMenu.style.transition = ('box-shadow 0.3s, height 0.5s')
            headerNavMenu.style.height = ('0')
            childrenList[x].style.display = 'none'
            setTimeout(function () {
                var i = headerNavMenu.clientHeight
                if (i < 10) {
                    headerNavMenu.style.borderTop = ('0')
                }
            }, 400)

        }
    }
    //--------------JS头部显示与隐藏下拉菜单结束-------------
    //-----------顶部导航栏购物车显示与隐藏开始--------------
    const topbarCart = document.getElementById('J_topbarCart')
    const loadCart = document.getElementById('J_loadCart')
    const loaderOn = document.querySelector('.loader-on')
    const cartMenu = document.querySelector('.cart-menu')
    //监听鼠标划入事件加载效果
    var timer = false
    topbarCart.addEventListener('mouseover', function () {
        if (!timer) {
            timer = true
            loadCart.classList.add('loader-cart')
            cartMenu.style.height = "100px"
            const cartTime = setTimeout(() => {
                clearTimeout(cartTime)
                loadCart.classList.remove("loader-cart")
                loadCart.style.display = 'none'
                loaderOn.innerHTML = "购物车中还没有商品，赶紧选购吧！"
            }, 2000);
        }

    })
    //监听鼠标移除事件删除效果
    topbarCart.addEventListener('mouseleave', function () {
        timer = false
        cartMenu.style.height = "0"
        const cartTime = setTimeout(function () {
            clearTimeout(cartTime)
            var i = cartMenu.clientHeight
            if (i < 10) {
                loadCart.style.display = 'block'
                loaderOn.innerHTML = ""
            }
        }, 400)
    })
    //-----------顶部导航栏购物车显示与隐藏结束--------------

}
window.onscroll = function () {
    //固定导航栏回到顶部显示与隐藏
    var toolBar = document.querySelector('.tool-bar-item')
    var top = document.querySelector('.top')
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //console.log(scrollTop)
    if (scrollTop > 400) {
        toolBar.style.bottom= '150px'
        top.style.display = 'block'
    }else{
        toolBar.style.bottom= '80px'
        top.style.display = 'none'
    }
}