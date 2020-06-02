({
    init: function (component,event,helper) {
        var items = [];
        var createBoatEvent = $A.get("e.force:createRecord");
        if(createBoatEvent)
            component.set("v.isCreateRecord",true);
        var action = component.get("c.getAllBoatTypes");
        action.setCallback(this, function(response) {
            var state = response.getState();
           if(state=="SUCCESS"){
               var arr=response.getReturnValue();
               component.set("v.opt",arr);
               arr.forEach(function(element) {
                items.push({ value: element.Id, label: element.Name });
            });
           
            component.set("v.options", items);
        }
        });
        $A.enqueueAction(action);
    
    },
    handleChange: function (component, event,helper) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = component.find('select').get('v.value');
        var selectedOptionValue1 = component.find('select').get('v.label')
       // alert("Option selected with value: '" + selectedOptionValue + "'"+selectedOptionValue1);
    },
    handleSearch: function (component, event,helper) {
        var boatTypeId = component.find("select").get("v.value");
        var data = {
            "boatTypeId" : boatTypeId
        };
       
        var formsubmit = component.getEvent("formsubmit");
        formsubmit.setParams({
            "formData" :data
        });
       
        formsubmit.fire();
   // alert("in search");
    },
    handleNew : function (component, event,helper) {
        var createBoatEvent = $A.get("e.force:createRecord");      
    createBoatEvent.setParams({
    "entityApiName": "Boat__c",
    "defaultFieldValues": {
        'BoatType__c' : component.find('select').get('v.value')
    }
});
createBoatEvent.fire();
    },
    onFormSubmit : function(component,event) {
        var boatTypeId = component.find("select").get("v.value");
        var data = {
            "boatTypeId" : boatTypeId
        };
       
        var formsubmit = component.getEvent("formsubmit");
        formsubmit.setParams({
            "formData" :data
        });
       
        formsubmit.fire();
    }
});