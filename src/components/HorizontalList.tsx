import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieinterface';
import { RootStackParamList } from '../navigation/NavigationComponent';
import {MoviePoster} from './MoviePoster';

type PropsNAv = NativeStackScreenProps<RootStackParamList>;

interface Props extends PropsNAv {
    title?: string;
    movies: Movie[];
}

export const HorizontalList = ({title, movies, route, navigation}: Props) => {
    return (
        <View style={{height: (title)?260:220}}>
            {title ? (
                <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft:10}}>{title}</Text>
            ) : null}

            <FlatList
                data={movies}
                renderItem={({item}) => (
                    <MoviePoster movie={item} width={140} height={200} navigation={navigation} route={route} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
