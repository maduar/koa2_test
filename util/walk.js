const fs = require( 'fs' ),
    mimes = require( './mimes' );

function walk( reqPath ) {

    const files = fs.readdirSync( reqPath ),
        dirList = [],
        fileList = [];

    let item, itemArr, itemMime;
    for ( let i = 0, len = files.length; i < len; i++ ) {
        item = files[ i ];
        itemArr = item.split( '\.' );
        itemMime = ( itemArr.length > 1 )
            ? itemArr[ itemArr.length - 1 ]
            : 'undefined';

        if ( typeof mimes[ itemMime ] === 'undefined' ) {
            dirList.push( files[ i ] );
        } else {
            fileList.push( files[ i ] );
        }
    }

    const result = dirList.concat( fileList );
    return result;
}

module.exports = walk;
