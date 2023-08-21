public with sharing class catalog_controller {
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts() {
    System.debug('getproducts');
    return [SELECT Id, Name, Standard_Pricing__c, Thumbnail__c FROM Product2 ORDER BY IsActive DESC];
    }
}