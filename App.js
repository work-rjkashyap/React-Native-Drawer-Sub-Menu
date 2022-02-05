import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as eva from '@eva-design/eva';
import { ImageBackground, StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider,IconRegistry,Drawer,DrawerGroup, DrawerItem, Layout, Text,Icon, Divider } from '@ui-kitten/components';

const { Navigator, Screen } = createDrawerNavigator();

const SmartphoneIcon = (props) => (
  <Icon {...props} name='smartphone-outline'/>
);

const BrowserIcon = (props) => (
  <Icon {...props} name='browser-outline'/>
);

const ColorPaletteIcon = (props) => (
  <Icon {...props} name='color-palette-outline'/>
);

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={{uri:'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png'}}
    />
    <Divider/>
  </React.Fragment>
);


 const DrawerContent = ({ navigation, state }) => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
    header={Header}
    selectedIndex={selectedIndex}
    onSelect={index => setSelectedIndex(index)}>
      <DrawerGroup title='Akveo React Native'  accessoryLeft={SmartphoneIcon}>
        <DrawerItem title='UI Kitten' onPress={()=>navigation.navigate('Users')} accessoryLeft={StarIcon}/>
        <DrawerItem title='Kitten Tricks' onPress={()=>navigation.navigate('Orders')} accessoryLeft={StarIcon}/>
      </DrawerGroup>
      <DrawerGroup title='Akveo Angular'  accessoryLeft={BrowserIcon}>
        <DrawerItem title='Nebular' onPress={()=>navigation.navigate('Users')} accessoryLeft={StarIcon}/>
        <DrawerItem title='ngx-admin' onPress={()=>navigation.navigate('Orders')} accessoryLeft={StarIcon}/>
        <DrawerItem title='UI Bakery' onPress={()=>navigation.navigate('Users')} accessoryLeft={StarIcon}/>
      </DrawerGroup>
      <DrawerGroup title='Akveo Design'  accessoryLeft={ColorPaletteIcon}>
        <DrawerItem title='Eva Design  System' onPress={()=>navigation.navigate('Users')} accessoryLeft={StarIcon}/>
        <DrawerItem title='Eva Icons' onPress={()=>navigation.navigate('Orders')} accessoryLeft={StarIcon}/>
      </DrawerGroup>
     
    </Drawer>
  );
};


const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);


export const DrawerNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Screen name='Users' component={UsersScreen}/>
    <Screen name='Orders' component={OrdersScreen}/>
  </Navigator>
);

export default() => (
  <>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={eva.light}>
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer> 
  </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});