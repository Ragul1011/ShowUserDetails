var myList = [{
	"name": "Amelia",
	"age": "10",
	"dob": "20-10-2011",
	"firstName": "Amelia",
	"lastName": "B",
	"more": {
		"address_line1": "1931 Farland Avenue",
		"address_line2": "Kerrville,TX",
		"address_line3": "Texas,US,Postal code-78028",
		"phone": "830-353-1190"
	}
}, {
	"name": "George",
	"age": "33",
	"dob": "04-06-1988",
	"firstName": "George",
	"lastName": "P",
	"more": {
		"address_line1": "133 Ploughley Rd",
		"address_line2": "TITTENSOR,US",
		"address_line3": "Postal code-ST124EG",
		"phone": "070 0633 3977"
	}
}, {
	"name": "Jacob",
	"age": "23",
	"dob": "15-07-1998",
	"firstName": "Jacob",
	"lastName": "D",
	"more": {
		"address_line1": "1474 Foley Street",
		"address_line2": "Hialeah,FL",
		"address_line3": "Florida,US,Postal code-33012",
		"phone": "954-645-6819"
	}
}, {
	"name": "Charlie",
	"age": "30",
	"dob": "14-11-1990",
	"firstName": "Charlie",
	"lastName": "A",
	"more": {
		"address_line1": "961 Quincy Street",
		"address_line2": "Philadelphia",
		"address_line3": "PA,Pennsylvania,Postal code-19123",
		"phone": "267-422-5367"
	}
}, {
	"name": "Mia",
	"age": "28",
	"dob": "10-02-1993",
	"firstName": "Mia",
	"lastName": "R",
	"more": {
		"address_line1": "2242 Francis Mine",
		"address_line2": "Cedarville,CA",
		"address_line3": "California,Postal code-96104",
		"phone": "530-279-9727"
	}
}]
  // Builds the HTML Table out of myList.
  function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(myList, selector);
  
    for (var i = 0; i < myList.length; i++) {
        var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = myList[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
    }
  }
  
  // Adds a header row to the table and returns the set of columns.
  // Need to do union of keys from all records as some records may not contain
  // all records.
  function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
  }