// https://www.c-sharpcorner.com/article/dynamic-breadcrumb-navigation-with-jquery

$(document).ready(function () {
    var breadcrupbsCollection = $(location).attr('href').split('/');
    var url = '';
    var $html = '';

    for (let index = 3; index < breadcrupbsCollection.length; index++) {
        url += '/' + breadcrupbsCollection[index];

        if (index == breadcrupbsCollection.length - 1) {
            $html += '<a href="' + url + '">' + decodeURIComponent(breadcrupbsCollection[index]) + '</a>';
        } else {
            $html += '<a href="' + url + '">' + decodeURIComponent(breadcrupbsCollection[index]).replaceAll("%20", " ") + '</a> > ';
        }
    }

    $('breadcrumb').append($html);
});