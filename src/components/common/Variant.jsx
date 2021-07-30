// import React, { useState, Component } from 'react'
// import { SketchPicker } from 'react-color';
// import Tags from './TagComponent';
// export default function Variants() {
//     const [hasVariant, sethasVariant] = useState(false);
//     const handleChange = (e) => {
//         sethasVariant(document.getElementById('hasvariant').checked);
//     }
//     return (
//         <div>
//             <div className="h4">Variants</div>
//             <form>
//                 <label className="title pb-2 px-1" htmlFor="hasVariant">Does this product have variant</label>
//                 <input className="form-check-input mb-1" id='hasvariant' name='hasvariant' type='checkbox' onChange={(e) => handleChange(e)}
//                 />
//                 {hasVariant ?
//                     (<VariantsDataComponent />) : null
//                 }
//             </form>
//         </div>
//     )
// };

// const generateID = () => {
//     return (variantsData.length + 1);
// }

// export const variantsData = [
//     {
//         id: 1,
//         selectedOption: 'Title',
//         tags: []
//     }
// ]

// class VariantsDataComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.addOption = this.addOption.bind(this)
//     }

//     addOption = (e) => {
//         const dataItem = {
//             id: generateID(),
//             selectedOption: 'Title',
//             tags: []
//         }
//         variantsData.push(dataItem);
//         this.forceUpdate();
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <div >
//                 <h4>Options</h4>
//                 <button class="btn btn-primary mt-2 text-center" onClick={(e) => this.addOption(e)}>Add another Option</button>
              
//                 {variantsData.map(
//                     (item) => {
//                         return <
//                             OptionComponent id={item.id} selectedOption={item.selectedOption} tags={item.tags} />
//                     }
//                 )}
                
               
//             </div >
//         )
//     }
// }

// class OptionComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             selectedOption: this.props.selectedOption,
//             tags: [],
//         }
//     }
//     onChangeHandler = (e) => {
//         this.setState({ selectedOption: e.target.value })
//     }

//     saveData = (tags) => {
//         this.setState({ tags: tags },
//             () => {
//                 const data = {};
//                 data.id = this.props.id;
//                 data.selectedOption = this.state.selectedOption;
//                 data.tags = this.state.tags;
//                 let indexitem;
//                 variantsData.map(
//                     (item, index) => {
//                         if (item.id === this.props.id) {
//                             indexitem = index
//                         }
//                     }
//                 );
//                 variantsData[indexitem] = data;
//                 console.log(JSON.stringify(variantsData));

//             }

//         )
//     }

//     render() {
//         return (
//                           <div className="card p-3 mt-3 d-flex mx-5">
//                 <h4 className="bg-info text-white p-2  text-center" htmlFor={`option` + this.props.id} >Varient Option {this.props.id}</h4>
//                 <select className="mb-2 form-select " name='options' id={'option' + this.props.id}
//                  onChange={(e) => this.onChangeHandler(e)}>
//                     <option value='Title'>Title</option>
//                     <option value='Color'>Color</option>
//                     <option value='Style'>Style</option>
//                     <option value='Material'>Material</option>
//                     <option value='Size'>Size</option>
//                 </select>
//                 {this.state.selectedOption === 'Color' ? <ColorPickerInput sendTags={(tags => this.saveData(tags))} /> :
//                     <Tags sendTags={(tags) => this.saveData(tags)} />}

// </div>


            
//         )
//     }
// }

// const ColorPickerInput = props => {
//     const [tags, setTags] = useState([{ id: 1, text: '' }])

//     const sendTag = (tag) => {
//         let targetIndex;
//         tags.map(
//             (item, index) => {
//                 if (item.id === tag.id) {
//                     targetIndex = index;
//                 }
//             }
//         );
//         tags[targetIndex].text = tag.text;
//         props.sendTags(tags)
//     }
//     const addColor = (e) => {
//         const temp = {};
//         temp.id = (tags.length + 1);
//         temp.text = ''
//         setTags([...tags, temp])
//         e.preventDefault();
//     }
//     return (
//         <>
//             {
//                 tags.map(
//                     (picker) => <ColorPicker id={picker.id} setText={(tag) => sendTag(tag)} />
//                 )
//             }
//             <button className="btn btn-primary mt-2 text-center" onClick={addColor}>Add more Color</button>
//         </>
//     )
// }

// const ColorPicker = props => {
//     const [color, setColor] = useState('#fff');
//     const onChangeCompleteHandler = (newColor) => {
//         if (color !== newColor) {
//             setColor(newColor)
//         }
//     }
//     React.useEffect(
//         () => {
//             const tag = {}
//             tag.id = props.id;
//             tag.text = color.hex
//             props.setText(tag)
//         },
//         [color]
//     )
//     return (
//         <div>
//             <SketchPicker
//                 color={color}
//                 onChange={(color) => onChangeCompleteHandler(color)}
//             />
//         </div>
//     )
// }

import React, { Component } from 'react'
import ColorPickerInput from './ColorPickerInput'
import Tags from './TagComponent';

export default class Variants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasVariant: true,
            variantsData: [
                {
                    id: 1,
                    selectedOption: 'Title',
                    tags: []
                }]
        }
        this.handleChange = this.handleChange.bind(this)
        this.addData = this.addData.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            hasVariant: !this.state.hasVariant
        })
    }
    addOption = () => {
        const dataItem = {
            id: (this.state.variantsData.length + 1),
            selectedOption: 'Title',
            tags: []
        }
        this.setState({ variantsData: [...this.state.variantsData, dataItem] })

    }
    addData(data) {
        let targetIndex = 0;
        this.state.variantsData.map(
            (item, index) => {
                if (item.id === data.id) {
                    targetIndex = index;
                }
            }
        )
        let variantsData = this.state.variantsData;
        variantsData[targetIndex] = data;
        this.setState({ variantsData })
    }
    render() {
        this.props.sendVariantsData(this.state.variantsData)
        return (
            <div>
                <div className="h4">Variants</div>
                <form>
                    <label className="title pb-2 px-1" htmlFor="hasVariant">Does this product have variant</label>
                    <input className="form-check-input mb-1" id='hasvariant' name='hasvariant' type='checkbox' onChange={(e) => this.handleChange(e)}
                    />
                    {this.state.hasVariant ?
                        (
                            <>
                                <VariantsDataComponent
                                    variantsData={this.state.variantsData}
                                    addOption={(e) => this.addOption(e)} imgList={this.props.imgList}
                                    addData={(data) => this.addData(data)}
                                />
                                <VariantsPreview addData={(data) => this.addData(data)} imgList={this.props.imgList} data={this.state.variantsData} />
                            </>) : null
                    }
                </form>
            </div>
        )
    }
};

class VariantsDataComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>Options</h2>
                {this.props.variantsData.map(
                    (item) => {
                        return <OptionComponent addData={(data) => this.props.addData(data)} id={item.id} selectedOption={item.selectedOption} tags={item.tags} />
                    }
                )}
                <button onClick={(e) => { e.preventDefault(); return this.props.addOption(); }}>Add another Option</button>
            </div >
        )
    }
}

class OptionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: this.props.selectedOption,
            tags: [],
        }
    }
    onChangeHandler = (e) => {
        this.setState({ selectedOption: e.target.value })
    }

    saveData = (tags) => {
        this.setState({ tags: tags },
            () => {
                const data = {};
                data.id = this.props.id;
                data.selectedOption = this.state.selectedOption;
                data.tags = this.state.tags;
                this.props.addData(data);
            }
        )
    }
    render() {
        return (
            <div>
                <label htmlFor={`option` + this.props.id} >Option {this.props.id}</label>
                <select name='options' id={'option' + this.props.id} onChange={(e) => this.onChangeHandler(e)}>
                    <option value='Title'>Title</option>
                    <option value='Color'>Color</option>
                    <option value='Style'>Style</option>
                    <option value='Material'>Material</option>
                    <option value='Size'>Size</option>
                </select>
                {this.state.selectedOption === 'Color' ? <ColorPickerInput sendTags={(tags => this.saveData(tags))} /> :
                    <Tags sendTags={(tags) => this.saveData(tags)} />}
            </div>
        )
    }
}

class VariantsPreview extends Component {

    render() {
        return (
            <>
                <h2>Variants Preview</h2>
                {
                    this.props.data.map(
                        (variant) => variant.tags.map(
                            (varObject) => {
                                 return <VariantImgSelect addData={(data) => this.props.addData(data)} variant={variant} imgList={this.props.imgList} id={varObject.id} tag={varObject} />
                            }
                        )

                    )}
            </>
        )
    }
};

class VariantImgSelect extends Component {
    constructor(props) {
        super(props)
    }
    onChangeHandler = (e) => {
        const data = this.props.variant
        let tagID = 0;
        data.tags.map(
            (tag) => {
                if ((tag.id + tag.text) === e.target.id) {
                    tagID = tag.id
                    console.log(tagID)
                }
            }
        )
        data.tags.find(({ id }) => id === tagID).img = e.target.value;
        this.props.addData(data);
    }

    render() {
        return (
            <>
                <h4>{this.props.tag.text}</h4>
                <select name='variantImgSelect' id={this.props.tag.id + this.props.tag.text} onChange={(e) => this.onChangeHandler(e)}>
                    {
                        this.props.imgList.map(
                            (img) => <option value={img}>{img}</option>
                        )
                    }
                </select>
            </>
        )
    }
}
