import { FC } from 'react';
import { ICounter } from '../../types/interfaces';
import styles from './Counters.module.scss';
import cn from 'classnames';

const Counters: FC<ICounter> = ({ minutes, workouts, kgs,type }) => {
    return (
        <div className={cn(styles.wrapper, {
			[styles.profile]: type === 'profile'
        })}>
            <div className={styles.count}>
                <div className={styles.heading}>Minutes</div>
                <div className={styles.number}>{minutes}</div>
            </div>
            <div className={styles.count}>
                <div className={styles.heading}>Workouts</div>
                <div className={styles.number}>{workouts}</div>
            </div>
            <div className={styles.count}>
                <div className={styles.heading}>kgs</div>
                <div className={styles.number}>{kgs}</div>
            </div>
        </div>
    );
};

export default Counters;
