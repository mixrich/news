CKEDITOR.plugins.add( 'o_insert', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'OInsert', {
			label: editor.lang.o_insert.title,
			command: 'o_insert',
			icon: this.path+'icons/o_insert.png',
			toolbar: 'others,7'
		} );

		editor.widgets.add( 'o_insert', {
			template:
				'<div class="incut">'+
					'<div class="inner">'+
						'<section id="ins-head">'+
							'<span class="title">'+
								'Подробнее про нестандартные кулинарные подарки читайте в статье:'+
							'</span>'+
						'</section>'+
						'<section id="ins-image">'+
							'<img src="/pics/a1.jpg" alt="" />'+
						'</section>'+
						'<div class="cats cat-people">'+
							'Люди'+
							'<span> </span>'+
							'Гости города'+
						'</div>'+
						'<section id="ins-link">'+
							'<a href="---ССЫЛКА---" class="caption">'+
								'Ресторан предложил клиентам букеты из колбасы'+
							'</a>'+
						'</section>'+
					'</div>'+
				'</div>',
			editables: {
				head: {
					selector: '#ins-head',
					allowedContent: 'span'
				},
				link: {
					selector: '#ins-image',
					requiredContent: 'img[!src,alt] a[*]'
				},
				rubric: {
					selector: '.cats',
					allowedContent: 'span'
				},
				content: {
					selector: '#ins-link',
					allowedContent: 'a[!href,class]'
				}
			},

			requiredContent: 'div(incut)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'incut' );
			}
		} );
	}
} );
