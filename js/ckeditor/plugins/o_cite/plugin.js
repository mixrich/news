CKEDITOR.plugins.add( 'o_cite', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'OCite', {
			label: editor.lang.o_cite.title,
			command: 'o_cite',
			icon: this.path+'icons/o_cite.png',
			toolbar: 'others,6'
		} );

		editor.widgets.add( 'o_cite', {
			template:
				'<blockquote class="o_cite">'+
					'<div id="o_cite">'+
						'Влюбленные пары в Красноярске в канун Дня святого Валентина смогут назвать своими именами... Мадагаскарских тараканов, живущих в парке флоры и фауны "Роев Ручей". Взамен красноярцы получат от администрации парка соответствующие сертификаты – всего 50 штук.'+
					'</div>'+
				'</blockquote>',
			editables: {
				content: {
					selector: '#o_cite',
					allowedContent: 'br; '
				}
			},

			requiredContent: 'blockquote(o_cite)',

			upcast: function( element ) {
				return element.name == 'blockquote' && element.hasClass( 'o_cite' );
			}
		} );
	}
} );
