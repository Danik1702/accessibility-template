import './image.styles.scss';

const sizes = ['600w', '1024w', '1440w'];

export const Image = ({ urls, isFirstImage = false, alt }) => {
  if (typeof urls === 'string') {
    return <img className="image" src={urls} alt={alt} fetchpriority={isFirstImage ? 'high' : 'auto'} />;
  }  

  const srcSet = urls.reduce((a, currentValue, currentIndex) => 
    a += `${currentValue} ${sizes[currentIndex]}${currentIndex === 2 ? '' : ', '}`, '');

  return (
    <img
      className="image"
      src={urls[0]}
      srcSet={srcSet}
      sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1440px"
      alt={alt} 
      fetchpriority={isFirstImage ? 'high' : 'auto'} 
    />
  )
};