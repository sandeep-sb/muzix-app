const express = require('express');
const router = express.Router();
const { getPlayLists, AddSongToPlayList,createPlaylist } = require('../controllers/PlayListController');


router.get('/getPlaylist', getPlayLists);
router.post('/createPlaylist',createPlaylist );
router.post('/addSongToPlaylist/:playlistId/', AddSongToPlayList);



module.exports = router;