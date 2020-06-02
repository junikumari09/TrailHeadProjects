({
    doInit : function(component, event, helper) {
	var val= component.get("v.boat");
        //alert ("val"+val.name);
    },
    
    onBoatClick : function(component, event, helper){
       // alert("hi**In boat click");
    var btnclick= event.getSource();
    var boatid= btnclick.get("v.value");
         alert("boatid.Geolocation__Latitude__s"+boatid.Geolocation__Latitude__s);
  
        var compEvent = component.getEvent("BoatSelect");
    	compEvent.setParams({"boatId" : boatid.Id });
		compEvent.fire();
        var compEvent1 = $A.get("e.c:BoatSelected");
    	compEvent1.setParams({"boat" : boatid });
        alert("boatid.Geolocation__Latitude__s2");
		compEvent1.fire();
        alert("boatid.Geolocation__Latitude__s3");
        console.log("hi")
     	  var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent.setParams({

            "sObjectId" : boatid.Id,

            "lat" : boatid.Geolocation__Latitude__s,

            "long" : boatid.Geolocation__Longitude__s,

            "label" : boatid.Name

        });

        plotMapMarkerEvent.fire(); 
        alert("bbye");


}
})