import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const PostFooter = () => {
  return (
    <View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Feather name="heart" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="comment" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="send-o" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostFooter;
