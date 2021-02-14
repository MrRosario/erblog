import Link from 'next/link';

 const BlogCard = ({
    PostTitle,
    PostDate,
    PostDecription,
    PostId
 }) => {

    

    return (
        <Link href={'/blog/' + PostId} as={'/blog/' + PostId}>
            <a className='card' key={PostId}>
                <h2 className="card__title">
                    { PostTitle }
                </h2>

                <time className="card__time">
                    { PostDate }
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