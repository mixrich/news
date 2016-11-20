CKEDITOR.plugins.add( 'o_h3fleron', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'OH3fleron', {
			label: editor.lang.o_h3fleron.title,
			command: 'o_h3fleron',
			icon: this.path+'icons/o_h3fleron.png',
			toolbar: 'others,5'
		} );

		editor.widgets.add( 'o_h3fleron', {
			template:
				'<div class="o_h3fleron">'+
				'<div class="line2"></div>'+
				'<h3 style="text-align: center;" id="h3fleron">'+
					'Это заголовок 3-го размера, обрамленный линиями с листочками'+
				'</h3>'+
				'<div class="line2"></div>'+
				'</div>',

			editables: {
				content: {
					selector: '#h3fleron',
					allowedContent: 'br'
				}
			},

			requiredContent: 'div(o_h3fleron)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'o_h3fleron' );
			}
		} );
	}
} );
