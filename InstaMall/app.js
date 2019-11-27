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

// const root = (() => {
//     const _selector = '#app';
//     let _page;

//     const _create = () => {
//         // _page = new Feed(); // TODO 최초페이지 컴포넌트 생성 
//         _addEvent();
//     }

//     const destroy = () => {
//         _page && _page.destroy();
//         _page = null;
//         _removeEvent();
//     }

//     const _handler = function(e) {
//         if('' === loading.style.display) {
//             return;
//         }
//         const current = e.currentTarget;
//         if(current.classList.contains('T-jvg')) {
//             return;
//         }

//         Array.from(current.parentNode.childNodes)
//             .filter(node => 1 === node.nodeType && node !== current)
//             .forEach(other => {
//                 other.classList.remove('T-jvg');
//                 other.firstChild.className = other.firstChild.className.replace('blue', 'grey');
//             });
//         current.classList.add('T-jvg');
//         current.firstChild.className = current.firstChild.className.replace('grey', 'blue');

//         _page && _page.destroy();
//         // _page = new Feed(); // TODO 클릭된 페이지 컴포넌트 생성
//     };

//     const _addEvent = () => {
//         document.querySelectorAll('.fx7hk > a').forEach(tabButton => {
//             tabButton.addEventListener('click', _handler);
//         });
//     }

//     const _removeEvent = () => {
//         document.querySelectorAll('.fx7hk > a').forEach(tabButton => {
//             tabButton.removeEventListener('click', _handler);
//         });
//     }

//     _create();

//     return {
//         destroy: destroy
//     }
// })();