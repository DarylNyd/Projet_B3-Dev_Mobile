/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Badge, Surface, Title} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const IconSize = 24;

const AppHeader = ({
  style,
  menu,
  back,
  title,
  right,
  backPress,
  onRightPress,
  optionalBtn,
  optionalBtnPress,
  rightComponent,
  titleAlight,
  optionalBadge,
}) => {
  const LeftView = () => (
    <View style={styles.view}>
      {menu && (
        <TouchableOpacity onPress={() => {}}>
          <Feather name="menu" size={IconSize} color={'#26474E'} />
        </TouchableOpacity>
      )}
      {back && (
        <TouchableOpacity onPress={backPress}>
          <Feather name="arrow-left" size={IconSize} color={'#26474E'} />
        </TouchableOpacity>
      )}
    </View>
  );
  const RightView = () =>
    rightComponent ? (
      rightComponent
    ) : (
      <View style={[styles.view, styles.rightView]}>
        {optionalBtn && (
          <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
            <Feather name={optionalBtn} size={IconSize} color={'#26474E'} />
            {optionalBadge && (
              <Badge style={{position: 'absolute', top: -5, right: -10}}>
                {optionalBadge}
              </Badge>
            )}
          </TouchableOpacity>
        )}
        {right && (
          <TouchableOpacity onPress={onRightPress}>
            <Feather name={right} size={IconSize} color={'#26474E'} />
          </TouchableOpacity>
        )}
      </View>
    );
  const TitleView = () => (
    <View style={styles.titleView}>
      <Title
        style={{
          color: '#5FC2BA',
          textAlign: titleAlight,
          fontWeight: 'bold',
          fontFamily: 'Poppins',
        }}>
        {title}
      </Title>
    </View>
  );
  return (
    <Surface style={[styles.header, style]}>
      <LeftView />
      <TitleView />
      <RightView />
    </Surface>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});
