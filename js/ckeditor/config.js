/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode' ] },
		{ name: 'clipboard',   groups: [ 'clipboard'] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'others2' },
		{ name: 'tools' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'align' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		'/',
		{ name: 'others' },
	];
	config.scayt_autoStartup = false; // отключает автопроверку орфографии плагином scayt
	config.disableNativeSpellChecker = false; // отключает запрет на стандартную проверку орфографии браузером
	config.removePlugins = 'scayt,smiley,flash,save'; // отключает плагин scayt и запрещает заменять контекстное меню. 
	config.language = 'ru';
	config.uiColor = '#EEEEEE';
	config.basicEntities = false;
	config.allowedContent = true;
	config.bodyClass = 'article';
	config.contentsCss = ['/css/style.base.css','/css/style.ckeditor.css'];
//	config.forcePasteAsPlainText = true;

	config.extraPlugins = 'notification,notificationaggregator,o_expert,o_expert2,o_h3fleron,o_fleron,o_fleron1,o_graypic,o_cite,o_insert,o2_slider,o2_h3fleron,o2_fact,o2_reference,o2_bigimage,o2_quote1,o2_quote2,o2_quote3,wordcount,autosave,jqueryspellchecker';
	config.wordcount = {
		// Whether or not you want to show the Word Count
		showWordCount: true,
		// Whether or not you want to show the Char Count
		showCharCount: true,
		// Whether or not you want to count Spaces as Chars
		countSpacesAsChars: true,
		// Whether or not to include Html chars in the Char Count
		countHTML: false
	};
	config.autosave_disableNotifications = true;
//		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
	// Define changes to default configuration here. For example:
};

(function() {
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	if (isChrome) {
		CKEDITOR.on( 'instanceLoaded', function( e ){
			this.addCss('.cke_editable { line-height: normal; }');
		});
	}
})();
