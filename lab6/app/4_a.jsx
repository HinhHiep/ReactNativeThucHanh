import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Data = [
  {
    id: Math.random(),
    img: require("../assets/images/ca_nau_lau.png"),
    name: "Ca nấu lẩu, nấu mì mini",
    shopName: "Devang",
  },
  {
    id: Math.random(),
    img: require("../assets/images/ga_bo_toi.png"),
    name: "1KG KHÔ GÀ BƠ TỎI",
    shopName: "LDT Food",
  },
  {
    id: Math.random(),
    img: require("../assets/images/xa_can_cau.png"),
    name: "Xe cần cẩu đa năng",
    shopName: "Thế giới đồ chơi",
  },
  {
    id: Math.random(),
    img: require("../assets/images/do_choi_dang_mo_hinh.png"),
    name: "Đồ chơi dạng mô hình",
    shopName: "Thế giới đồ chơi",
  },
  {
    id: Math.random(),
    img: require("../assets/images/lanh_dao_gian_don.png"),
    name: "Lãnh đạo giản đơn",
    shopName: "Minh Long Book",
  },
  {
    id: Math.random(),
    img: require("../assets/images/hieu_long_con_tre.png"),
    name: "Hiểu lòng con trẻ",
    shopName: "Minh Long Book",
  },
];

const Item = ({ name, shopName, img }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Image source={img} style={styles.vsImage} />
      </View>
      <View style={styles.inforContainer}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>Shop: {shopName}</Text>
        </View>
        <View>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Chat</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const Screen4_a = () => {
  return (
    <View>
      <View style={styles.headContainer}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.chatText}>Chat</Text>
        <Image source={require("../assets/images/cart.png")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop
        </Text>
      </View>

      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <Item name={item.name} shopName={item.shopName} img={item.img} />
        )}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>

      <View style={styles.footerContainer}>
        <Image source={require('../assets/images/list.png')} />
        <Image source={require('../assets/images/home.png')} />
        <Image source={require('../assets/images/return.png')} />
      </View>
    </View>
  );
};

export default Screen4_a;

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: "#1BA9FF",
  },
  chatText: {
    color: "white",
    fontSize: 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
  vsImage: {
    width: 74,
    height: 74,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#F5F5F5",
  },
  button: {
    backgroundColor: "#F31111",
    width: 88,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  inforContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 74,
    width: "70%",
  },
  footerContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#1BA9FF",
    marginTop: 90,
  }
});
