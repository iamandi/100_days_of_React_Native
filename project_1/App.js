import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';

export default function App() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<HomeScreen />
			</Provider>
		</SafeAreaProvider>
	);
}
