

define( function( require, exports, module ){
	//使用button组件
	require( 'button' );
	
	//使用自定义的样式
	require( 'testcss' );
	
	//引入jquery元素
	require( 'jquery' );
	
	//使用shade组件
	var ComponentModal = require( 'shade' );
	
	$( function () {
		var modal = ComponentModal.init( {
			elem: $( '#abc' )
		});
		
		$( '.submit' ).click(function(){
			modal.show();
		});
		
		$( '#close-bnt' ).click( function () {
			modal.hide();
		});
		
	})
	
	
} );
