import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

const ColorPickerInput = props => {
    const [tags, setTags] = useState([{ id: 1, text: '' }])

    const sendTag = (tag) => {
        let targetIndex;
        
        tags.map(
            (item, index) => {
                if (item.id === tag.id) {
                    targetIndex = index;
                }
            }
        );
        tags[targetIndex].text = tag.text;
        props.sendTags(tags)
    }
    const addColor = (e) => {
        const temp = {};
        temp.id = (tags.length + 1);
        temp.text = ''
        setTags([...tags, temp])
        e.preventDefault();
    }
    return (
        <>
            {
                tags.map(
                    (picker) => <ColorPicker id={picker.id} setText={(tag) => sendTag(tag)} />
                )
            }
            <button className="btn btn-warning" onClick={addColor}>Add more Color</button>
        </>
    )
}

const ColorPicker = props => {
    const [color, setColor] = useState('#fff');
    const onChangeCompleteHandler = (newColor) => {
        if (color !== newColor) {
            setColor(newColor)
        }
    }
    React.useEffect(
        () => {
            const tag = {}
            tag.id = props.id;
            tag.text = color.hex
            props.setText(tag)
        },
        [color]
    )
    return (
        <div>
            <SketchPicker
                color={color}
                onChange={(color) => onChangeCompleteHandler(color)}
            />
        </div>
    )
}

export default ColorPickerInput;