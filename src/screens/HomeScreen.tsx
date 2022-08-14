import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import type {RootStackParamList} from '../navigation/NavigationComponent';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width: windowWidth} = Dimensions.get('window');

import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';
import {HorizontalList} from '../components/HorizontalList';

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({navigation, route}: Props) => {
    const {top} = useSafeAreaInsets();
    const {nowPlaying, popular, topRated, upcoming, isLoadig} = useMovies();

    if (isLoadig) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{marginTop: top + 20}}>
                <View
                    style={{
                        height: 440,
                    }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({item}) => <MoviePoster movie={item} navigation={navigation} route={route} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                <HorizontalList title="Popular Movies" movies={popular} navigation={navigation} route={route} />
                <HorizontalList title="Top Rated" movies={topRated} navigation={navigation} route={route}/>
                <HorizontalList title="Upcoming" movies={upcoming} navigation={navigation} route={route}/>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
