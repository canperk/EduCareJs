$(document).ready(function(){

    //Notification
    $("#btnNotiSuc").click(function(){
        EC.Notify.Success("it worked!");
    });    
    $("#btnNotiErr").click(function(){
        EC.Notify.Error("something went wrong");
    });    
    $("#btnNotiWar").click(function(){
        EC.Notify.Warning("connection is slow...");
    });    
    $("#btnNotiInf").click(function(){
        EC.Notify.Info("1 mail received");
    });    


    //Exception
    $("#btnExcUnd").click(function(){
        console.log(a);        
    });
});