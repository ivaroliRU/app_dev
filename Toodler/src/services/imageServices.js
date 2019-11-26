import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';

const getPermission = async (permissionTypes) => {
    await Promisee.all(permissionTypes.map(async (type =>
        Permission.askAsync(type))))
};

const selectFromCameroRoll = async () => {
    await getPermission([Permission.CAMERA_ROLL]);
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        qualty: 0.8,
        base64: true,
        aspect: [16, 9]
    })
    if (result.cancelled) {return '';}
    return result.uri
}



export default selectFromCameroRoll