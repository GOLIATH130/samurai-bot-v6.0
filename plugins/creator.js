let handler = function (m) {
  // this.sendContact(m.chat, '573215080029', 'Nurutomo', m)
  this.sendContact(m.chat, '0', '573215080029', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
