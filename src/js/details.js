
// 左侧图片切换
$('.smallPic>p').mouseover(function(){
  $(this).parent().siblings().children().eq($(this).index()).addClass('active').siblings().removeClass('active')
})


  // 右侧固定栏
  $('#rightFixbox>li').on('mouseenter',function(){
    $(this).children('p').css('display', 'block').parent().siblings().children('p').css('display', 'none')
  })

  $('#rightFixbox').on('mouseleave',function(){
    $('#rightFixbox>li').children('p').css('display', 'none')
  })

  //滚动条到一定高度，回到顶部按钮出现
  window.onscroll = function(){
    var topH = document.documentElement.scrollTop || document.body.scrollTop
    if(topH > 400){
      $('.toTop').css('display', 'block')
    }
    if(topH <= 400){
      $('.toTop').css('display', 'none')
    }
  }

  //回到顶部按钮事件
  $('.toTop').on('click',function(){
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
  })

  // --------------购物车-----
  /*
  1 在详情页加入购物车功能
  需要获取页面的商品:id = 10000,img="./img/chabei.jpg",price=20,name="茶杯",
  此处为了简化逻辑,直接赋值.
  如果商品存入了数据库,就是添加商品成功
  接口: ../php/addwq.php?id=10000&img=./img/chabei.jpg&price=20&name=茶杯
  */
//  $id = 10000;
//  $itemName = $('.descript>h2').html();
//  $img = $('.smallPic>p').first().html();
//  $price = $('.price').html();

//  $('.addBtn').click(function(){
//     $.get('../php/addwq.php',{
//       id:$id,
//       img:$img,
//       name:$itemName,
//       price:$price
//     },function(data){
//         console.log(data);
//         if(data==1){
//           alert('添加商品成功')
//         }
//     })
//  })

