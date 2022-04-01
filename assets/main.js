jQuery(function(){
  jQuery( ".attente-formation-flex-div" ).mouseover(function() {
    jQuery(this).find(".attente-formation-opacity p").addClass('visible-legende');
  });
});

jQuery(function(){
  jQuery( ".attente-formation-flex-div" ).mouseout(function() {
    $(this).find(".attente-formation-opacity p").removeClass('visible-legende');
  });
});





jQuery(function(){
  jQuery(".faqTitre img").click(function(){
        if (jQuery(this).hasClass("essaiUp")) {
            jQuery(this).parent().next(".faqReponse").removeClass('hideFaq');
            jQuery(this).removeClass('essaiUp');
            
        } else {
            jQuery(this).parent().next(".faqReponse").addClass('hideFaq');
            jQuery(this).addClass('essaiUp');
        }
    });
});

jQuery(function(){
   jQuery('.menu-mobile').click(function(){
    if (jQuery(this).hasClass("menu-open")) {
            jQuery(this).removeClass('menu-open');      
            jQuery('.menu-mobile-ouvert').addClass('hide');    
        } else {

            jQuery(this).addClass('menu-open');
            jQuery('.menu-mobile-ouvert').removeClass('hide');   
        }
   });
});