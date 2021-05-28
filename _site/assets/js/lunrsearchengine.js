
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "The backbone trail is a trail that runs across 67 miles across the Santa Monica mountains. Backbone tours provides guided adventures in and around the backbone trail in Malibu, Ca. Backbone Trail Map "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Point mugu Peak Hike                                                 1 2 3 4 5                                              :               Located in the point mugu state park, this is an out and back with a loop around the majestic point mugu peak. Towering 1,266 ft. . . :                                                                                                                                                                       ktenzer                                27 May 2021                                                                                                                                                                                                                                                                                                                  Point mugu Ocean Vista Hike                                                 1 2 3 4 5                                              :               Located in the point mugu state park, this magnificent hike offers breathtaking ocean vista views in one of the most scenic areas and less frequented. . . :                                                                                                                                                                       ktenzer                                07 May 2021                                                                                                                      All Stories:             "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/pt_magu_peak_hike/",
    "title": "Point mugu Peak Hike",
    "body": "2021/05/27 - Located in the point mugu state park, this is an out and back with a loop around the majestic point mugu peak. Towering 1,266 ft above the pacific point mugu peak offers panoramic views of the coastline and channel islands. On a clear day you can see Catalina, San Nicholas, Anacapa and Santa Cruz islands. Point mugu peak is so close to the coastline you feel like you are flying above the ocean, it is truly an amazing out of body experience. The hike starts at a dirt parking lot and the trail is called the chumash trail. The trail has a very steep ascend, if you aren’t used to hiking you will want to go slow and take a lot of breaks. I would also avoid this hike on a hot day, there is no shade. As you ascend don’t forget to turn around you will be treated with a great view ocean view, the mugu wetlands and in the distance channel islands (on a clear day). After about 45 minutes you will reach the base of point mugu peak and a fork in the road. Go to your left and a few hundred feet down road go right and take the single track switch back up point mugu peak. Once you make it up the first part your are almost there and in the home stretch. From here you have an amazing view of point mugu in the distance.  If you come during spring you can see the cactus flowers bluming. Finally it is time to celebrate and enjoy a snack with quite a spectacular view. The peak is very flat and to the right is a nice little bench. North view on to anacapa, santa cruz islands and point mugu. South view of sandy dunes in the distance. East view of sandstone peak Once you are ready to head back continue on the trail south.  After 5-10 minutes you get to another fork, go to your right. You will soon pass by what I think is the best view. A smal trail to the left goes to an amazing lookout by some rocks. After joining back with main trail you will continue to traverse, I find this part the most amazing as you are looking out over the ocean the entire time. After another 15-20 minutes on the trail you will make it back to the first fork, continue left down to the parking lot. 1234Activity: HikingDuration: 3 hoursDifficulty: difficultBring: Hiking boots, beach wear, water and snacks"
    }, {
    "id": 6,
    "url": "http://localhost:4000/pt_magu_ocean_vista_hike/",
    "title": "Point mugu Ocean Vista Hike",
    "body": "2021/05/07 - Located in the point mugu state park, this magnificent hike offers breathtaking ocean vista views in one of the most scenic areas and less frequented areas in all of southern california. Traversing the backbone trail you will assend with terrif views of Pt. mugu peak and the coastline. Pt. mugu peak Vista overlooking the Backbone trail One the ridgeline is reached we will slowly decend making our way to the beach. You will see magnificient costal views, pt. mugu rock, the sandy dunes and a glimpse of sandstone peak. At 3,111 ft this is the highest peak in the Santa Monica mountains. Pt. mugu Rock Sandy Dunes Sandstone Peak Finally after an awesome hike what better way to relax the taking off those boots, dipping those toes in the refreshing pacific and lounging on the beach. Sycamore Cove Beach 1234Activity: HikingDuration: 6 hoursDifficulty: moderateBring: Hiking boots, beach wear, water and snacks"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});