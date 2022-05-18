

class login {
    constructor() {
        this.init();
    }
    init() {
        this.ChildPassword();
        this.loadUser();
    }
    callApi(nameAPI) {
        return AppUtil.getURLApi('Dictionary', nameAPI);
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
    loadUser() {
        let me = this;
        var username = $('#username').val();

        var password = $('#password').val();

        let btnLogin = $('.btn-login');

        AppAjax.Ajax(this.callApi('LoadUser'), {}, {/* UserName: username, Password: password*/ }, function (data) {

            if (data && data.length) {

                location.href = '/home'
            } else {
                alert('tai khoan k dung');
            }

        })
    }




}
var ologin = new login(); 0