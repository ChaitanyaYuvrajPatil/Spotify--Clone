export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQCLLUjpeqwu0l6DtCjbJR1uchAMTvVYR8S50pyVTaBdgPw4rbRYAC-ucaBCXIuN8X2FPXUdUb2bKSA7IdLFlB0XY98AhK2gsHp-WiU5WwEMkRS4A9HVq_kVEAPTHA3mh84KmFwNDYILTaKsefTN9nSzOs_AMEwtys4FBAve8fnHIKkm",
};

const reducer = (state, action) => {
    // console.log(action)

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
};

export default reducer;