//获取所有的菜品分类
function categoryListApi() {
    return $axios({
      'url': '/changAn/category/list',
      'method': 'get',
    })
  }

//获取菜品分类对应的菜品
function dishListApi(data) {
    return $axios({
        'url': '/changAn/dish/list',
        'method': 'get',
        params:{...data}
    })
}

//获取菜品分类对应的套餐
function setmealListApi(data) {
    return $axios({
        'url': '/changAn/setmeal/list',
        'method': 'get',
        params:{...data}
    })
}

//获取购物车内商品的集合
function cartListApi(data) {
    return $axios({
        'url': '/changAn/shoppingCart/list',
        //'url': '/front/cartData.json',
        'method': 'get',
        params:{...data}
    })
}

//购物车中添加商品
function  addCartApi(data){
    return $axios({
        'url': '/changAn/shoppingCart/add',
        'method': 'post',
        data
      })
}

//购物车中修改商品
function  updateCartApi(data){
    return $axios({
        'url': '/changAn/shoppingCart/sub',
        'method': 'post',
        data
      })
}

//删除购物车的商品
function clearCartApi() {
    return $axios({
        'url': '/changAn/shoppingCart/clean',
        'method': 'delete',
    })
}

//获取套餐的全部菜品
function setMealDishDetailsApi(id) {
    return $axios({
        'url': `/changAn/setmeal/dish/${id}`,
        'method': 'get',
    })
}


