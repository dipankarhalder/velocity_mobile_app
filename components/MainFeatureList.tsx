import React from "react";
import { View, Text, Image } from "react-native";
import { listOfProducts, ban_bg } from "../constant/static";
import AddToCartButton from "../components/AddToCartButton";

export default function MainFeatureList() {
  const handleCountChange = (count: number) => {
    console.log("Cart count:", count);
  };

  return (
    <View className="w-full flex-col mb-[40px]">
      <View className="w-full mb-3">
        <Text className="text-[16px] text-gray-600 font-nunitosans-bold">
          List of Products
        </Text>
      </View>
      <View className="w-full flex-row flex-wrap gap-4">
        {listOfProducts.map((foodItem) => (
          <View
            className="w-[48%] flex-col items-center rounded-[10px] border border-gray-300 px-3 pt-3 pb-5"
            key={foodItem.id}
          >
            <View className="w-auto overflow-hidden rounded-[10px] relative">
              <Image source={foodItem.imgUrl} className="w-[80px] h-[80px]" />
            </View>
            <View className="w-auto py-2 px-0 relative">
              <Text
                className="text-[13px] text-black text-center pr-2 font-nunitosans-semibold mb-3"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {foodItem.title}
              </Text>
              <Text className="text-[15px] text-[#ff0000] text-center font-nunitosans-bold">
                ₹ {foodItem.price} /-
              </Text>
              <Text className="text-[13px] text-gray-400 text-center font-nunitosans-bold line-through">
                ₹ {foodItem.mainPrice} /-
              </Text>
            </View>
            <View className="w-full flex-row justify-center relative mt-1">
              <AddToCartButton onChange={handleCountChange} />
            </View>
          </View>
        ))}
      </View>
      <View className="w-full mt-[40px] overflow-hidden rounded-lg">
        <Image source={ban_bg} className="w-full h-[220px]" />
      </View>
    </View>
  );
}
