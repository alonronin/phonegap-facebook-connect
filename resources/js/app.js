(function($){
    var App = window.App = {};

    App.init = function(callback){
       $(document).on('deviceready', function(e){
           //connection states
           this.connection.states[Connection.UNKNOWN]  = 'Unknown connection';
           this.connection.states[Connection.ETHERNET] = 'Ethernet connection';
           this.connection.states[Connection.WIFI]     = 'WiFi connection';
           this.connection.states[Connection.CELL_2G]  = 'Cell 2G connection';
           this.connection.states[Connection.CELL_3G]  = 'Cell 3G connection';
           this.connection.states[Connection.CELL_4G]  = 'Cell 4G connection';
           this.connection.states[Connection.NONE]     = 'No network connection';

           this.connection.type = navigator.connection.type;

           callback.call(this);
       }.bind(App));
    };

    App.connection = {states: {}, type: null};

    App.location = {
        get: navigator.geolocation.getCurrentPosition,
        watch: navigator.geolocation.watchPosition,
        clear: navigator.geolocation.clearWatch
    };
})(jq);