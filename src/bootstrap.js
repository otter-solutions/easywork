import i18next from "i18next";

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                "key": "hello world"
            }
        }
    }
}, function(err, t) {
    // initialized and ready to go!
    document.getElementById('root').innerHTML = i18next.t('key');
});

export const $t = function (key) {
    return i18next.t(key);
};
