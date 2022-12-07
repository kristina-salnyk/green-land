import React, { Text, View } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import PropTypes from 'prop-types';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export const ToastExtension = ({ children }) => {
  return (
    <ToastProvider
      placement="top"
      dangerIcon={<MaterialCommunityIcons name="close" color="#fff" />}
      successIcon={
        <MaterialCommunityIcons name="check" color="#fff" size={18} />
      }
      offset={10}
      offsetTop={30}
      renderType={{
        custom_toast: toast => (
          <View
            style={{
              maxWidth: '85%',
              width: '100%',
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: '#fff',
              borderRadius: 8,
              marginTop: 10,
              borderLeftColor:
                toast.data.type === 'success' ? '#3cb03c' : '#c90606',
              borderLeftWidth: 6,
              paddingLeft: 16,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {toast.data.type === 'success' ? (
              <AntDesign name="checkcircle" color="#3cb03c" size={30} />
            ) : (
              <Ionicons name="close-circle-sharp" color="#c90606" size={30} />
            )}
            <Text
              style={{
                fontSize: 16,
                color: '#333',
                marginLeft: 10,
              }}
            >
              {toast.message}
            </Text>
          </View>
        ),
      }}
    >
      {children}
    </ToastProvider>
  );
};

ToastExtension.propTypes = {
  children: PropTypes.object,
};
