const Image = ({image, alt}) => {

    console.log(image);


    return(
        <div className="Image">
            <img src={image} alt={alt} />
        </div>
    )
};

export default Image;