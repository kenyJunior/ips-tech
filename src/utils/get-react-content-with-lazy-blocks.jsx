import clsx from 'clsx';
import PropTypes from 'prop-types';

const sharedComponents = {
  Image: ({ src, className, width, height, alt, isPriority }) => {
    const urlWithoutSize = src.replace(/-\d+x\d+/i, '');

    return (
      <ImageZoom src={urlWithoutSize} isDark>
        <Image
          className={clsx('rounded-md', className)}
          src={urlWithoutSize}
          width={width || 975}
          height={height || 512}
          quality={85}
          alt={alt || 'Post image'}
          priority={isPriority || false}
          sizes="(max-width: 767px) 100vw"
        />
      </ImageZoom>
    );
  },

  a: ({ href, ...otherProps }) => <Link to={href} {...otherProps} />,
};

// ✅ Ajout de la validation des props
sharedComponents.Image.propTypes = {
  src: PropTypes.string.isRequired, // Obligatoire car utilisé dans `src.replace`
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  isPriority: PropTypes.bool,
};

sharedComponents.a.propTypes = {
  href: PropTypes.string.isRequired, // Obligatoire pour les liens
};

export default sharedComponents;
