import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, Image, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Storage} from 'aws-amplify';

const Post = (props) => {

    const [post, setPost] = useState(props.post);

    const [isLiked, setIsLiked] = useState(false);

    const [videoUri, setVideoUri] = useState('');

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    };

    const getVideoUri = async () => {
        if(post.videoUri.startsWith('http')) {
            setVideoUri(post.videoUri);
            return;
        }
        setVideoUri(await Storage.get(post.videoUri));
    }

    useEffect(() => {
        getVideoUri();
    }, [])

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress} >
                <View>
                    <Video 
                        source={{uri: videoUri}}
                        style={styles.video}
                        onError={(e) => console.log(e)}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                    />
    
                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <Image style={styles.profilePicture} source={{uri: post.user.imageUri}} />
                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <AntDesign name={isLiked ? 'heart' : 'hearto'} size={30} color={isLiked ? 'red' : 'white'}/>
                                <Text style={styles.iconLabel}>{post.likes}</Text>
                            </TouchableOpacity>
                            <View style={styles.iconContainer}>
                                <FontAwesome name="commenting" size={30} color="white"/>
                                <Text style={styles.iconLabel}>{post.comments}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Fontisto name="share-a" size={30} color="white"/>
                                <Text style={styles.iconLabel}>{post.shares}</Text>
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.userName}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.songRow}>
                                    <Entypo name="beamed-note" size={24} color="white"/>
                                    <Text style={styles.songName}>{post.song.name}</Text>
                                </View>
                            </View>
        
                            <Image 
                                source={{uri: post.song.imageUri}}
                                style={styles.songImage}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post;