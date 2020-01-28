const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');

admin.initializeApp();

exports.ocrImage = functions.storage.object().onFinalize(async (object) => {

    const filePath = object.name; // File path in the bucket.
    const firestoreDocId = filePath.split("/")[1].split(".")[0];

    //Note that the file contentType can only be an image, due to Cloud Storage Security rule

    try {

        const visionClient = new vision.ImageAnnotatorClient();
        const [result] = await visionClient.textDetection(`gs://${object.bucket}/${object.name}`);
        const detections = result.textAnnotations;

        const input = detections[0].description;
        const originalLanguage = detections[0].locale;

        await admin.firestore().doc(`ocrTranslations/${firestoreDocId}`).set({ input, originalLanguage, filePath });

        return null;

    } catch (error) {
        console.log(error);
        return null;
    }
})

exports.deleteFile = functions.firestore
    .document('ocrTranslations/{docId}')
    .onCreate((snap) => {
        const filePath = snap.data().filePath;
        const file = admin.storage().bucket().file(filePath);
        return file.delete();
    });