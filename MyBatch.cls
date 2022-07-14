global class MyBatch implements Database.Batchable<sobject> {
    
    global database.QueryLocator start(database.BatchableContext bc)
    {
        string query = 'select id,name from account';
        return Database.getQueryLocator(query);
    }
    global void execute(database.BatchableContext bc, list<Account> act)
    {
        for(Account a : act)
        {
            a.name = a.name+ '20July';
        }
        update act;
    }
    public void finish(Database.BatchableContext bc){
        
    }
}