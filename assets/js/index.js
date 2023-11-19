const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $('.menu');

menu.onclick = function (e) {
    const list = this.children;
    for (let key in list) {
        if (list.hasOwnProperty(key)) {
            list[key].children[0].className="";
        }
    }
    e.target.className="action";
}

const sectionOne = $('#home');
console.dir(sectionOne);

