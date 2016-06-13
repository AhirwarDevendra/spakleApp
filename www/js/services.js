angular.module('Sparkle.services', [])

.factory('Events',function(){
    
    var events = [
        {      
            id : 0,
            name : "Social Events",
            punchLine : "",
            face : ""
        },
        {      
            id : 1,
            name : "Corparate Events",
            punchLine : "",
            face : ""
        },
        {      
            id : 2,
            name : "Wedding Events",
            punchLine : "",
            face : ""
        },
        {      
            id : 3,
            name : "Game Show",
            punchLine : "",
            face : ""
        },
        {      
            id : 4,
            name : "Celebrity Event",
            punchLine : "",
            face : ""
        },
        {      
            id : 5,
            name : "Auditorium Show",
            punchLine : "",
            face : ""
        },
        {      
            id : 6,
            name : "Personal Celebration",
            punchLine : "",
            face : ""
        },
        {      
            id : 7,
            name : "Comedy Shows",
            punchLine : "",
            face : ""
        },
        {      
            id : 8,
            name : "Motivational, Inspirational and Trainning Show",
            punchLine : "",
            face : ""
        },
        {      
            id : 9,
            name : "Musical Night",
            punchLine : "",
            face : ""
        },
        {      
            id : 10,
            name : "Theme Party",
            punchLine : "",
            face : ""
        }
    ];
    
    return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
})

.factory('Videos',function(){
    
    var videos = [
        {
            id : 0,
            name : "Video 1",
            description : "Description 1",
            face : "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/13178802_806806219454298_2908970443743796115_n.jpg?oh=2a79b6bf523457ca7383f362acfd9a04&oe=57D44CEB"
        },
        {
            id : 1,
            name : "Video 2",
            description : "Description 2",
            face : "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/13178802_806806219454298_2908970443743796115_n.jpg?oh=2a79b6bf523457ca7383f362acfd9a04&oe=57D44CEB"
        },
        {
            id : 2,
            name : "Video 3",
            description : "Description 3",
            face : "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/13178802_806806219454298_2908970443743796115_n.jpg?oh=2a79b6bf523457ca7383f362acfd9a04&oe=57D44CEB"
        },
        {
            id : 3,
            name : "Video 4",
            description : "Description 4",
            face : "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/13178802_806806219454298_2908970443743796115_n.jpg?oh=2a79b6bf523457ca7383f362acfd9a04&oe=57D44CEB"
        }
            
    ];
    
    
    return {
    all: function() {
      return videos;
    },
    
  };
    
    
})

.factory('Images',function(){
    
    var images = [
        
        {
            id:0,
            src:"https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/13178802_806806219454298_2908970443743796115_n.jpg?oh=2a79b6bf523457ca7383f362acfd9a04&oe=57D44CEB"
        },
        {
            id:1,
            src:"https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/11665438_966353940126800_1753974133392540568_n.jpg?oh=c12c74e4b5cab1939818ccefe202b36f&oe=58093A2D"
        },
        {
            id:2,
            src:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c13.12.155.155/1959354_431162100350477_701473800_n.jpg?oh=f51c4cbfb811019bbf346db5ff7763a7&oe=5800C5E2&__gda__=1476230726_6cb2d21ed5585b48ef2afada5ad43565"
        },
        {
            id:3,
            src:"https://scontent-sit4-1.xx.fbcdn.net/v/l/t1.0-9/10603639_323255897847784_2264280678409300875_n.jpg?oh=1c25dad5b4c0a8b9556767257e752c8d&oe=57CE28C2"
        },
        {
            id:4,
            src:"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-9/13227071_1601137840200838_2031626717436429358_n.png?oh=1fd1e1d415be343d35e1f8bca7111036&oe=57FFED2B&__gda__=1473487792_fb720064fe376f565de464774956d81f"
        }
    ];
    /*for(var i = 0; i < 100; i++) 
    {
        images.push({id: i, src: "http://placehold.it/50x50"});
    }
    
    */
    
    return {
    all: function() {
      return images;
    },
    get: function(eventId) {
      for (var i = 0; i < images.length; i++) {
        if (images[i].id === parseInt(eventId)) {
          return images[i];
        }
      }
      return null;
    }
  };
    
    
})
