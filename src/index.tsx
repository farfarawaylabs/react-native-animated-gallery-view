import { NativeModules } from 'react-native';

type AnimatedGalleryViewType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AnimatedGalleryView } = NativeModules;

export default AnimatedGalleryView as AnimatedGalleryViewType;
