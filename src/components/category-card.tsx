const CategoryCard: React.FC<{ onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void ,category:string}> = ({ onClick,category }) => (
    <div className="shadow-md flex items-center justify-center" onClick={onClick}>
        <div>{category}</div>
    </div>
);

export default CategoryCard;