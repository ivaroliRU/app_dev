import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ContactCard from '../contactCard';
import styles from './style';

class SubList extends React.Component{
    render() {
        console.log(this.props);
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
        var orderedContacts = this.props.contacts;
        var currentchar = '';
        var currentObj = {
        }
        var objects = [];

        //sort objects by the name
        orderedContacts.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));

        for(i in orderedContacts){
            if(currentchar.toLowerCase() != orderedContacts[i].name[0].toLowerCase()){
                objects.push(currentObj);
                currentchar = orderedContacts[i].name[0].toUpperCase();
                currentObj = {char:currentchar, elements:[]};
            }
            currentObj.elements.push(orderedContacts[i]);
        }

        return objects;
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    {this.orderLists().map((l) => (
                        <View key={l.char}>
                            <Text style={styles.header} >{l.char}</Text>
                            {(l.elements)?<SubList contacts={l} />:null}
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default ContactList;
