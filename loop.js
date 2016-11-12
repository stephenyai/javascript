loopThroughMe = {
        "Contact": [
            {
                "name": "AccountId",
                "label": "Account ID",
                "type": "reference",
                "write": true,
                "required": false,
                "apFieldLabel": "Account Id",
                "bislr": {
                    "name": "account_id",
                    "type": "single"
                }
            },
            {
                "name": "LastName",
                "label": "Last Name",
                "type": "string",
                "write": true,
                "required": true,
                "default": "[not provided]",
                "apFieldLabel": "Last Name",
                "bislr": {
                    "name": "LastName",
                    "type": "single"
                }
            },
            {
                "name": "FirstName",
                "label": "First Name",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "First Name",
                "bislr": {
                    "name": "FirstName",
                    "type": "single"
                }
            },
            {
                "name": "Salutation",
                "label": "Salutation",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Salutation",
                "bislr": {
                    "name": "Salutation",
                    "type": "single"
                }
            },
            {
                "name": "MailingStreet",
                "label": "Mailing Street",
                "type": "textarea",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Street",
                "bislr": {
                    "name": "MailingStreet",
                    "type": "single"
                }
            },
            {
                "name": "MailingCity",
                "label": "Mailing City",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing City",
                "bislr": {
                    "name": "MailingCity",
                    "type": "single"
                }
            },
            {
                "name": "MailingState",
                "label": "Mailing State/Province",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing State",
                "bislr": {
                    "name": "MailingState",
                    "type": "single"
                }
            },
            {
                "name": "MailingPostalCode",
                "label": "Mailing Zip/Postal Code",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Postal Code",
                "bislr": {
                    "name": "MailingPostalCode",
                    "type": "single"
                }
            },
            {
                "name": "MailingCountry",
                "label": "Mailing Country",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Country",
                "bislr": {
                    "name": "MailingCountry",
                    "type": "single"
                }
            },
            {
                "name": "Phone",
                "label": "Business Phone",
                "type": "phone",
                "write": true,
                "required": false,
                "apFieldLabel": "Phone",
                "bislr": {
                    "name": "Phone",
                    "type": "single"
                }
            },
            {
                "name": "Email",
                "label": "Email",
                "type": "email",
                "write": true,
                "required": false,
                "apFieldLabel": "Email",
                "bislr": {
                    "name": "Email",
                    "type": "single"
                }
            },
            {
                "name": "Title",
                "label": "Title",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Title",
                "bislr": {
                    "name": "Title",
                    "type": "single"
                }
            },
            {
                "name": "Do_Not_Call__c",
                "label": "Do Not Call",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Do Not Call",
                "bislr": {
                    "kind": "Do Not Call",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Do Not Call",
                    "fieldType": "string"
                }
            },
            {
                "name": "Account_Type__c",
                "label": "Account Type",
                "type": "string",
                "write": false,
                "required": false,
                "apFieldLabel": "Account Type",
                "bislr": {
                    "kind": "Account Type",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Account Type",
                    "fieldType": "string"
                }
            },
            {
                "name": "Corporate_Type__c",
                "label": "Corporate Type",
                "type": "string",
                "write": false,
                "required": false,
                "apFieldLabel": "Corporate Type",
                "bislr": {
                    "kind": "Corporate Type",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Corporate Type",
                    "fieldType": "string"
                }
            },
            {
                "name": "LMS__c",
                "label": "LMS",
                "type": "string",
                "write": false,
                "required": false,
                "apFieldLabel": "LMS",
                "bislr": {
                    "kind": "LMS",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "LMS",
                    "fieldType": "string"
                }
            },
            {
                "name": "LMS2__c",
                "label": "LMS2",
                "type": "string",
                "write": false,
                "required": false,
                "apFieldLabel": "LMS2",
                "bislr": {
                    "kind": "LMS2",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "LMS2",
                    "fieldType": "string"
                }
            },
            {
                "name": "Lead_Source_New__c",
                "label": "Lead Source New",
                "type": "string",
                "write": false,
                "required": false,
                "bislr": {
                    "kind": "Lead Source New",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Lead Source New",
                    "fieldType": "string"
                }
            },
            {
                "name": "Associations__c",
                "label": "Associations",
                "type": "string",
                "write": false,
                "required": false,
                "bislr": {
                    "kind": "Associations",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Associations",
                    "fieldType": "string"
                }
            },
            {
                "name": "Id",
                "type": "id",
                "label": "Contact ID",
                "bislr": {
                    "name": "sf_id",
                    "type": "single"
                }
            },
            {
                "name": "OwnerId",
                "type": "reference",
                "label": "Owner ID",
                "bislr": {
                    "name": "owner_id",
                    "type": "single"
                }
            },
            {
                "name": "Owner.Name",
                "type": "string",
                "label": "Owner Name",
                "bislr": {
                    "name": "owner_name",
                    "type": "single"
                }
            },
            {
                "name": "Account.Name",
                "type": "string",
                "label": "Company",
                "bislr": {
                    "name": "Company",
                    "type": "single"
                }
            },
            {
                "name": "AccountId",
                "type": "reference",
                "label": "Account Id",
                "apFieldLabel": "Account Id",
                "bislr": {
                    "name": "account_id",
                    "type": "single"
                }
            }
        ],
        "Lead": [
            {
                "name": "LastName",
                "label": "Last Name",
                "type": "string",
                "write": true,
                "required": true,
                "default": "[not provided]",
                "apFieldLabel": "Last Name",
                "bislr": {
                    "name": "LastName",
                    "type": "single"
                }
            },
            {
                "name": "FirstName",
                "label": "First Name",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "First Name",
                "bislr": {
                    "name": "FirstName",
                    "type": "single"
                }
            },
            {
                "name": "Salutation",
                "label": "Salutation",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Salutation",
                "bislr": {
                    "name": "Salutation",
                    "type": "single"
                }
            },
            {
                "name": "Title",
                "label": "Title",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Title",
                "bislr": {
                    "name": "Title",
                    "type": "single"
                }
            },
            {
                "name": "Company",
                "label": "Company",
                "type": "string",
                "write": true,
                "required": true,
                "default": "[not provided]",
                "apFieldLabel": "Company",
                "bislr": {
                    "name": "Company",
                    "type": "single"
                }
            },
            {
                "name": "Street",
                "label": "Street",
                "type": "textarea",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Street",
                "bislr": {
                    "name": "MailingStreet",
                    "type": "single"
                }
            },
            {
                "name": "City",
                "label": "City",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing City",
                "bislr": {
                    "name": "MailingCity",
                    "type": "single"
                }
            },
            {
                "name": "State",
                "label": "State/Province",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing State",
                "bislr": {
                    "name": "MailingState",
                    "type": "single"
                }
            },
            {
                "name": "PostalCode",
                "label": "Zip/Postal Code",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Postal Code",
                "bislr": {
                    "name": "MailingPostalCode",
                    "type": "single"
                }
            },
            {
                "name": "Country",
                "label": "Country",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Country",
                "bislr": {
                    "name": "MailingCountry",
                    "type": "single"
                }
            },
            {
                "name": "Phone",
                "label": "Phone",
                "type": "phone",
                "write": true,
                "required": false,
                "apFieldLabel": "Phone",
                "bislr": {
                    "name": "Phone",
                    "type": "single"
                }
            },
            {
                "name": "Email",
                "label": "Email",
                "type": "email",
                "write": true,
                "required": false,
                "apFieldLabel": "Email",
                "bislr": {
                    "name": "Email",
                    "type": "single"
                }
            },
            {
                "name": "Website",
                "label": "Website",
                "type": "url",
                "write": true,
                "required": false,
                "apFieldLabel": "Website",
                "bislr": {
                    "name": "Website",
                    "type": "single"
                }
            },
            {
                "name": "LeadSource",
                "label": "Lead Source",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Lead Source",
                "bislr": {
                    "name": "LeadSource",
                    "type": "single"
                }
            },
            {
                "name": "Status",
                "label": "Status",
                "type": "picklist",
                "write": true,
                "required": true,
                "default": "[not provided]",
                "apFieldLabel": "Status",
                "bislr": {
                    "name": "Status",
                    "type": "single"
                }
            },
            {
                "name": "Industry",
                "label": "Industry",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Industry",
                "bislr": {
                    "name": "Industry",
                    "type": "single"
                }
            },
            {
                "name": "NumberOfEmployees",
                "label": "Employees",
                "type": "int",
                "write": true,
                "required": false,
                "apFieldLabel": "Employees",
                "bislr": {
                    "name": "NumberOfEmployees",
                    "type": "single"
                }
            },
            {
                "name": "Id",
                "type": "id",
                "label": "Lead ID",
                "bislr": {
                    "name": "sf_id",
                    "type": "single"
                }
            },
            {
                "name": "OwnerId",
                "type": "reference",
                "label": "Owner ID",
                "bislr": {
                    "name": "owner_id",
                    "type": "single"
                },
                "write": true,
                "required": true
            },
            {
                "name": "Owner.Name",
                "type": "string",
                "label": "Owner Name",
                "bislr": {
                    "name": "owner_name",
                    "type": "single"
                }
            }
        ],
        "Account": [
            {
                "name": "Name",
                "label": "Account Name",
                "type": "string",
                "write": true,
                "required": true,
                "default": "[not provided]",
                "apFieldLabel": "Account Name",
                "bislr": {
                    "kind": "Account Name",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Account Name",
                    "fieldType": "string"
                }
            },
            {
                "name": "Type",
                "label": "Account Type",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Account Type",
                "bislr": {
                    "kind": "Account Type",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Account Type",
                    "fieldType": "string"
                }
            },
            {
                "name": "BillingStreet",
                "label": "Billing Street",
                "type": "textarea",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Street",
                "bislr": {
                    "name": "MailingStreet",
                    "type": "single"
                }
            },
            {
                "name": "BillingCity",
                "label": "Billing City",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing City",
                "bislr": {
                    "name": "MailingCity",
                    "type": "single"
                }
            },
            {
                "name": "BillingState",
                "label": "Billing State/Province",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing State",
                "bislr": {
                    "name": "MailingState",
                    "type": "single"
                }
            },
            {
                "name": "BillingPostalCode",
                "label": "Billing Zip/Postal Code",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Postal Code",
                "bislr": {
                    "name": "MailingPostalCode",
                    "type": "single"
                }
            },
            {
                "name": "BillingCountry",
                "label": "Billing Country",
                "type": "string",
                "write": true,
                "required": false,
                "apFieldLabel": "Mailing Country",
                "bislr": {
                    "name": "MailingCountry",
                    "type": "single"
                }
            },
            {
                "name": "Phone",
                "label": "Account Phone",
                "type": "phone",
                "write": true,
                "required": false,
                "apFieldLabel": "Phone",
                "bislr": {
                    "name": "Phone",
                    "type": "single"
                }
            },
            {
                "name": "Industry",
                "label": "Industry",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Industry",
                "bislr": {
                    "name": "Industry",
                    "type": "single"
                }
            },
            {
                "name": "NumberOfEmployees",
                "label": "Employees",
                "type": "int",
                "write": true,
                "required": false,
                "apFieldLabel": "Number of Employees",
                "bislr": {
                    "name": "NumberOfEmployees",
                    "type": "single"
                }
            },
            {
                "name": "LMS__c",
                "label": "LMS",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "LMS",
                "bislr": {
                    "kind": "LMS",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "LMS",
                    "fieldType": "string"
                }
            },
            {
                "name": "SIS__c",
                "label": "SIS",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "SIS",
                "bislr": {
                    "kind": "SIS",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "SIS",
                    "fieldType": "string"
                }
            },
            {
                "name": "LMS2__c",
                "label": "LMS2",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "LMS2",
                "bislr": {
                    "kind": "LMS2",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "LMS2",
                    "fieldType": "string"
                }
            },
            {
                "name": "College_Type__c",
                "label": "College Type",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "College Type",
                "bislr": {
                    "kind": "College Type",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "College Type",
                    "fieldType": "string"
                }
            },
            {
                "name": "Corporate_Type__c",
                "label": "Corporate Type",
                "type": "picklist",
                "write": true,
                "required": false,
                "apFieldLabel": "Corporate Type",
                "bislr": {
                    "kind": "Corporate Type",
                    "name": "custom_fields",
                    "type": "single",
                    "subproperty": "Corporate Type",
                    "fieldType": "string"
                }
            },
            {
                "name": "Id",
                "type": "id",
                "label": "Account ID",
                "bislr": {
                    "name": "sf_id",
                    "type": "single"
                }
            },
            {
                "name": "OwnerId",
                "type": "reference",
                "label": "Owner ID",
                "bislr": {
                    "name": "owner_id",
                    "type": "single"
                },
                "write": true,
                "required": true
            },
            {
                "name": "Owner.Name",
                "type": "string",
                "label": "Owner Name",
                "bislr": {
                    "name": "owner_name",
                    "type": "single"
                }
            }
        ],
        "Campaign": [
            {
                "name": "Id",
                "type": "id",
                "label": "Campaign ID",
                "bislr": {
                    "name": "sf_id",
                    "type": "single"
                }
            },
            {
                "name": "OwnerId",
                "type": "reference",
                "label": "Owner ID",
                "bislr": {
                    "name": "owner_id",
                    "type": "single"
                }
            },
            {
                "name": "Owner.Name",
                "type": "string",
                "label": "Owner Name",
                "bislr": {
                    "name": "owner_name",
                    "type": "single"
                }
            }
        ]
    }

    // for (var salesForceObject in loopThroughMe) {
    //     var sfObjectFields = loopThroughMe[salesForceObject];
    //     for (var i = 0; i < loopThroughMe[salesForceObject].length; i++) {
    //         console.log(salesForceObject); 
    //         //console.log(sfObjectFields.length);
    //         //console.log(salesForceObject, sfObjectFields[i].name, sfObjectFields[i].bislr.name);
    //          break;
    //     }
    //         //break;
    //     //console.log(loopThroughMe[bislr);



for (var key in loopThroughMe) {

    for (var i = 0; i < loopThroughMe[key].length; i++) {

        console.log(key, loopThroughMe[key]);

    }
    
}













































    