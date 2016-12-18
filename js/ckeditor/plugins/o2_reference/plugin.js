CKEDITOR.plugins.add( 'o2_reference', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'O2reference', {
			label: editor.lang.o2_reference.title,
			command: 'o2_reference',
			icon: this.path+'icons/icon.png',
			toolbar: 'others2,10'
		} );

		editor.widgets.add( 'o2_reference', {
			template:
				'<div class="reference-container">' +
					'<div href="#" target="_blank" class="reference clearfix">' +
						'<div class="reference__link">' +
							'<span>Статья откроется в новой вкладке</span>' +
						'</div>' +
						'<div class="reference__photo">' +
							'<img src="/pics/vrezka.jpg" alt="" />' +
						'</div>' +
						'<div class="reference__content">' +
							'<p>' +
								'<b>Фамилиё Автора</b><br/>' +
								'День святого Валентина я, как правило отмечаю. В юности этому празднику, конечно, придавалось несколько шутливое значение – тогда о любви не было и речи. ' +
							'</p>' +
						'</div>' +
					'</div>' +
				'</div>',
			editables: {
				photo: {
					selector: '.reference__photo',
					allowedContent: 'img[!src,alt];'
				},
				content: {
					selector: '.reference__content p',
					allowedContent: 'b br;'
				},
				link: {
					selector: '.reference__link span',
					allowedContent: 'br'
				}
			},

			requiredContent: 'div(reference-container)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'reference-container' );
			}
		} );
	}
} );
