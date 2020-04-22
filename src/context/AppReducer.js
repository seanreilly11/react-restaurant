export default (state, action) => {
    switch (action.type) {
        case "CURRENT_MENU":
            return {
                ...state,
                currentMenu: [action.payload],
            };
        default:
            return state;
    }
};
