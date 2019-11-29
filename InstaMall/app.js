import Tab from './src/Tab.js'
import Timeline from './src/Timeline.js'
import Feed from './src/Feed.js'
import Cart from './src/Cart.js'

const root = (() => {
    const _selector = '#app';
    let _page;
    let CURRENT_TAB = '게시물'

    const create = () => {
        const TabComponent = new Tab('.fx7hk')
        document.querySelector('.fx7hk').addEventListener('@change', e => onChangePage(e.detail))
        _page = new Timeline('#app','https://my-json-server.typicode.com/it-crafts/mockapi/timeline/')
    }

    const onChangePage = (text) => {
        CURRENT_TAB = text

        _page && _page.destroy();
        _page = null

        if ( CURRENT_TAB === '게시물') {
           _page = new Timeline(_selector,'https://my-json-server.typicode.com/it-crafts/mockapi/timeline/')
        }

        if ( CURRENT_TAB === '피드') {
            _page = new Feed(_selector, 'https://my-json-server.typicode.com/it-crafts/mockapi/feed/')
         }
    }

    create()
})()
