import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
// import scrollview

const App = () => {
  return(
    // menggunakan scroll
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'red' }}>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'red'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is Graduation</Text>
        {/* ini memanggil image secara local yang berada di folder assets */}
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/wow.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'yellow'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is work from home</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/IMSAKIYAH.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'green'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is smile</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/IMSAKIYAH.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'blue'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is programing </Text>
        {/* ini memanggil image secara global yang ada di internent */}
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={{uri: 'https://reactjs.org/logo-og.png'}}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'purple'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is Graduation</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/official.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'white'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>This is work from home</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/2.jpg')}/>
      </View>
    </View>
    </ScrollView>
  );
}

export default App;