import { dataJS } from './dataJS';
import Section from './Section';

export default function Sections() {
    return (
        <>
            {dataJS.map(data => (
                <Section
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    img={data.img}
                    description={data.description}
                    days={data.days}
                    hours={data.hours}
                    phoneNumbers={data.phoneNumbers}
                />
            ))}
        </>
    );
}
