({
	onBoatSelected : function(component, event, helper) {
        alert("onBoatSelected");
		var boatid= event.getParam("boat");
        component.set("v.id",boatid.Id);
        alert("onBoatSelected"+boatid.Id);  
          component.find("service").reloadRecord();
          boat=component.get("v.boat");
           alert("onBoatSelected"+boat);
        
    },
    onRecordUpdated:function(component, event, helper) {
    
},
 onBoatReviewAdded : function(component, event, helper) {
      component.set('v.selectedTabId', 'boatreviewtab');
      var boatreviewcomponent = component.find("boatreviewcomponent");
        if(boatreviewcomponent){
            boatreviewcomponent.refresh();
    }
 }
})