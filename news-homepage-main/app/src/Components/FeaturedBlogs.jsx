export const FeaturedBlogs = ({ blogs }) => (
  <ul className="flex flex-col gap-y-12 lg:flex-row gap-x-4">
    {blogs.map(({ id, ...props }) => (
      <BlogItem key={id} {...props} />
    ))}
  </ul>
);

const BlogItem = ({ no, title, subTitle, image }) => (
  <li className="flex gap-x-5">
    <div className="max-h-full">
      <img className="w-[110px] max-w-[110px] h-full min-h-full object-cover object-center" src={image.src} alt={image.alt} />
    </div>
    <div className="flex flex-col justify-around gap-3">
      <span className="font-Inter font-bold text-3xl text-grayish_blue">{no}</span>
      <h2 className="font-Inter font-bolder text-lg text-very_dark_blue hover:text-soft_red cursor-pointer">{title}</h2>
      <p className="font-Inter text-sm text-dark_grayish_blue">{subTitle}</p>
    </div>
  </li>
);
