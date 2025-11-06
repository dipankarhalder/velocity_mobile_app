import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { user_profile } from "../../constant/static";

export default function Profile() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100">
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
            <Text className="text-[18px] text-[#ff0000] font-nunitosans-bold mb-[14px]">
              Ankit Roy Chowdhury
            </Text>
            <Text className="text-[13px] text-gray-500 font-nunitosans-semibold mb-[4px]">
              ankitroychowdhury@gmail.com
            </Text>
            <Text className="text-[13px] text-gray-500 font-nunitosans-semibold mb-[20px]">
              +91 9038716512
            </Text>
            <View className="flex-col w-full items-center bg-white px-4 py-8 rounded-lg mb-4">
              <Text className="text-[12px] text-black font-nunitosans-bold mb-[8px]">
                Address
              </Text>
              <Text className="text-[14px] text-gray-500 font-nunitosans-semibold">
                151, 1st B Main Road, Koramangala 8th Block
              </Text>
              <Text className="text-[14px] text-gray-500 font-nunitosans-semibold">
                Bangalore, Karnataka - 560095
              </Text>
            </View>

            <View className="flex-col w-full items-center bg-white px-7 py-8 rounded-lg">
              <Text className="text-[12px] text-black font-nunitosans-bold mb-[8px]">
                Your Information
              </Text>
              <View className="flex-col w-full gap-3">
                <TouchableOpacity
                  className="flex-row justify-between items-center"
                  onPress={() => router.push("/")}
                >
                  <Text className="text-[14px] text-gray-700 font-nunitosans-semibold">
                    1. Your Wishlist
                  </Text>
                  <Text className="text-[12px] text-gray-700 font-nunitosans-semibold">
                    &gt;
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-row justify-between items-center"
                  onPress={() => router.push("/")}
                >
                  <Text className="text-[14px] text-gray-700 font-nunitosans-semibold">
                    2. Your Orders
                  </Text>
                  <Text className="text-[12px] text-gray-700 font-nunitosans-semibold">
                    &gt;
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-row justify-between items-center"
                  onPress={() => router.push("/")}
                >
                  <Text className="text-[14px] text-gray-700 font-nunitosans-semibold">
                    3. Payment Settings
                  </Text>
                  <Text className="text-[12px] text-gray-700 font-nunitosans-semibold">
                    &gt;
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-row justify-between items-center"
                  onPress={() => router.push("/")}
                >
                  <Text className="text-[14px] text-gray-700 font-nunitosans-semibold">
                    4. About Us
                  </Text>
                  <Text className="text-[12px] text-gray-700 font-nunitosans-semibold">
                    &gt;
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
}
