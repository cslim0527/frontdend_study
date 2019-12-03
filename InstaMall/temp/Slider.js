const Slider = function(param = {}) {
  const slider = document.querySelector(param.selector)
  const container = slider.querySelector('#slideContainer')
  const prevBtn = slider.querySelector('#prevBtn')
  const nextBtn = slider.querySelector('#nextBtn')
  const ul = slider.querySelector('.YlNGR')
  const pager = slider. querySelector('#slidePager') 
  const msg = {  NO_SLIDE_DATA : '슬라이드 정보를 가져올 수 없습니다.' }
  const data = param.data
  let width = container.offsetWidth
  let total = data.imgList.length 
  let index = 1
  let flag = false

  const create = async () => {
    console.log('[Slider] create()')
    renderSlideImg(data.imgList)
    initSlideSize()
    initPager()
    addEvents()
  }

  const initSlideSize = (resizeWidth = width) => {
    ul.querySelectorAll('li')
      .forEach(li => {
        li.style.width = resizeWidth + 'px'
        li.children[0].style.width = resizeWidth + 'px'
      })
  }

  const renderSlideImg = (imgList = []) => {
    ul.innerHTML =  imgList.length ? getSliderHtml(imgList) : msg.NO_SLIDE_DATA
  }

  const getSliderHtml = (imgList) => {
    return imgList.reduce((html, imgSrc) => {
      return html += createSlideList(imgSrc)
    }, '')
  }

  const createSlideList = (imgSrc) => {
    return `<li class="_-1_m6" style="opacity: 1; width: ${width}px;">
              <div class="bsGjF" style="margin-left: 0px; width: ${width}px;">
                <div role="button" tabindex="0" class="ZyFrc">
                  <div class="eLAPa RzuR0">
                    <div class="KL4Bh" style="padding-bottom: 124.907%;"><img
                        alt="이미지: 사람 1명 이상, 근접 촬영" class="FFVAD" decoding="auto" sizes="${width}px"
                        src="${param.imgPath + imgSrc}"
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
    window.addEventListener('resize', onResize)
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
    console.log(width)
  }

  const initPager = () => {
    pager.querySelectorAll('.Yi5aA')[0].classList.add('XCodT');
  }

  const removeEvents = () => {
    prevBtn.removeEventListener('click', onClickPrevBtn)
    nextBtn.removeEventListener('click', onClickRightBtn)
    window.removeEventListener('resize', onResize)
  }

  const onResize = () => {
    if(!flag) {
      flag = true

      setTimeout(() => {
        width = container.offsetWidth
        console.log('resize: ', width)
        initSlideSize(width)
        container.style.transform = `translateX(${width * (-index+1)}px)`
        flag = false
      }, 150)
    }
    
  }

  const destroy = function() {
    removeEvents()
  }

  create()

  return {
    destroy
  }
}

export default Slider