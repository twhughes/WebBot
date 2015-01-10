window.onload = function(callback) {
  //some data you want to feed to query (add in)
  var data = [
    {
      name : 'TRex',
    },
    {
      name : 'Steggasaurus',
    },
    {
      name : 'Triceratops',
    },
  ];

  //element of div to display return data
  var div = document.getElementById('locations')

  //for each item in data array, run function getCoords()
  data.forEach(function(d){
    getCoords(element, d);
  })

  function getCoords(element, d){  

    //initialize new get request
    var request = new XMLHttpRequest();

    //add event listener to run when request is sent below
    request.addEventListener('load', function() {   

      //create div element to temporarily (and hiddenly) store the html returned by the get request
      var searchResults = document.createElement('div');

      //request response is an html string, so you have to add it to your webpage in order to work with it as a DOM
      searchResults.innerHTML = request.response;

      //configure to strip data you want from returned html (really shitty way to do this but works)
      var longitude = searchResults.children[7].children[1].children[0].children[2].children[4].innerHTML ? searchResults.children[7].children[1].children[0].children[2].children[4].innerHTML : null;
      var latitude = searchResults.children[7].children[1].children[0].children[2].children[5].innerHTML ? searchResults.children[7].children[1].children[0].children[2].children[5].innerHTML : null;
    
      //print to console for debugging
      console.log(longitude);
      console.log(latitude);

      //append to original data structure (if you want)
      d.lng = longitude;
      d.lat = latitude;

      //append data to div in csv format (will display on browser)
      div.innerHTML += name + ", ";
      div.innerHTML += d.lng + ", ";
      div.innerHTML += d.lat + "<br> ";
      //NOTE: after it is done running, you can copy and paste the returned browser text into csv for easy export.
    });

    //website you want to query (configure to match the url that comes up when you search manually.)
    var url = 'http://www.website.com?q=' + element;

    //open and send the get request (funs the function above callbacked by "request.addEventListener(->)")
    request.open('GET', url);
    request.send(); 
  };

};