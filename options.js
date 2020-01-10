$(function(){

    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    });

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if(limit)
        {
            chrome.storage.sync.set({'limit': limit},function(){
                //Close the current tab
                close();
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0},function(){
            var notification = {
                type: 'basic',
                iconUrl: 'icon48x48.png',
                title: 'Total Reset!!!',
                message: "Total has been reset to 0"
            };

            //Using chrome API
            chrome.notifications.create('limitNotify', notification);
        });
    });
});