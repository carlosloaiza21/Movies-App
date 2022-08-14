import React from 'react';
import {Cast} from '../interfaces/creditsInterfacee';
import {Text, View, Image, StyleSheet} from 'react-native';

interface Props {
    actor: Cast;
}

export const ActorCard = ({actor}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {actor.profile_path && (
                <Image source={{uri}} style={styles.image} />
            )}

            <View style={styles.actorInfo}>
                <Text style={styles.actorName}>{actor.name}</Text>
                <Text style={styles.character}>{actor.character}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 55,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        marginHorizontal: 20,
        paddingRight: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 5,
    },
    actorName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    character: {
        fontSize: 18,
        opacity: 0.7,
    },
});
