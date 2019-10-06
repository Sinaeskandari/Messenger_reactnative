import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../images/picdi.png')} style={styles.image} />
        <Text style={styles.hesdText}>{this.props.name}</Text>
        <Text style={styles.status}>online status:?</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'rgba(169,207,171,0.6)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    marginLeft: 8,
    width: '12%',
    height: '80%',
    borderRadius: 20,
  },
  hesdText: {
    fontSize: 20,
    color: 'black',
  },
  status: {
    fontSize: 10,
    color: 'black',
    marginRight: 5,
  },
});
export default Header;
