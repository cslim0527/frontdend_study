import Slider from './Slider.js'


// TODO 페이지네이션 하드코딩 걷어내기
const Detail = function(param = {}) {
  const detail = param.parent.querySelector(param.selector)
  const msg = {  NO_DETAIL_DATA : '상세정보가 없습니다.' }
  let url = param.url + param.id
  let isLoading = false
  let imgList = [];

  const create = async () => {
    console.log('[Detail] create()')
    const data = await getDetailData(url)
    new Slider({ 
      selector: '#slider', 
      data : { imgList: data.imgList },
      imgPath: param.imgPath
    })
    imgList = renderDetailContent(data.detailList)
    loadImgMore();
    addEvents()
  }

  const getDetailData = async (url) => {
    const res = await fetch(url)
    const { data } = await res.json()
    return data
  }

  const renderDetailContent = (detailList = []) => {
    const dummy = document.createElement('template');
    dummy.innerHTML = detailList.length ? getDetailHtml(detailList) : msg.NO_DETAIL_DATA
    const imgList = Array.from(dummy.content.children);
    detail.appendChild(dummy.content);
    return imgList;
  }

  const getDetailHtml = (detailList) => {
    return detailList.reduce((html, detailImg, index) => {
      return html += createDetailArticle(detailImg, index)
    }, '')
  }

  const createDetailArticle = detailImg => {
    return `<article class="QBXjJ M9sTE h0YNM SgTZ1 Tgarh ">
              <img style="width: 100%; height: auto;" data-src="${param.imgPath + detailImg}">
            </article>`
  }

  const addEvents = () => {
    window.addEventListener('scroll', onScroll)
  }

  const removeEvents = () => {
    window.removeEventListener('scroll', onScroll)
  }

  const loadImgMore = () => {
    const firstImg = imgList
      .map(article => article.firstElementChild)
      .find(img => img.hasAttribute('data-src'));

    firstImg.setAttribute('src', firstImg.getAttribute('data-src'));
    firstImg.removeAttribute('data-src');
    return firstImg;
  }

  const onScroll = () => {
    if(isLoading) {
        return;
    }
    isLoading = true;
    setTimeout(() => {
        const current = document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const percentage = (current / docHeight) * 100
        if(percentage < 80) {
            isLoading = false;
            return;
        }
        const firstImg = loadImgMore();
        const lastImg = imgList[imgList.length - 1].firstElementChild;
        if(firstImg === lastImg) {
            removeEvents();
        }
        // TODO AS-IS 로딩중 다음로드 막기 -> TO-BE 로딩중 다음로드 적재 후 이전로드 완료시 로드수행
        firstImg.onload = e => {
            isLoading = false;
        }
    }, 250)
  }

  const destroy = function() {
    removeEvents()
  }

  create()

  return {
    destroy
  }
}

export default Detail