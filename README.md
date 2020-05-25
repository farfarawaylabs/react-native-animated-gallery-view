# react-native-animated-gallery-view

Beautiful animated gallery style view for React Native.

This library uses react-native-reanimated library as a dependency to create animations that are super performant and run totally on the native thread.

Follow the installation instructions here: https://github.com/software-mansion/react-native-reanimated

## Installation

```sh

npm install react-native-animated-gallery-view
```

<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react_native_animated_gallery_view/react_native_gallery_view.gif?raw=true">

## Usage

Gallery view can get any views as items (passed as children).
Set a reg to the GalleryView instance in order to access and use the provided method setLayout which allows you to transition between different gallery layouts (see code example below)

```js
import React, { useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {
  GalleryView,
  GalleryLayout,
  GalleryViewProps,
} from 'react-native-animated-gallery-view';

export default function App() {
  const gallery = useRef<GalleryViewProps>(null);

  return (
    <View style={styles.container}>
      <Button
        title="Column"
        onPress={() => gallery.current!.setLayout(GalleryLayout.Column)}
      />
      <Button
        title="Column Wrap"
        onPress={() => gallery.current!.setLayout(GalleryLayout.ColumnWrap)}
      />
      <Button
        title="Row"
        onPress={() => gallery.current!.setLayout(GalleryLayout.Row)}
      />
      <Button
        title="Row Wrap"
        onPress={() => gallery.current!.setLayout(GalleryLayout.RowWrap)}
      />

      <GalleryView
        layout={GalleryLayout.Column}
        ref={gallery}
        spacing={10}
        columnLayoutStyle={{ justifyContent: 'space-around' }}
      >
        <View style={{ backgroundColor: 'red', height: 100, width: 100 }} />
        <View style={{ backgroundColor: 'blue', height: 100, width: 100 }} />
        <View style={{ backgroundColor: 'black', height: 100, width: 100 }} />
        <View style={{ backgroundColor: 'pink', height: 100, width: 100 }} />
        <View style={{ backgroundColor: 'brown', height: 100, width: 100 }} />
        <View style={{ backgroundColor: 'green', height: 100, width: 100 }} />
      </GalleryView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    marginTop: 100,
  },
});
```

## License

MIT
