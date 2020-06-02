({
	onFullDetails : function(component, event, helper) {
		   var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        var boatrecord = component.get("v.boat");
        alert("In Full setails");
        if(boatrecord){
            redirectToSObjectPageEvent.setParams({
                "recordId" : boatrecord.Id
            });
            redirectToSObjectPageEvent.fire();
	}
    },
     init : function(component, event, helper) {
          alert("In Full setails");
        var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        if(redirectToSObjectPageEvent){
            component.set("v.displaybutton",true);
        }  
    
}
})