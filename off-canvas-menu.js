//  Function for hamburger icon to open menu

function openMenu() {	
	if($(window).width() < 1024){	
	  let top_nav = document.getElementById("menu");	
	  top_nav.style.transition = "all 1s ease-in-out";
	  top_nav.style.height = "100vh";
	  top_nav.style.padding = "30px 0";
	  document.getElementById('menu_open').style.display = 'none';
	  document.getElementById('menu_close').style.display = 'block';
	  setTimeout(function(){ 
	  	document.querySelector('#menu > ul').style.visibility = 'visible';
	  }, 200);
	}
}

// Function for times icon to close the menu 
function closeMenu() {	
	if($(window).width() < 1024){
	  let top_nav = document.getElementById("menu");	
	  top_nav.style.transition = "all 1s ease-in-out";
	  top_nav.style.height = "0";
	  top_nav.style.padding = "0";
	  document.getElementById('menu_close').style.display = 'none';
	  document.getElementById('menu_open').style.display = 'block';	
	  setTimeout(function(){ 
	  	document.querySelector('#menu > ul').style.visibility = 'hidden';
	  }, 800);
	}
}

// Function to toggle Sub-Menu;
$(document).ready(function(){ 
	if($(window).width() < 1024){
		$('#menu > ul > li').click(function(e){
			e.preventDefault();
			if($(this).find('div.sub-menu').length > 0){
				$('.sub-menu').slideToggle('slow');
				$('.arrow').toggleClass('rotate-arrow-up');
    			$('.arrow').toggleClass('rotate-arrow-down');
			}
		});	
	}
});