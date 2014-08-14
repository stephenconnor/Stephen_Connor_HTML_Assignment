/*---------------------------------------------
Program     : 
Written By  : Stephen Connor    
Date        :
Decription  : 
Version     : 
-----------------------------------------------*/
/* code with thanks to http://bootply.com/81478 */

$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 10000
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
    
    
});