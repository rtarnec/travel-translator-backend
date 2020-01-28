# travel-translator-backend

## Description

This is the Firebase project that works with the "Travel Translator Vue.js application, see https://github.com/rtarnec/travel-translator for more details.

It contains the Cloud Function that executes the images OCR-ization, through the Google Cloud Vision API.

## How to use it

- Add to the `public` folder the content of the `dist` folder of the Vue.js app (or any other web application that implements the same features, i.e. file uploading and Firestore listener).

- From the `functions`folder, do `npm install`

- Deploy your Firebase project

- From the Firebase console, create a [Firebase Extension](https://firebase.google.com/docs/extensions/overview-use-extensions) of type [Translate Text](https://firebase.google.com/products/extensions/firestore-translate-text). Configure it as follows:

1. "Target languages for translations" to `en`
2. "Collection path" to `ocrTranslations`
3. "Input field name" to ìnput`
4. "Translations output field name" to `translated`
