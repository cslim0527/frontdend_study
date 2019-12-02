const Detail = function() {

    const create = () => {
        console.log('[Detail] create()')
    }

    create()
}

export default Detail

// const imgPath = 'https://raw.githubusercontent.com/it-crafts/mockapi/master';
// let width = document.body.offsetWidth;
// let page = 1;
// let total = 1;
// const slider = document.querySelector('.MreMs');
// const pagebar = document.querySelector('.ijCUd._3eoV-.IjCL9._19dxx');
// const ul = document.querySelector('#react-root > section > main > div > div > article:nth-child(1) > div._97aPb.wKWK0 > div > div > div.tN4sQ.zRsZI > div > div > div > ul');
// const leftBtn = document.querySelector('.coreSpriteLeftChevron');
// const rightBtn = document.querySelector('.coreSpriteRightChevron');

// const createLi = (data = {}) => {
//     const template = `<li class='_-1_m6' style='opacity: 1; width: ${data.width}px;'><div class='bsGjF' style='margin-left: 0px; width: ${data.width}px;'><div role='button' tabindex='0' class='ZyFrc'><div class='eLAPa RzuR0'><div class='KL4Bh' style='padding-bottom: 124.907%;'><img class='FFVAD' decoding='auto' src='${data.img}' style='object-fit: cover;'></div><div class='_9AhH0'></div></div></div></div></li>`;
//     return template;
// }

// const getData = async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data.data;
// }
// getData('https://my-json-server.typicode.com/it-crafts/mockapi/detail/1')
// .then(data => {
//     total = data.imgList.length;
//     let liList = '';
//     data.imgList.forEach(img => {
//         liList += createLi({
//             width: width,
//             img: imgPath + img
//         })
//     })
//     ul.innerHTML += liList;

//     leftBtn.addEventListener('click', function() {
//         if(page <= 1) { return; }
//         pagebar.children[page - 1].classList.remove('XCodT');
//         page--;
//         slider.style.transform = 'translateX(' + (-page + 1) * width +  'px)'
//         pagebar.children[page - 1].classList.add('XCodT');
//     });
    
//     rightBtn.addEventListener('click', function() {
//         if(page >= total) { return; }
//         pagebar.children[page - 1].classList.remove('XCodT');
//         page++;
//         slider.style.transform = 'translateX(' + (-page + 1) * width +  'px)'
//         pagebar.children[page - 1].classList.add('XCodT');
//     });
// });