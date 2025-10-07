import React from "react";
import { View, Text } from "react-native";
import { User, Wallet, Shop } from "../constant/icon";

export default function Header() {
  return (
    <View className="w-full flex-col mb-4 pt-3 px-5">
      <View className="flex-row w-full justify-between">
        <View className="flex-row gap-3">
          <User color={"#000000"} />
          <View className="flex-col mt-[-2px]">
            <Text className="text-[18px] font-nunitosans-extrabold text-black">
              Hey, Dipankar
            </Text>
          </View>
        </View>
        <View className="flex-row gap-10">
          <Wallet color={"#000000"} />
          <Shop color={"#000000"} />
        </View>
      </View>
    </View>
  );
}
