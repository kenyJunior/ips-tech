'use client';

import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';

import useContextMenu from 'hooks/use-context-menu';
import logoWhite2 from 'images/logo.png';

import Link from '../link';

const Logo = ({
  className = null,
  isDarkTheme,
  width = 600,
  height = 2000,
  priority = undefined,
  isHeader = false,
}) => {
  const { setClicked } = useContextMenu();

  const handleContextMenu = (e) => {
    e.preventDefault();
    setClicked(true);
  };
  return (
    <div className="relative shrink-0">
      <Link to="/" onContextMenu={isHeader ? handleContextMenu : undefined}>
        <span className="sr-only">IPS Technologies</span>
        {isDarkTheme ? (
          <Image
            className={clsx(className)}
            src={logoWhite2}
            alt=""
            width={width}
            height={height}
            priority={priority}
            style={{ width: '200px', height: '70px' }}
            aria-hidden
          />
        ) : (
          <Image
              className={clsx(className)}
              src={logoWhite2}
              alt=""
              width={width}
              height={height}
              priority={priority}
              style={{ width: '200px', height: '70px' }}
              aria-hidden
            />
        )}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  isDarkTheme: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  priority: PropTypes.bool,
  isHeader: PropTypes.bool,
};

export default Logo;
