import CustomHead from '../components/Head';
import BlogCard from '../components/BlogCard';

export default function AllPosts() {

  const arr = [1,2,3];

  return (
    <div className="main">
      <CustomHead 
        pageTitle = "Posts || Eugenio Rosario"
      />

      <div className="content">
        { arr.map((item, index) => (
          <BlogCard 
            PostTitle="Design pattern com flutter"
            PostDate="Domingo, 07 de Junho 2020"
            PostDecription={`Será como "olhar sob o capô" do BloC e do Redux. Nesse caso, abordaremos as ervas daninhas da estrutura MVC conforme a implementei. Como seria, vai ficar um pouco complicado.`}
            PostTags={`#flutter, #mobile, #crossplatform`}
            key={index}
          />
          )) 
        }
      </div>
    </div>
  )
}