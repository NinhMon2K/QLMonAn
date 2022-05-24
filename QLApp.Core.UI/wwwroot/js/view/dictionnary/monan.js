

class monan {
    constructor() {
        this.init();

    }
    init() {
        this.loadDanhSachMonAn();
        this.addForm();
        this.setImage();
        this.SaveFood();
        this.addCombobox();
        this.checkedDelete();
        this.addPage();
    }
    addPage() {

        let me = this;
        $('#table_id').DataTable(
            {
                "pageLength": 8
            }
        );

        $('#table_id_filter').html('');
        let leg = $('#table_id_length');
        leg.html('');
      /*  $('.dataTables_info').html('');*/

    }
    checkedDelete() {

        //$('.container-table').on('change', 'table .check-box-index input', e => {

        //    let input = $(e.currentTarget);
        //    let countCheck = input.closest('table').find('.check-box-index input:checked').length;
        //    $('#btnXoa').prop('disabled', !countCheck);


        //})
    }
    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
    }
    setImage() {
        let me = this;

        $('#hinhanh_ma').on('change', function (e) {
            me.file = this.files && this.files[0];
        });

    }
    addCombobox() {
        let me = this;
        let sel = $('#lt_type_dish_filter');
        AppAjax.Ajax(me.callApi('LoadLoaiMonAn'), {}, {}, function (data) {

            me.formdata = data;
            data.forEach((item, i) => {
                let opp = $('<option>', {
                    value: item.idLoai,
                    text: item.tenloai,
                    class: 'cboLoai_ma'
                }).appendTo(sel);


            });
        })



    }
    
    
    addForm() {
        let me = this;
        var dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 740,
            width: 1030,
            modal: true,

        });
        $("#btn_add").button().on("click", function () {
            dialog.dialog("open");
            me.Mode = 1;
            me.Id = null;
        });
        $('.container-table').on('click', '.btnUpdate', (e) => {
            let btn = $(e.currentTarget).data('id');
            let id = btn;
            AppAjax.Ajax(me.callApi('LoadMonAnID'), {}, { id }, function (data) {
                console.log(data);
                if (data) {
                    data.forEach((item, i) => {
                        $('#name_ma').val(item.tenmonan);
                        $('#cachlam_ma').val(item.cachlam);
                        $('#video_ma').val(item.video);
                        $('#noiban_ma').val(item.noiban);
                        $('#mota_ma').val(item.mota);
                       
                    });



                } else {
                    toastr.error('Không có dữ liêu.Thất bại!', { positionClass: 'toast-top-center' });

                }

            })
            me.Mode = 3;
            me.id = btn;
            dialog.dialog("open");
        })
        $('.btn_left').on('click', '#btn_close', (e) => {

            $('#dialog-form').dialog('close');
        });

       
    }
    SaveFood() {
        var me = this;
        Validator({
            form: '#form-1',
            formGroupSelector: '.box_right',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#name_ma', 'Vui lòng nhập tên món ăn!'),
                Validator.isRequired('#hinhanh_ma', 'Vui lòng chọn ảnh!'),
                Validator.isRequired('#video_ma', 'Vui lòng nhập tên đầy đủ của bạn'),
                Validator.isRequired('#noiban_ma', 'Vui lòng nhập nơi bán món ăn!'),
                Validator.isRequired('#mota_ma'),

            ],
            onSubmit: function (data) {
                // Call API

            }
        });
        $('.right-footer').on('click', '#btn_luu', () => {


            me.callAjaxUploadFile().then(() => {
                let anh = '';
                anh = me.anh;

                let tenmonan = $('#name_ma').val();
                let video = $('#video_ma').val();
                let mota = $('#mota_ma').val();
                let loaimon = $('#lt_type_dish_filter').val();
                let cachlam = $('#cachlam_ma').val();
                let noiban = $('#noiban_ma').val();
                let us = {
                    id:me.id,
                    tenmonan: tenmonan,
                    anh: anh,
                    video: video,
                    mota: mota,
                    idLoai: parseInt(loaimon),
                    cachlam: cachlam,
                    noiban: noiban,
                }

                switch (me.Mode) {
                    case 1: {
                        let data = {
                            Mode: 1,
                            Formdata: JSON.stringify(us)
                        }

                        AppAjax.Ajax(me.callApi('SaveFood'), { type: 'POST' }, JSON.stringify(data), function (data) {

                            if (data) {

                                toastr.success('Thêm mới thành công');
                                $('#name_ma').val('');
                                $('#cachlam_ma').val('');
                                $('#video_ma').val('');
                                $('#noiban_ma').val('');
                                $('#mota_ma').val('');

                                let a = setTimeout(() => {
                                    $('#dialog-form').dialog('close');
                                    me.loadDanhSachMonAn();
                                }, 200);

                            } else {
                                toastr.error('Thêm mới thất bại');

                            }
                        })

                        break;
                    }
                    case 3: {


                        let data = {
                            Mode: 3,
                            Formdata: JSON.stringify(us)
                        }

                        $('<div>', {
                            text: 'Bạn thực sự muốn sửa !'
                        }).dialog({
                            title: 'Cảnh báo!',
                            modal: true,

                            buttons: [{
                                text: 'Sửa',
                                class: 'btn_kt',
                                id: 'btnCheckSua',
                                click: function () {
                                    AppAjax.Ajax(me.callApi('SaveFood'), { type: 'POST' }, JSON.stringify(data), function (data) {

                                        if (data) {
                                            $('#name_ma').val('');
                                            $('#cachlam_ma').val('');
                                            $('#video_ma').val('');
                                            $('#noiban_ma').val('');
                                            $('#mota_ma').val('');
                                            toastr.success('Sửa dữ liệu thành công!', { positionClass: 'toast-top-center' })

                                            let a = setTimeout(() => {
                                                $('#dialog-form').dialog('close');
                                                me.loadDanhSachMonAn();
                                            }, 200);

                                        } else {
                                            toastr.error('Sửa dữ liệu thất bại!', { positionClass: 'toast-top-center' });

                                        }

                                    })
                                    $(this).dialog('close');
                                }
                            },
                            {
                                text: 'Không',
                                class: 'btn_kt',
                                id: 'btnCheckKhong',
                                click: function (e) {
                                    $(this).dialog('close');

                                }
                            }
                            ]
                        })


                        break;
                    }
                }
            });
        });

        $('.btn_left').on('click', '#btn_close', (e) => {
            $('#name_ma').val('');
            $('#cachlam_ma').val('');
            $('#video_ma').val('');
            $('#noiban_ma').val('');
            $('#mota_ma').val('');
            $('#dialog-form').dialog('close');
        });

    }
    loadDanhSachMonAn() {
        let me = this;

        var contentTables = $('.customer-monan');
        contentTables.html('');

        AppAjax.Ajax(me.callApi('LoadALLMonAn'), {}, {}, function (data) {
            me.formdata = data;

            
            data.forEach((item, i) => {
                ++i;
                let ID = item.Id_KH;
                var tableRow = document.createElement('tr');
                tableRow.innerHTML = `
         <td class='check-box-index'><input type='checkbox' class='check_item'> </td>
                         <td class='stt'>${i}</td>
                        <td> <img src='${item.anh}'></img></td>
                         <td>${item.tenmonan}</td>
                         <td>${item.tenloai}</td>
             <td>${item.mota}</td>
             <td class='text-right'>${item.cachlam}</td>
                        <td class='text-right'>${item.noiban}</td>
                        <td class='text-right size-td item-video'><i class='ti-video-camera'></i></td>
                        <td class='cfs btnDelete'  data-id=${item.id}><i class='ti-trash'></i></td>
                        <td class='cfs btnUpdate'  data-id=${item.id}><i class='ti-write'></i></td>
                         `;

                contentTables.append(tableRow);

            });

        });

        $('.customer-monan tr').on('click', '.btnDelete', (e) => {
            let btn = $(e.currentTarget).data('id');
            console.log(btn);
            let idMonan = parseInt(btn);
            $('<div>', {
                text: 'Bạn thực sự muốn xóa !'
            }).dialog({
                title: 'Cảnh báo!',
                modal: true,

                buttons: [{
                    text: 'Xóa',
                    class: 'btn_kt',
                    id: 'btnCheckXoa',
                    click: function () {
                        AppAjax.Ajax(me.callApi('DeleteMonAn'), {}, { idMonan }, function (data) {

                            if (data) {

                                toastr.success('Xóa dữ liệu thành công', { positionClass: 'toast-top-center' });

                                let a = setTimeout(() => {
                                    $('#dialog-form').dialog('close');
                                    let a = setTimeout(() => {
                                        $('#dialog-form').dialog('close');
                                        me.loadDanhSachMonAn();

                                    }, 200);

                                }, 200);


                            } else {
                                toastr.error('Xóa dữ liệu thất bại', { positionClass: 'toast-top-center' });

                            }
                        })
                        $(this).dialog('close');
                    }
                },
                {
                    text: 'Không',
                    class: 'btn_kt',
                    id: 'btnCheckKhong',
                    click: function (e) {
                        $(this).dialog('close');

                    }
                }
                ]
            })
        })

        $('.ck_All').on('change', 'input', e => {

            let inputs = $(e.currentTarget);
            let countCheckAll = inputs.closest('table').find('.check-box-index input:checked').length;
            console.log(countCheckAll);

            let countCheckAlls = inputs.closest('table').find('.check-box-index input').length;
            $('.check-box-index input').prop('checked', countCheckAlls);
            me.formdata.forEach(x => x.checked = !!countCheckAlls);
            $('#btn_delete').prop('enabled', !countCheckAlls);




        })

    }
    callAjaxUploadFile() {

        return new Promise((i, r) => {

            let me = this;

            let formdata = new FormData();
            let config = {
                type: 'POST',
                data: formdata,
                contentType: false,
                cache: false,
                enctype: "multipart/form-data",
                processData: false,
            }
            formdata.append('file', me.file);

            AppAjax.Ajax(me.callApi('SaveImage'), config, {}, function (data) {

                me.anh = data;
                if (data) {


                    i();

                } else {
                    toastr.error('Thêm mới thất bại');

                }
            })
        });
    }
}
var monanr = new monan();