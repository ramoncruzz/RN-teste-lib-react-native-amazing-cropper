import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AmazingCropper, {DefaultFooter} from 'react-native-amazing-cropper';

const App = () => {
  useEffect(() => {}, []);
  const onDone = croppedImageUri => {
    console.log('croppedImageUri = ', croppedImageUri);
    // send image to server for example
  };
  const onCancel = () => {
    console.log('Cancel button was pressed');
    // navigate back
  };

  return (
    <AmazingCropper
      footerComponent={
        <DefaultFooter doneText="OK" rotateText="ROT" cancelText="BACK" />
      }
      onDone={this.onDone}
      onCancel={this.onCancel}
      imageUri="https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg"
      imageWidth={1600}
      imageHeight={2396}
      NOT_SELECTED_AREA_OPACITY={0.3}
      BORDER_WIDTH={20}
    />
  );
};

export default App;
