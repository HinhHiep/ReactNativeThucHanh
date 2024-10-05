import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Tiki_Ok = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Product */}
        <View style={styles.product}>
            {/* InfoProduct */}
            <View style={styles.inforContainer}>
                <Image
                source={require("../assets/images/book.png")}
                style={styles.bookImage}
                />
                <View>
                    <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={styles.textPrice}>141.800 đ</Text>
                    <Text style={styles.oldPrice}>141.800 đ</Text>

                    <View style={styles.buyContainer}>
                        <View style={styles.upDownContainer}>
                            <Pressable style={styles.buttonUpDown}>
                                <Text style={styles.textButtonUpDown}>-</Text>
                            </Pressable>
                            <Text>1</Text>
                            <Pressable style={styles.buttonUpDown}>
                                <Text style={styles.textButtonUpDown}>+</Text>
                            </Pressable>
                        </View>
                        <Text style={styles.buy}>Mua sau</Text>
                    </View>

                </View>
            </View>

            {/* Watch here */}
            <View style={styles.watchHereContainer}>
                <Text style={styles.text}>Mã giảm giá đã lưu</Text>
                <Text style={styles.buy}>Xem tại đây</Text>
            </View>

            {/* VoucherCode */}
            <View style={styles.applyVoucherContainer}>
                <View style={styles.inputContainer}>
                    <View style={styles.voucherIcon}></View>
                    <TextInput 
                        placeholder="Mã giảm giá"
                        style={styles.inputVoucher}
                    ></TextInput>
                </View>

                <Pressable style={styles.applyButton}>
                    <Text style={styles.textApplyButon}>Áp dụng</Text>
                </Pressable>

            </View>

        </View>

        {/* Voucher */}
        <View style={styles.voucher}>
          <Text style={styles.text}>Bạn có phiếu quà tặng Tiki/Gotup/Unbox ?</Text>
          <Text style={styles.buy}>Nhập tại đây</Text>
        </View>

        {/* Price */}
        <View style={styles.price}>
          <Text style={styles.beforePrice}>Tạm tính</Text>
          <Text style={styles.textPrice}>141.800 đ</Text>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
            <Text style={styles.total}>Thành tiền</Text>
            <Text style={styles.textPrice}>141.800 đ</Text>
        </View>

        <Pressable style={styles.oderButton}>
            <Text style={styles.orderTextButton}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </Pressable>

      </View>
    </View>
  );
};

export default Tiki_Ok;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#C4C4C4",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 400,
  },
  footer: {
    backgroundColor: "white",
    padding: 10,
  },
  product: {
    backgroundColor: "white",
    padding: 10,
  },
  voucher: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    height: 51,
  },
  price: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 51,
  },

  //Header

  //Product

  //InfoProduct
  inforContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookImage: {
    width: 104,
    height: 127,
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#EE0D0D",
  },
  oldPrice: {
    color: "#808080",
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  buttonUpDown: {
    backgroundColor: "#C4C4C4",
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonUpDown: {
    fontWeight: "700",
  },
  upDownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  buy: {
    fontSize: 12,
    fontWeight: "700",
    color: "#134FEC",
    marginLeft: 10,
  },
  buyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  // Watch here
  watchHereContainer:{
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },

  // VoucherCode
  voucherIcon:{
    width: 32,
    height: 16,
    backgroundColor: "#F2DD1B",
  },
  inputVoucher:{
    width: 155,
    marginLeft: 10,
    height: 45,
  },
  inputContainer:{
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    width: 208,
    paddingLeft: 10,
  },
  applyButton:{
    backgroundColor: "#0D5DB6",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 99,
  },
  textApplyButon:{
    color: "white",
    fontWeight: "700",
 },
 applyVoucherContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
 },
    
    //Price
    beforePrice:{
        fontSize: 18,
        fontWeight: "700",
    },
//Footer
total:{
    fontSize: 18,
    fontWeight: "700",
    color: "#808080",
},
totalContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
},
oderButton:{
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 2,
    marginTop: 20,
},
orderTextButton:{
    color: "white",
    fontSize: 20,
    fontWeight: "700",
},
});
