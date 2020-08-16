import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigations/DrawerNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
}
