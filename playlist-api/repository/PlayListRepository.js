
const PlayList = require('../models/PlayListModel');
const { v4: uuidv4 } = require('uuid');

function createPlaylist(name) {

    return new Promise((resolve, reject) => {
        PlayList.create({ _id: uuidv4() , playlistName: name }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}


function getPlayLists() {
    return new Promise((resolve, reject) => {
        PlayList.find({}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}


function AddSongToPlayList(playlistId, songdata) {
    console.log(playlistId, songdata);
    return new Promise((resolve, reject) => {
        PlayList.findOne({ _id: playlistId }, (err, data) => {
            if (!err) {

                data.songs.push(songdata);
                data.save((err) => {
                    if (!err) {
                        resolve('Song added to playlist');
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { createPlaylist, getPlayLists, AddSongToPlayList };