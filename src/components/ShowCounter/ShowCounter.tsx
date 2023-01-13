import { FC } from "react";

interface IDateProps {
    minutes: number;
    seconds: number;
}

const ShowCounter: FC<IDateProps> = ({ minutes, seconds }) => {
    return <div style={{ display: 'flex' }}>
        <p style={{ marginRight: '10px' }}>{minutes}</p>
        <p>{seconds}</p>
    </div>;
};

export default ShowCounter;
