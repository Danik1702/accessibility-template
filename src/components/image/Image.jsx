import './image.styles.scss';

export const Image = ({ url, isFirstImage = false, alt }) => (
  <img
    className="image"
    src={url}
    alt={alt} 
    fetchpriority={isFirstImage ? 'high' : 'auto'} 
  />
);