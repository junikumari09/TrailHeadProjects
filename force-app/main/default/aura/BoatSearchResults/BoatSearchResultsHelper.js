({
	onSearch : function(component,boatId) {
        alert("boatId"+boatId);
         var action = component.get("c.getBoats");
         action.setParams({
            "boatTypeId": boatId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
          //  alert("response.getReturnValue()"+response.getReturnValue());
                 component.set("v.boats",response.getReturnValue());
         //  alert("cc"+component.get("v.boats"));
               
        });
        // Send action off to be executed
        $A.enqueueAction(action);
		
	}
})