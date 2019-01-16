//mock friend data housed in array of objects
var friendsArray = [
    {
        name: "Tony Stark",
        photo: "http://www.sprinklesandbooze.com/wp/wp-content/uploads/2013/05/Tony-Stark-1.jpg",
        scores: [
            1,
            2,
            4,
            5,
            5,
            4,
            3,
            5,
            4,
            3
        ]
    },
    {
        name: "Steve Rodgers",
        photo: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fhiddenremote.com%2Ffiles%2F2016%2F04%2FAIW_006_L.jpg&c=sc&w=850&h=560",
        scores: [
            2,
            4,
            4,
            1,
            4,
            3,
            5,
            3,
            2,
            5
        ]
    },
    {
        name: "Natasha Romanova",
        photo: "https://i.kinja-img.com/gawker-media/image/upload/s--6BHxhJWs--/c_scale,f_auto,fl_progressive,q_80,w_800/woh1fxv8l0dxutdygsq3.png",
        scores: [
            3,
            5,
            4,
            5,
            5,
            4,
            4,
            3,
            5,
            4
        ]
    },
    {
        name: "Wanda Maximoff",
        photo: "https://static.comicvine.com/uploads/original/11/113509/5168967-wanda.jpg",
        scores: [
            1,
            3,
            5,
            5,
            4,
            2,
            2,
            3,
            5,
            4
        ]
        
    },
    {
        name: "T'Challa",
        photo: "https://media.wmagazine.com/photos/5aabdac3c238cf7aeeee31f3/4:3/w_1536/Screen%2520Shot%25202018-03-16%2520at%252010.53.26%2520AM.png",
        scores: [
            5,
            4,
            5,
            1,
            2,
            3,
            4,
            5,
            2,
            4
        ]
    }
    
    

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;