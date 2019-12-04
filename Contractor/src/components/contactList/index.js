import React from 'react';
import { Text, View } from 'react-native';
import ContactCard from '../contactCard';
import styles from './style';

class SubList extends React.Component{
    render() {
        return (
            this.props.contacts.elements.map((c) => (
                <ContactCard key={c.phone} contact={c} />
            ))
        );
    }
}

class ContactList extends React.Component {
    constructor (props) {
        super(props);
        
        this.orderLists = this.orderLists.bind(this);
    }

    //sort the list and grou into the first characte
    orderLists(){
        if(this.props.contacts == undefined){
            return [];
        }

        var orderedContacts = this.props.contacts;
        var currentchar = '';
        var currentObj = {
        }
        var objects = [];

        //sort objects by the name
        if(orderedContacts.length > 0){
            orderedContacts.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
        }

        console.log(orderedContacts);
        
        for(var i = 0; i < orderedContacts.length; i++){
            if(currentchar.toLowerCase() !== orderedContacts[i].name[0].toLowerCase()){
                currentchar = orderedContacts[i].name[0].toUpperCase();
                currentObj = {char:currentchar, elements:[]};
                objects.push(currentObj);
            }
            currentObj.elements.push(orderedContacts[i]);
        }

        return objects;
    }

    render() {
        var id = 0;
        console.log(this.orderLists());
        return (
            <View>
                {(this.props.contacts.length > 0)?this.orderLists().map((l) => (
                    <View style={styles.container} key={l.char + (id++).toString()}>
                        <Text style={styles.header} key={l.char + (id++).toString()} >{l.char}</Text>
                        {(l.elements)?<SubList contacts={l} key={l.char + (id++).toString()} />:null}
                    </View>
                )):null}
                </View>
        );
    }
}

export default ContactList;
