

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "3d01d639cb25437fadeec5741d0d872c";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    //console.log(window.location.hash);
    return window.location.hash
        //http://localhost:3000/#access_token=BQDGZBW6N9mTkidRdZR9TVbQA436Q
        //4sD5O7hT8rEDKJLGv-7bt1bIio5QRRBRUkHs2j6anUarWcijEAhQUF-rf0Rve7r_S
        //g0_f9hZNSAn7VGJPZlMHIcRuz7o1iUVB0ntw_gKXDyg4bY1s4sT5KwXbZ6GLb8wbD7g48a2iZ5PyftdCKm&token_type=Bearer&expires_in=3600
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            //console.log(initial[parts[0]], decodeURIComponent(parts[1]));
            initial[parts[0]] = decodeURIComponent(parts[1]);
            console.log(initial);
            return initial;

        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;