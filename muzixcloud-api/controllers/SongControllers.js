const apikey='37fa14ba27d26e5cefaed6b5832eb835';
const spotifyToken="BQBTs-2mfJXbibNp0Rfr7EQsICecZrNqhMIE5RD2j792PWnlq0Lfwvc79LE-Cy5wcO7mDB1s7R5ug3Rsk5cZGhjoMG4xdSNRk0LuGqz-nTMLCFHJAg0"
import fetch from "node-fetch";
 
// Search Song by name
 function SearchTrack(req,res){
    const {track}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
} 






function TopArtists(req,res){
    

    const url=`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


function TopTracks(req,res){
    
    const url=`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=India&api_key=37fa14ba27d26e5cefaed6b5832eb835&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


function TopAlbums(req,res){
    const {album}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=album.gettoptags&album=${album}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


function gettoptracksByTag(req,res){
    const {tag}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tag}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


//Artist search
function ArtistSearch(req,res){
    const {artist}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}

//tag.getsimilar
function GetSimilarTags(req,res){
    const {tag}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=tag.getsimilar&tag=${tag}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}

//tag.getWeeklyChartList
function WeeklyChartList(req,res){
    const {tag}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=tag.getWeeklyChartList&tag=${tag}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}



//fetch Top Artist from spotify by access token bearer token Authration bearer token
function GetTopArtist(req,res){
    
    const spotifyToken="BQBIKZn9-wyaDWsLUs9lYxwr1jeHgWGMOipbM0hGYIP4HWhqd-GyjS2VxY5PoxCWDW-fJuFrkjAG2Aa4BhKVcWAI-GTxmVfRDajGztLodL5hOdJiJdc"
    const url=`https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B`;
    fetch(url,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${spotifyToken}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}

    
 




export {SearchTrack, TopArtists, TopTracks, TopAlbums, gettoptracksByTag,  ArtistSearch, GetSimilarTags, WeeklyChartList, GetTopArtist};




