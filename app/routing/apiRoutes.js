var friends = require('../data/friends');

module.exports = function (app) {
    // Sends friends as a response
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    }); // app.get('/api/friends')

    app.post('/api/friends', function (req, res) {
        console.log(req.body.scores);
        var user = req.body;
        // Parsing data
        for (let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }
        var lowestDifference = 100;
        var bestMatchIndex = 0;
        for (let i = 0; i < friends.length; i++){
            var currentDifference = 0;
            for (let j = 0; j < friends[i].scores.length; j++){
                currentDifference += Math.abs(user.scores[j] - friends[i].scores[j]);
            }
            if (currentDifference < lowestDifference){
                bestMatchIndex = i;
                lowestDifference = currentDifference;
            }
        }
        friends.push(user);
        res.json(friends[bestMatchIndex]);
    }); // app.post('/api/firends')
}; // module.exports