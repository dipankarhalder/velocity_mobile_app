import { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  ImageBackground,
  Platform,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Phone } from "../../constant/icon";
import Header from "../../components/Header";
import { mainBanner, productListCat } from "../../constant/static";

export default function Categories() {
  const [searchInput, setSearchInput] = useState("");
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [356, 172],
    extrapolate: "clamp",
  });

  const bgImageOpacity = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0.9, 0],
    extrapolate: "clamp",
  });

  const bgColorChange = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: ["#000000", "#f8944f"],
    extrapolate: "clamp",
  });

  return (
    <View className="flex-1 bg-white">
      <Animated.View
        style={{
          height: headerHeight,
          width: "100%",
          backgroundColor: "#000000",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
      >
        <SafeAreaView className="w-full flex-col rounded-[20px] z-[3]">
          <Header />
          <View className="flex px-5">
            <View
              className={`flex-row items-center border border-white bg-white rounded-[10px] gap-4 px-4 mb-0 ${
                Platform.OS === "ios" ? "h-[44px]" : "h-[48px]"
              }`}
            >
              <Phone />
              <TextInput
                value={searchInput}
                placeholder="Search here..."
                onChangeText={(text) => setSearchInput(text)}
                className="text-black flex-1 font-nunitosans-semibold text-[16px]"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </SafeAreaView>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: 356,
            backgroundColor: bgColorChange,
            zIndex: 0,
          }}
        />
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: 356,
            zIndex: 1,
            opacity: bgImageOpacity,
          }}
        >
          <ImageBackground
            source={mainBanner}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 390, paddingBottom: 0 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full flex-col mb-[40px] px-5">
          <View className="w-full mb-3">
            <Text className="text-[16px] text-gray-600 font-nunitosans-bold">
              Popular Categories
            </Text>
          </View>
          <View className="flex-row flex-wrap w-full gap-6">
            {productListCat.map((item) => (
              <View
                className="w-full flex-col bg-white rounded-[10px] relative overflow-hidden"
                key={item.id}
              >
                <Image
                  source={item.imgUrl}
                  className="h-[200px] w-full rounded-lg"
                />
                <Text className="text-[15px] text-white font-nunitosans-bold absolute bottom-[16px] left-[22px] z-[3]">
                  {item.title}
                </Text>
                <LinearGradient
                  colors={["#000000", "rgba(0, 0, 0, 0)"]}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0 }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 150,
                    zIndex: 1,
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
