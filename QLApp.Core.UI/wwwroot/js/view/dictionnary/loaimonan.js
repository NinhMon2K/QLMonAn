class loaimonan {
    constructor() {
        this.init();
    }
    init() {
        this.setImage();
        this.loadALLLoaiMA();
        this.addForm();
        this.saveTypeFood();
    }
    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
    }
    setImage() {
        let me = this;

        $('#img_type_desh').on('change', function (e) {
            me.file = this.files && this.files[0];
        });
    }
    addForm() {
        let me = this;
        let dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 740,
            width: 700,
            modal: true,

        });
        $('.container_list_product_type-dish').on('dblclick', '.item_product_type-dish', (e) => {
            dialog.dialog("open");
            let id = $(e.currentTarget).data('ID');
            AppAjax.Ajax(me.callApi('LoadLoaiMonAnIDs'), { }, {id}, function (data) {
                console.log(data);
                data.forEach((item, i) => {
                    $('#name_type_desh').val(item.tenloai);
                    $('#blah').attr('src', item.anh);
                });
            });
            
            me.Mode = 3;
            me.Id = id;
        });
        $("#btn_add").button().on("click", function () {
            dialog.dialog("open");
            me.Mode = 1;
            me.Id = null;
        });

        $('.btn_left').on('click', '#btn_close', (e) => {

            $('#dialog-form').dialog('close');
        });
        me.changeFileToImage('img_type_desh', '#blah');
    }

    changeFileToImage(idFile, idImage) {
        document.getElementById(idFile).onchange = function () {


            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $(idImage).attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        };
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
    saveTypeFood() {

        var me = this;
        $('.right-footer').on('click', '#btn_luu', () => {
            me.callAjaxUploadFile().then(() => {            
                let tenloai = $('#name_type_desh').val();
         
                let typefood = {
                    id: me.id,
                    tenloai: tenloai,
                    anh: me.anh
                }

                switch (me.Mode) {
                    case 1: {
                        let data = {
                            Mode: 1,
                            Formdata: JSON.stringify(typefood)
                        }

                        AppAjax.Ajax(me.callApi('SaveTypeFood'), { type: 'POST' }, JSON.stringify(data), function (data) {

                            if (data) {

                                toastr.success('Thêm mới thành công');
                                $('#name_type_desh').val('');
                                loadALLLoaiMA();
                                    $('#dialog-form').dialog('close');


                            } else {
                                toastr.error('Thêm mới thất bại');

                            }
                        })

                        break;
                    }
                    case 3: {


                        let data = {
                            Mode: 3,
                            Formdata: JSON.stringify(typefood)
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
                                    AppAjax.Ajax(me.callApi('SaveTypeFood'), { type: 'POST' }, JSON.stringify(data), function (data) {

                                        if (data) {
                                            $('#name_type_desh').val('');
                                            toastr.success('Sửa dữ liệu thành công!', { positionClass: 'toast-top-center' })
                                            loadALLLoaiMA();
                                            $('#dialog-form').dialog('close');
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
    }
    loadALLLoaiMA() {
        let me = this;
        AppAjax.Ajax(me.callApi('LoadLoaiMonAn'), {}, {}, function (data) {
            let listDS = $('.container_list_product_type-dish');
            listDS.html('');
            data.forEach((item, i) => {
                let product = $('<div>', {
                    class: 'item_product_type-dish',
                    data: {
                        ID: item.idloaimonan
                    }
                }).appendTo(listDS);
                let box_img = $('<div>', {
                    class: 'img_type-dish'
                }).appendTo(product);
                let box_name = $('<div>', {
                    class: 'name_type_dish'
                }).appendTo(product);
                let box_delete = $('<div>', {
                    class: 'box_delete_type_dish'
                }).appendTo(product);

                let img = $('<img>', {
                    src: item.anh
                }).appendTo(box_img);

                let p = $('<p>', {
                    text: item.tenloai
                }).appendTo(box_name);
                
                let iDelete = $('<i>', {
                    class: 'ti-trash'
                }).appendTo(box_delete);
            });
        });
    }
}
var loaimonans = new loaimonan();