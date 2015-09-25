(function () {
    Editor.registerPanel( 'resource-packet.panel', {
        is: 'editor-resource-packet',

        properties: {
            test: {
                type: String
            }
        },

        ready: function () {
            Editor.sendToCore('resource-packet:set-config');
        },

        reload: function () {},

        'resource-packet:set-config': function(config){
            console.log(config);
            this.config = config;
            this.test = "123";
        }
    });
})();