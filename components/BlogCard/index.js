import Link from 'next/link';
import useFormatDate from '../../hooks/useFormatDate';

 const BlogCard = ({
    PostTitle,
    PostDate,
    PostDecription,
    PostId,
    PostSlug
 }) => {

    const { formatedDate } = useFormatDate(PostDate);
    
    return (
        <Link href={'/blog/' + PostSlug} as={'/blog/' + PostSlug}>
            <a className='card' key={PostId}>
                <h2 className="card__title">
                    { PostTitle }
                </h2>

                <time className="card__time">
                    { formatedDate }
                </time>

                <h3 className="card__description">
                    { PostDecription }
                </h3>
                <div className="card__tags"> </div>
            </a>
        </Link>
    )

}

export default BlogCard