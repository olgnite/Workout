import { FC } from "react";
import ShowCounter from "../ShowCounter/ShowCounter";

interface ITimeProp {
    secondsTime: number;
    workoutId?: string
}

const Timer: FC<ITimeProp> = ({ secondsTime, workoutId }) => {
    const time: Date = new Date();
    time.setSeconds(time.getSeconds() + secondsTime);

    return (
        <div>
            <ShowCounter expiryTimestamp={time} />
        </div>
    )
};

export default Timer;
