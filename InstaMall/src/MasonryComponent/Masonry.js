// TODO  commit
const imgPath = 'https://raw.githubusercontent.com/it-crafts/mockapi/master/'

const EventComponent = (function () {
  const Event = function (param) {
    this.url = param.url
    this.loading = document.querySelector('._4emnV')
    this.moreBtn = document.querySelector('#btnMore')
    this.page = 1
    this.totalPage = 1
    this.getInfo()
  }

  Event.prototype.getData = async function () {
    const res = await fetch(this.url + this.page)
    const { data } = await res.json()

    // 임시 랜덤 height
    data.map(item => {
      const rand = Math.random();
      if (rand > 0.5) {
        item.height = 140;
      } else {
        item.height = 170;
      }
    })

    return data
  }

  Event.prototype.getInfo = async function () {
    const res = await fetch(this.url + 'info')
    const { data } = await res.json()
    this.totalPage = +data.totalPage
    return data
  }

  Event.prototype.clickMore = async function () {
    if (this.loading.style.display === '') return
    this.loading.style.display = ''
    this.moreBtn.style.display = 'none'

    this.page++

    await this.ajaxMoreData()

    this.loading.style.display = 'none'
    this.moreBtn.style.display = ''

    if (this.page >= this.totalPage) {
      this.removeEvent()
      this.moreBtn.style.display = 'none'
      return
    }
  }

  return Event
})()


const Auto = (function () {
  const Masonry = function (param) {
    EventComponent.call(this, param)

    this.el = document.getElementById(param.id)
    this.url = param.url
    this.data = []

    this.init = async () => {
      this.data = await this.getData()
      this.renderMasonryData(this.data)
      this.renderRepositionLayout()
      this.addEvent()
      this.loading.style.display = 'none'
    }

  
    this.addEvent = () => {
      this.moreBtn.addEventListener('click', this.handleClickMore)
      window.addEventListener('resize', this.handleResize)
    }

    this.removeEvent = () => {
      this.moreBtn.removeEventListener('click', this.handleClickMore)
    }

    this.handleClickMore = () => {
      this.clickMore()
    }

    this.ajaxMoreData = async () => {
      const nextData = await this.getData()
      this.renderMasonryData(nextData)
      this.renderRepositionLayout()
    }

    this.handleResize = () => {
      this.renderRepositionLayout()
    }

    this.renderMasonryData = (data = []) => {
      console.log('..rendering..', data)
      const fragment = document.createElement('template')
      fragment.innerHTML = data.length ? this.getMasonryHtml(data) : '데이터가 존재하지 않습니다.'
      this.el.appendChild(fragment.content)
    }

    this.getMasonryHtml = (data) => {
      return data.reduce((html, item) => {
        return html += this.createMasonryItem(item)
      }, '')
    }

    this.createMasonryItem = (item) => {
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

    this.renderRepositionLayout = () => {

      const items = this.el.querySelectorAll('._bz0w')
      let top1 = 0, top2 = 0, left1 = 0, left2 = 0

      Array.from(items).forEach(item => {

        const top = Math.min(top1, top2)
        const left = top1 < top2 ? left2 : left1;

        item.style.top = top + 'px';
        item.style.left = left + 'px';

        if (top1 < top2) {
          left1 = 0;
          top1 += item.offsetHeight;
        } else {
          left2 = item.offsetWidth;
          top2 += item.offsetHeight;
        }
      })

      const topLarge = Math.max(top1, top2)
      this.el.style['padding-bottom'] = topLarge + 'px';
    }

    this.ajaxMasonryData = async () => {

      this.data = await this.getData()

      return this.data
    }

    this.init()
  }

  Masonry.prototype = Object.create(EventComponent.prototype)
  Masonry.prototype.contructor = Masonry

  new Masonry({
    id: 'masonry',
    url: 'https://my-json-server.typicode.com/it-crafts/mockapi/feed/'
  })

  return Masonry
})()
