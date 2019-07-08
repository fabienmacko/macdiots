/**
 * Initial State
 */
const initialState = {
  isMenuOpen: false,
};

/**
 * Types
 */
const CLOSE_MENU = 'CLOSE_MENU';
const TOGGLE_MENU = 'TOGGLE_MENU';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false,
      };
      case TOGGLE_MENU:
        return {
          ...state,
          isMenuOpen: !state.isMenuOpen,
        };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
