var frontEnd = angular.module('frontEnd', ['ngRoute', 'ngCookies']);

window.fbAsyncInit = function() {
    FB.init({
        appId      : '383040158562567',
        xfbml      : true,
        version    : 'v2.3'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    console.log('FB init');
}(document, 'script', 'facebook-jssdk'));