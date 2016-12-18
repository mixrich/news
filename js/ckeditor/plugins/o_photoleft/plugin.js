CKEDITOR.plugins.add( 'o_photoleft', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'Ophotoleft', {
			label: editor.lang.o_photoleft.title,
			command: 'o_photoleft',
			icon: this.path+'icons/o_photoleft.png',
			toolbar: 'others,8'
		} );

		editor.widgets.add( 'o_photoleft', {
			template:
				'<div class="incut3">'+
					'<div class="inner3">'+
						'<section id="ins-image">'+
							'<img src="/pics/a1.jpg" alt="" />'+
						'</section>'+
						'<section id="ins-link" class="caption">'+
							'Ресторан предложил клиентам букеты из колбасы'+
						'</section>'+
					'</div>'+
				'</div>',
			editables: {
				link: {
					selector: '#ins-image',
					allowedContent: 'img[*]'
				},
				content: {
					selector: '#ins-link',
					allowedContent: 'a[!href] br '
				}
			},

			requiredContent: 'div(incut)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'incut' );
			}
		} );
	}
} );
