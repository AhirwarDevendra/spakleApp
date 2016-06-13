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
            face : "http://dreamwood.in/images/logo3.png"
        },
        {
            id : 1,
            name : "Video 2",
            description : "Description 2",
            face : "http://dreamwood.in/images/logo3.png"
        },
        {
            id : 2,
            name : "Video 3",
            description : "Description 3",
            face : "http://dreamwood.in/images/logo3.png"
        },
        {
            id : 3,
            name : "Video 4",
            description : "Description 4",
            face : "http://dreamwood.in/images/logo3.png"
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
            src:"http://dreamwood.in/images/team/shaikh.jpg"
        },
        {
            id:1,
            src:"http://dreamwood.in/images/team/Devendra.jpg"
        },
        {
            id:2,
            src:"http://dreamwood.in/images/team/Swapnil.jpg"
        },
        {
            id:3,
            src:"http://dreamwood.in/images/team/Atin.jpg"
        },
        {
            id:4,
            src:"http://dreamwood.in/images/team/arun.jpg"
        },
        {
            id:5,
            src:"http://dreamwood.in/images/team/dix.jpg"
        },
        {
            id:6,
            src:"http://dreamwood.in/images/team/priti.jpg"
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
