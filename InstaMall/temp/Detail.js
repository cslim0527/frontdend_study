const imgPath = 'https://raw.githubusercontent.com/it-crafts/mockapi/master/';

const Slider = function(param = {}) {
  const slider = document.querySelector(param.selector)
  const container = slider.querySelector('#slideContainer')
  const prevBtn = slider.querySelector('#prevBtn')
  const nextBtn = slider.querySelector('#nextBtn')
  const ul = slider.querySelector('.YlNGR')
  const pager = slider. querySelector('#slidePager') 
  const msg = {  NO_SLIDE_DATA : '슬라이드 정보를 가져올 수 없습니다.' }
  let url = param.url + param.id  
  let width = container.offsetWidth
  let index = 1
  let total = 0 


  const create = async () => {
    console.log('[Slider] create()')
    const data = await getSlideData(url)
    total = data.imgList.length
    renderSlideImg(data.imgList)
    addEvents()
    initSlideSize()
    initPager()
  }

  const initSlideSize = () => {
    console.log('[Slider] initSlideSize()')

    ul.querySelectorAll('li')
      .forEach(li => {
        li.style.width = width + 'px'
        li.children[0].style.width = width + 'px'
      })
  }

  const getSlideData = async (url) => {
    const res = await fetch(url)
    const { data } = await res.json()
    return data
  }

  const renderSlideImg = (imgList = []) => {
    ul.innerHTML =  imgList.length ? getSliderHtmls(imgList) : msg.NO_SLIDE_DATA
  }

  const getSliderHtmls = (imgList) => {
    return imgList.reduce((html, imgSrc) => {
      return html += createSlideList(imgSrc)
    }, '')
  }

  const createSlideList = (imgSrc) => {
    return `<li class="_-1_m6" style="opacity: 1; width: 375px;">
              <div class="bsGjF" style="margin-left: 0px; width: 375px;">
                <div role="button" tabindex="0" class="ZyFrc">
                  <div class="eLAPa RzuR0">
                    <div class="KL4Bh" style="padding-bottom: 124.907%;"><img
                        alt="이미지: 사람 1명 이상, 근접 촬영" class="FFVAD" decoding="auto" sizes="375px"
                        src="${imgPath + imgSrc}"
                        style="object-fit: cover;"></div>
                    <div class="_9AhH0"></div>
                  </div>
                </div>
              </div>
            </li>`
  }

  const addEvents = () => {
    prevBtn.addEventListener('click', onClickPrevBtn)
    nextBtn.addEventListener('click', onClickRightBtn)
  }

  const onClickPrevBtn = () => {
    if(index <= 1) return
    pager.children[index - 1].classList.remove('XCodT');
    index--
    container.style.transform = `translateX(${width * (-index+1)}px)`
    pager.children[index - 1].classList.add('XCodT');
  }

  const onClickRightBtn = () => {
    if(index >= total) return
    pager.children[index - 1].classList.remove('XCodT');
    index++
    container.style.transform = `translateX(${width * (-index+1)}px)`
    pager.children[index - 1].classList.add('XCodT');
  }

  const initPager = () => {
    pager.querySelectorAll('.Yi5aA')[0].classList.add('XCodT');
  }

  const removeEvents = () => {
    prevBtn.removeEventListener('click', onClickPrevBtn)
    nextBtn.removeEventListener('click', onClickRightBtn)
  }

  const destroy = function() {
    removeEvents()
  }

  create()

  return {
    destroy
  }
}

const Detail = function(param = {}) {
  const detail = document.querySelector(param.selector)
  let url = param.url

  const create = () => {
    console.log('[Detail] create()')
  }

  const getDetailData = (url) => {
    const res = fetch(url)
    const data = res.json()
    return data
  }

  const createDetailArticle = () => {
    return `<article class="QBXjJ M9sTE h0YNM SgTZ1 Tgarh ">
              <img style="width: 100%; height: auto;" src="http://gi.esmplus.com/clockwork2/트와이스_모모.jpg">
            </article>`
  }

  create()
}

new Slider({
  selector: '#slider',
  url: 'https://my-json-server.typicode.com/it-crafts/mockapi/detail/',
  id: 1
})

new Detail({
  selector: '#slider',
  url: 'https://my-json-server.typicode.com/it-crafts/mockapi/detail/',
  id: 1
})