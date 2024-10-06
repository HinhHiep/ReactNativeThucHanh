import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Screen1 = ({ navigation, route }) => {
  const colorHandle = () => {
    navigation.navigate("Screen2");
  };

    let item = null;
    if (route.params) {
      item = route.params.item;
    }


  return (
    <View style={styles.container}>
      <View>
        <View>
          {item == null || item == undefined  ? (
            <Image
              style={styles.vsImage}
              source={require("../assets/images/vs_silver.png")}
            />
          ) : (
            <Image style={styles.vsImage} source={item.img} />
          )}
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.text}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>

        <View style={styles.watchContainer}>
          <View style={styles.starcontainer}>
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
          </View>
          <View>
            <Text style={styles.text}>(Xem 828 đánh giá)</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.textPrice}>1.790.000 đ</Text>
          </View>
          <View>
            <Text style={styles.textOldPrice}>1.790.000 đ</Text>
          </View>
        </View>

        <View style={styles.returnMoneyContainer}>
          <View>
            <Text style={styles.returnMoney}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          </View>
          <AntDesign name="questioncircleo" size={24} color="#00000094" />
        </View>

        <Pressable style={styles.chooseColorButton} onPress={colorHandle}>
          <View style={styles.textChooseColor}>
            <Text>4 MÀU-CHỌN MÀU</Text>
            <AntDesign name="right" size={20} color="#00000094" />
          </View>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  vsImage: {
    width: 301,
    height: 361,
  },
  nameContainer: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
  },
  starcontainer: {
    flexDirection: "row",
    width: 130,
    justifyContent: "space-between",
  },
  watchContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "700",
  },
  textOldPrice: {
    fontSize: 15,
    fontWeight: "700",
    textDecorationLine: "line-through",
    color: "#00000094",
    marginLeft: 100,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 10,
  },
  returnMoney: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FA0000",
    marginRight: 10,
  },
  returnMoneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 10,
  },
  textChooseColor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  chooseColorButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#00000075",
    justifyContent: "space-around",
    alignItems: "center",
    height: 34,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4, blur: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#EE0A0A",
    borderWidth: 1,
    borderColor: "#CA1536",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 44,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4, blur: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    width: "100%",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
