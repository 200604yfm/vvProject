//swiper轮播
var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    autoplay:true,
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  }) 
  

  // 左侧菜单
  $('.menu>li').on('mousemove', function(){
    $(this).children('.menu-details').css('display','block').parent().siblings().children('.menu-details').css('display', 'none')
  })

  $('.menu').on('mouseout',function(){
    $('.menu>li').children('.menu-details').css('display', 'none')
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

