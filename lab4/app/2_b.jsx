import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const Screen2b = () => {
  return (
    <View style={styles.container}>
      <View style={styles.usbContainer}>
        <Image
          source={require("../assets/images/usb.png")}
          style={styles.usbImage}
        />
        <Text style={styles.usbText}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={styles.starcontainer}>
        <Text style={styles.starText}>Cực kỳ hài lòng</Text>
        <View style={styles.star}>
          <Image
            source={require("../assets/images/star.png")}
            style={styles.starImage}
          />
          <Image
            source={require("../assets/images/star.png")}
            style={styles.starImage}
          />
          <Image
            source={require("../assets/images/star.png")}
            style={styles.starImage}
          />
          <Image
            source={require("../assets/images/star.png")}
            style={styles.starImage}
          />
          <Image
            source={require("../assets/images/star.png")}
            style={styles.starImage}
          />
        </View>
      </View>
      <View>
        <View style={styles.addImageContainer}>
          <Image source={require("../assets/images/camera.png")} />
          <Text style={styles.addImageText}>Thêm hình ảnh</Text>
        </View>
        <View>
          <TextInput
            placeholder="Hãy chia sẻ những điều bạn thich về sản phẩm này"
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
          ></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Gửi</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Screen2b;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 20,
  },
  usbContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomColor: "#ccc",
  },
  usbImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  usbText: {
    fontWeight: "bold",
  },
  starcontainer: {
    alignItems: "center",
  },
  starText: {
    fontWeight: "bold",
  },
  starImage: {
    width: 39,
    height: 39,
  },
  star: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
    marginTop: 20,
  },
  addImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 20,
  },
  addImageText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 20,
    height: 222,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#0D5DB6",
    borderWidth: 1,
    borderColor: "#1511EB",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  buttonContainer: {
    marginTop: 30,
  },
});
