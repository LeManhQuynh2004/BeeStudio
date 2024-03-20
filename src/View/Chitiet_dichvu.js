import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, FlatList, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



const Chitiet_dichvu = () => {
    return (
        <ScrollView>
            <ImageBackground source={require('../img/gai.jpg')} style={styles.imageBackground}>
                {/* thẻ view ben trên tạo icon trên cùng  */}
                <View style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                    <Image source={require('../img/back.png')} style={{ width: 40, height: 40, margin: 20 }} />
                    <Image source={require('../img/tim.png')} style={{ width: 40, height: 40, margin: 20 }} />
                </View>
                {/* thẻ view bên dưới  */}
                <View style={styles.overlay}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20, marginLeft: 20, color: "#fff" }}>Chụp ảnh cưới tam đảo chọn gói chỉ với 14tr300k ảnh đẹp như mơ</Text>
                    <Text style={{marginLeft:20,fontWeight:"bold"}}>Tây Nguyên _Tam Đảo </Text>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text style={{ marginLeft: 20 }}>Giá bán:</Text>
                            <Text style={{ color: "#fff" }}>2000000 VND</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text style={{ marginLeft: 20 }}>Giá thuê:</Text>
                            <Text style={{ color: "#fff" }}>2000000 VND</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <Text style={{ margin: 20, fontWeight: "bold" }}>Mô tả </Text>
            <Text style={{ marginLeft: 20, marginBottom: 20 ,color:"black"}}>Áo cưới Bee Studio đang có ưu đãi chụp hình cưới Hồ Cốc giá rẻ trọn gói chỉ còn 10 triệu giúp dâu rể vừa tiết kiệm vừa tận hưởng trọn vẹn vẻ đẹp tiên cảnh nơi đây. </Text>
            <View style={{ flexDirection: "row" }}>
                <View >
                    <Image source={require('../img/bay.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                </View>
                <View>
                    <Text style={{ marginLeft: 10,color:"black" }}>Thành phố mù sương - Tam Đảo - Vĩnh Phúc</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View >
                    <Image source={require('../img/block.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                </View>
                <View>
                    <Text style={{ marginLeft: 10,color:"black" }}>Thành phố mù sương - Tam Đảo - Vĩnh Phúc</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={{flexDirection:"row"}}>
                    <Image source={require('../img/cham.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                    <Text style={{color:"black",marginLeft:10}}>Tiện ích đi kèm :</Text>
                </View>
                <View>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.Cô dâu, chú rể tùy chọn 5 váy, 5 vest cao cấp.</Text>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.Photo + makeup thay đổi kiểu tóc + phụ kiện + hoa cầm tay.</Text>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.Stylist hướng dẫn tạo dáng, lựa chọn trang phục phù hợp.</Text>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.Xe 16 chỗ đưa đón dâu rể.</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={{flexDirection:"row"}}>
                    <Image source={require('../img/card.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                    <Text style={{color:"black",marginLeft:10}}>Tiện ích đi kèm :</Text>
                </View>
                <View>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.300 – 700 ảnh gốc..</Text>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.1 album maminate khổ 25×25 hoặc 30×30 thiết kế 20 trang.</Text>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.1 side trình chiếu nhà hàng lồng 3- 4 bài nhạc.</Text>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.1 giỏ xách da cao cấp đựng album + 1 hộp đứng hình lớn.</Text>
                    <Text style={{ marginLeft: 10 ,width:200,color:"black"}}>.1 voucher mua nhẫn cưới trị giá 3 triệu đồng tại Cửu Long JSC.</Text>
                </View>
            </View>







            <Text style={{ fontSize: 22, color: "black", fontWeight: "bold", fontStyle: 'italic', textAlign: "center", marginTop: 20 }}>Đăng ký liền tay - nhận ngay ưu đãi</Text>
            {/* phần form đăng ký  */}
            <Text style={{ marginLeft: 50 }}>Họ Và Tên </Text>
            <TextInput style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 300, marginLeft: 50 }} />
            <Text style={{ marginLeft: 50 }}>Số điện thoại  </Text>
            <TextInput style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 300, marginLeft: 50 }} />
            <Text style={{ marginLeft: 50 }}>Thông tin đăng ký   </Text>
            <View style={{ width: 300, marginLeft: 50, height: 100, backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
                {/* hiển thị tông tin đã đăng ký ở đây  */}
            </View>
            <Pressable style={{width:380,marginLeft:20,height:40,backgroundColor:"#f3d9dc",marginTop:20,marginBottom:20}}>
                <Text style={{textAlign:"center",lineHeight:40,fontWeight:"bold",color:"#fff"}}>Đăng ký  </Text>
            </Pressable>
        </ScrollView>
    );
};

export default Chitiet_dichvu;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 420,
    },
    overlay: {
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
        marginTop: 190,
        borderTopLeftRadius: 20, // Bo tròn góc bên trái phía trên
        borderTopRightRadius: 20, // Bo tròn góc bên phải phía trên
    },
});
