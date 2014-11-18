(function () {
    'use strict';

    xtag.register('x-form', {
        extends: 'form',
        events: {
            submit: function (event) {
                var action = this.getAttribute('action');
                var method = this.getAttribute('method');

                event.preventDefault();

                this.disableSubmitButton();

                if (action && method) {
                    this.sendRequest(action, method);
                }
            },
        },
        accessors: {
            value: {
                get: function () {
                    return this.getData();
                },
            },
        },
        methods: {
            disableSubmitButton: function () {
                xtag.query(this, 'input[type="submit"]')[0].setAttribute('disabled', true);
            },
            enableSubmitButton: function () {
                xtag.query(this, 'input[type="submit"]')[0].removeAttribute('disabled');
            },
            getData: function () {
                var data = {};

                xtag.query(this, 'input[name]').forEach(function (input) {
                    var inputData;

                    if (input.hasAttribute('disabled')) {
                        return;
                    }

                    switch (input.type) {
                        case 'email':
                        case 'text':
                        default:
                            inputData = input.value;
                            break;
                        case 'checkbox':
                        case 'radio':
                            if (input.checked) {
                                inputData = input.value;
                            }
                        case 'button':
                    }

                    if (typeof inputData !== 'undefined') {
                        if (data[input.name]) {
                            if (!data[input.name].push) {
                                data[input.name] = [data[input.name]];
                            }
                            data[input.name].push(input.value || '');
                        } else {
                            data[input.name] = input.value || '';
                        }
                    }
                });

                return data;
            },
            sendRequest: function (url, method) {
                var request = new XMLHttpRequest();
                request.open(method.toUpperCase(), url, true);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                request.send(new FormData (this));
            }
        },
    });
})();
