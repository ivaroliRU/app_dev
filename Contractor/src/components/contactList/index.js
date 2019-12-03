import React from 'react';
import { View, Text } from 'react-native';
import { ContactCard } from '../contactCard';

class ContactList extends React.Component {
    constructor (props) {
        super(props);
        
        this.orderLists = this.orderLists.bind(this);
    }

    orderLists(){
        let orderedContact = this.props.contacts;
        orderedContact.sort();
    }

    render() {
        return (
            <React.Fragment>
            {this.props.contacts.map((l) => (
                <ContactCard key={l.phone} contact={l} />
            ))}
            </React.Fragment>
        );
    }
}

export default ContactList;
