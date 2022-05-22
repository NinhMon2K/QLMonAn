

class login {
    constructor() {
        this.init();
    }
    init() {
        this.setImage();
        this.ChildPassword();
        this.loadUser();
        this.addForm();
        this.AddUser();
    }
    callApi(nameAPI) {
        return AppUtil.getURLApi('Login', nameAPI);
    }

    setImage() {
        let me = this;

        $('#hinhanh').on('change', function (e) {
            me.file = this.files && this.files[0];           
        });

    }

    ChildPassword() {
        let iput = $('.child-password');
        let password = $('.text-password');
        iput.on('click', () => {
            if (password.attr('type') == 'password') {

                password.attr('type', 'text');

            }
            else {
                password.attr('type', 'password');
            }
        });
    }
    addForm() {

        var dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 400,
            width: 550,
            modal: true,

        });
        $("#registration-user").button().on("click", function () {
            dialog.dialog("open");
        });
        $('.btn_left').on('click', '#btn_close', (e) => {

            $('#dialog-form').dialog('close');
        });
    }
    loadUser() {
        let me = this;




        let btnLogin = $('#btn-login');

        btnLogin.on('click', () => {
            let username = $('#username').val();

            let password = $('#password').val();

            let user = {
                UserName: username,
                Password: password
            }
            AppAjax.Ajax(me.callApi('Login'), {}, {
                UserName: username,
                Password: password
            }, function (data) {
                if (data) {

                    let url = '/Dictionary/Home';
                    window.location.href = url;

                } else {
                    toastr.warning('Tài khoản hoặc mật khẩu không đúng', { positionClass: 'toast-top-center' });

                }


            })

        });

    }
    AddUser() {
        let me = this;
        let btn = $('#btn_add');
        btn.on('click', () => {

            let UserName = $('#username_cr').val();
            let Password = $('#password_cr').val();
            let FullName = $('#fullname').val();
            let PhoneNumber = $('#sdt').val();
            let Email = $('#email').val();
            let us = {
                UserName: UserName,
                Password: Password,
                FullName: FullName,
                PhoneNumber: PhoneNumber,
                Email: Email,
            }

            me.callAjaxUploadFile().then(() => {
                AppAjax.Ajax(me.callApi('Register'), { type: 'POST' }, JSON.stringify(us), function (data) {

                    if (data) {

                        toastr.success('Đăng ký thành công')
                        me.hide();

                    } else {
                        toastr.error('Đăng ký thất bại');

                    }
                })
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

                if (data) {

                    i();

                } else {
                    toastr.error('Đăng ký thất bại');

                }
            })
        });
    }

}
var ologin = new login(); 0