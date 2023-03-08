import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from 'expo-constants';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const HomeScreen = () => {
	const [count, setCount] = useState(0);
	const [holding, setHolding] = useState(false);
	const timeoutRef = useRef(null);

	useEffect(() => {
		let interval = null;

		if (holding) {
			interval = setInterval(() => {
				setCount((count) => count + 1);
			}, 100);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [holding]);

	const handlePressIn = () => {
		setHolding(true);
	};

	const handlePressOut = () => {
		setHolding(false);
	};

	const handlePress = () => {
		setCount((count) => count + 1);
	};

	const resetCount = () => {
		setCount(0);
	};

	const longPress = Gesture.LongPress()
		.runOnJS(true)
		.onStart(() => {
			console.log('Tapped...');
		})
		.onBegin(() => console.log('\n\nBegin...'))
		.onStart(() => {
			console.log('Started...');
			// increaseCount();
			setCount(count + 1);
		})
		.onEnd(() => console.log('Ended...'))
		.onFinalize(() => console.log('Finalized...'))
		.onTouchesMove(() => {
			console.log('Touches moved...');
			setCount(count + 1);
		})
		.onTouchesCancelled(() => console.log('Cancelled...'));

	const singleTap = Gesture.Tap()
		.runOnJS(true)
		.onEnd(() => {
			console.log('Tapped...');
			setCount(count + 1);
		});

	const panGesture = Gesture.Pan()
		.runOnJS(true)
		.onUpdate((e) => {
			if (e.translationX < 35 && e.translationX > -35)
				setCount(count + 1);
		})
		.onEnd((e) => {
			console.log('>> pan gesture ended...');
		});

	const taps = Gesture.Exclusive(singleTap, longPress, panGesture);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.headerColumn}
					onPress={resetCount}
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

				{/* <GestureDetector
					gesture={taps}
					// maxDist={9999999999999999}
					shouldCancelWhenOutside={true}
					// minDurationMs={0}
					// maxDurationMs={99999999}
					hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
				>
					<View collapsable={false}>
						<Text style={styles.tap}>Tap or hold</Text>
					</View>
				</GestureDetector> */}

				<TouchableOpacity
					style={{
						marginVertical: 20,
					}}
					onPressIn={handlePressIn}
					onPressOut={handlePressOut}
					onPress={handlePress}
				>
					<Text style={styles.tap}>Tap or hold</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

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
	box: {
		width: 300,
		height: 100,
		backgroundColor: '#FF0088',
		marginVertical: 16,
	},
});
