public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
       System.debug('**'+boatTypeId);
        if(String.isBlank(boatTypeId) || boatTypeId==null){
            System.debug('**'+boatTypeId);
            return [select id,Name,BoatType__c,Contact__r.Name,Picture__c,Geolocation__latitude__s,Geolocation__longitude__s from Boat__c];
        }
        else 
        return [select id,Name,BoatType__c,Contact__r.Name,Picture__c,Geolocation__latitude__s,Geolocation__longitude__s from Boat__c where BoatType__c=:boatTypeId ];

    }
}