export const NewsCard = ({ news }) => {
  return (
    <div className="bg-very_dark_blue px-5 py-6 h-full flex flex-col">
      <h2 className="font-Inter font-bold text-3xl text-soft_orange mb-8">New</h2>
      <ul className="h-full flex flex-col justify-between">
        {news.map(({ id, title, subTitle }) => (
          <ListItem key={id} title={title} subTitle={subTitle} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ title, subTitle }) => {
  return (
    <li className="[&:not(:last-child)]:pb-7 xl:[&:not(:last-child)]:pb-14 [&:not(:last-child)]:border-b-[1px] border-dark_grayish_blue">
      <h3 className="font-Inter font-bold text-lg text-off_white hover:text-soft_orange cursor-pointer">{title}</h3>
      <p className="text-grayish_blue">{subTitle}</p>
    </li>
  );
};
