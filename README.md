If you want to automate get requests to a website, but they either don't have an API or you have to pay to use it, this is a simple way to get data.

    open index.html
    
You need to supply the query string data as an array.  ex:

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
      
This will be configured to search for 'TRex', return data, search for 'Steggasaurus' (sp?), return data. etc

The code submits a GET request for each query term, adds the resulting html as a DOM element.

This html DOM element can then by traversed via child nodes to find the content you are looking for. (see example)

Program will then add the data to the visible html in csv format so you can copy and paste it into a CSV file.

NOTE: the code in JS.js is merely a template and needs to be configured to work properly.  What you need to do to suit it to your needs:

1.  Change the data array (ln. 3) to the search terms you want to query with.

2.  Do a manual search on the website (eg. search "Paris") and then copy the url that corresponds to this search.  Then configure (ln. 57) to match the serach url with 'element' in place of the search term (Paris, in this case)

3.  On initial run, console.log(searchResults) and find the data you are looking for within it. (ln 37)

4.  Traverse child nodes "searchResults.children[7].children[1].children[0].children[2].children[4].innerHTML" in the correct way to get that data (ln 38/39...)  NOTE: if you are cleverer than me you can find a more elegant way to do this (get element by class name etc.)  Child node traversing happened to just be the only fail safe method for my test case website return data.

5. Add this data to the csv output html in the correct order (ln. 50/53) to match whatever order you want it to come in.

6. Ideally this should match the order that you specify in index.html (ln. 12) so go ahead and change that too.
