<!--
*******************************************************************

* Component Name: BikeCards
* Created by : Nidhi Sharma
-------------------------------------------------------------------
* Purpose: Created to display the bike pic on the lightning app page
*******************************************************************
**-->
    
import { LightningElement } from 'lwc';
export default class BikeCard extends LightningElement {
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
 }
