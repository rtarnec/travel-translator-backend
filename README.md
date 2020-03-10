# travel-translator-backend

## Description

This is the Firebase backend project that works with the "Travel Translator" Vue.js application (the front-end), see https://github.com/rtarnec/travel-translator for more details.

It contains the Cloud Function that executes the images OCR-ization, through the Google Cloud Vision API, as well as the Cloud Storage and Cloud Firestore security rules.

## How to use it

- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com)

- Enable the Vision API in the Google Cloud Console through the following link: https://console.developers.google.com/apis/api/vision.googleapis.com/overview

- Note that Billing is required to enable the Vision API. Billing is also needed for configuring the Translate Text Extension, see below. So, switch to the Blaze plan from your Firebase console (click on the "Upgrade" link at the bottom of the vertical menu).

- Create a project directory in your file system and get the code from this repository, for instance by doing:
  `git clone https://github.com/rtarnec/travel-translator-backend.git`

- Open the Firebase project directory by doing `cd travel-translator-backend`.

- Setup the Firebase CLI to use your Firebase project using `firebase use --add` and select your Firebase project in the list.

- Initialize the Firebase Hosting service in your project by doing `firebase init`, then choosing Hosting by pressing Space, and pressing Enter to confirm your choice (don't choose the Cloud Functions, Firestore and Storage services as they are already defined in this project).

- Install the dependencies for the Cloud Functions, by opening the `functions` directory and doing `npm install`.

- Add to the `public` folder the content of the `dist` folder of the Vue.js app (See code and instructions at https://github.com/rtarnec/travel-translator).

- Deploy your Firebase project (See https://firebase.google.com/docs/cli#deployment for more info).

- From the Firebase console, create a [Firebase Extension](https://firebase.google.com/docs/extensions/overview-use-extensions) of type [Translate Text](https://firebase.google.com/products/extensions/firestore-translate-text). Configure it as follows:

1. "Target languages for translations" to `en`
2. "Collection path" to `ocrTranslations`
3. "Input field name" to input`
4. "Translations output field name" to `translated`

- Open your preferred browser and navigate to your Firebase Hosting default page at `https://<you-project-id>.firebaseapp.com` (or `https://<you-project-id>.web.app`).

## Option

If you don't want to deploy the Vue.js web app in your Firebase project (for example, if you are not versed in Vue.js development or if you don't want to install the Vue CLI just for deploying a demo) you can interact with this backend code with a single HTML page that implements exactly the same core business logic and which is available at the following Gist: https://gist.github.com/rtarnec/4f026b04450a0526cc41c35a6926b4ff

Follow the exact same instructions as above but instead of pasting the content of the `dist` folder of the Vue.js app into the `public` folder of your Firebase project, just paste there the above HTML page as `index.html`.
