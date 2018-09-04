$(function () {
    var letao = new Letao();
    letao.scroll();
    letao.getCategory();
    //默认获取第一页品牌
    letao.getCategoryID();
    letao.getBrandData(1);
})
var Letao = function () {};
Letao.prototype = {
    scroll: function () {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    getCategory: function () {
        $.ajax({
            url: '/category/queryTopCategory',
            success: function (data) {
                var html = template('categoryTmp', data);
                $('.category-left ul').html(html);

            }
        })
    },
    getCategoryID: function () {
        var that = this;
        $('.category-left ul').on('tap', 'li a', function () {
            var id = $(this).data('id');
            that.getBrandData(id);
        })
    },
    getBrandData: function (id) {
        $.ajax({
            url: '/category/querySecondCategory',
            data: {
                'id': id
            },
            success: function (data) {
                var html = template('brandTmp', data);
                $('.category-right .mui-row').html(html);

            }
        })
    }
}