const url = require( 'url' ),
    fs = require( 'fs' ),
    path = require( 'path' ),
    walk = require( './walk' );


function readDir( url, reqPath ) {
    const contentList = walk( reqPath );

    let html = `<ul>`
    for ( let [ index, item ] of contentList.entries() ) {
        html = `${html}<li><a href="${url === '/' ? '' : url}/${item}">${item}</a>`
    }
    html = `${html}</ul>`

    return html;
}

module.exports = readDir;
