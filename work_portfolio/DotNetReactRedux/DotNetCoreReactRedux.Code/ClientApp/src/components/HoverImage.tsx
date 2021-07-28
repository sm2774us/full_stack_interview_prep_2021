import React, { useState } from 'react';

export interface HoverImageProps {
    src?: string;
    hoverSrc?: string;
}

const HoverImage: React.FunctionComponent<HoverImageProps> = (props) => {

    // Declare a new state variable, which we'll call "count"
    const [imgSrc, setSource] = useState(props.src);

    return (
        <div>
            <img
                src={imgSrc}
                onMouseOver={() => setSource(props.hoverSrc)}
                onMouseOut={() => setSource(props.src)} />
        </div>
    );
}

HoverImage.defaultProps = {

    src: '',
    hoverSrc:'',
}

export default HoverImage
