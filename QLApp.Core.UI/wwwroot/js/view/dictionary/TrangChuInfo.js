class trangchuinfo {
    constructor() {
        this.init();
    }
    init() {
        this.initProduct();
        this.actionLinks();
        this.initStar();
        this.initImage();
        this.actionSwiperLazy();
        this.addComboDomain();
        this.initProductInfo();
        this.actionPageInfo();
    }
    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
    }
    initProductInfo() {
        let me = this;

        AppAjax.Ajax(this.callApi('Load_DS_sanpham_info'), {}, {}, function (data) {
            let listPhones = $('.list-product-phones');

            data.forEach((data, i) => {
                ++i;
                let imgPhone = '';

                if (data.Name_sp.includes('Samsung Galaxy A73')) {
                    imgPhone = '../../../../../images/Phone/SamSung/galaxy-a73/' + data.Image;
                } if (data.Name_sp.includes('Samsung Galaxy S22 Ultra')) {
                    imgPhone = '../../../../../images/Phone/SamSung/galaxys22ultra/' + data.Image;

                }

                /* var a = '../../../Admin/Frontend/' + value.HinhAnh;*/
                let PriceKM = data.Price - (data.Price * data.Price_km) / 100;
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
                        else if (datas.Sao) {

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
    addComboDomain() {
       

    }

    actionSwiperLazy() {
        let l = 358;
        let positionX = 0;
        let index = 0
        var NextBtn = $('.swiper-lazy__top__next__btn');
        var PrevtBtn = $('.swiper-lazy__top__prev__btn');
        var SlideWrapper = document.querySelector('.swiper-lazyr__top__wrapper')
        NextBtn.on('click', function () {
            Handle(1)
        });
        PrevtBtn.on('click', function () {
            Handle(-1)
        });
        function Handle($number) {
            if ($number == 1) {
                if (index >= 5) return
                positionX = positionX - l
                SlideWrapper.style = `transform: translateX(${positionX}px);`
                ++index
                console.log('index', index)
            }
            else if ($number == -1) {
                if (index <= 0) return
                positionX = positionX + l
                SlideWrapper.style = `transform: translateX(${positionX}px);`
                --index
            }
        }
    }
    initImage() {
        let me = this;
        let Id_sp = AppUtil.getParam();
        let boxImage = $('.swiper-lazyr__top__wrapper');
        let list_swiper_wrapper = $('.list_swiper_bottom_wrapper');

        AppAjax.Ajax(me.callApi('Load_Color_Image'), {}, Id_sp, function (data) {
            console.log(data);
            list_swiper_wrapper.html('');
            data.forEach((data, i) => {
                let img = $('<img>', {
                    src: '../../../../../images/Phone/SamSung/galaxy-a73/' + data.Image
                }).appendTo(boxImage);
                let li = $('<li>', {
                    class: 'item_swiper-wrapper',
                    id:'item_swiper-wrapper'+i
                }).appendTo(list_swiper_wrapper);
                let imgWrapper = $('<img>', {
                    src: '../../../../../images/Phone/SamSung/galaxy-a73/' + data.Image
                }).appendTo(li);

            })
        })
    }
    initStar() {
        //header
        let me = this;
        let icons = $('.icon-right-info');
        let evaluate_info = $('.container-evaluate-info');
        let Id_sp = AppUtil.getParam();
        AppAjax.Ajax(me.callApi('Load_DanhGia'), {}, Id_sp, function (data, i) {
            console.log(data);
            icons.html('');
            evaluate_info.html('');
            data.forEach((data) => {
                if (data.Sao == 1) {
                    let icon1 = $('<i>', {
                        class: 'fas fa-star'
                    }).appendTo(icons);
                    let $evaluateLeft = $('<p>', {
                        text: data.Sum,
                        id: 'evaluate' + i

                    }).appendTo(evaluate_info);
                    let $evaluateRight = $('<p>', {
                        text: 'đánh giá',
                    }).appendTo(evaluate_info);
                } else if (data.Sao == 2) {
                    let icon1 = $('<i>', {
                        class: 'fas fa-star'
                    }).appendTo(icons);
                    let icon2 = $('<i>', {
                        class: 'fas fa-star'
                    }).appendTo(icons);
                    var $evaluateLeft = $('<p>', {
                        text: data.Sum,
                        id: 'evaluate' + i

                    }).appendTo(evaluate_info);
                    let $evaluateRight = $('<p>', {
                        text: 'đánh giá',
                    }).appendTo(evaluate_info);
                }
                else if (data.Sao == 3) {
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
                        text: data.Sum,
                        id: 'evaluate' + i

                    }).appendTo(evaluate_info);
                    let $evaluateRight = $('<p>', {
                        text: 'đánh giá',
                    }).appendTo(evaluate_info);
                }
                else if (data.Sao == 4) {
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
                        text: data.Sum,
                        id: 'evaluate' + i

                    }).appendTo(evaluate_info);
                    let $evaluateRight = $('<p>', {
                        text: 'đánh giá',
                    }).appendTo(evaluate_info);
                }
                else if (data.Sao >= 5) {
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
                        text: data.Sum,
                        id: 'evaluate' + i

                    }).appendTo(evaluate_info);
                    let $evaluateRight = $('<p>', {
                        text: 'đánh giá',
                    }).appendTo(evaluate_info);
                }
                else if (data.Sao) {

                }
            });

        })

                //end
    }
    initProduct() {
        let me = this;
        let Id_SP = AppUtil.getParam();
        let PriceKM;
        let Price;
        let $boxprice = $('.box-info_Price');
        let ulSwattch_color = $('.configurable_swatch_color');
        let NameSP = $('.left-header-info');
        $('.list_swiper_bottom_wrapper').html('');
       
        console.log(Id_SP);
        var list_linked = $('.list-linked');
        AppAjax.Ajax(this.callApi('Load_ALL_DS_sanpham'), {}, {}, function (data) {
            console.log(data);
            data.forEach((data, i) => {

            })
        })
        
        

        AppAjax.Ajax(me.callApi('Load_Loai_SP'), {}, Id_SP, function (data, i) {

            data.forEach((data, i) => {
                NameSP.find('p').html('');
               
                NameSP.find('p').text(data.Name_sp);
                PriceKM = data.Price - (data.Price * data.Price_km) / 100;
                Price = data.Price;
                let $alinked = $('<a>', {
                    class: 'item-linked linked-' + i,
                    data: {
                        Id_ct_sp: data.Id_ct_sp,
                        Id_sp: data.Id_sp,
                        Memorys: data.internal_Memory
                    }
                }).appendTo(list_linked);
                let $pRam = $('<strong>', {
                    text: data.internal_Memory
                }).appendTo($alinked);
                let $pPrice = $('<p>', {
                    text: new Intl.NumberFormat().format(PriceKM) + ' đ'
                }).appendTo($alinked);
                let Id_SP = data.Id_sp;
                let Internal_Memorys = data.internal_Memory;
                let ds = {
                    Id_SP: Id_SP,
                    Internal_Memorys: Internal_Memorys
                };

               
                AppAjax.Ajax(me.callApi('Load_Swatch_Color_SP'), {}, ds, function (data, i) {
                    ulSwattch_color.html('');
                    data.forEach((data, i) => {
                       
                        let liW = $('<li>', {
                            class: 'item-color wide-swatch swatch' + i
                        }).appendTo(ulSwattch_color);
                        let diW = $('<div>', {
                            class: 'img_phones'
                        }).appendTo(liW);
                        let ingPhone = $('<img>', {
                            src: '../../../../../images/Phone/SamSung/galaxy-a73/' + data.Image
                        }).appendTo(diW);

                        let $alinked = $('<a>', {
                            class: 'item-wide_swatch linkeds-' + i,
                            //data: {
                            //    Id_ct_sp: data.Id_ct_sp,
                            //    Id_sp: data.Id_sp,
                            //    Memorys: data.internal_Memory
                            //}
                        }).appendTo(liW);
                        

                        let $pRam = $('<strong>', {
                            text: data.Color
                        }).appendTo($alinked);
                        let $pPrice = $('<p>', {
                            text: new Intl.NumberFormat().format(PriceKM) + ' đ'
                        }).appendTo($alinked);

                    })

                })




            })
          
            let pPriceLeft = $('<p>', {
                class: 'special-price', text: new Intl.NumberFormat().format(PriceKM) + 'đ'
            }).appendTo($boxprice);
            let pPriceRight = $('<p>', {
                class: 'special-price', text: new Intl.NumberFormat().format(Price) + 'đ'
            }).appendTo($boxprice);


        })

    }
    actionLinks() {
        let me = this;
        let PriceKM;
        let Price;
      
        let $boxprice = $('.box-info_Price');
        let ulSwattch_color = $('.configurable_swatch_color');
        $('.item-linked').on('click', (e) => {
            let Id_SP = $(e.currentTarget).data('Id_sp');
            let Internal_Memorys = $(e.currentTarget).data('Memorys');
            let ds = {
                Id_SP: Id_SP,
                Internal_Memorys: Internal_Memorys
            };

            AppAjax.Ajax(me.callApi('Load_Swatch_Color_SP'), {}, ds, function (data, i) {
                ulSwattch_color.html('');

                data.forEach((data, i) => {
                    PriceKM = data.Price - (data.Price * data.Price_km) / 100;
                    Price = data.Price;
                    let liW = $('<li>', {
                        class: 'item-color wide-swatch swatch' + i
                    }).appendTo(ulSwattch_color);
                    let diW = $('<div>', {
                        class: 'img_phones'
                    }).appendTo(liW);
                    let ingPhone = $('<img>', {
                        src: '../../../../../images/Phone/SamSung/galaxy-a73/' + data.Image
                    }).appendTo(diW);
                    let $alinked = $('<a>', {
                        class: 'item-wide_swatch linkeds-' + i,
                        //data: {
                        //    Id_ct_sp: data.Id_ct_sp,
                        //    Id_sp: data.Id_sp,
                        //    Memorys: data.internal_Memory
                        //}
                    }).appendTo(liW);
                    let $pRam = $('<strong>', {
                        text: data.Color
                    }).appendTo($alinked);
                    let $pPrice = $('<p>', {
                        text: new Intl.NumberFormat().format(PriceKM) + ' đ'
                    }).appendTo($alinked);

                })
              

            })
            $boxprice.html('');
            let pPriceLeft = $('<p>', {
                class: 'special-price', text: new Intl.NumberFormat().format(PriceKM) + 'đ'
            }).appendTo($boxprice);
            let pPriceRight = $('<p>', {
                class: 'special-price', text: new Intl.NumberFormat().format(Price) + 'đ'
            }).appendTo($boxprice);
        });
       

    }
    actionPageInfo() {
        $('.item-product').on('click', (e) => {
            var u = $(e.currentTarget).data('maSP');
            let url = '/Dictionary/TrangChuInfo';
            AppUtil.ee(url, { Id_SP: u });
        });
    }

}
var trangchuinfod = new trangchuinfo();