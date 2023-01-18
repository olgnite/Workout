import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { useCountdown } from "../../hooks/timer";
import { currentDate } from "../constData";
import ShowCounter from "../ShowCounter/ShowCounter";

interface ITimeProp {
    setTime: number;
    workoutId?: string
}

const Timer: FC<ITimeProp> = ({ setTime, workoutId }) => {
    const time: number = currentDate + setTime;
    const [minutes, seconds] = useCountdown(time);
    const dispatch = useAppDispatch();

    if (minutes + seconds <= 0) {
        return <p>
            Время тренировки вышло!
        </p>
    } else {
        return (
            <ShowCounter
                minutes={minutes}
                seconds={seconds}
            />
        )
    }
};

export default Timer;
