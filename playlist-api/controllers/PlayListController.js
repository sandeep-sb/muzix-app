const repo=require('../repository/PlayListRepository');

function getPlayLists(req, res) {
    repo.getPlayLists().then(data => {
        res.status(200).send(data);
    });
}



function AddSongToPlayList(req, res) {
    
    repo.AddSongToPlayList(req.params.playlistId, req.body).then(data => {
        res.status(201).send(data);
    });
}

function createPlaylist(req, res) {
    repo.createPlaylist(req.body.name).then(data => {
        res.status(201).send(data);
    });
}




module.exports = { getPlayLists, AddSongToPlayList, createPlaylist };