import * as FileSystem from 'expo-file-system';

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
export const getAllData = async (cb) => {
    let files = await getAllFiles();
    var data = {};

    for(var i in files){
        fileUri = dataDirectory + "/" + files[i];
        var obj = JSON.parse(await FileSystem.readAsStringAsync(fileUri));
        data.push(obj);
    }
    
    cb(data);
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