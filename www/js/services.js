angular.module('Sparkle.services', [])

.factory('Events',function(){
    
    var events = [
        {      
            id : 0,
            name : "Social Events",
            punchLine : "",
            face : "https://cdn.munplanet.com/storage/uploads/52209627db7c13603b000001/topic/background_image/5315d1e6db7c1315050004c0/candid-event-photography.jpg"
        },
        {      
            id : 1,
            name : "Corparate Events",
            punchLine : "",
            face : "http://www.mace-events.org/images/corporate-big.jpg"
        },
        {      
            id : 2,
            name : "Wedding Events",
            punchLine : "",
            face : "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_wedding_Delhi.jpg"
        },
        {      
            id : 3,
            name : "Game Show",
            punchLine : "",
            face : "http://ivegotasecretonline.com/wp-content/uploads/2011/10/gameshow-network.jpg"
        },
        {      
            id : 4,
            name : "Celebrity Event",
            punchLine : "",
            face : "http://www.creationevent.in/wp-content/uploads/photo-gallery/Celebrity%20Events1.jpg"
        },
        {      
            id : 5,
            name : "Auditorium Show",
            punchLine : "",
            face : "https://eighttofiveandinbetween.files.wordpress.com/2013/09/img_5867.jpeg"
        },
        {      
            id : 6,
            name : "Personal Celebration",
            punchLine : "",
            face : "http://www.ejthedj.com/wp/wp-content/themes/skeleton/images/mitzvah-entertainment.jpg"
        },
        {      
            id : 7,
            name : "Comedy Shows",
            punchLine : "",
            face : "http://www.comedianagency.com/wp-content/uploads/2015/06/comedy-show.jpg"
        },
        {      
            id : 8,
            name : "Motivational, Inspirational and Trainning Show",
            punchLine : "",
            face : "http://wbrc.images.worldnow.com/images/7188820_G.jpg"
        },
        {      
            id : 9,
            name : "Musical Night",
            punchLine : "",
            face : "http://25.media.tumblr.com/tumblr_m9jlr1lngt1rf6huqo1_1280.jpg"
        },
        {      
            id : 10,
            name : "Theme Party",
            punchLine : "",
            face : "http://www.excitingparty.com/images/720_Leage-of-cities-2006-_35_.jpg"
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
