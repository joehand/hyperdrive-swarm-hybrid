var swarm = require('hyperdrive-archive-swarm')
var electronWebRTC = require('electron-webrtc')

module.exports = function (archive, opts) {
  if (!opts) opts = {}
  if (!opts.wrtc) opts.wrtc = electronWebRTC({headless: true})
  return swarm(archive, opts)
}
