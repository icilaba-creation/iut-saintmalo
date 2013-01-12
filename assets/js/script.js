$(document).ready(function() {

	// Apparition du dock sur la page d'accueil
	$('.home #site-dock').animate({
		height: '+=50px'
	},1400);

	// Adaptation de la taille de l'image d'accueil en fonction de l'écran
	$('.carousel').carousel({
		interval: 6000
	});
	
	// Survol d'un élément du submenu
	$('.submenu li').hover(function(){
		$(this).parent().parent().children().addClass('active');
	},function(){
		$(this).parent().parent().children().removeClass('active');
	});
	
	// Tooltip Accessibilite formations
	$('#access-course').tooltip({
      selector: "a[rel=tooltip]"
    })
	
	// Affichage du contenu du dock au survol d'un élément
	$('.dock-toggle').hover(function(){
			$($(this).attr('data-link')).show();
		},
		function(){
			$('.dock-content').hide();
		}
	);
	
	// Mail antispam
	$('.mail').each(function(){
		var email = $(this).html();
		email = email.replace("[arobase]","@");
		email = email.replace("[point]",".");
		$(this).html("<a href=\"mailto:"+email+"\">"+email+"</a>");
	});

	// Mobile Navigation
	// Création de la liste automatique
	$('<option />', {
    	'selected': 'selected',
    	'value'   : '',
    	'text'    : 'Menu'
    }).appendTo('#mobile-navigation');

    $('.desktop-menu a').each(function() {
    	var el = $(this);
    	if(el.parents('.submenu').length) {
    		if(el.parents('.subsubmenu').length) {
        		$('<option />', {
            		'value': el.attr('href'),
            		'text':  '—— ' + el.text(),
            		}).appendTo('#mobile-navigation');
            } else {
	            $('<option />', {
            		'value': el.attr('href'),
            		'text':  '— ' + el.text(),
            		}).appendTo('#mobile-navigation');
            }
        } else {
        	$('<option />', {
            	'value': el.attr('href'),
            	'text': el.text()
            }).appendTo('#mobile-navigation');
        }
    });
	
	$("#mobile-navigation").change(function() {
		window.location = $(this).find("option:selected").val();
  	});

});
