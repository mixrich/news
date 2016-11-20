CKEDITOR.plugins.add( 'o_graypic', {
	requires: 'widget',
	lang: [ 'en', 'ru' ],

	init: function( editor ) {
		editor.ui.addButton( 'Ograypic', {
			label: editor.lang.o_graypic.title,
			command: 'o_graypic',
			icon: this.path+'icons/o_graypic.png',
			toolbar: 'others,4'
		} );

		editor.widgets.add( 'o_graypic', {
			template:
				'<div class="picture">'+
					'Это блок текста на сером фоне. А ниже - фото, шириной 671 пиксель, которое можно удалить за ненадобностью.'+
					'<img src="/pics/bp.jpg" alt="" />'+
				'</div>',

			editables: {
				content: {
					selector: '.picture',
					allowedContent: 'img[!src,alt]{width,height}; br; b; p{font-size,text-align}; strong; a[!href,target]; video[!src,controls,preload]{width,height};',
				}
			},

			requiredContent: 'div(picture)',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'picture' );
			}
		} );
	}
} );
