// assests
import star from '../../assests/icons/Star.svg'

export default function CategoryContainer() {
  const Categories = [
    {
      id: 1,
      category: "design & creative",
      rating: "4.8/5",
      skills: 20,
    },
    {
      id: 2,
      category: "technology",
      rating: "4.8/5",
      skills: 20,
    },
    {
      id: 3,
      category: "writing",
      rating: "4.91/5",
      skills: 20,
    },
    {
      id: 4,
      category: "sales & marketing",
      rating: "4.77/5",
      skills: 20,
    },
    {
      id: 5,
      category: "development & it",
      rating: "4.92/5",
      skills: 20,
    },
    {
      id: 6,
      category: "handworks",
      rating: "4.85/5",
      skills: 20,
    }
  ];
  return (
    <div className=" flex flex-col gap-y-3 md:flex-row md:items-center md:gap-5 md:flex-wrap">
      {Categories.map(({ id, category, rating, skills }) => {
        return (
          <div key={id} className=" bg-lightGrayishBlue px-4 py-3 rounded-md w-[260px]">
            <h3 className=" capitalize font-medium">{category}</h3>
            <div className=' flex items-center justify-between'>
              <div className=' flex items-center gap-x-1'>
                <img src={star} alt="star" className=' w-4' />
                <p className=' text-xs font-extralight'>{rating}</p>
              </div>
              <p className=' text-xs font-extralight'>{skills} skills</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
