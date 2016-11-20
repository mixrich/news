CKEDITOR.plugins.add( 'o2_fact', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'O2fact', {
			label: editor.lang.o2_fact.title,
			command: 'o2_fact',
			icon: this.path+'icons/icon.png',
			toolbar: 'others2,2'
		} );

		editor.widgets.add( 'o2_fact', {
			template:
				'<div class="fact clearfix">'+
					'<div class="fact__image-container"><img src="/pics/vrezka.jpg" alt="" /></div>'+
					'<div class="fact__content"><p>'+
						'День святого Валентина я, как правило отмечаю. В юности этому празднику, конечно, придавалось несколько шутливое значение – тогда о любви не было и речи. С возрастом же все четче приходило осознание, что атмосферу этого праздника нужно разделить с «тем самым человеком». Когда в моей жизни появился такой человек, этот праздник стал для меня значимым. Поэтому и главный подарок для меня - это любимый человек рядом. А если говорить о более материальных вещах, то мне было приятно получить типично девчачий подарок - букет тюльпанов. Дарю ли подарки другим? Нет. В школе это были валентинки для друзей. А сейчас я вижу смысл делать подарок только одному человеку».'+
					'</p></div>'+
				'</div>',
			editables: {
				photo: {
					selector: '.fact__image-container',
					allowedContent: 'img[!src,alt];'
				},
				comment: {
					selector: '.fact__content',
					allowedContent: 'p; a[*];'
				}
			},

			requiredContent: 'div(fact)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'fact' );
			}
		} );
	}
} );
