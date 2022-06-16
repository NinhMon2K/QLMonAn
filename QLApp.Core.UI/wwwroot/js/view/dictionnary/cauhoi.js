﻿

class cauhoi {
    constructor() {
        this.init();

    }
    init() {
        this.loadCauHoi();
        this.addForm();
    //    this.SaveFood();
    //    this.addCombobox();


    }


    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
    }
   
    addForm() {
        let me = this;
        let dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 740,
            width: 700,
            modal: true,

        });
        $("#btn_add").button().on("click", function () {
            dialog.dialog("open");
            me.Mode = 1;
            me.Id = null;
        });

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

                let mota = $('#mota_ma').val();
                let loaimon = $('#lt_type_dish_filter').val();
                let cachlam = $('#cachlam_ma').val();
                let noiban = $('#noiban_ma').val();
                let us = {
                    id: me.id,
                    tenmonan: tenmonan,
                    anh: anh,
                    video: '',
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

                                $('#noiban_ma').val('');
                                $('#mota_ma').val('');

                                let a = setTimeout(() => {
                                    $('#dialog-form').dialog('close');
                                    $('#table_id').bootstrapTable('refresh');
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

                                            $('#noiban_ma').val('');
                                            $('#mota_ma').val('');
                                            toastr.success('Sửa dữ liệu thành công!', { positionClass: 'toast-top-center' })
                                            $('#dialog-form').dialog('close');

                                            let a = setTimeout(() => {
                                                $('#table_id').bootstrapTable('refresh');
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

            const file = document.querySelector('#hinhanh_ma');
            file.value = '';
            $('#noiban_ma').val('');
            $('#mota_ma').val('');
            $('#dialog-form').dialog('close');
        });

    }
    loadCauHoi() {
        let me = this;
        let dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 740,
            width: 1030,
            modal: true,

        });

        let option = {
            responseHandler: function (res) {
                let data = res.Data || [];
                data.forEach((x, i) => { x.stt = i + 1 });
                return data;
            },


            totalField: "RecordsTotal",
            pageList: [5, 7, 8, 10],
            pageSize: 8,
            sidePagination: "client",
            undefinedText: "",
            silent: true,
            onCheck: function () {
                $('.btn_delete').prop('disabled', false);
            },

            onUncheck: function () {
                $('.btn_delete').prop('disabled', true);
            },
            onCheckAll() {

                $('.btn_delete').prop('disabled', false);

            },

            onUncheckAll() {
                $('.btn_delete').prop('disabled', true);
            },

            onPostBody(data, bs) {

                bs.$body.off('click', '.btnDelete').on('click', '.btnDelete', (e) => {
                    let index = $(e.currentTarget).closest('tr').data('index');
                    let item = data[index];
                    let idMonan = parseInt(item.id);
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
                                                $('#table_id').bootstrapTable('refresh');

                                            }, 200);

                                        }, 200);


                                    } else {
                                        toastr.error('Xóa dữ liệu thất bại', { positionClass: 'toast-top-center' });

                                    }
                                    $(this).dialog('close');
                                })

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


                });

                bs.$body.off('click', '.btnUpdate').on('click', '.btnUpdate', (e) => {

                    let index = $(e.currentTarget).closest('tr').data('index');
                    let item = data[index];
                    let id = parseInt(item.id);
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
                    me.id = id;
                    dialog.dialog("open");
                });
                $('.container-table').on('click', '.btnUpdate', (e) => {

                })

            }

        };

        $('#table_id').bootstrapTable(option);

        $('.btn-left').on('click', '.btn_delete', e => {
            let ID = [];

            ID = $.map($('#table_id').bootstrapTable('getSelections'), function (row) {

                return row.id
            });

            let u = $('.check-box-index input:checked');
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
                        ID.forEach((idMonan) => {
                            AppAjax.Ajax(me.callApi('DeleteMonAn'), {}, { idMonan }, function (data) {

                                if (data) {
                                    let a = setTimeout(() => {
                                        $('#dialog-form').dialog('close');
                                        let a = setTimeout(() => {
                                            $('#dialog-form').dialog('close');
                                            $('#table_id').bootstrapTable('refresh');

                                        }, 200);

                                    }, 200);


                                } else {
                                    toastr.error('Xóa dữ liệu thất bại', { positionClass: 'toast-top-center' });

                                }
                            })
                            $(this).dialog('close');

                        });

                        toastr.success('Xóa dữ liệu thành công', { positionClass: 'toast-top-center' });
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

        });

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

    onFormatUpdate() {
        return `<div class='btnUpdate'><i class='ti-file'></i></div>`;
    }
    onFormatDelete() {
        return `<div class='btnDelete'> <i class='ti-trash'></i> </div>`;
    }
    getIdSelections() {
        return $('#table_id').map($('#table_id').bootstrapTable('getSelections'), function (row) {
            console.log(row.id);
            return `<i data-ID= '${row.id}' class='ti-trash'></i>`
        })
    }
}
var ch = new cauhoi();