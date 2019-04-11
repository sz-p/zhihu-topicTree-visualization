function GSS() {
    var size = {};
    // 网页可见区域宽
    size.clientWidth = document.body.clientWidth;
    // 网页可见区域高
    size.clientHeight = document.body.clientHeight;
    // 网页可见区域宽：包括边线和滚动条的宽
    size.offsetWidth = document.body.offsetWidth;
    // 网页可见区域高：包括边线的宽
    size.offsetHeight = document.body.offsetHeight;
    // 网页正文全文宽
    size.scrollWidth = document.body.scrollWidth;
    // 网页正文全文高：
    size.scrollHeight = document.body.scrollHeight;
    // 网页被卷去的高_ff
    size.scrollTop_ff = document.body.scrollTop;
    // 网页被卷去的高_ie
    size.scrollTop_ie = document.documentElement.scrollTop;
    // 网页被卷去的左：
    size.scrollLeft = document.body.scrollLeft;
    // 网页正文部分上：
    size.screenTop = window.screenTop;
    // 网页正文部分左：
    size.screenLeft = window.screenLeft;
    // 屏幕可用工作区高度：
    size.availHeight = window.screen.availHeight;
    // 屏幕可用工作区宽度：
    size.availWidth = window.screen.availWidth;
    // 屏幕分辨率的高：
    size.availWidth = window.screen.height;
    // 屏幕分辨率的宽：
    size.availWidth = window.screen.width;
    return size
    console.log(size)
}
