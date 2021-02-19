$(function () {
    // 监听选项卡点击事件
    $('#projects .projects-lists li').click(function () {
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        // 获取当前点击的选项卡索引
        var $index = $(this).index();
        var $article = $('#projects .projects-contents-article').eq($index);
        $article.addClass('current');
        $article.siblings().removeClass('current');
    });

    $('#dropdownMenuOffset').dropdown()
});