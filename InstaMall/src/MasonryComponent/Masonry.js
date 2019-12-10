const Masonry = (function() {
  const masonry = document.getElementById('masonry'),
        loading = document.querySelector('._4emnV'),
        moreBtn = document.querySelector('#btnMore'),
        url = 'https://my-json-server.typicode.com/it-crafts/mockapi/feed/',
        imgPath = 'https://raw.githubusercontent.com/it-crafts/mockapi/master/'
        
  let page = 1,
      totalPage = 1,
      masonryData = []

  const create = async () => {
    console.log('[Masonry] create()')

    initTotalPage()
    masonryData = await ajaxMasonryData()
    renderMasonryData(masonryData)
    renderRepositionLayout()
    addEvent()

    loading.style.display = 'none'
  }

  const addEvent = () => {
    moreBtn.addEventListener('click', handleClickMore)
    window.addEventListener('resize', handleResize)
  }

  const removeEvent = () => {
    moreBtn.removeEventListener('click', handleClickMore)
  }

  const ajaxMasonryData = async () => {
    const res = await fetch(url + page++)  
    const { data } = await res.json()

     // 임시 랜덤 height
     data.map(data => {
      const rand = Math.random();
      if(rand > 0.5) {
          data.height = 140;
      } else {
          data.height = 170;
      }
    })

    return data
  }

  const initTotalPage = async () => {
    const info = await getMasonryInfo(url)
    totalPage = info.totalPage
    console.log(totalPage)
  }

  const getMasonryInfo = async (url) => {
    const res = await fetch(url + 'info');
    const { data } = await res.json();
    return data
  }

  const handleClickMore = async () => {

    if (loading.style.display === '') return
    loading.style.display = ''
    moreBtn.style.display = 'none'
    
    const nextData = await ajaxMasonryData()
  
    masonryData = masonryData.concat(nextData)
    renderMasonryData(masonryData)
    renderRepositionLayout()
    
    loading.style.display = 'none'
    moreBtn.style.display = ''
    
    if (page > totalPage) {
      removeEvent()
      moreBtn.style.display = 'none'
      return
    }

  }

  const handleResize = () => {
    renderRepositionLayout()
  }

  const renderRepositionLayout = () => {
    console.log('[Masonry] renderRepositionLayout()')

    const items = masonry.querySelectorAll('._bz0w')
    let top1 = 0, top2 = 0, left1 = 0, left2 = 0

    Array.from(items).forEach(item => {

      const top = top1 < top2 ? top1 : top2;
      const left = top1 < top2 ? left2 : left1;

      item.style.top = top + 'px';
      item.style.left = left + 'px';
      
      if(top1 < top2) {
          left1 = 0;
          top1 += item.offsetHeight;
      } else {
          left2 = item.offsetWidth;
          top2 += item.offsetHeight;
      }
    })
    
    const topLarge = top1 > top2 ? top1 : top2;
    masonry.style['padding-bottom'] = topLarge + 'px';
  }

  const renderMasonryData = (data = []) => {
    masonry.innerHTML = data.length ? getMasonryHtml(data) : '데이터가 존재하지 않습니다.'
  }

  const getMasonryHtml = (data) => {
    return data.reduce((html, item) => {
      return html += createMasonryItem(item)
    },'')
  } 

  const createMasonryItem = (item) => {
    return `<a class="_bz0w" href="javascript:;" style="width:50%; position: absolute; left: 0px; top: 0px;">
              <div role="button" tabindex="0" class="A-NpN">
                <div class="lVhHa RNL1l"
                  style="background-image: url('${imgPath + item.img}'); display: block; padding-top: ${item.height}%; width: 100%;">
                </div>
                <div class="qn-0x">
                  <div class="_5cOAs">
                    <div class="Rsx-c">
                      <div class="zncDM">4:42</div>
                    </div>
                    <div class="pu1E0">
                      <div class="_2XLe_">${item.text}</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>`
  }

  create()
})()