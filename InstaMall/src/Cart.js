if (sessionStorage.cart === undefined) {
    sessionStorage.cart = '[{"name":"상품명1","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/01.jpg","price":5000,"quantity":2},{"name":"상품명2","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/02.jpg","price":7000,"quantity":2},{"name":"상품명3","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/03.jpg","price":6000,"quantity":3},{"name":"상품명4","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/04.jpg","price":10000,"quantity":1},{"name":"상품명5","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/05.jpg","price":3000,"quantity":5}]';
}

const Cart = function(selector, url) {
    const _cart = document.querySelector(selector)
    const _url = url
    const imgPath = 'https://raw.githubusercontent.com/it-crafts/mockapi/master/'
    const template = `<div class="Nnq7C weEfm"><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{ src1 }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{ src2 }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{ src3 }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div></div>`

    console.log('[Cart] create()')
}

export default Cart