const mongoose = require('mongoose');

const Room = require('../models/room');
const History = require('../models/history');

exports.index = async (req, res, next) => {
    const room = await Room.findById(req.params.roomId);
    const msgList = await History.find({
        room: mongoose.Types.ObjectId(req.params.roomId),
    });

    res.cookie('roomId', req.params.roomId);

    res.render('chat',
        {
            title: 'Chat',
            room: room,
            msgList: msgList
        }
    );
}