import {useNavigation} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {Image,View, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieinterface';
import { RootStackParamList } from '../navigation/NavigationComponent';

type Props = NativeStackScreenProps<RootStackParamList>;

interface MoviePosterProps extends Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({
    movie,
    height = 420,
    width = 300,
}: MoviePosterProps) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Details'>>();

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details',movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8,
            }}>
            <View style={style.imageContainer}>
                <Image source={{uri}} style={style.image} />
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
});
