import clsx from 'clsx';
import PropTypes from 'prop-types';
import { LinkedinIcon } from 'react-share';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

const themePropTypes = {
  isDarkTheme: PropTypes.bool,
};

const DiscordLink = ({ isDarkTheme }) => (
  <Link
    className={clsx(
      'transition-colors duration-200',
      isDarkTheme
        ? 'text-white hover:text-green-45'
        : 'text-gray-new-40 hover:text-green-45 dark:text-white dark:hover:text-green-45'
    )}
    to={LINKS.discord}
    target="_blank"
    rel="noopener noreferrer"
  >
    <LinkedinIcon width={20} height={20} />
    <span className="sr-only">LinkedIn</span>
  </Link>
);

DiscordLink.propTypes = themePropTypes;

const Sidebar = ({ isDarkTheme }) => (
  <div className="flex items-center gap-x-6 lg:hidden">
    <DiscordLink isDarkTheme={isDarkTheme} />
  </div>
);

Sidebar.propTypes = {
  ...themePropTypes,
  isClient: PropTypes.bool,
};

export default Sidebar;
