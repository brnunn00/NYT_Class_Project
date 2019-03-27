$(document).ready(function(){

    $('#search').on('click', searchObj.getParams);

});

var searchObj = {
    searchTerm:'',
    numArticles:5,
    startYear:'2018',
    endYear: '2019',
    apiKey:'wr8KldRsK8LmF7JulAII9J7LsGoGlLIK',
   
    getParams: function() {
        // searchObj.searchTerm = $('#search-val').val()
        // searchObj.numArticles = $('#num-articles').val()
        // searchObj.startYear = $('#start-year').val()
        // searchObj.endYear = $('#end-year').val()

        searchObj.searchTerm = 'bitcoin'
        // searchObj.numArticles = $('#num-articles').val()
        // searchObj.startYear = $('#start-year').val()
        // searchObj.endYear = $('#end-year').val()
if (searchObj.searchTerm == ''){
    alert("Provide a search term to continue");
} else{
     searchObj.getArticles();
}
    },

    getArticles: function(){
        
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+
        searchObj.searchTerm + "&facet_fields=pub_year&facet=true&begin_date="+searchObj.startYear+"0101&end_date="+searchObj.endYear+"1231&api-key="+searchObj.apiKey;

        $.ajax(url,'GET').then(function(response){
            console.log(response);
        });
        

    }
};

searchObj.getParams();
