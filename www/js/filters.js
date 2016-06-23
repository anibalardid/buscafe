var app = angular.module('buscafe.filters', []);

app.filter("join", function () {
    return function (arr, sep) {
        return arr.join(sep);
    };
});