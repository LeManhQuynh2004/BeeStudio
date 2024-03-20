import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, FlatList, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ANH = [
    require('../img/sp.jpg'),
    require('../img/sp.jpg'),
    require('../img/sp.jpg'),
    require('../img/sp.jpg'),
];

const Chitiet_aocuoi = () => {
    return (
        <ScrollView>
            <ImageBackground source={require('../img/sp.jpg')} style={styles.imageBackground}>
                {/* thẻ view ben trên tạo icon trên cùng  */}
                <View style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                    <Image source={require('../img/back.png')} style={{ width: 40, height: 40, margin: 20 }} />
                    <Image source={require('../img/tim.png')} style={{ width: 40, height: 40, margin: 20 }} />
                </View>
                {/* thẻ view bên dưới  */}
                <View style={styles.overlay}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20, marginLeft: 20, color: "black" }}>Mã số:AT092</Text>
                    <Text style={{ marginLeft: 20, fontSize: 19, color: "#fff" }}>váy cưới mới AT092 </Text>
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
            {/* FlatList để hiển thị ảnh */}
            <FlatList
                data={ANH}
                horizontal
                renderItem={({ item }) => (
                    <Image source={item} style={{ width: 100, height: 100, margin: 10 }} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* view mô tả sản phẩm của phúc  */}
            <View style={{ position: 'relative' }}>
                <View style={{ width: 380, height: 300, backgroundColor: "#f3d9dc", marginTop: 15, borderRadius: 20, marginLeft: 20 }}>
                    <View style={{marginTop:50,marginLeft:20}}>
                        <Text style={{color:"black"}}>Váy cưới AT092</Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Áo nhập khẩu 100%</Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Áo mới 100%</Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Màu sắc : Trắng </Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Kiểu áo : tùng xòe</Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Kích cỡ : free size </Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Chất liệu : voan </Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Kiểu ống tay : tay dài </Text>
                        <Text style={{marginLeft:30,color:"black"}}>. phong cách : thắt dây </Text>
                        <Text style={{marginLeft:30,color:"black"}}>. Kiểu dáng: Thanh lịch, sang trọng, lịch lãm, quyến rũ, cuốn hút </Text>
                        
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0 }}>
                    <View style={{ width: 130, height: 50, backgroundColor: "#ed008c", borderRadius: 10, marginLeft: 70, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Mô tả sản phẩm</Text>
                    </View>
                </View>
            </View>
            <Pressable style={{width:300,height:40,backgroundColor:"#f3d9dc",marginLeft:50,marginTop:20,borderRadius:20}}>
                <Text style={{textAlign:"center",lineHeight:40,fontWeight:"bold",color:"#fff"}}>LIÊN HỆ </Text>
            </Pressable>
            <Text style={{fontSize:22,color:"black",fontWeight:"bold",fontStyle:'italic',textAlign:"center",marginTop:20}}>Đăng ký liền tay - nhận ngay ưu đãi</Text>
            {/* phần form đăng ký  */}
            <Text style={{marginLeft:20}}>Họ Và Tên </Text>
            <TextInput style={{backgroundColor: 'rgba(128, 128, 128, 0.1)',width:380,marginLeft:20}}/>
            <Text style={{marginLeft:20}}>Số điện thoại  </Text>
            <TextInput style={{backgroundColor: 'rgba(128, 128, 128, 0.1)',width:380,marginLeft:20}}/>
            <Text style={{marginLeft:20}}>Thông tin đăng ký   </Text>
            <View style={{width:380,marginLeft:20,height:100,backgroundColor: 'rgba(128, 128, 128, 0.1)'}}>
                {/* hiển thị tông tin đã đăng ký ở đây  */}
            </View>
            <Pressable style={{width:380,marginLeft:20,height:40,backgroundColor:"#f3d9dc",marginTop:20,marginBottom:20}}>
                <Text style={{textAlign:"center",lineHeight:40,fontWeight:"bold",color:"#fff"}}>Đăng ký  </Text>
            </Pressable>
        </ScrollView>
    );
};

export default Chitiet_aocuoi;

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