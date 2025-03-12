import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import NotFoundScreen from "../screens/NotFoundScreen";
import GithubListScreen from "@/src/github/presentation/screens/GithubListScreen";
import GithubDetailScreen from "@/src/github/presentation/screens/GithubDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "GithubList";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="GithubList" component={GithubListScreen} />

      <Stack.Screen name="GithubDetail" component={GithubDetailScreen} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
