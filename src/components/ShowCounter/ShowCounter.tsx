import { FC, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface IDateProps {
    expiryTimestamp: Date;
}

const ShowCounter: FC<IDateProps> = ({ expiryTimestamp }) => {
    const { seconds, minutes } = useTimer({ expiryTimestamp });
    const [isCompletedWorkout, setIsCompletedWorkout] = useState<boolean>(false);

    useEffect(() => {
        if (seconds + minutes <= 0) {
            setIsCompletedWorkout(true);
        }
    }, [seconds, minutes])

    return <div style={{ display: 'flex' }}>
        {isCompletedWorkout ? <p>Время тренировки вышло!</p> : (
            <>
                <p style={{ marginRight: '10px' }}>{minutes}</p>
                <p>{seconds}</p>
            </>
        )}
    </div>;
};

export default ShowCounter;
