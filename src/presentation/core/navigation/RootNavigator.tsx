import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import MainScreen from "../../pages/main/MainScreen";
import NotFoundScreen from "../components/NotFoundScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Main";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{ title: "Home" }}
      />

      <Stack.Screen
      name="NotFound"
      component={NotFoundScreen}
      options={{ title: "Not Found" }}
      />
    </Stack.Navigator>
  );
}
