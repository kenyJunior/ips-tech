/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const LastUpdatedDate = () => {
  /* return (
    <p className={clsx('text-sm text-gray-new-40 dark:text-gray-new-80', className)}>
      Last updated on <time dateTime={updatedOn}>{lastUpdatedOn}</time>
    </p>
  ); */
};

LastUpdatedDate.propTypes = {
  className: PropTypes.string,
  updatedOn: PropTypes.string.isRequired,
};

export default LastUpdatedDate;
