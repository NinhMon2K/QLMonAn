

class cauhoi {
    constructor() {
        this.init();

    }
    init() {
        this.loadCauHoi();
        this.addForm();
        this.SaveCauHoi();
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
    SaveCauHoi() {
        var me = this;
        Validator({
            form: '#form-1',
            formGroupSelector: '.box_right',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#cauhoi', 'Vui lòng nhập câu hỏi!'),
                Validator.isRequired('#traloi', 'Vui lòng nhập câu trả lời!'),
            ],
            onSubmit: function (data) {
                // Call API

            }
        });
        $('.right-footer').on('click', '#btn_luu', () => {
                let cauhoi = $('#cauhoi').val();

                let traloi = $('#traloi').val();
                let us = {
                    id: me.id,
                    cauhoi: cauhoi,
                    traloi: traloi,
                }

                switch (me.Mode) {
                    case 1: {
                        let data = {
                            Mode: 1,
                            Formdata: JSON.stringify(us)
                        }

                        AppAjax.Ajax(me.callApi('SaveCauHoi'), { type: 'POST' }, JSON.stringify(data), function (data) {

                            if (data) {

                                toastr.success('Thêm mới thành công');
                                $('#cauhoi').val('');
                                $('#traloi').val('');

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
                                    AppAjax.Ajax(me.callApi('SaveCauHoi'), { type: 'POST' }, JSON.stringify(data), function (data) {

                                        if (data) {
                                            $('#cauhoi').val('');
                                            $('#traloi').val('');
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

        $('.btn_left').on('click', '#btn_close', (e) => {
            $('#cauhoi').val('');
            $('#traloi').val('');
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
                    let id = parseInt(item.id);
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
                                AppAjax.Ajax(me.callApi('DeleteCauHoi'), {}, { id }, function (data) {

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
                    AppAjax.Ajax(me.callApi('GetCauHoiID'), {}, { id }, function (data) {
                        console.log(data);
                        if (data) {
                            data.forEach((item, i) => {
                                $('#cauhoi').val(item.cauhoi);
                                $('#traloi').val(item.traloi);

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
                        let ele = this;
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
                            $(ele).dialog('close');

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