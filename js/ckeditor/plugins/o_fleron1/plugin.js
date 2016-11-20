CKEDITOR.plugins.add( 'o_fleron1', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'Ofleron1', {
			label: editor.lang.o_fleron1.title,
			command: 'o_fleron1',
			icon: this.path+'icons/o_fleron1.png',
			toolbar: 'others,3'
		} );

		editor.widgets.add( 'o_fleron1', {
			template:
				'<div class="line3"></div>',

			requiredContent: 'div(line3)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'line3' );
			}
		} );
	}
} );
