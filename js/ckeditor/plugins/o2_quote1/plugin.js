CKEDITOR.plugins.add( 'o2_quote1', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'O2quote1', {
			label: editor.lang.o2_quote1.title,
			command: 'o2_quote1',
			icon: this.path+'icons/icon.png',
			toolbar: 'others2,4'
		} );

		editor.widgets.add( 'o2_quote1', {
			template:
				'<div class="quote-container quote_image">' +
					'<div class="quote">' +
						'<div class="quote__author clearfix">' +
							'<div class="quote__author__photo">' +
								'<img src="images/persons/Petlina_N.jpg" alt="" />' +
							'</div>' +
							'<div class="quote__author__info">' +
								'<div class="quote__author__name">Надежда<br/>Петлина</div>' +
								'<div class="quote__author__position">председатель Совета ветеранов ТЭЛЗ</div>' +
							'</div>' +
						'</div>' +
						'<div class="quote__content">' +
							'<p>Когда я в 1965 году пришла на завод, наши с Марией Антоновной линейки стояли рядышком. Она была лучшим специалистом. Настолько все делала искусно, что у нее ничего не трескалось, не выбрасывалось в брак. Если уж они перегоревшую лампу оживляли, то «ножку», которая на пол упала, подберут обязательно. Ее можно наладить, вновь запаять.' +
							'</p>' +
							'<p>А еще Мария Антоновна всегда была очень скромной, положительной. Никогда не нагрубит, если спросишь совета — подойдет, расскажет.' +
							'</p>' +
							'<p>Ее портреты часто висели на досках почета. Тогда это была очень большая честь. Надо было не только хорошо работать, а еще и общественную нагрузку нести. А портреты самых лучших работников вывешивали на доске почета возле завода.' +
							'</p>' +
						'</div>' +
					'</div>' +
				'</div>',
			editables: {
				author__photo: {
					selector: '.quote__author__photo',
					allowedContent: 'img[!src,alt];'
				},
				author__name: {
					selector: '.quote__author__name',
					allowedContent: 'br b;'
				},
				author__position: {
					selector: '.quote__author__position',
					allowedContent: 'br b;'
				},
				author__comment: {
					selector: '.quote__content',
					allowedContent: 'a[*]; p b'
				}
			},

			requiredContent: 'div(quote_image)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'quote_image' );
			}
		} );
	}
} );
