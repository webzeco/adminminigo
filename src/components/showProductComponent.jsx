import parse from 'html-react-parser'
const ShowProduct = props => {
        return (
            <div>
                <h2>Show Product</h2>

                {
                    props.productData.map(
                        (product) => {
                            return (
                                <div>
                                    <h2>Product Title: {product.title}</h2>
                                    <h2>Images</h2>
                                    {product.images !== null ?
                                        product.images.map(
                                            (img) => {
                                                return <img src={img} width='100px' height='100px' alt='img' />
                                            }
                                        )
                                        : null}
                                    <h2>Product description:</h2>
                                    {parse(product.description)}
                                    <h3>Product price: {product.price}</h3>
                                    <h3>Quantity Available: {product.availableQuantity}</h3>
                                    <h3>Product Weight: {product.weight}</h3>
                                    <h3>Variants of product</h3>
                                    {
                                        product.variants.map(
                                            (option) => {
                                                return (
                                                    <div>
                                                        <h2>Type: {option.selectedOption}</h2>
                                                        {
                                                            option.tags.map(
                                                                (tag) => {
                                                                    if (option.selectedOption === 'Color') {
                                                                        return <button style={{ backgroundColor: tag.text }}>{tag.text}</button>
                                                                    } else {
                                                                        return <button>{tag.text}</button>
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        )
                                    }

                                </div>
                            )
                        }
                    )
                }
            </div>
        )
}
export default ShowProduct;