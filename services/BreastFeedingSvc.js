var _ = require('lodash');
var moment = require('moment');

var records = [{
  id: _.uniqueId('breast'),
  userId: 'u1',
  startTime: moment().subtract(3, 'hours').format(),
  endTime: moment().subtract(2, 'hours').format(),
  leftSeconds: 3000,
  rightSeconds: 4500,
  lastSide: 'l'
}, {
  id: _.uniqueId('breast'),
  userId: 'u1',
  startTime: moment().subtract(6, 'hours').format(),
  endTime: moment().subtract(5, 'hours').format(),
  leftSeconds: 4000,
  rightSeconds: 3000,
  lastSide: 'r'
}];

function all(userId, callback) {
  if (!userId) {
    return callback(new Error());
  }

  var results = _.where(records, {userId: userId});
  callback(null, results);
}

function create(userId, data, callback) {
  if (!userId || !data.startTime || !data.endTime || !data.lastSide) {
    return callback(new Error());
  }

  records.push({
    id: _.uniqueId('breast'),
    userId: userId,
    startTime: moment(data.startTime).format(),
    endTime: moment(data.endTime).format(),
    leftSeconds: Number(data.leftSeconds),
    rightSeconds: Number(data.rightSeconds),
    lastSide: data.lastSide
  });

  last(userId, callback)
}

function last(userId, callback) {
  if (!userId) {
    return callback(new Error());
  }

  var result = _.chain(records)
    .where({userId: userId})
    .sortBy('endTime')
    .last()
    .value();

  callback(null, result);
}

function remove(userId, itemId, callback) {
  if (!userId || !itemId) {
    return callback(new Error());
  }

  for (var i = 0; i < records.length; i++) {
    if (records[i].id == itemId && records[i].userId == userId) {
      records.splice(i, 1);
      break;
    }
  }

  callback();
}

module.exports = {
  all: all,
  create: create,
  last: last,
  remove: remove
};
