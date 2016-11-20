CKEDITOR.plugins.add( 'o2_slider', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'O2slider', {
			label: editor.lang.o_graypic.title,
			command: 'o2_slider',
			icon: this.path+'icons/icon.png',
			toolbar: 'others2,7'
		} );

		editor.widgets.add( 'o2_slider', {
			template:
				'<div class="slider">'+
				'</div>',

			editables: {
				content: {
					selector: '.slider',
					allowedContent: 'img[!src,alt];',
				}
			},

			requiredContent: 'div(slider)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'slider' );
			}
		} );
	}
} );
