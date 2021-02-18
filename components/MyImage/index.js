import Image from 'next/image'

const MyImage = (url, alt) => {
    return(
        <Image
            className="image" 
            src={url} 
            alt={alt} 
            layout="fill"
        />
    )
}
export default MyImage;