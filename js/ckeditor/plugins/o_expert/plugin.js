CKEDITOR.plugins.add( 'o_expert', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'OExpert', {
			label: editor.lang.o_expert.title,
			command: 'o_expert',
			icon: this.path+'icons/o_expert.png',
			toolbar: 'others,1'
		} );

		editor.widgets.add( 'o_expert', {
			template:
				'<div class="expert">' + 
					'<div class="exp-image">' + 
						'<div class="mask hide4admin"></div>' + 
						'<section id="exp-image"><img alt="" src="/data/images/news_2014/07/rozy/nastya.jpg" /></section>' + 
					'</div>' + 
					'<div class="opinion">' + 
						'<section class="exp-head" id="exp-head">' + 
							'Мнение эксперта' + 
						'</section>' + 
						'<div id="exp-name">' + 
							'Имя эксперта' + 
						'</div>' + 
						'<section class="exp-head" id="exp-range">' + 
							'в каких чинах находится' + 
						'</section>' + 
						'<section id="exp-comment">Собственно комментарий</section>' + 
					'</div>' + 
					'<div class="clearfix"></div>' +
				'</div>',

			editables: {
				photo: {
					selector: '#exp-image',
					allowedContent: 'img[!src,alt];'
				},
				head: {
					selector: '#exp-head',
					allowedContent: ' '
				},
				name: {
					selector: '#exp-name',
					allowedContent: 'a[*];'
				},
				rang: {
					selector: '#exp-range',
					allowedContent: 'a[*];'
				},
				comment: {
					selector: '#exp-comment',
					allowedContent: 'a[*]; br'
				}
			},

			requiredContent: 'div(expert)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'expert' );
			}
		} );
	}
} );
