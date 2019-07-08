import { connect } from 'react-redux';

import { toggleMenu, closeMenu } from 'src/store/reducer';
/**
 * Local import
 */
import BurgerNav from 'src/components/BurgerNav';

// Action Creators

// isConnected,
// isMenuOpen,
// disconnect,
// updateFormField,
// closeAllModals,
// toggleMenu,
// openProfile,

const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({

  toggleMenu: () => {
    dispatch(toggleMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerNav);
