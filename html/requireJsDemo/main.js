// require做了什么
// 目的是将在html中使用script引入的js文件采用无阻塞引入,通过路径的方式来取的文件并按照模块化的方式分别将不同的js引入并处理之间的依赖关系


// require.config 中 paths是指给特定url的js文件取一个别名(like unix alias)
require.config({
    paths: {
        // 加上数组是为了防止第一个url中js加载不出来而采用第二种url方式加载
        "jquery": ["https://cdn.bootcss.com/jquery/3.1.0/jquery.min", "js/jquery.3.1.0.min"],
        // 如果是单个可以不需要加数组,例如: "markded": "https://cdn.bootcss.com/marked/0.3.5/marked.min"
    }
    // 我们可以给require的路径指向默认的路径，此时如果改为js/lib,则require('math')则实际内容是require('js/lib/math')
    // baseUrl: "js/lib", 
    // shim能让require加载非规范模块(不符合AMD规范的),使用`deps`能够指定该模块指定依赖,exports则是给该模块添加别名
    /* shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
    */
});
// 下面加载了 math, jquery, marked三个模块，并将 `math, $` 当做参数传递,调用了math.add function 和jqueryObj append的function
require(['math', "jquery"], function(math, $) {
    $('body').append('<p>1 + 2 = ' + math.add(1, 2) + ';</p>');
});
