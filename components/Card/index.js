import Link from 'next/link';
import Image from 'next/image'
import useFormatDate from '../../hooks/useFormatDate';
import MyImage from '../MyImage';

 const Card = ({
    PostTitle,
    PostDate,
    PostDecription,
    PostId,
    PostSlug,
    PostFeaturedImg
 }) => {

    const { formatedDate } = useFormatDate(PostDate);
    console.log("PostFeaturedImg: ", PostFeaturedImg);

    return (
        <Link href={'/blog/' + PostSlug} as={'/blog/' + PostSlug}>
            <a className='card' key={PostId}>
                <header className="card_heading">
                    <h2 className="card__header">
                        { PostTitle }
                    </h2>
                </header>

                <time className="card__time">
                    { formatedDate }
                </time>

                {   PostFeaturedImg && 
                    <div className="post__featured-image">
                        <Image
                            className="image" 
                            src={`${PostFeaturedImg.url}`} 
                            alt={PostFeaturedImg.caption} 
                            layout="fill"
                        />
                    </div>
                }
                
                <h3 className="card__description">
                    { PostDecription }
                </h3>
                <div className="card__tags"> </div>
            </a>
        </Link>
    )

}

export default Card