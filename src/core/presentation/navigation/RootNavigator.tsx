import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import NotFoundScreen from "../screens/NotFoundScreen";
import GithubListScreen from "@/src/github/presentation/screens/GithubListScreen";
import GithubDetailScreen from "@/src/github/presentation/screens/GithubDetailScreen";
import MainScreen from "@/src/main/presentation/screens/MainScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Main";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
      />

      <Stack.Screen
        name="GithubList"
        component={GithubListScreen}
        options={
          {
            title: "Github List"
          }
        }
      />

      <Stack.Screen
        name="GithubDetail"
        component={GithubDetailScreen}
        options={
          {
            title: "Github Detail"
          }
        }
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={
          {
            title: "Not Found"
          }
        }
      />
    </Stack.Navigator>
  );
}
