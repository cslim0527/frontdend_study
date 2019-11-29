// setActiveTab 시 app.js의 CURRENT_TAB 상태값으로 변경되도록 수정

// TODO 최초 진입시에 버튼ON 처리가 안 되어 있습니다
const Tab = function(selector) {
    const _tab = document.querySelector(selector)
    const loading = document.querySelector('._4emnV')
    const onClickEvent = function(e){onClickTab(e)}
    let tabBtns = _tab.querySelectorAll('._9VEo1 ')

    const create = () => {
        addEvents()
    }

    const addEvents = () => {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', onClickEvent)
        })
    }

    const removeEvents = () => {
        tabBtns.forEach(btn => {
            btn.removeEventListener('click', onClickEvent)
        })
    }

    // TODO 각 컴포넌트 created 전에 버튼클릭 방지 해주세요
    // 저는 그냥 임시로 로딩이미지ON 여부만 보고 예외처리 했습니다
    const onClickTab = (e) => {
        if(loading.style.display === '') {
            return
        }
        if(e.currentTarget.classList.contains('T-jvg')) {
            return
        }

        tabBtns = Array.isArray(tabBtns) ? tabBtns : Array.from(tabBtns)
        const ACTIVE_TAB = e.currentTarget.children[0].getAttribute('aria-label')

        setActiveTab(ACTIVE_TAB)
        _tab.dispatchEvent(new CustomEvent('@change', { detail: ACTIVE_TAB }))
    }

    const setActiveTab = (entry) => {
        tabBtns.forEach(tab => {
            const tabName = tab.children[0].getAttribute('aria-label')
            if (tabName === entry) {
                tab.classList.add('T-jvg')
                tab.children[0].className = tab.children[0].className.replace(/grey/g, 'blue')
            } else {
                tab.classList.remove('T-jvg')
                tab.children[0].className = tab.children[0].className.replace(/blue/g, 'grey')
            }
        })
    }

    const destroy = function() {
        removeEvents()
    }

    create()

    return {
        destroy,
        setActiveTab
    }
}

export default Tab