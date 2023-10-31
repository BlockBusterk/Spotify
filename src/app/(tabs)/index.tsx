import { StyleSheet, FlatList} from 'react-native';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem'
import { Text, View} from '../../components/Themed';

export default function HomeScreen() {
  return (
    
      <FlatList 
      data={tracks} 
      renderItem={({item})=> <TrackListItem track={item}/>}
      showsVerticalScrollIndicator={false}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
