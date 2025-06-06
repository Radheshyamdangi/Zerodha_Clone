const bcrypt = require("bcrypt");

const password = "radhe@";

(async () => {
    console.log(await bcrypt.compare(password, "$2a$10$PX2Yd7MI/fzYXIsaj7iSd.x9QTC7cE30Hz040epAM6N3N4PTT7M76"));
})();