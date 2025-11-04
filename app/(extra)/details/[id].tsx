import { View, Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { productList } from "../../../constant/static";

export default function DetailsPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Ensure id is a single string, not an array
  const numericId = Array.isArray(id)
    ? parseInt(id[0], 10)
    : parseInt(id || "", 10);

  // Use .find() instead of .map() to get the single matching product
  const filteredData = productList.find((item) => item.id === numericId);

  console.log(filteredData);

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      {filteredData ? (
        <>
          <View className="w-auto overflow-hidden rounded-[10px] relative">
            <Image
              source={filteredData.imgUrl}
              className="w-[180px] h-[180px]"
            />
          </View>
          <View className="w-auto py-2 px-0 relative">
            <Text
              className="text-[13px] text-black text-center pr-2 font-nunitosans-semibold mb-3"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {filteredData.title}
            </Text>
            <Text className="text-[15px] text-[#ff0000] text-center font-nunitosans-bold">
              ₹ {filteredData.price} /-
            </Text>
            <Text className="text-[13px] text-gray-400 text-center font-nunitosans-bold line-through">
              ₹ {filteredData.mainPrice} /-
            </Text>
          </View>
        </>
      ) : (
        <Text className="text-gray-500 mb-8">Item not found</Text>
      )}

      <TouchableOpacity
        className="bg-blue-600 px-5 py-3 rounded-lg"
        onPress={() => router.back()}
      >
        <Text className="text-white font-medium">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
