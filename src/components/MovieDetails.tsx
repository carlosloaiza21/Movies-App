import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterfacee';
import {FullMovie} from '../interfaces/movieinterface';
import currencyFormatter from 'currency-formatter';
import {ActorCard} from './ActorCard';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
    movieFull: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <>
            <View style={{marginHorizontal: 20}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{marginLeft: 5}}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                    Historia
                </Text>
                <Text style={{fontSize: 16}}>{movieFull.overview}</Text>

                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                    Presupuesto
                </Text>
                <Text style={{fontSize: 16}}>
                    {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
                </Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 100}}>
                <Text
                    style={{
                        fontSize: 20,
                        marginTop: 10,
                        fontWeight: 'bold',
                        marginHorizontal: 20,
                    }}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <ActorCard actor={item} />}
                    style={{marginTop: 10, height: 70}}
                />
            </View>
        </>
    );
};
