#!/usr/bin/env nodejs

require("babel-register")({
    presets: ["env"],
});
require("./src/server");
