CKEDITOR.plugins.add( 'o2_h3fleron', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'O2H3fleron', {
			label: editor.lang.o2_h3fleron.title,
			command: 'o2_h3fleron',
			icon: this.path+'icons/icon.png',
			toolbar: 'others2,3'
		} );

		editor.widgets.add( 'o2_h3fleron', {
			template:
				'<div class="header-flora">'+
				'<h3>'+
					'Заголовок 3-го размера, подчеркнутый линией с листочком'+
				'</h3>'+
				'<div class="divider-flora"></div>'+
				'</div>',

			editables: {
				content: {
					selector: 'h3',
					allowedContent: 'b'
				}
			},

			requiredContent: 'div(header-flora)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'header-flora' );
			}
		} );
	}
} );
