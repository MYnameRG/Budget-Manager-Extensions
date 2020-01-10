//All Chrome API methods and variables are synchronous in nature
$(document).ready(function(){
    //Whenevr open extension the value will be represented
    chrome.storage.sync.get(['total','limit'],function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });

    $('#spendAmount').click(function(){
        //budget ----> object ---> stored inform in Storage
        chrome.storage.sync.get(['total','limit'],function(budget){
            var newTotal = 0;
            if(budget.total)
            {
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            if(amount)
            {
                newTotal += parseInt(amount);
            }

            //Setting the total in storage
            chrome.storage.sync.set({'total': newTotal}, function(){
                if(amount && newTotal >= budget.limit){
                    var notification = {
                        type: 'basic',
                        iconUrl: 'icon48x48.png',
                        title: 'Limit Reached!!!',
                        message: "Ohhh!! Looks like you reached your limit!!!!"
                    };

                    //Using chrome API
                    chrome.notifications.create('limitNotify', notification);
                }
            });

            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});