import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParamList} from '../navigation/NavigationComponent';
import {styles} from '../../../navegacionApp/src/theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> {}

const heigth = Dimensions.get('screen').height;

const DetailScreen = ({navigation, route}: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

    console.log(isLoading, cast, movieFull);

    return (
        <ScrollView>
            <View style={style.imageContainer}>
                <View style={style.imageBorder}>
                    <Image source={{uri}} style={style.posterImage} />
                </View>
            </View>
            <View style={style.marginContainer}>
                <Text style={style.subtitle}>{movie.original_title}</Text>
                <Text style={style.title}>{movie.title}</Text>
            </View>

            {isLoading ? (
                <ActivityIndicator
                    size={35}
                    color={'gray'}
                    style={{marginTop: 20}}
                />
            ) : (
                <MovieDetails movieFull={movieFull!} cast={cast} />
            )}

            <View>
                <TouchableOpacity>
                    <Icon color="white" name="arrow-back-outline" size={60} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DetailScreen;

const style = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: heigth * 0.7,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
