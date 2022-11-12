// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import { Audio } from 'expo-av';


// const Voice = () => {
//     const [sound, setSound] = React.useState();

//      const playSound = async () => {
//         const { sound } = await Audio.Sound.createAsync(
//             require('../assets/sounds/Transformation-sound-effect.mp3')
//         );
//         setSound(sound);
//         await sound.playAsync();
//     }

//     const stopSound = async () => {
//         await sound.stopAsync()
//     }

//     React.useEffect(() => {
//         return sound
//             ? () => {
//                 sound.unloadAsync();
//             }
//             : undefined;
//     }, [sound]);

//     return (
//         <View style={styles.container}>
//             <Button title="Play Sound" onPress={playSound} />
//             <View style={{ marginTop:10 }}>
//                 <Button title="Stop Sound" onPress={stopSound} />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems:'center',
//         padding: 10,
//     },
// });

// export default Voice;