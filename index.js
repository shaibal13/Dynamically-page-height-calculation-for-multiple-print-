  
  $(document).ready(function(){
        var prevRowHeight = 0;
        $("tr").each(function(){
             // console.log(prevRowHeight);
            var maxHeight = 930; // A4 paper Height
            var eachRowHeight = $(this).height();
            if((prevRowHeight + eachRowHeight) > maxHeight){
                prevRowHeight=0;// It will be Zero for new Page
                $(this).before('<div class="page_breaker"></div>');
               // console.log("add page break before");
            }
            prevRowHeight =prevRowHeight+ $(this).height();
        });

    });
