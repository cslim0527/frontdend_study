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
      // FIXME 컴포넌트에 로우데이터가 내려가고 있습니다 - 필요한 데이터만 정제하여, 결합도를 낮춰주세요
      data : data.imgList,
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
    // TODO "슬라이더 영향제거 + HTML스트링 사용"을 위한 구문이죠?
    detail.insertAdjacentHTML('beforeend', detailContents)
  }

  const getDetailHtml = (detailList) => {
    return detailList.reduce((html, detailImg, index) => {
      return html += createDetailArticle(detailImg, index)
    }, '')
  }

  const createDetailArticle = (detailImg, index) => {
    // TODO 로직이 슬라이더의 존재유무에 종속적입니다 - 인덱스0 하드코딩 분기 걷어내주세요
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
  // TODO 테스트결과 정상적으로 수행되고 있습니다 - 쓰로틀링과 별개로 img.onload도 추가해서 고도화 해보세요
  // XXX img.onload로 어떠한걸 해야하는건지 TODO 내용 의미를 모르겠습니다.
  const onScroll = () => {
    if(!flag) {
      flag = true

      setTimeout(() => {
        const current = document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const percentage = (current / docHeight) * 100
    
        // XXX 스크롤 했을때 다음 detail image를 보여주는 코드가 너무 복잡한것 같아 혹시 다른 방법이 있는지 궁금합니다.
        // stateless한 괜찮은 로직인 것 같아요. 코드 정리만 했습니다.
        if (percentage >= 80) {
          const firstImg = Array.from(detail.children)
            .filter((a, index) => index !== 0) // TODO 로직이 슬라이더의 존재유무에 종속적입니다 - 인덱스0 하드코딩 필터 걷어내주세요
            .map(article => article.firstElementChild)
            .find(img => img.hasAttribute('data-src'));
    
          firstImg.setAttribute('src', firstImg.getAttribute('data-src'));
          firstImg.removeAttribute('data-src');

          const lastImg = detail.children[detail.children.length - 1].firstElementChild;
          if(firstImg === lastImg) {
            removeEvents();
          }
        }

        flag = false

      }, 250)
      
    } 
  }

  // XXX destroy는 arrow function으로 쓸수 없는 이유는 무엇입니까?
  // 써도 됩니다. public API니까 혹시라도 여기서 this를 잡을 케이스를 대비한 것 뿐입니다.
  const destroy = function() {
    removeEvents()
  }

  create()

  return {
    destroy
  }
}

export default Detail