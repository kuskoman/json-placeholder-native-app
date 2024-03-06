import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { store } from "@/store/store";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  store.subscribe(() => {
    const state = store.getState();
    const isLoggedIn = !!state.user.user?.id;
    setIsUserLoggedIn(isLoggedIn);
  });

  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Posts",
            tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name="albums"
          options={{
            title: "Albums",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="image" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: "Login",
            href: isUserLoggedIn ? null : "/login",
            tabBarIcon: ({ color }) => <TabBarIcon name="key" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            href: isUserLoggedIn ? "/profile" : null,
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
        <Tabs.Screen
          name="register"
          options={{
            title: "Register",
            href: isUserLoggedIn ? null : "/register",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="user-plus" color={color} />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
}
