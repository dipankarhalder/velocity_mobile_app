import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { offerList } from "../constant/static";

export default function OfferList() {
  return (
    <View className="w-full flex-col mb-[40px]">
      <View className="w-full mb-3">
        <Text className="text-[16px] text-gray-600 font-nunitosans-bold">
          Our Selling Brands
        </Text>
      </View>
      <FlatList
        horizontal
        data={offerList}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const { id, imgUrl } = item;
          return (
            <View
              key={id}
              className="w-[120px] h-[80px] mr-4 justify-center items-center border border-gray-200 rounded-lg overflow-hidden"
            >
              <Image
                source={imgUrl}
                resizeMode="contain"
                className="w-full aspect-[3/2]"
              />
            </View>
          );
        }}
      />
    </View>
  );
}
