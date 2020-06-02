public with sharing class BoatController {
   
    @AuraEnabled
    public static List<BoatType__c> getAllBoatTypes(){
        List<String> allBoatTypes = new List<String>();
        List<BoatType__c> boatTypes= [Select Id ,name from BoatType__c];
      /* for(BoatType__c bt :boatTypes )
        allBoatTypes.add(bt.Name);
        return allBoatTypes;*/
        return boatTypes;
        
    }
}