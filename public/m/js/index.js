$(function(){
var letao=new Letao();
letao.slider()  
})
var Letao=function(){};
Letao.prototype={
    slider:function(){
        var gallery = mui('.mui-slider');
        gallery.slider({
          interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
        });      
    }
}     
