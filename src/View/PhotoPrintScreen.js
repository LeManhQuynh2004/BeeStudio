import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Slider from '../component/Slider';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';

const heightWindow = Dimensions.get("screen").height;

const PhotoPrintScreen = () => {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (value) => {
        setSelectedSize(value);
    };

    const handleSignUp = () => {
        
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.centerScreen}>
                    <Slider />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.optionTitle}>In ảnh</Text>
                    <Text style={styles.optionDescription}>Mô tả sản phẩm</Text>
                    <Text style={styles.optionDescription}>Tùy chọn</Text>
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.dropdownLabel}>Kích thước</Text>
                        <Dropdown
                            style={styles.dropdown}
                            data={[
                                { label: 'Nhỏ', value: 'small' },
                                { label: 'Trung bình', value: 'medium' },
                                { label: 'Lớn', value: 'large' },
                            ]}
                            onSelect={(value) => handleSizeChange(value)}
                        />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.dropdownLabel}>Loại giấy</Text>
                        <Dropdown
                            style={styles.dropdown}
                            data={[
                                { label: 'Nhỏ', value: 'small' },
                                { label: 'Trung bình', value: 'medium' },
                                { label: 'Lớn', value: 'large' },
                            ]}
                            onSelect={(value) => handleSizeChange(value)}
                        />
                    </View>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.price}>176.000 Đ</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.promotionText}>
                            Xem thêm chương trình Khuyến mãi
                        </Text>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>
                                Đặt Hàng
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.themAnh}>
                        <Image source={{ uri: "https://e7.pngegg.com/pngimages/50/218/png-clipart-black-and-white-icon-play-button-angle-white.png" }} style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                    <Text>Đăng ký liền tay - nhận ngay ưu đãi</Text>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Họ và tên"
                            placeholderTextColor="#999"
                            multiline
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Số điện thoại"
                            placeholderTextColor="#999"
                            multiline
                        />
                        <TextInput
                            style={[styles.input, { paddingVertical: 30 }]}
                            placeholder="Thông tin đăng ký"
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                            <Text style={styles.signUpButtonText}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PhotoPrintScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerScreen: {
        alignItems: 'center',
    },
    optionsContainer: {
        marginTop: 20,
        flex: 1,
    },
    optionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optionDescription: {
        fontSize: 16,
        marginBottom: 5,
    },
    dropdownContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dropdownLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    dropdown: {
        width: '70%',
        elevation: 2,
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'
    },
    promotionText: {
        fontSize: 12,
    },
    orderButton: {
        backgroundColor: "#F7B2B7",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15
    },
    orderButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    themAnh: {
        width: "100%",
        backgroundColor: '#F7F8F9',
        height: heightWindow * 0.3,
        marginTop: 10
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    form: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10
    },
    signUpButton: {
        backgroundColor: '#F7B2B7',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
