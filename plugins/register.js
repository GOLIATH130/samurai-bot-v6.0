const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar <nama>.umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'nombre no debe estar vacío'
  if (!age) throw 'La edad no puede estar vacía (numero)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
🥀Registro Existoso🥀!

╭─「 Info 」
│Nombre: ${name}
│ Edad: ${age}thn
│ SN: ${sn}
╰────
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nombre>.<edad>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

