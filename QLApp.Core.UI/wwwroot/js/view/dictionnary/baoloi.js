

class baoloi {
    constructor() {
        this.init();

    }
    init() {
        this.loadLoi();
        this.Done();
    }


    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
    }

    Done() {
        $('.btn_left').on('click', '#btn_close', (e) => {
            $('#dialog-form').dialog('close');
        });

    }
    loadLoi() {
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
    onFormatStatus(val) {
        let pq = '';
        if (val == '1') {
            pq = 'Đã xử lý'
        }
        else {
            pq = 'Chưa xử lý'
        }
        return pq;
    }
}
var bl = new baoloi();