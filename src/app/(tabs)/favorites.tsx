import { StyleSheet, FlatList, View} from 'react-native';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem'


export default function FavoritesScreen() {
  return (
    <View>
      <FlatList 
      data={tracks} 
      renderItem={({item})=> <TrackListItem track={item}/>}
      showsVerticalScrollIndicator={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
