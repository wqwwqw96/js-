window.onload = function () {
    //----------购物车数据--------------
    var cartData = [{
        "imgUrl": "image/cart/cart-1.jpg",
        "proName": " 小米双接口U盘 64G ",
        "proPrice": "99.9",
        "proComm": "71"
    },
    {
        "imgUrl": "image/cart/cart-2.jpg",
        "proName": " 米兔儿童学习手表5X ",
        "proPrice": "599",
        "proComm": "55"

    },
    {
        "imgUrl": "image/cart/cart-3.jpg",
        "proName": " 固速视频监控存储卡 32G ",
        "proPrice": "39.9",
        "proComm": "36.8"

    },
    {
        "imgUrl": "image/cart/cart-4.jpg",
        "proName": " 小米手环6 NFC版 黑色 ",
        "proPrice": "249",
        "proComm": "55.1"

    },
    {
        "imgUrl": "image/cart/cart-5.jpg",
        "proName": "米家电子台灯  ",
        "proPrice": "119",
        "proComm": "2.1"

    },
    {
        "imgUrl": "image/cart/cart-6.jpg",
        "proName": " Redmi K50 8GB+128GB 墨羽  ",
        "proPrice": "2399",
        "proComm": "17.6"

    },
    {
        "imgUrl": "image/cart/cart-7.jpg",
        "proName": " Xiaomi 12 Pro 2GB+256GB ",
        "proPrice": "5399",
        "proComm": "33.5"
    },
    {
        "imgUrl": "image/cart/cart-8.jpg",
        "proName": " Xiaomi 11 Ultra ",
        "proPrice": "3999",
        "proComm": "32.1"

    },
    {
        "imgUrl": "image/cart/cart-9.jpg",
        "proName": "  小米无线充电座套装  ",
        "proPrice": "599",
        "proComm": "7.2"

    },
    {
        "imgUrl": "image/cart/cart-10.jpg",
        "proName": " 小米体重秤2 ",
        "proPrice": "69.5",
        "proComm": "1.5"
    }
    ]
    // 获取元素
    var oBox = document.getElementById("box")
    var oCar = document.querySelector(".list-box")
    var oUl = document.getElementById("addUl")
    //为每个商品添加节点
    for (var i = 0; i < cartData.length; i++) {
        var addLi = document.createElement("li")
        var data = cartData[i]
        //console.log(data)
        addLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>'
        addLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>'
        addLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>'
        addLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '万人好评</p>'
        addLi.innerHTML += '<div class="add_btn">加入购物车</div>'
        oUl.appendChild(addLi)

    }
    //-----------点击加入购物车----------------------
    // 获取box下所有的添加购物车按钮
    var addBtn = oBox.querySelectorAll(".add_btn")
    for (var i = 0; i < addBtn.length; i++) {
        //给每个按钮添加序号
        addBtn[i].value = i;
        //点击商品添加至购物车
        addBtn[i].onclick = function () {
            var addDiv = document.createElement("div")
            addDiv.className = "list-item"
            addDiv.setAttribute("index", this.value)
            var data = cartData[this.value]
            addDiv.innerHTML += '<div class="col col-check "> <i class="iconfont icon-duihao check enter" value="0"></i></div>'
            addDiv.innerHTML += '<div class="col col-img"><img src="' + data["imgUrl"] + '" ></div>'
            addDiv.innerHTML += '<div class="col col-name"><h3 class="name">' + data["proName"] + '</h3></div>'
            addDiv.innerHTML += '<div class="col col-price">' + data["proPrice"] + '元</div>'
            addDiv.innerHTML += '<div class="col col-num"><div class="change-goods-num"> <a href="javascript:void(0)" class="subBtn"><i class="iconfont icon-jianhao"></i></a><input type="text"  class="goods-num" value="1" onfocus=this.blur()><a href="javascript:void(0)" class="addBtn"><i class="iconfont icon-jiahao"></i></a></div></div>'
            addDiv.innerHTML += '<div class="col col-total" data-total="' + data["proPrice"] + '">' + data["proPrice"] + '元</div>'
            addDiv.innerHTML += '<div class="col col-action"><a href="javascript:void(0)"><i class="iconfont icon-cuo"></i></a></div> '
            oCar.appendChild(addDiv)
            //获取商品的选择框
            var btnActive = document.querySelector("#btn")
            var oCheck = addDiv.querySelector(".check")
            //console.log(oCheck)
            //选中需要的商品
            oCheck.onclick = function () {
                if (oCheck.getAttribute("value") == "0") {
                    oCheck.classList.add("check-active")
                    oCheck.classList.remove("enter")
                    btnActive.classList.remove('btn-disabled')
                    oCheck.setAttribute("value", "1")
                }
                else {
                    oCheck.classList.remove("check-active")
                    oCheck.classList.add("enter")
                    oCheck.setAttribute("value", "0")

                }

                getTotal()
                //console.log(oCheck)
            }
            //删除商品
            var removeDiv = addDiv.querySelector(".col-action a")
            removeDiv.onclick = function () {
                var result= confirm("确定要删除吗？")
                if(result){
                oCar.removeChild(addDiv)
                getTotal()
                }
            }
            //添加商品数量
            var total = addDiv.querySelector(".col-total")
            var addBtn = addDiv.querySelector(".change-goods-num .addBtn")
            var subBtn = addDiv.querySelector(".change-goods-num .subBtn")
            var numBtn = addDiv.querySelector(".change-goods-num input")
            //增加
            addBtn.onclick = function () {
                numBtn.value = Number(numBtn.value) + 1
                if (numBtn.value > 10) {
                    alert('最大数量10')
                    numBtn.value = 10
                }
                dataTotal = Number(numBtn.value) * Number(data["proPrice"])
                total.setAttribute("data-total", dataTotal)
                //console.log(total.dataTotal)
                total.innerHTML = parseFloat((Number(numBtn.value) * Number(data["proPrice"])).toFixed(2)) + "元"
                getTotal()
            }
            //减少
            subBtn.onclick = function () {
                if (numBtn.value > 1) {
                    numBtn.value = Number(numBtn.value) - 1
                    dataTotal = Number(numBtn.value) * Number(data["proPrice"])
                    total.setAttribute("data-total", dataTotal)
                    total.innerHTML = parseFloat((Number(numBtn.value) * Number(data["proPrice"])).toFixed(2)) + "元"
                }
                getTotal()
            }
            //监听按钮状态
            oCheck.addEventListener("click", function () {
                num = 0
                getAllCheck = document.querySelectorAll(".check")
                for (var i = 1; i < getAllCheck.length; i++) {
                    if (getAllCheck[i].getAttribute("value") == "0") {
                        num = 0
                    } else {
                        num++
                    }
                }
                console.log(num)
                //当按钮处于全选状态时
                if (num == getAllCheck.length - 1) {
                    getAllCheck[0].classList.add("check-active2")
                    getAllCheck[0].setAttribute("value", "1")
                } else {
                    getAllCheck[0].classList.remove("check-active2")
                    getAllCheck[0].setAttribute("value", "0")
                }

            })

        }

    }

}


//点击全选按钮
function allCheck() {
    var oAllCheck = document.querySelectorAll(".check")
    var btnActive = document.querySelector("#btn")
    if (oAllCheck[0].getAttribute("value") == "0") {
        value = false
    }
    else {
        value = !value
    }
    //console.log(oAllCheck)
    if (oAllCheck.length > 1) {
        for (var i = 1; i < oAllCheck.length; i++) {
            if (!value) {
                oAllCheck[0].classList.add("check-active2")
                oAllCheck[0].setAttribute("value", "1")
                oAllCheck[0].classList.remove("enter")
                oAllCheck[i].classList.add("check-active")
                oAllCheck[i].setAttribute("value", "1")
                oAllCheck[i].classList.remove("enter")
                btnActive.classList.remove('btn-disabled')

            }
            else {
                oAllCheck[0].classList.remove("check-active2")
                oAllCheck[0].setAttribute("value", "1")
                oAllCheck[0].classList.add("enter")
                oAllCheck[i].classList.remove("check-active")
                oAllCheck[i].setAttribute("value", "0")
                oAllCheck[i].classList.add("enter")
                btnActive.classList.add('btn-disabled')
            }
        }

    }
    getTotal()
}

//得到总价与个数
function getTotal() {
    var activeCheck = document.querySelectorAll(".check-active")
    //console.log(activeCheck.length)
    var allNum = document.querySelector(".allNum")
    //console.log(allNum)
    //获取选中的个数
    var num = activeCheck.length
    allNum.innerHTML = num
    //获取选中的总价
    var allPrice = document.querySelector(".all-price")
    var total = 0
    for (var i = 0; i < num; i++) {
        var price = activeCheck[i].parentNode.parentNode.querySelector(".col-total")
        //console.log(price.getAttribute("data-total"))
        total += Number(price.getAttribute("data-total"))
    }
    allPrice.innerHTML = parseFloat(total.toFixed(2))

}