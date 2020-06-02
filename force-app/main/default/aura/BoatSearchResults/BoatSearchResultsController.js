({
	doInit : function(component, event, helper) {
		var boatTypeid= component.get("v.boatTypeID");
      //  alert("id"+boatTypeid);
       var arr=[];
        helper.onSearch(component,boatTypeid);        
       
	},
    doSearch : function(component, event, helper) {
     //   alert("obdosearch");
                var params = event.getParam('arguments');
      //  alert("params"+params);
        component.set("v.boatTypeId", params.boatTypeId);
                helper.onSearch(component,params.boatTypeId);
    },
    onBoatSelect : function(component, event, helper) {
    //    alert("In boat select");
        var eve = event.getParam('boatId');
       // alert("sBoatiD"+eve);
        component.set("v.selectedBoatId",eve);
    },

})