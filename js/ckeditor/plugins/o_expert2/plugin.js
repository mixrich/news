CKEDITOR.plugins.add( 'o_expert2', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'OExpert2', {
			label: editor.lang.o_expert2.title,
			command: 'o_expert2',
			icon: this.path+'icons/o_expert2.png',
			toolbar: 'others,2'
		} );

		editor.widgets.add( 'o_expert2', {
			template:
				'<div class="cite">'+
					'<section id="exp-photo"><img src="/pics/vrezka.jpg" alt="" /></section>'+
					'<h3 class="padded" id="exp-name">'+
						'Нина, менеджер проектов (24 года):'+
					'</h3>'+
					'<div class="padded" id="exp-text">'+
						'<span>«</span>'+
						'День святого Валентина я, как правило отмечаю. В юности этому празднику, конечно, придавалось несколько шутливое значение – тогда о любви не было и речи. С возрастом же все четче приходило осознание, что атмосферу этого праздника нужно разделить с «тем самым человеком». Когда в моей жизни появился такой человек, этот праздник стал для меня значимым. Поэтому и главный подарок для меня - это любимый человек рядом. А если говорить о более материальных вещах, то мне было приятно получить типично девчачий подарок - букет тюльпанов. Дарю ли подарки другим? Нет. В школе это были валентинки для друзей. А сейчас я вижу смысл делать подарок только одному человеку».'+
					'</div>'+
					'<div class="clearfix"></div>'+
				'</div>',
			editables: {
				photo: {
					selector: '#exp-photo',
					allowedContent: 'img[!src,alt];'
				},
				name: {
					selector: '#exp-name',
					allowedContent: 'a[*];'
				},
				comment: {
					selector: '#exp-text',
					allowedContent: 'a[*]; br'
				}
			},

			requiredContent: 'div(cite)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'cite' );
			}
		} );
	}
} );
