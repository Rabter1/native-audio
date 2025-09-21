export var AudioFocusMode;
(function (AudioFocusMode) {
    /** Allow mixed audio, no focus management */
    AudioFocusMode["NONE"] = "none";
    /** Take exclusive audio focus, pause other audio */
    AudioFocusMode["EXCLUSIVE"] = "exclusive";
    /** Take audio focus but duck (lower volume) other audio */
    AudioFocusMode["DUCK"] = "duck";
})(AudioFocusMode || (AudioFocusMode = {}));
//# sourceMappingURL=definitions.js.map