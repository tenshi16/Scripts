$(document).ready(function () {
  var string="円";
  var searcharea = jQuery('b').parent('div').text();
  var idiomaPuesto= $("span:nth-child(4)").text();
  console.log("idiomapUesto="+idiomaPuesto);
  var searchJapaneseEnglish="Japanese » English";
  var searchJapaneseSpanish="Japanese » Spanish";  
  var searchstring = "円";

  
  if(searcharea.indexOf( searchstring ) != -1 &&(idiomaPuesto.indexOf(searchJapaneseEnglish) !=-1  || idiomaPuesto.indexOf(searchJapaneseSpanish) !=-1 )){
    alert("");
  }
   setTimeout("location.reload(true);", 60000);
});

//instagram img/video source getter
(function() {
    'use strict';
   $('body').on('click', 'div._ovg3g', function() {
     let img= this.parentNode.firstChild.innerHTML;
     let  src=   $(img).attr('src');
     window.open(src,'_blank');
    });

     $('body').on('click', 'div._ikcuh', function(event) {
     event.preventDefault();
     let video= this.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.innerHTML;
     let src=   $(video).attr('src');
     window.open(src,'_blank');
    });
})();
