

var iconRightMenu = 'ti-angle-right';
var dsMenuLayout = [
    {
        iconLeftMenu: 'fas fa-mobile-alt',
        nameMenu: 'Điện thoại',
        id: 1,
    },
    {
        iconLeftMenu: 'fas fa-laptop',
        nameMenu: 'Laptop,PC,Màn hình',
        id: 2

    },
    {
        iconLeftMenu: 'fas fa-headphones-alt',
        nameMenu: 'Âm thanh',
        id: 3

    },
    {
        iconLeftMenu: 'far fa-clock',
        nameMenu: 'Đồng hồ',
        id: 4

    },
    {
        iconLeftMenu: 'fas fa-home',
        nameMenu: 'Nhà thông minh',
        id: 5

    },
    {
        iconLeftMenu: 'far fa-keyboard',
        nameMenu: 'Phụ kiện',
        id: 6

    },
    {
        iconLeftMenu: 'fas fa-sync',
        nameMenu: 'Thu cũ',
        id: 7

    },
    {
        iconLeftMenu: 'fas fa-cube',
        nameMenu: 'Hàng cũ',
        id: 8

    },
    {
        iconLeftMenu: 'fas fa-sim-card',
        nameMenu: 'Sim thẻ',
        id: 9

    },
    {
        iconLeftMenu: 'far fa-newspaper',
        nameMenu: 'Tin công nghệ',
        id: 10

    },
    {
        iconLeftMenu: 'fas fa-bullhorn',
        nameMenu: 'Khuyến mãi',
        id: 11

    },
];
var dsSubMenuLayout = [
    {
        nameSubMenu: 'Apple',
        parent: 1,
        itemid : 1
    },
    {
        nameSubMenu: 'Samsung',
        parent: 1,
        itemid: 2
    },
    {
        nameSubMenu: 'Xiaomi',
        parent: 1,
        itemid: 3
    },
    {
        nameSubMenu: 'OPPO',
        parent: 1,
        itemid: 4
    },

    {
        nameSubMenu: 'Nokia',
        parent: 1,
        itemid: 5
    },
    {
        nameSubMenu: 'Realme',
        parent: 1,
        itemid: 6
    },
    {
        nameSubMenu: 'Vsmart',
        parent: 1,
        itemid: 7
    },
    {
        nameSubMenu: 'ASUS',
        parent: 1,
        itemid: 8
    },
    {
        nameSubMenu: 'Vivo',
        parent: 1,
        itemid: 9
    },
    {
        nameSubMenu: 'One Plus',
        parent: 1,
        itemid: 10
    },
    {
        nameSubMenu: 'POCO',
        parent: 1,
        itemid: 11
    },
    {
        nameSubMenu: 'Nubia',
        parent: 1,
        itemid: 12
    },
    {
        nameSubMenu: 'Điện thoại phổ thông',
        parent: 1,
        itemid: 13
    },
    {
        nameSubMenu: 'Tin đồn - Mới ra',
        parent: 1,
        itemid: 14
    },
    {
        nameSubMenu: 'Mac',
        parent: 2,
        itemid: 14
    },
    {
        nameSubMenu: 'HP',
        parent: 2,
        itemid: 14
    },
    {
        nameSubMenu: 'Dell',
        parent: 2,
        itemid: 14
    },
    {
        nameSubMenu: 'Lenovo',
        parent: 2,
        itemid: 14
    },
    {
        nameSubMenu: 'Microsoft Surface',
        parent: 2,
        itemid: 14
    },
    {
        nameSubMenu: 'ASUS',
        parent: 2,
        itemid: 14
    },
];

var dsPhone = [
    {
        nameSubMenu: 'iPhone 12 Series',
        iditem: 1
    },
    {
        nameSubMenu: 'iPhone 11 Series',
        iditem: 1
    },
    {

        nameSubMenu: 'iPhone X | XR',
        iditem: 1
    },
    {

        nameSubMenu: 'iPhone SE 2020',
        iditem: 1
    },
    {

        nameSubMenu: 'iPhone 13 Series',
        iditem: 1
    },
    {

        nameSubMenu: 'MacBook Air',
        iditem: 2
    },
    {

        nameSubMenu: 'MacBook Pro',
        iditem: 3
    },
    {

        nameSubMenu: 'Mac mini',
        iditem: 3
    },
    {

        nameSubMenu: 'iMac',
        iditem: 3
    },
    {

        nameSubMenu: 'iPhone 12 Series',
        iditem: 3
    },
    {

        nameSubMenu: 'iPhone 12 Series',
        iditem: 3
    },
    {

        nameSubMenu: 'iPhone 12 Series',
        iditem: 3
    },
    {

        nameSubMenu: 'iPhone 12 Series',
        iditem: 3
    },
    {

        nameSubMenu: 'iPhone 12 Series',
        iditem: 3
    },
];
var dsItemMenuLayout = [
    {
        nameSubMenu: 'cc',
        iditem: 1
    },
    {
        nameSubMenu: 'ccbb',
        iditem: 1
    },
    {

        nameSubMenu: 'ccbb',
        iditem: 1
    },
    {

        nameSubMenu: 'ccbb',
        iditem: 2
    },
    {

        nameSubMenu: 'ccbb',
        iditem: 2
    },



];




var listMenu = $('.slidebar__list');

var ulSubnav = $('<ul>', {
    class: 'slidebar__item__submenu__list list-2',
}).appendTo('slidebar__item__submenu');
var hs = $('<div>', {
    class: 'slidebar__item__submenu__second',
}).appendTo('slidebar__item__submenu__item');
var ulSubnav = $('<ul>', {
    class: 'slidebar__item__submenu__list list-3',
}).appendTo(hs);

var listItemMenu = $('.list-3');
var i = 0;
var j = 0;

function itemMenu() {

    listMenu.html('')

    dsMenuLayout.forEach((value, index) => {
        let items = $('<li>', {
            class: 'slidebar__item item-nav-' + index,
            data: value
        }).appendTo(listMenu);
        let alink = $('<a>', {
            class: 'slidebar__item__link',
        }).appendTo(items);


        let linktext = $('<div>', {
            class: 'slidebar__item__link__text__wrapper',
        }).appendTo(alink);

        let linktextRight = $('<div>', {
            class: 'slidebar__item__link__icon__last__wrapper',
        }).appendTo(alink);

        let linktextIcon = $('<div>', {
            class: 'slidebar__item__link__text__wrapper__icon__box',
        }).appendTo(linktext);
        let a = $('<i>', {
            class: value.iconLeftMenu,
        }).appendTo(linktextIcon);
        let p = $('<p>', {
            text: value.nameMenu,
        }).appendTo(linktext);

        
        let childs = dsSubMenuLayout.filter(x => x.parent == value.id);
        if (childs.length > 1) {
            let subnav = $('<div>', {
                class: 'slidebar__item__submenu',
            }).appendTo(items);
            let ulSubnav = $('<ul>', {
                class: 'slidebar__item__submenu__list list-2',
            }).appendTo(subnav);
            let iconRight = $('<i>', { class: iconRightMenu, }).appendTo(linktextRight);
            dsSubMenuLayout.filter(x => x.parent == value.id).forEach((x, i) => { itemSubMenu(ulSubnav, x, i) });
        }


    })


}
itemMenu();


function itemSubMenu(listSubMenu, value, index) {

    let items = $('<li>', {
        class: 'slidebar__item__submenu__item item-subnav-' + index,
        data: value
    }).appendTo(listSubMenu);
    let alink = $('<a>', {
        class: 'slidebar__item__submenu__item__link link-item-'+i,
    }).appendTo(items);
   
    let p = $('<p>', {
        text: value.nameSubMenu,
    }).appendTo(alink);
    

    let childss = dsPhone.filter(x => x.iditem == value.itemid);
  
    let chi = dsItemMenuLayout.filter(x => x.iditem == value.itemid);
    if (chi.length > 1) {
        let hs = $('<div>', {
            class: 'slidebar__item__submenu__second',
        }).appendTo(items);
        let ulSubnav = $('<ul>', {
            class: 'slidebar__item__submenu__list list-3',
        }).appendTo(hs);
        let iconRight = $('<i>', {
            class: iconRightMenu,
        }).appendTo(alink);
        dsItemMenuLayout.filter(x => x.iditem == value.itemid).forEach((x, i) => { itemNameMenu(ulSubnav, x, i) })
    }
    

};



function itemNameMenu(listItemMenu, value, index) {

    let items = $('<li>', {
        class: 'slidebar__item__submenu__item item-' + index++,
        data: value

    }).appendTo(listItemMenu);
    let alink = $('<a>', {
        class: 'slidebar__item__submenu__item__link',
    }).appendTo(items);

    let p = $('<p>', {
        text: value.nameSubMenu,
    }).appendTo(alink);
    j++;
};

$('.link-item-' + i).hover(function (e) {
    let item = $(e.currentTarget);
    $('.link-item-' + i).removeClass('active')
    item.addClass('active')
});

