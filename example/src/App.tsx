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
