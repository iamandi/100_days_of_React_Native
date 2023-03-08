import Constants from 'expo-constants';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, resetCount } from '../redux/countSlice';

export default function HomeScreen() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count.count);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.headerColumn}
					onPress={() => dispatch(resetCount())}
				>
					<Text style={styles.reset}>Reset</Text>
				</TouchableOpacity>
				<View style={styles.headerColumn}>
					<Text style={styles.title}>Counter</Text>
				</View>
				<View style={styles.headerColumn}></View>
			</View>

			<View style={styles.body}>
				<Text style={styles.count}>{count}</Text>
				<TouchableOpacity onPress={() => dispatch(increaseCount())}>
					<Text style={styles.tap}>Tap</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	header: {
		top: Constants.statusBarHeight,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		marginVertical: 16,
	},
	headerColumn: {
		flex: 1,
		flexGrow: 1,
	},
	title: {
		fontSize: 18,
		fontWeight: '500',
		alignSelf: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	reset: {
		color: '#0B86FF',
		fontSize: 18,
		alignSelf: 'flex-start',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	body: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},

	count: {
		fontSize: 96,
		marginBottom: 32,
	},
	tap: {
		fontSize: 24,
		color: '#0B86FF',
	},
});
