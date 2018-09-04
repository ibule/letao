$(function () {
    var letao = new Letao();
    letao.queryHistory();
    letao.addHistory();
    letao.deleteHistory();
    letao.clearHistory();

})

var Letao = function () {

}

Letao.prototype={
    addHistory:function(){
        var that=this;
        $('.btn-search').on('tap',function(){
         var search= $('.search-text').val();
         $('.search-text').val('');
        if(!search.trim()){
            alert('请输入内容');
            return;
        }
        var searchObj={
            id:1,
            search:search
        }
        var historyList=JSON.parse(localStorage.getItem('historyList')) || [];
        if(historyList.length>0){
            searchObj.id=historyList[historyList.length-1].id+1;
        }
        historyList.push(searchObj);
        localStorage.setItem('historyList',JSON.stringify(historyList));
        that.queryHistory();     
        })    
    },
    queryHistory:function(){
        var historyList=JSON.parse(localStorage.getItem('historyList')) || [];
        var historyList=historyList.reverse();
        var html=template('historyTmp',{rows:historyList});
        $('.history .content').html(html);
    },
    deleteHistory:function(){
        var that=this;
          $('.history .content ul').on('tap','li i',function(){
            var id=$(this).data('id');  
        var historyList=JSON.parse(localStorage.getItem('historyList'));
        for( var i=0; i<historyList.length; i++){
            if(historyList[i].id==id){
                historyList.splice(i,1);
            }
        }
        localStorage.setItem('historyList',JSON.stringify(historyList));
        that.queryHistory();
          })
    },
    clearHistory:function(){
        var that=this;
        $('.history .clearAll').on('tap',function(){
               localStorage.removeItem('historyList');
               that.queryHistory(); 
        })   
    }
}