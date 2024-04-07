/*
 * @Modular upload file;
 */

(function($){

	$.fn.send = function(type, options){

		if(event){
			event.preventDefault();
		}

		var selector = $(this);
		var sender;
		var defaults = {
			selector: this
		};

		if(selector.attr('formmethod'))	defaults.type = selector.attr('formmethod');
		if(selector.attr('formaction'))	defaults.url = selector.attr('formaction');
		if(selector.attr('formenctype'))	defaults.enctype = selector.attr('formenctype');
		if(selector.attr('formtarget'))	defaults.target = selector.attr('formtarget');
		if(selector.data()){
			defaults.data = $.extend(selector.params(), selector.data());
		};

		if(selector.attr('method'))	defaults.type = selector.attr('method');
		if(selector.attr('action'))	defaults.url = selector.attr('action');
		if(selector.attr('enctype'))	defaults.enctype = selector.attr('enctype');
		if(selector.attr('target'))	defaults.target = selector.attr('target');
		if(selector.is('form'))	defaults.data = selector.params();
		
		if(typeof type === 'string' && typeof options === 'object'){

			options = $.extend(defaults, options);

			selector.on(type, function(event){

				event.preventDefault();

				switch(options.type.toLowerCase()){
					case 'get':
						sender = $.get(options.url, options.data);
						break;
						case 'post':
							sender = $.post(options.url, options.data);
							break;
				}

				if(options.complete && sender)	sender.done(options.complete);
				if(options.error && sender)	sender.fail(options.error);
	
			});
			
		}else
		if(typeof type === 'object' && typeof options === 'undefined'){

			options = $.extend(defaults, type);

			switch(options.type.toLowerCase()){
				case 'get':
					sender = $.get(options.url, options.data);
					break;
					case 'post':
						sender = $.post(options.url, options.data);
						break;
			}

			if(options.complete && sender)	sender.done(options.complete);
			if(options.error && sender)	sender.fail(options.error);

		}
		
	}

})(jQuery);