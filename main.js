
state = 1;

$("#article").html(`
終於，在經過了多年的努力之後之後，你受到總統的青睞而成為了國安會主委。
然而時局動盪，社會中出現許許多多的匪徒。你需要發揮你的長才來保衛這個國家，
即便這代表其餘無辜的市民會遭受牽連也一樣...<br\>
<br\>
按一下繼續
`);


$("#article").click(function(){
    if(state == 1)
    {
        $("#article").html(`
<div id="name">
    <span >姓名</span>
    <span id="name-content">王阿德</span>
</div>
<div id="occupation">
    <span>職業</span>
    <span id="occupation-content">學生</span>
</div>
<span id="content">
被檢舉人在學校成立社團「興台會」，意圖顛覆國家，鼓吹不利於民族復興之言論。
</span>
<div id="choice">
    <div id = "execute">處決</div>
    <div id = "spare">釋放</div>
</div>`);
        state = 2;
    }
    else if(state == 2)
    {
        //$("#article").html("王阿德被槍決了。");
    }
    
});

$(document).on('click','#execute',function(){
    $("#article").html("王阿德被槍決了。");
});

$(document).on('click','#spare',function(){
    $("#article").html("王阿德被釋放了。在接下來的數十年間，他十分畏懼再受到逮捕，所以從此不再接觸政治，並以此教育自己的子女，成為了一個好國民。");
});

