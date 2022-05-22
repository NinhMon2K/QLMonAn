class monan {
    constructor() {
        this.init();

    }
    init() {
        this.loadDanhSachMonAn();
        this.addForm();
        this.setImage();
        this.AddFood();
        this.addCombobox();
        this.checkedDelete();
    }
    checkedDelete() {

        $('.container-table').on('change', 'table .check-box-index input', e => {

            let input = $(e.currentTarget);
            let countCheck = input.closest('table').find('.check-box-index input:checked').length;
            $('#btnXoa').prop('disabled', !countCheck);


        })

        $('.container-table').on('change', 'table .check-box-indexs input', e => {

            let inputs = $(e.currentTarget);
            let countCheckAll = inputs.closest('table').find('.check-box-indexs input:checked').length;
            $('.check-box-index input').prop('checked', countCheckAll);
            danhsach.forEach(x => x.checked = !!countCheckAll);
            $('#btnXoa').prop('disabled', !countCheckAll);

        })
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
                    class:'cboLoai_ma'
                }).appendTo(sel);


            });
        })
    }
    AddFood() {
        let me = this;
        let btn = $('#btn_luu');

      
        btn.on('click', () => {

            let tenmonan = $('#name_ma').val();
         
            let video = $('#video_ma').val();
            let mota = $('#mota_ma').val();
            let loaimon = $('#lt_type_dish_filter').val();
            let cachlam = $('#cachlam_ma').val();
            let noiban = $('#noiban_ma').val();
           
           
            me.callAjaxUploadFile().then(() => {
                let anh = '';
                anh = me.anh;
               
                let us = {
                    tenmonan: tenmonan,
                    anh: anh,
                    video: video,
                    mota: mota,
                    idLoai: parseInt(loaimon),
                    cachlam: cachlam,
                    noiban: noiban,
                }

                AppAjax.Ajax(me.callApi('InserFood'), { type: 'POST' }, JSON.stringify(us), function (data) {

                    if (data) {

                        toastr.success('Đăng ký thành công');
                        //tenmonan.val('');
                        //mota.val('');
                        //loaimon.val('');
                        //cachlam.val('');
                        //noiban.val('');
                        let a = setTimeout(() => {
                            $('#dialog-form').dialog('close');
                            me.loadDanhSachMonAn();
                        }, 500);

                    } else {
                        toastr.error('Đăng ký thất bại');

                    }
                })
            })



        });
      

    }
    addForm() {

        var dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 740,
            width: 1030,
            modal: true,

        });
        $("#btn_add").button().on("click", function () {
            dialog.dialog("open");
        });
        $('.btn_left').on('click', '#btn_close', (e) => {

            $('#dialog-form').dialog('close');
        });
    }
    loadDanhSachMonAn() {
        let me = this;

        AppAjax.Ajax(me.callApi('LoadALLMonAn'), {}, {}, function (data) {
            me.formdata = data;

            var contentTables = $('.customer-monan');
            contentTables.html('');

            data.forEach((item, i) => {
                ++i;
                let ID = item.Id_KH;
                var tableRow = document.createElement('tr');
                tableRow.innerHTML = `
         <td class='check-box-index ck_All'><input type='checkbox' class='check_item' name='' value='' data:item  onclick="changeCheck('${item.id}')"> </td>
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
                    toastr.error('Đăng ký thất bại');

                }
            })
        });
    }
}
var monanr = new monan();