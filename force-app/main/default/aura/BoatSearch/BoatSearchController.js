({
	onFormSubmit : function(component, event, helper) {    
        var data=event.getParam("formData");
      //  alert("Daya"+data.boatTypeId);
        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if(boatSearchResultsCmp){
            boatSearchResultsCmp.search(data.boatTypeId);
        }
    }
})