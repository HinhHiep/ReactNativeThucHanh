import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Data = [
  {
    id: 1,
    img: require("../assets/images/vs_silver.png"),
    name: "Điện Thoại Vsmart Joy 3 ",
    color: "bạc",
    supplier: "Tiki Trading",
    price: "1.790.000 đ",
  },
  {
    id: 2,
    img: require("../assets/images/vs_red.png"),
    name: "Điện Thoại Vsmart Joy 3 ",
    color: "đỏ",
    supplier: "Tiki Trading",
    price: "1.790.000 đ",
  },
  {
    id: 3,
    img: require("../assets/images/vs_black.png"),
    name: "Điện Thoại Vsmart Joy 3 ",
    color: "đen",
    supplier: "Tiki Trading",
    price: "1.790.000 đ",
  },
  {
    id: 4,
    img: require("../assets/images/vs_blue.png"),
    name: "Điện Thoại Vsmart Joy 3",
    color: "xanh",
    supplier: "Tiki Trading",
    price: "1.790.000 đ",
  },
];

const Item = ({ name, color, supplier, price, img }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Image source={img} style={styles.vsImage} />
      </View>
      <View style={styles.inforContainer}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>Hàng chính hãng</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Màu: <Text style={styles.textResult}>{color}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            Cung cấp bởi: <Text style={styles.textResult}>{supplier}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            <Text style={styles.textResult}>{price}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const Screen2 = () => {
  const [selectItem, setSelectItem] = useState(Data[0]);

  const navigation = useNavigation();

  const colorHandle = (id) => {
    const newItem = Data.find((item) => item.id === id);
    if (newItem) {
      setSelectItem(newItem);
    } else {
      console.error("Không tìm thấy sản phẩm với ID:", id); // Đề phòng lỗi
    }
  };

  const completeHandle = () => {
    navigation.navigate("Screen1",{item: selectItem});
  };
  return (
    <View style={styles.container}>
      <Item
        name={selectItem.name}
        color={selectItem.color}
        supplier={selectItem.supplier}
        price={selectItem.price}
        img={selectItem.img}
      />

      <View style={styles.colorChoseContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.chooseColorText}>Chọn một màu bên dưới</Text>
        </View>
        <View>
          <Pressable onPress={() => colorHandle(1)}>
            <View style={styles.colorContainerSilver}></View>
          </Pressable>

          <Pressable onPress={() => colorHandle(2)}>
            <View style={styles.colorContainerRed}></View>
          </Pressable>
          <Pressable onPress={() => colorHandle(3)}>
            <View style={styles.colorContainerBlack}></View>
          </Pressable>
          <Pressable onPress={() => colorHandle(4)}>
            <View style={styles.colorContainerBlue}></View>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={completeHandle}>
          <Text style={styles.textButton}>XONG</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    width: "100%",
  },
  vsImage: {
    width: 112,
    height: 132,
    marginRight: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
  },
  textResult: {
    fontWeight: "700",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "white",
    padding: 20,
  },
  inforContainer: {
    justifyContent: "space-between",
    height: 132,
  },
  colorContainerSilver: {
    width: 85,
    height: 80,
    backgroundColor: "#C5F1FB",
    marginBottom: 10,
  },
  colorContainerRed: {
    width: 85,
    height: 80,
    backgroundColor: "#F30D0D",
    marginBottom: 10,
  },
  colorContainerBlack: {
    width: 85,
    height: 80,
    backgroundColor: "#000000",
    marginBottom: 10,
  },
  colorContainerBlue: {
    width: 85,
    height: 80,
    backgroundColor: "#234896",
    marginBottom: 10,
  },
  chooseColorText: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 20,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  colorChoseContainer: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#1952E294",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CA1536",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4, blur: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 44,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});
