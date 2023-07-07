import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Paragraph from "./UI/Paragraph";
import DeleteButton from "./UI/DeleteButton";

interface Props {
  name: string;
  id: string;
  icon?: string;
  styles?: StyleProp<ViewStyle>;
  amount: number;
  handleClick: () => void;
}

const CollectionBox = ({
  name,
  id,
  icon = "folder-outline",
  styles,
  amount,
  handleClick,
}: Props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={[localStyles.box, styles]}>
      <TouchableNativeFeedback
        onPress={() => {
          handleClick();
          setVisible(false);
        }}
        onLongPress={() => setVisible(!isVisible)}
      >
        <View style={localStyles.row}>
          <View style={localStyles.container}>
            <View style={localStyles.title}>
              <Icon name={icon} size={24} />
              <Paragraph styles={{ marginLeft: 10 }}>{name}</Paragraph>
            </View>
          </View>
          {isVisible ? (
            <DeleteButton id={id} />
          ) : (
            <Paragraph color="grey" styles={{ padding: 20 }}>
              {String(amount)}
            </Paragraph>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const localStyles = StyleSheet.create({
  box: {
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CollectionBox;
