import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const DocsList = ({ title }) => (
  <>
    {title && (
      <h3 className="mb-4 mt-0 text-base font-medium leading-tight tracking-extra-tight">
        {title}
      </h3>
    )}
    <ul className="!m-0 !p-0">
      {React.Children.map(() => (
        <li
          className={clsx(
            '!mb-0 !mt-2 flex w-fit items-start gap-1.5 text-gray-new-20 before:hidden dark:text-gray-new-70',
            '[&_p]:my-0 [&_p]:pl-5 [&_p]:text-sm [&_p]:tracking-extra-tight',
            '[&_a]:border-0 [&_a]:pl-5 [&_a]:text-sm [&_a]:tracking-extra-tight',
            '[&:has(a)]:transition-colors [&:has(a)]:duration-200 [&_a]:!text-inherit',
            '[&:has(a)]:hover:text-secondary-8 [&:has(a)]:hover:dark:text-green-45'
          )}
         />
      ))}
    </ul>
  </>
);

DocsList.propTypes = {
  title: PropTypes.string,
};

export default DocsList;
