import React from 'react';
import { StyledDeviceImage } from './StyledDeviceImage';

interface IProps {
  src: string;
  alt?: string;
}

const DeviceImage = ({ src, alt = 'phone image' }: IProps) => {
  return (
    <StyledDeviceImage>
      {src ? (
        <img src={src} alt={alt} className="device-image" />
      ) : (
        <div className="image-fallback">{alt}</div>
      )}
    </StyledDeviceImage>
  );
};

export default DeviceImage;
