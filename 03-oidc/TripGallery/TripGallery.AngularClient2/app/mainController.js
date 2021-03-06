﻿(function () {
    "use strict";
    angular
        .module("tripGallery")
        .controller("mainController",
            ["OidcManager", MainController]);


    function MainController(OidcManager) {

        var vm = this;

        vm.mgr = OidcManager.OidcTokenManager();

        vm.logOut = function(){
            vm.mgr.removeToken();
            window.location = "index.html"
        }


        vm.logOutOfIdSrv = function () {
            vm.mgr.redirectForLogout();
        }

        //no id token or expired => redirect to get one

        if(vm.mgr.expired){
            vm.mgr.redirectForToken();
        }

    }

}());