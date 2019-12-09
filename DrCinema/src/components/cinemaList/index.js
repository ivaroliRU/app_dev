import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import CinemaCard from '../cinemaCard';

class SubList extends React.Component{
    render() {
        var id = 0;
        return (
            this.props.cinemas.elements.map((c) => (
                <CinemaCard cinema={c} />
            ))
        );
    }
}

class CinemaList extends React.Component {
    constructor (props) {
        super(props);
        
        this.orderLists = this.orderLists.bind(this);
    }

    //sort the list and grou into the first characte
    orderLists(){
        if(this.props.cinemas == undefined){
            return [];
        }

        var orderedCinemas = this.props.cinemas;
        var currentchar = '';
        var currentObj = {
        }
        var objects = [];

        //sort objects by the name
        if(orderedCinemas.length > 0){
            orderedCinemas.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
        }
        
        for(var i = 0; i < orderedCinemas.length; i++){
            if(currentchar.toLowerCase() !== orderedCinemas[i].name[0].toLowerCase()){
                currentchar = orderedCinemas[i].name[0].toUpperCase();
                currentObj = {char:currentchar, elements:[]};
                objects.push(currentObj);
            }
            currentObj.elements.push(orderedCinemas[i]);
        }

        return objects;
    }

    render() {
        var id = 0;
        return (
            <View>
                {(this.props.cinemas.length > 0)?this.orderLists().map((l) => (
                    <View style={styles.container} key={l.char + (id++).toString()}>
                        <Text style={styles.header} key={l.char + (id++).toString()} >{l.char}</Text>
                        {(l.elements)?<SubList cinemas={l} key={l.char + (id++).toString()} />:null}
                    </View>
                )):null}
                </View>
        );
    }
}

export default CinemaList;
