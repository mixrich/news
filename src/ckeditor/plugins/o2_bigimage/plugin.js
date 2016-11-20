CKEDITOR.plugins.add( 'o2_bigimage', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'O2bigimage', {
			label: editor.lang.o2_bigimage.title,
			command: 'o2_bigimage',
			icon: this.path+'icons/icon.png',
			toolbar: 'others2,1'
		} );

		editor.widgets.add( 'o2_bigimage', {
			template:
				'<div class="article-image">'+
					'<img src="/pics/bp.jpg" alt="" />'+
				'</div>',

			editables: {
				content: {
					selector: '.article-image',
					allowedContent: 'img[!src,alt];',
				}
			},

			requiredContent: 'div(article-image)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'article-image' );
			}
		} );
	}
} );
