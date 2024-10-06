import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Data = [
  {
    id: Math.random(),
    img: require("../assets/images/giacchuyen 1.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    star: 4,
    comment: 15,
    price: "69.900",
    sale: 39,
  },
  {
    id: Math.random(),
    img: require("../assets/images/daynguon 1.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    star: 4,
    comment: 15,
    price: "69.900",
    sale: 39,
  },
  {
    id: Math.random(),
    img: require("../assets/images/dauchuyendoipsps2 1.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    star: 4,
    comment: 15,
    price: "69.900",
    sale: 39,
  },
  {
    id: Math.random(),
    img: require("../assets/images/dauchuyendoi 1.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    star: 4,
    comment: 15,
    price: "69.900",
    sale: 39,
  },
  {
    id: Math.random(),
    img: require("../assets/images/carbusbtops2 1.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    star: 4,
    comment: 15,
    price: "69.900",
    sale: 39,
  },
  {
    id: Math.random(),
    img: require("../assets/images/daucam 1.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    star: 4,
    comment: 15,
    price: "69.900",
    sale: 39,
  },
];

const Item = ({ img, name, star, comment, price, sale }) => {
  const search = "USB";
  const startIndex = name.indexOf(search);
  let rs = "";
  let first = "";
  if (startIndex !== -1) {
    rs = name.substring(startIndex);
    first = name.substring(0, startIndex);
  }
  return (
    <View>
      <Image source={img}></Image>
      <Text style={styles.text}>{first}</Text>
      <Text style={styles.text}>{rs}</Text>

      <View style={styles.starsContainer}>
        <View style={styles.star}>
          {Array(star)
            .fill()
            .map((_, index) => (
              <Image
                key={`star-${index}`}
                source={require("../assets/images/Star 1.png")}
              />
            ))}
          {Array(5 - star)
            .fill()
            .map((_, index) => (
              <Image
                key={`star-${index}`}
                source={require("../assets/images/Star 5.png")}
              />
            ))}
        </View>
        <Text style={styles.text}>({comment})</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.textPrice}>{price} đ</Text>
        <Text style={styles.textSale}>-{sale}%</Text>
      </View>
    </View>
  );
};

const Screen4_b = () => {
  return (
    <View>
      <View style={styles.headContainer}>
        <AntDesign name="arrowleft" size={24} color={"white"}></AntDesign>
        <View style={styles.inputContainer}>
          <AntDesign name="search1" size={24} color={"black"}></AntDesign>
          <TextInput placeholder="Search" style={styles.input}></TextInput>
        </View>
        <View>
          <Image source={require("../assets/images/cart.png")} />
          <View style={styles.redDot}></View>
        </View>
        <View>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={"white"}
          ></Entypo>
        </View>
      </View>

      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <Item
            img={item.img}
            name={item.name}
            star={item.star}
            comment={item.comment}
            price={item.price}
            sale={item.sale}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>

      <View style={styles.footerContainer}>
        <Image source={require("../assets/images/list.png")} />
        <Image source={require("../assets/images/home.png")} />
        <Image source={require("../assets/images/return.png")} />
      </View>
    </View>
  );
};

export default Screen4_b;

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1BA9FF",
  },
  input: {
    backgroundColor: "white",
    width: 170,
    height: 30,
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
    position: "absolute",
    right: 0,
    top: 0,
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    flexDirection: "row",
    marginRight: 10,
  },
  textPrice: {
    fontSize: 12,
    fontWeight: "700",
  },
  textSale: {
    fontSize: 12,
    fontWeight: "700",
    color: "#969DAA",
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    justifyContent: "space-between",
    padding: 20,
    marginTop: 10,
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
