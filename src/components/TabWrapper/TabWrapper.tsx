import { Card, CardProps } from "../Card/Card";

interface TabWrapperProps {
    tabData: CardProps[];
}

export const TabWrapper: React.FC<TabWrapperProps> = ({ tabData }) => {
    return (
        <div className='w-full grid gap-14 sm:grid sm:grid-cols-2 lg:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4'>
            {tabData.map(({ image, title, subTitle, description, subDescription, price }) => {
                return (
                    <Card
                        key={`title + ${title}`}
                        image={image}
                        title={title}
                        subTitle={subTitle}
                        description={description}
                        subDescription={subDescription}
                        price={price}
                    />
                );
            })}
        </div>
    );
};


