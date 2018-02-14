var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  console.log(resp)
  countriesList.empty();
  resp.forEach(function(item){
    var currencyElement = $('<span>').text(' ('+item.currencies[0]+')');
     	$('<li>')
        .text(item.name)
        .appendTo(countriesList)
        .append(currencyElement);
  });

}
