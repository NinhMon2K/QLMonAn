

class trangchu {
    constructor() {
        this.init();
    }
    init() {
        this.randomSlider();
        this.setTranform();
        this.initProduct();
        this.actionPageInfo();
    }

    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
    }

    randomSlider() {
        let slider = $('.slider__top__wrapper');

        let index = 0;
        let l = 647;
        let positionX = 0;
        setInterval(sliderBar, 1000);
        function sliderBar() {
            let randomNumber = Math.floor(Math.random() * 5);
            switch (randomNumber) {
                case 0:
                    index = 0;
                    break;

                case 1:
                    index = randomNumber;
                    positionX = -1 * randomNumber * l;
                    slider.css('transform', `translateX(${positionX}px)`);
                    break;
                case 2:
                    index = randomNumber
                    positionX = -1 * randomNumber * l;
                    slider.css('transform', `translateX(${positionX}p)`);
                    break;
                case 3:
                    index = randomNumber
                    positionX = -1 * randomNumber * l;
                    slider.css('transform', `translateX(${positionX}px)`);
                    break;
                case 4:
                    index = randomNumber
                    positionX = -1 * randomNumber * l;
                    slider.css('transform', `tran1lateX(${positionX}px)`);
                    break;
                case 5:
                    index = randomNumber
                    positionX = -1 * randomNumber * l;
                    slider.css('transform', `translateX(${positionX}px)`);
                    break;
                default:
                    index = randomNumber
                    positionX = -1 * randomNumber
                    slider.css('transform', `translateX(${positionX}px)`);
                    break;

            }
        }

    }
    setTranform() {
        let a = $('.list-product-flash_sale');
 

    }

    initProduct() {
        let me = this;
        
        AppAjax.Ajax(this.callApi('Load_DS_sanpham'), {}, {}, function (data) {
            var listPhones = $('.list-product-phones');
     
            data.forEach((data, i) => {
                ++i;
                let imgPhone = '';
                
                if (data.Name_sp.includes('Samsung Galaxy A73')) {
                    imgPhone = '../../../../../images/Phone/SamSung/galaxy-a73/' + data.Image;
                } if (data.Name_sp.includes('Samsung Galaxy S22 Ultra')) {
                    imgPhone = '../../../../../images/Phone/SamSung/galaxys22ultra/' + data.Image;

                }

               /* var a = '../../../Admin/Frontend/' + value.HinhAnh;*/
                let PriceKM = data.Price-(data.Price * data.Price_km) / 100;
                var $item = $('<div>', {
                    id: 'dt' + i++,

                    class: 'item-product item-product-dienthoai',
                    data: {
                        maSP: data.Id_sp
                    }
                }).appendTo(listPhones);
                var $boxImg = $('<div>', {
                    class: 'item-product__box-img'
                }).appendTo($item);
                var $a = $('<a>', {
                    href: '#'
                }).appendTo($boxImg);
                var $Aimg1 = $('<img>', {
                    id: 'size-img',
                    src: imgPhone
                }).appendTo($a);
                var $boxName = $('<div>', {
                    class: 'item-product__box-name'
                }).appendTo($item);

                var $aName = $('<a>', {
                    class: 'lblTenSP',
                    href: '#'
                }).appendTo($boxName);

                var pName = $('<p>', {
                    text: data.Name_sp

                }).appendTo($aName);
                var $boxprice = $('<div>', {
                    class: 'item-product__box-price'
                }).appendTo($item);

                var pPriceLeft = $('<p>', {
                    class: 'special-price', text: new Intl.NumberFormat().format(PriceKM) + 'đ'
                }).appendTo($boxprice);
                var pPriceRight = $('<p>', {
                    class: 'special-price', text: new Intl.NumberFormat().format(data.Price) + 'đ'
                }).appendTo($boxprice);


               
                var $boxRaiting = $('<div>', {
                    class: 'item-product__box-raiting'
                }).appendTo($item);

                
                var icons = $('<div>', {
                    class: 'icon_box-raiting'
                }).appendTo($boxRaiting);


                
                var evaluate_info = $('<div>', {
                    class: 'container-evaluate'
                }).appendTo($boxRaiting);

                let Id_sp = '';
                Id_sp = data.Id_sp;
                AppAjax.Ajax(me.callApi('Load_DanhGia'), {}, { Id_sp }, function (datas, i) {
                    console.log(datas);
                    
                    datas.Sao
                    
                    datas.forEach((datas) => {
                        if (data.Sao == 1) {
                            let icon1 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let $evaluateLeft = $('<p>', {
                                text: datas.Sum,
                                id: 'evaluate' + i

                            }).appendTo(evaluate_info);
                            let $evaluateRight = $('<p>', {
                                text: 'đánh giá',
                            }).appendTo(evaluate_info);
                        } else if (datas.Sao == 2) {
                            let icon1 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon2 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            var $evaluateLeft = $('<p>', {
                                text: datas.Sum,
                                id: 'evaluate' + i

                            }).appendTo(evaluate_info);
                            let $evaluateRight = $('<p>', {
                                text: 'đánh giá',
                            }).appendTo(evaluate_info);
                        }
                        else if (datas.Sao == 3) {
                            let icon1 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon2 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon3 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let $evaluateLeft = $('<p>', {
                                text: datas.Sum,
                                id: 'evaluate' + i

                            }).appendTo(evaluate_info);
                            let $evaluateRight = $('<p>', {
                                text: 'đánh giá',
                            }).appendTo(evaluate_info);
                        }
                        else if (datas.Sao == 4) {
                            let icon1 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon2 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon3 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon4 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let $evaluateLeft = $('<p>', {
                                text: datas.Sum,
                                id: 'evaluate' + i

                            }).appendTo(evaluate_info);
                            let $evaluateRight = $('<p>', {
                                text: 'đánh giá',
                            }).appendTo(evaluate_info);
                        }
                        else if (datas.Sao >= 5) {
                            let icon1 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon2 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon3 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon4 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let icon5 = $('<i>', {
                                class: 'fas fa-star'
                            }).appendTo(icons);
                            let $evaluateLeft = $('<p>', {
                                text: datas.Sum,
                                id: 'evaluate' + i

                            }).appendTo(evaluate_info);
                            let $evaluateRight = $('<p>', {
                                text: 'đánh giá',
                            }).appendTo(evaluate_info);
                        }
                        else if (datas.Sao ) {

                        }
                    });

                })
                //bottom
                var $boxBottom = $('<div>', {
                    class: 'item-product_bottom'
                }).appendTo($item);
                var $leftBottom = $('<div>', {
                    class: 'left-bottom'
                }).appendTo($boxBottom);
                var $Rightottom = $('<div>', {
                    class: 'right-bottom'
                }).appendTo($boxBottom);
                let iconLeftBotom = $('<i>', {
                    class: 'fa fa-check'
                }).appendTo($leftBottom);
                var $pBottom = $('<p>', {
                    text: 'Còn hàng',
                }).appendTo($leftBottom);
                let iconRightBotom = $('<i>', {
                    class: 'ti-shopping-cart-full'
                }).appendTo($Rightottom);
            },
                

            );
           
        })
    }

    actionPageInfo() {
        $('.item-product').on('click', (e) => {
            var u = $(e.currentTarget).data('maSP');
            let url = '/Dictionary/TrangChuInfo';
            AppUtil.ee(url, { Id_SP: u });
        });
    }
}
var otrangchu = new trangchu();


