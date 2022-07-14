import { LightningElement,track } from 'lwc';

export default class Employeedetails extends LightningElement {
    @track Name;
    @track Age;
    @track Salary;
   
    namehandler(event)
    {
        this.Name=event.target.value;
    }
    agehandler(event)
    {
        this.Age=event.target.value;
    }
    Salaryhandler(event)
    {
        this.Salary=event.target.value;
    }
}