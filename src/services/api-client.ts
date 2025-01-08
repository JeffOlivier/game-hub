import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5d21884eff02426ea6539ca600cca11c",
    },
});
