/** form fields get values in array */
(function($){

    $.fn.params = function(desc){
        
        var data = {};
        
        if($(this).is('input, select, button, option')){

            if($(this).prop('name')){

                var key = $(this).prop('name');

                if($(this).prop('value')) data[key] = $(this).prop('value')

            }

        }else
        if($(this).is('form')){

            $.each($(this)[0], function(index, selector){

                if(!$.isEmptyObject(selector)){

                    if(selector.hasAttribute('name')){
                    
                        var key = $(selector).prop('name')
        
                        if(selector.hasAttribute('value')){
                            data[key] = $(selector).prop('value')
                        }
        
                    }
    
                }
    
            })

        }

        if(desc){
            return $(this).prop(desc);
        }

        return data;
    }

}(jQuery));