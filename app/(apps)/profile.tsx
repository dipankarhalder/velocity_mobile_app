import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { user_profile } from "../../constant/static";

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-col w-full px-5 mt-[70px]">
          <View className="flex-row w-full justify-center mb-[50px]">
            <Text className="text-[16px] text-gray-400 font-nunitosans-bold">
              Profile Details
            </Text>
          </View>
          <View className="flex-col w-full items-center">
            <Image
              source={user_profile}
              className="h-[120px] w-[120px] rounded-lg mb-3"
            />
            <Text className="text-[18px] text-[#ff0000] font-nunitosans-bold mb-[15px]">
              Ankit Roy Chowdhury
            </Text>
            <Text className="text-[13px] text-gray-500 font-nunitosans-semibold mb-[5px]">
              ankitroychowdhury@gmail.com
            </Text>
            <Text className="text-[13px] text-gray-500 font-nunitosans-semibold">
              +91 9038716510
            </Text>
            <View>
              <View>
                <Text></Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
