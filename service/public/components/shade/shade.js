
/*
 *@description   蒙层模块逻辑
 * @author		  董静
 * @time 		 2016/12/1 15:38
 * @version  	 1.0版本
 *
 */

define( function( require, exports, module ){
	//引入modal样式
	require( './shade.css' );
	
	require( 'jquery' );
	//把modal外面的大盒子加入到body中
	var html = require( './shade.html' );
	
	$(document.body).append( $(html) );
	
function modalInit ( param ) {
		param = param || {};
		var $elem = param.elem;
		if ( $elem === undefined ) {
			throw 'no elem init when use Modal Components';
			return;	
		}
		if ( param.elem instanceof jQuery ) {
			//
		} else {
			$elem = $( elem );
		}

		var $qfmodal = $('#qf-modal');
		var $qfmodalcontent = $('#qf-modal-content');

		$qfmodalcontent.html($elem.remove());

		$qfmodalcontent.css({
			width : $elem.width(),
			height : $elem.height(),
			'margin-left' : ( 0 - $elem.width() / 2 ),
			'margin-top' : ( 0 - $elem.height() / 2 )
		});

		return {
			show : function () {
				$qfmodal.addClass('show')
			},
			hide : function () {
				$qfmodal.removeClass('show');
			}
		}

	}
	
	exports.init = modalInit;
} );