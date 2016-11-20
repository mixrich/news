CKEDITOR.plugins.add( 'o_fleron', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'Ofleron', {
			label: editor.lang.o_fleron.title,
			command: 'o_fleron',
			icon: this.path+'icons/o_fleron.png',
			toolbar: 'others,3'
		} );

		editor.widgets.add( 'o_fleron', {
			template:
				'<div class="line2"></div>',

			requiredContent: 'div(line2)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'line2' );
			}
		} );
	}
} );
