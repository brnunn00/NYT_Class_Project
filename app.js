$(document).ready(function(){

    $('#search').on('click', searchObj.getParams);

});

var searchObj = {
    numArticles: 5,
    getParams: function() {
        let searchTerm = $('#search-val').val()
        let numArticles = $('#num-articles').val()
        let startYear = $('#start-year').val()
        let endYear = $('#end-year').val()

    }
};
