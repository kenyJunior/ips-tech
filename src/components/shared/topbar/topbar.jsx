import { PropTypes } from 'prop-types';

import TopbarClient from './topbar-client';

const TOPBAR_API_URL = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/topbar`;

const Topbar = async ({ isDarkTheme }) => {
  try {
    const response = await fetch(TOPBAR_API_URL, {
      next: {
        revalidate: 600, // 10 minutes
      },
    });

    const topbar = await response.json();

    // Vérifie que le texte et le lien sont valides
    if (!topbar?.text || !topbar?.link?.url) return null;

    return <TopbarClient text={topbar.text} link={topbar.link.url} isDarkTheme={isDarkTheme} />;
  } catch (error) {
    console.error('Erreur lors de la récupération de la topbar :', error);
    return null;
  }
};

Topbar.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default Topbar;
