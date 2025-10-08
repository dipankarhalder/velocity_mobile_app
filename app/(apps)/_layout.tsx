import { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { useAuthStore } from "../../store/auth";
import { tabs_information } from "../../constant/static";

export default function AppLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)/login");
    }
  }, [isAuthenticated, router]);

  const handleGetStarted = () => {
    console.log("hello");
  };

  return (
    <>
      <View className="absolute bottom-[100px] left-[50%] ml-[-65px] z-[1]">
        <TouchableOpacity
          onPress={handleGetStarted}
          className="bg-[#ff0000] w-[130px] py-[8px] rounded-full items-center"
          style={{
            shadowColor: "#ff0000",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.4,
            shadowRadius: 4.65,
            elevation: 8,
          }}
        >
          <Text className="text-white text-[14px] font-nunitosans-bold">
            Build Your PC
          </Text>
        </TouchableOpacity>
      </View>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#C41131",
          tabBarInactiveTintColor: "#8e8e93",
          tabBarStyle: [
            {
              height: 80,
              paddingTop: 6,
              backgroundColor: "#ffffff",
            },
          ],
        }}
      >
        {tabs_information.map(({ name, title, Icon }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: title,
              tabBarLabel: ({ color }) => (
                <Text
                  style={{ color }}
                  className="font-nunitosans-bold text-[13px] mt-1"
                >
                  {title}
                </Text>
              ),
              tabBarIcon: ({ color }) => (
                <Icon width={24} height={24} color={color} />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
