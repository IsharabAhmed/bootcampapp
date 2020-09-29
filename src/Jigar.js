import React from 'react';

function Jigar(props) {
    return (
        <div>
            <h3>
                <i>
                    -this lyric line is from <strong>{props.singerName}</strong>
                </i>
            </h3>
            <h3>
                And the song name is <strong>{props.songName}</strong>
            </h3>
        
        </div>
    )
}

export default Jigar;