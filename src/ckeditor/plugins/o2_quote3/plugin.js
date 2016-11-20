CKEDITOR.plugins.add( 'o2_quote3', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'O2quote3', {
			label: editor.lang.o2_quote3.title,
			command: 'o2_quote3',
			icon: this.path+'icons/icon.png',
			toolbar: 'others2,6'
		} );

		editor.widgets.add( 'o2_quote3', {
			template:
				'<div class="quote-container quote_text">' +
					'<div class="quote">' +
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
				author__comment: {
					selector: '.quote__content',
					allowedContent: 'a[*]; p b'
				}
			},

			requiredContent: 'div(quote_text)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'quote_text' );
			}
		} );
	}
} );
