'use strict';

const {
    dialogflow,
    actionssdk,
    Image,
    Table,
    Carousel,
    BasicCard,
    LinkOutSuggestion,
    BrowseCarousel
} = require('actions-on-google');

const functions = require('firebase-functions');

const app = dialogflow({
    debug: true
});

app.intent('Default Welcome Intent', conv => {
    conv.ask('Hi, how can i help you?')
});

app.intent('who', (conv, { name }) => {
    const yourname = "มาย";
    conv.ask('กูกำลังคุยกับ' + yourname + "ไม่เสือกดิ");
});


app.intent('show text', (conv) => {
    conv.ask('Real-time Air Quality Index (AQI)');
    conv.ask(new LinkOutSuggestion({
        name: 'Air Pollution',
        url: 'https://action-codelab-dphjua.firebaseapp.com/test.html',
    }));

});


app.intent('Default Fallback Intent', conv => {
    conv.ask(`I didn't understand. Can you tell me something else?`)
});

exports.addMessage = functions.https.onRequest(async (req, res) => {
    const original = req.query.text;
    const snapshot = await admin.database().ref('/messages').push({ original: original });

    res.redirect(303, snapshot.ref.toString());

});

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {

        const original = snapshot.val();
        console.log('Uppercasing', context.params.pushId, original);
        const uppercase = original.toUpperCase();

        return snapshot.ref.parent.child('uppercase').set(uppercase);
    });

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

