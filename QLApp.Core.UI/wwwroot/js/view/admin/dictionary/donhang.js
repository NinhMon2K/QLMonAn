class donhang {
    constructor() {
        this.init();
    }
    init() {
        this.itemMenu();
        this.setBachgroud();
        
        this.load_home();//Load home
        //this.load_preparing_goods();//Load chuan bi hang
        //this.load_waiting_confirmation();//Load xác nhận hàng
        //this.load_pick_store();//Load tai cua hang
        //this.load_cuccessful();//Load hoan thanh
        //this.load_delivering();//Load dang giao
        this.loadDataMenu();
        
    }
    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
    }
    loadDataMenu() {
        let me = this;
        AppAjax.Ajax(this.callApi('LoadMenuDh'), {}, {}, function (data) {
            data.forEach((data,i) => {
            $('#0 .total').text(data.Tong);
            $('#1 .total').text(data.Checks);
            $('#2 .total').text(data.Chuanbihang);
            $('#3 .total').text(data.Dadonghang);
            $('#4 .total').text(data.DangGiao);
            $('#5 .total').text(data.HoanThanh);

            });
        });
        
    }
    

   
    itemMenu() {
        let arr = [{
            indexTotal: '0',
            name: 'Home',
            iconItem: 'ti-home',
            link: 'Home.php'
        },

        {
            indexTotal: '0',
            name: 'Chờ xét duyệt , xác nhận',
            iconItem: 'ti-bookmark-alt',
            link: 'Duyet.php'
        },
        {
            indexTotal: '0',
            name: 'Chuẩn bị hàng',
            iconItem: 'ti-check-box',
            link: 'Daxacnhan.php'
        },
        {
            indexTotal: '0',
            name: 'Nhận tại cửa hàng',
            iconItem: 'ti-package',
            link: 'Chuanbi.php'
        },

        {
            indexTotal: '0',
            name: 'Đang giao',
            iconItem: 'fas fa-shipping-fast',
            link: 'DangGiao.php'
        },
        {
            indexTotal: '0',
            name: ' Đã hoàn thành',
            iconItem: 'ti-check',
            link: 'HoanThanh.php'
        },

        ];
        let list = $('.menu-group').html('');
        let i = 0;
        arr.forEach((x, i) => {
            let $item = $('<a>', {
                id: i,
                class: 'item-navbar',
                data: {
                    index: i
                }

            }).data('data', x).appendTo(list);

            let $navbarLeft = $('<div>', {
                class: 'navbar-left'
            }).appendTo($item);
            let $navbarRight = $('<div>', {
                class: 'navbar-right'
            }).appendTo($item);

            let $total = $('<div>', {
                class: 'total',
                text: x.indexTotal
            }).appendTo($navbarLeft);
            let $nametotal = $('<div>', {
                class: 'name-total',
                text: x.name
            }).appendTo($navbarLeft);


            let $icon = $('<div>', {
                class: 'icon-navbar'
            }).appendTo($navbarRight);
            let $ic = $('<i>', {
                class: x.iconItem
            }).appendTo($icon);
        }



        )
    }

    setBachgroud() {
        let items = $('.item-navbar');
        let itemss = $('#0');
        itemss.addClass('active');
        items.on('click', (e) => {
            var h = $(e.currentTarget).data('index');
            console.log(h);
            items.removeClass('active');
            $('#' + h).addClass('active');
        });

    }
    load_home() {
        let theaders = `
           <thead>
            <tr>
                <th class="text-center ck_All">
                    <input type="checkbox" name="name" class="check_item" />
                </th>
                <th class="stt">STT </th>
                <th class="name-kh">Tên khách hàng</th>
                <th class="sdt-kh">Ngày tạo đơn</th>
                <th class="sdt-kh">Nhân viên giao hàng</th>
                <th class="sdt-kh">Địa chỉ</th>
                <th class="sdt-kh">Ghi chú</th>
                <th class="sdt-kh">Tổng tiền</th>
                <th class="sdt-kh">Tình trạng</th>
            </tr>
        </thead>
             <tbody class="customer-home">
        </tbody>
             `/*home*/
        let item = $('#0');
        var tb = $('#table_id');
        tb.html('');
        tb.append(theaders);
        item.on('click', () => {
            tb.html('');
            tb.append(theaders);
        });
        let me = this;

        //AppAjax.Ajax(this.callApi('LoadHomeDH'), {}, {}, function (data) {
        //    var contentTables = $('.customer-home');

        //    data.forEach((data, i) => {
        //        ++i;
        //        var tableRow = document.createElement('tr');
        //        tableRow.innerHTML = `
        //            <td class='check-box-index ck_All'><input type='checkbox' class='check_item' name='' value='' onclick="changeCheck('${data.Id_KH}')"> </td>
        //                 <td class='stt'>${i}</td>
        //                <td>${data.NameKH}</td>
        //                <td class='text-right size-td'>${data.SDT}</td>
        //                <td class='text-right size-td'>${data.Mail}</td>
        //                <td class='text-right size-td'>${data.SDT}</td>
        //                <td class='text-right size-td'>${data.Mail}</td>
        //                <td class='text-right size-td'>${data.SDT}</td>
        //                <td class='text-right size-td'>${data.Mail}</td>
        //                <td class='text-right size-td'>${data.SDT}</td>
        //                <td class='text-right size-td'>${data.Mail}</td>

        //                 `;

        //        contentTables.append(tableRow);

        //    });

        //$("tr:not(:first-child)").each(function (index) {
        //    $(this).css('animation-delay', index * 0.5 + 's');
        //});
    }
   
}

var odonhang = new donhang();