import Slider from './Slider.js'

const Detail = function(param = {}) {
  const detail = document.querySelector(param.selector)
  const msg = {  NO_DETAIL_DATA : '상세정보가 없습니다.' }
  let url = param.url + param.id
  let flag = false

  const create = async () => {
    console.log('[Detail] create()')
    const data = await getDetailData(url)
    new Slider({ 
      selector: '#slider', 
      data : data,
      imgPath: param.imgPath
    })
    renderDetailContent(data.detailList)    
    addEvents()
  }

  const getDetailData = async (url) => {
    const res = await fetch(url)
    const { data } = await res.json()
    return data
  }

  const renderDetailContent = (detailList = []) => {
    const detailContents = detailList.length ? getDetailHtml(detailList) : msg.NO_DETAIL_DATA 
    detail.insertAdjacentHTML('beforeend', detailContents)
  }

  const getDetailHtml = (detailList) => {
    return detailList.reduce((html, detailImg, index) => {
      return html += createDetailArticle(detailImg, index)
    }, '')
  }

  const createDetailArticle = (detailImg, index) => {
    let attr = !index ? 'src' : 'data-src'
    return `<article class="QBXjJ M9sTE h0YNM SgTZ1 Tgarh ">
              <img style="width: 100%; height: auto;" ${attr}="${param.imgPath + detailImg}">
            </article>`
  }

  const addEvents = () => {
    window.addEventListener('scroll', onScroll)
  }

  const removeEvents = () => {
    window.removeEventListener('scroll', onScroll)
  }

  // XXX 쓰로틀링이 제대로 들어간것인지 이렇게 구현하는방법이 옳은지 알려주세요!
  const onScroll = () => {
    if(!flag) {
      flag = true

      setTimeout(() => {
        const current = document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const percentage = (current / docHeight) * 100
    
        // XXX 스크롤 했을때 다음 detail image를 보여주는 코드가 너무 복잡한것 같아 혹시 다른 방법이 있는지 궁금합니다.
        if (percentage >= 80) {
          const waitingDetail = Array.from(detail.children)
            .filter((a, index) => index !== 0)
            .filter(article => article.querySelector('img').hasAttribute('data-src'))
    
            const firstDetail = waitingDetail[0]
            if(!firstDetail) return
    
            const firstImg = firstDetail.children[0]
            if(!firstImg.hasAttribute('data-src')) return
    
            const src = firstImg.getAttribute('data-src')
            firstImg.removeAttribute('data-src')
            firstImg.setAttribute('src', src)
        }

        flag = false

      }, 250)
      
    } 
  }

  // XXX destroy는 arrow function으로 쓸수 없는 이유는 무엇입니까?
  const destroy = function() {
    removeEvents()
  }

  create()

  return {
    destroy
  }
}

export default Detail