//ContextMenu objects
//contexts----> which items want you select to get visible icons
var contextMenuItem = {
    "id": "spendMoney",
    "title": "SpendMoney",
    "contexts": ["selection"]
};

//Using Chrome API
chrome.contextMenus.create(contextMenuItem);

//Check the type is Integer
function isInt(value)
{
    return !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value,10));
} 

//Using addListener 
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == 'spendMoney' && clickData.selectionText){
        if(isInt(clickData.selectionText)){
            //Check the availability of total,limit
            chrome.storage.sync.get(['total','limit'],function(budget){
                var newTotal = 0;
                if(budget.total)
                {
                    newTotal += parseInt(budget.total);
                }
                newTotal += parseInt(clickData.selectionText);
                chrome.storage.sync.set({'total': newTotal}, function(){
                    if(newTotal >= budget.limit){
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
                }
            })
        })
    }
}
});

chrome.storage.onChanged.addListener(function(changes,storageName){
    //Total changes has 2 values ---> newValue and oldValue
    chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});
});