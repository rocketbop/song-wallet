function songproToHtml(songText) {
  const lines = songText.split('\n')
  let html = ''

  for (const line of lines) {
    if (line.includes('[') && line.includes(']')) {
      const replacedLine = line.replace(
        /\[([A-Za-z0-9]+)\]/g,
        '<span class="chord">[$1]</span>'
      )
      html += replacedLine
    } else {
      html += line
    }
    html += '<br>'
  }
  return '<div>' + html + '</div>'
}

export { songproToHtml }
