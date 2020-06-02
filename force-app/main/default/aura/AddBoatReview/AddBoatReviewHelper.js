({
	onInit : function(component,event) {
          component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newboatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
         console.log("Error initializing record template: " + error);
                    return;
                }
                     component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
                console.log("Record template initialized: " + rec.apiName);
            })
        );
		
	}
})