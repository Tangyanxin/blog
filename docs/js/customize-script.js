(function(){
    var $$ = mdui.JQ;
//     function backTop(btnId) {
//     var btn = document.getElementById(btnId);
//     var d = document.documentElement;
//     var b = document.body;
//     window.onscroll = set;
//     //btn.style.display = "none";
//     btn.onclick = function() {
//         btn.style.display = "none";
//         window.onscroll = null;
//         this.timer = setInterval(function() {
//             d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
//             b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
//             if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
//         },
//         10);
//     };
//     function set() {
//         btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block': "none"
//     }
// };
// backTop('back-to-top');
    var footer = $$('footer');
    var btn = $$('#back-to-top');
    var body = document.body;
    var doc = document.documentElement;
    console.log("debug");
    window.onscroll = function(){
        if(body.scrollTop+doc.scrollTop < 150){
            btn.addClass('mdui-fab-hide');
            
        }else if((body.scrollTop+doc.scrollTop) < (body.clientHeight-doc.clientHeight - footer.height())){
            btn.removeClass('mdui-fab-hide');
        }else{
            btn.removeClass();
            btn.css({
                'position': 'absolute',
                'top': '85px'
            });
        }
    };
})();