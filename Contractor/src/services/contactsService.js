import * as FileSystem from 'expo-file-system';
import * as Permission from 'expo-permissions';
import * as Contacts from 'expo-contacts';

//path to the directory that holds the data
const dataDirectory = `${FileSystem.documentDirectory}data`;

//handle errors
const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

//setup the directory if it does not exist
const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(dataDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(dataDirectory);
    }
}

//get all files in the directory
export const getAllFiles = async () => {
    // Check if directory exists
    await setupDirectory();

    const result = await onException(() => FileSystem.readDirectoryAsync(dataDirectory));
    
    return result
}

//get all data and combine into one single object
export const getAllData = async function () {
    let files = await getAllFiles();
    var data = [];

    for(var i in files){
        fileUri = dataDirectory + "/" + files[i];
        var obj = JSON.parse(await FileSystem.readAsStringAsync(fileUri));
        data.push(obj);
    }

    osData = await getOsContacts();
    
    var data = data.concat(osData);    

    return data;
}

//adds a contact, for now just for testing
export const addContact = async (name,phone,image) => {
    await setupDirectory(); 

    let obj = {
        name : name,
        phone: phone,
        image: image
    };

    //create the file uri
    let fileUri = dataDirectory + "/" + (name.toLowerCase().replace(/ /g, '_')) + ".json";

    //write and save the file
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(obj), { encoding: FileSystem.EncodingType.UTF8 });
}

//delete all files in dir
export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(dataDirectory);
}

const getPermission = async permissionTypes => {
    await Promise.all(permissionTypes.map(async (type) =>
    Permission.askAsync(type)));
}

//get contacts from the os
export const getOsContacts = async () => {
    ret_data = [];
    
    await getPermission([ Permission.CONTACTS]);
    const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
    });

    for(i in data){
        var obj = {
            name: data[i].name,
            phone: data[i].phoneNumbers[0].number,
            image: (data[i].image)?data[i].image:''
        };

        ret_data.push(obj);
    }
    
    return ret_data;
}