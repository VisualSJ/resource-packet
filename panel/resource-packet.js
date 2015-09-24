(function () {
Editor.registerPanel( 'resource-packet.panel', {
    is: 'editor-resource-packet',

    properties: {
        prop: {
            value: function () {
                return {
                    path: '123',
                    type: '',
                    name: '',
                    attrs: {},
                    value: null,
                };
            },
            notify: true,
        },

        disabled: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true,
        },
    },

    ready: function () {
        this.position = 123;
        console.log(this.position)
    },

    reload: function () {


    },
});

})();
