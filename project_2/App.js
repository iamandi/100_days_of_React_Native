import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View style={styles.container}>
				<HomeScreen />
			</View>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
