import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import PostFooter from "../Posts/PostFooter";
import PostHeader from "../Posts/PostHeader";
import PostImage from "../Posts/PostImage";

const Post = ({ postData }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader data={postData} />
      <PostImage image={postData.imageUri} />
      <PostFooter />
    </View>
  );
};

export default Post;
