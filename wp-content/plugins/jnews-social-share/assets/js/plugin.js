!function(e){"use strict";window.jnews.selectShare=window.jnews.selectShare||{},window.jnews.share=window.jnews.share||{},window.jnews.selectShare={init:function(t){let n=this;n.container=void 0===t?e("body"):t,n.menu=e("#selectShareContainer"),n.menuInner=n.menu.find(".selectShare-inner"),n.menuButton=n.menuInner.find("button"),n.selected_text="",this.setEvent()},setEvent:function(){let t=this;t.container.on("mousedown vmousedown",(function(e){t.handleMouseDown(e)})),t.container.on("mouseup vmouseup",(function(){t.handleSelection()})),document.addEventListener("selectionchange",(function(){t.hasGetSelection()}),!1),t.menuButton.on("click",(function(n){n.preventDefault(),t.buttonClick(e(this))}))},buttonClick:function(e){var t=e.attr("class").split(" ")[1].replace("jeg_btn-",""),n=e.attr("data-url").replace("[selected_text]",this.selected_text);jnews_select_share.is_customize_preview||window.open(n,t,"width=575,height=430,toolbar=false,menubar=false,location=false,status=false")},handleMouseDown:function(t){1!=e(t.target).parents(".content-inner").length&&1!=e(t.target).parents(".entry-header").length&&(window.getSelection().empty&&window.getSelection().empty(),window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges())},replaceData:function(){this.menuButton.each((function(){var t=e(this).attr("data-post-url")?e(this).attr("data-post-url"):null,n=e(this).attr("data-image-url")?e(this).attr("data-image-url"):null,a=(e(this).attr("data-title")&&e(this).attr("data-title"),e(this).attr("data-url"));a.indexOf("[image_url]")&&(e(this).attr("data-url",a.replace("[image_url]",n)),a=e(this).attr("data-url")),a.indexOf("[url]")&&(e(this).attr("data-url",a.replace("[url]",t)),a=e(this).attr("data-url"))}))},handleSelection:function(){let t=this;var n;if(window.getSelection?n=window.getSelection():document.selection&&(n=document.selection.createRange()),!(n.rangeCount<=0)){var a=n.getRangeAt(0);if(a&&n.toString()){if(t.selected_text=encodeURIComponent(n.toString()),t.replaceData(),1!=e(n.baseNode||n.anchorNode).parents(".content-inner").length)return;var i=a.getBoundingClientRect();if(i.left||i.top)return t.menuInner.css({left:i.left+i.width/2-t.menuInner.width()/2,top:i.top+window.pageYOffset-t.menuInner.height()-11,display:"block",opacity:0}).animate({opacity:1},100),void setTimeout((function(){t.menuInner.addClass("select_share_menu_animate")}),10)}t.menuInner.animate({opacity:0},(function(){t.menuInner.hide().removeClass("select_share_menu_animate")}))}},hasGetSelection:function(){let e=this;var t=window.getSelection().toString();""!=t&&(e.selected_text=t)}},window.jnews.share={init:function(t){void 0===t&&(t=e("body")),t.find(".jeg_sharelist a, .jeg_post_share a").unbind("click.share").bind("click.share",(function(t){var n=e(this);if(!n.hasClass("jeg_btn-email")&&!n.hasClass("jeg_btn-whatsapp")&&!n.hasClass("jeg_btn-line")){t.preventDefault();var a=n.attr("href");if(n.hasClass("jeg_btn-toggle"))e(this).parents(".jeg_share_button").toggleClass("show-secondary");else n.hasClass("jeg_btn-stumbleupon")?window.open(a,"","height=730,width=560"):n.hasClass("jeg_btn-qrcode")||n.hasClass("jeg_btn-wechat")?e.magnificPopup.open({items:[{src:a}],type:"image"}):window.open(a,"","height=570,width=750")}}))}},e(document).bind("jnews-ajax-load",(function(e,t){jnews.share.init(t),jnews.selectShare.init(t)})),e(document).ready((function(){jnews.share.init(),jnews.selectShare.init()}))}(jQuery);