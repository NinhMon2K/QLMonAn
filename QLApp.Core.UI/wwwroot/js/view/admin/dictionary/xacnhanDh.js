﻿class xacnhanDH {
    constructor() {
        this.init();
    }
    init() {
       this.load_waiting_confirmation();//Load xác nhận hàng

    }
    load_waiting_confirmation() {
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
                <th class="sdt-kh">Tình trạng</th>
            </tr>
        </thead>
             <tbody class="customer-home">
        </tbody>
             `/*home*/
        let item = $('#1');
        var tb = $('#table_id');
        item.on('click', () => {
           
            if ($('.top-content').find('.container-button').length == 0) {
                let topcontents = $('.top-content');
                let $dbuttom = $('<div>', {
                    class: 'container-button'
                }).appendTo(topcontents);
                let $buttoms = $('<buttom>', {
                    class: 'btn btn-browser',
                    text: 'Duyệt'
                }).appendTo($dbuttom);
            } else {
            tb.html('');
            tb.append(theaders);

            }
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

var oxacnhanDH = new xacnhanDH();