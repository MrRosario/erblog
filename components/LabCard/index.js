import Link from 'next/link';
import Image from 'next/image'

const LabCard = ({
    title, 
    description, 
    featuredImg, 
    url, 
    index
}) => {

    return(
      <Link href={url}>
        <a className="lab-card" target="_blank" key={index}> 
          <div className="lab-card__img post__featured-image">
            <Image
              className="image" 
              src={`${featuredImg.hash}${featuredImg.ext}`} 
              alt={featuredImg.caption} 
              layout="fill"
            />
          </div>
          <h2 className="lab-card__title">
            {title}
          </h2>
          <p className="lab-card__description">
            {description}
          </p>
        </a>
      </Link>
    )
}

export default LabCard;