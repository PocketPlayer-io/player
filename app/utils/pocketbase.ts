import PocketBase from "pocketbase";

const url = "https://" + "admin.player.jmse.cloud";
const pb = new PocketBase(url);

export const usePocketBaseUrl = () => {
    return url;
};

export const usePocketBase = () => {
    return pb;
};
