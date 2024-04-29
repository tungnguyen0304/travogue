import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Checkbox from 'expo-checkbox'
import { Image } from 'expo-image'

const SuggestionTicket = ({
  topRate,
  pic,
  name,
  rate,
  numberOfComments,
  address,
  price,
  category,
  admin
}) => {
  const [isChecked, setChecked] = useState(false)

  return (
    <View style={styles.suggestContainer}>
      {/* Icon Check */}
      <Checkbox
        disabled={false}
        value={isChecked}
        style={styles.iconCheck}
        onValueChange={setChecked}
        color={isChecked ? '#000' : undefined}
      />

      <View style={styles.pictureContainer}>
        {/* Hình ảnh */}
        <Image style={styles.picture} contentFit='cover' source={pic} />

        {topRate && (
          <View style={styles.topRateContainer}>
            {/* Top trải nghiệm */}
            <Text style={styles.topRate}>Top trải nghiệm</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        {/* Tên gợi ý */}
        <Text style={styles.name} numberOfLines={2} ellipsizeMode='tail'>
          {name}
        </Text>

        <View style={styles.commentAndAddress}>
          {/* Đánh giá */}
          <View style={styles.judge}>
            <Text style={styles.star}>star</Text>

            <Text style={styles.text}>
              {rate} ({numberOfComments})
            </Text>
          </View>

          {/* Địa chỉ */}
          <Text style={styles.address} numberOfLines={1} ellipsizeMode='tail'>
            {address}
          </Text>
        </View>

        <View style={styles.priceCategoryAdmin}>
          <View style={styles.priceAndCategory}>
            {/* Giá */}
            <Text style={styles.price}>${price} / người</Text>

            {/* Danh mục */}
            <Text
              style={styles.category}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {category}
            </Text>
          </View>

          {/* Người tổ chức */}
          <Image style={styles.adminIcon} contentFit='cover' source={admin} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  suggestContainer: {
    height: 170,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: '4%',
    justifyContent: 'center'
  },
  iconCheck: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    marginRight: '3%',
    alignSelf: 'center',
  },
  pictureContainer: {
    width: '36.6%'
  },
  picture: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16
  },
  topRateContainer: {
    bottom: 0,
    width: '70%',
    height: '19%',
    paddingVertical: 2,
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'center',
    borderTopRightRadius: 16,
    backgroundColor: '#ed2939',
    borderBottomLeftRadius: 16
  },
  topRate: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'BeVietnamProSemiBold'
  },
  info: {
    gap: 8,
    width: '45%',
    paddingLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16
  },
  name: {
    fontSize: 14,
    width: '95%',
    color: '#000',
    fontWeight: '600',
    fontFamily: 'BeVietnamProSemiBold'
  },
  commentAndAddress: {
    gap: 4,
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  judge: {
    gap: 4,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  star: {
    fontSize: 10,
    color: '#151515',
    fontFamily: 'FontAwesome6ProLight'
  },
  text: {
    fontSize: 10,
    opacity: 0.98,
    color: '#151515',
    fontFamily: 'BeVietnamProRegular'
  },
  address: {
    width: '100%',
    fontSize: 10,
    color: '#151515',
    fontWeight: '300',
    fontFamily: 'BeVietnamProLight'
  },
  priceCategoryAdmin: {
    gap: 16,
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  priceAndCategory: {
    gap: 2,
    width: '75%',
    display: 'flex',
    flexDirection: 'column'
  },
  price: {
    fontSize: 10,
    color: '#000',
    fontWeight: '600',
    fontFamily: 'BeVietnamProSemiBold'
  },
  category: {
    fontSize: 9,
    color: '#1b1b1b',
    alignSelf: 'stretch',
    fontFamily: 'BeVietnamProRegular'
  },
  adminIcon: {
    width: 26,
    height: 26
  }
})

export default SuggestionTicket