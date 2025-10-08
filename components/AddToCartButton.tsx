import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

interface AddToCartButtonProps {
  initialCount?: number;
  onChange?: (count: number) => void;
}

export default function AddToCartButton({
  initialCount = 1,
  onChange,
}: AddToCartButtonProps) {
  const [count, setCount] = useState<number>(0);

  const handleAddToCart = () => {
    setCount(initialCount);
    onChange?.(initialCount);
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange?.(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange?.(newCount);

    if (newCount <= 0) {
      setCount(0);
    }
  };

  return (
    <View className="w-auto">
      {count === 0 ? (
        <Pressable
          className="bg-red-100 px-4 rounded-md border border-[#ff0000]"
          onPress={handleAddToCart}
        >
          <Text className="text-[#ff0000] leading-[30px] h-[30px] text-center text-[12px] font-nunitosans-bold">
            Add to Cart
          </Text>
        </Pressable>
      ) : (
        <View className="flex-row items-center justify-between space-x-4 bg-[#ff0000] rounded-md">
          <Pressable onPress={handleDecrement}>
            <Text className="text-xl h-[32px] w-[30px] text-white font-nunitosans-bold text-center leading-[30px]">
              -
            </Text>
          </Pressable>
          <Text className="text-base font-nunitosans-bold text-white px-2">
            {count}
          </Text>
          <Pressable onPress={handleIncrement}>
            <Text className="text-xl h-[32px] w-[30px] text-white font-nunitosans-bold text-center leading-[30px]">
              +
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
