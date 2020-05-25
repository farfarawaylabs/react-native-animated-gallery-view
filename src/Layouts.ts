import { ViewStyle } from 'react-native';

interface GalleryItemLayout {
  id: string;
  name: string;
  layout: {
    container: ViewStyle;
    child?: ViewStyle;
  };
}

const ColumnLayout: GalleryItemLayout = {
  id: 'column',
  name: 'Column',
  layout: {
    container: {
      //justifyContent: 'space-around',
    },
  },
};

const RowLayout: GalleryItemLayout = {
  id: 'row',
  name: 'Row',
  layout: {
    container: {
      flexDirection: 'row',
    },
  },
};

const RowWrapLayout: GalleryItemLayout = {
  id: 'rowWrap',
  name: 'Row Wrap',
  layout: {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    child: {
      flex: 0,
    },
  },
};

const ColumnWrapLayout: GalleryItemLayout = {
  id: 'columnWrap',
  name: 'Column Wrap',
  layout: {
    container: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    child: {
      flex: 0,
    },
  },
};

export { ColumnLayout, RowLayout, RowWrapLayout, ColumnWrapLayout };
