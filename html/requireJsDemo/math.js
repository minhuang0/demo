//AMD规范(什么是AMD 参考:http://www.requirejs.cn/docs/whyamd.html)是使用define()方法来进行函数定义,下面定义了一个add方法，并将包含add function的obj返回出去
define(function() {
    var add = function(x, y) {
        return x + y;
    };
    console.info("load math js");
    return {
        add: add
    };
});
