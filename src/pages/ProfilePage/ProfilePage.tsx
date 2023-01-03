import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from "../../images/profile-bg.jpg";
import afterImage from "../../images/after.jpg";
import styles from "./ProfilePage.module.scss";
import stylesLayout from "../../components/Layout/Layout.module.scss";
import Header from "../../components/Header/Header";
import Counters from "../../components/Counters/Counters";
import { fetchCountersStatistic } from "../../store/actionCreators";
import userImage from "../../images/header/user.svg";

const ProfilePage: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const {isAuth, accessToken, username} = useAppSelector(state => state.auth);
	const {minutes, workouts, kgs} = useAppSelector(state => state.counter);

	useEffect(() => {
		dispatch(fetchCountersStatistic(accessToken))
	}, [dispatch, isAuth, accessToken])

	return (
		<>
			<div className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
			     style={{backgroundImage: `url(${bgImage})`}}>
				<Header/>
				<div className={styles.center}>
					<img src={userImage} alt="Profile" height='56'/>
					<div>
						{isAuth && <h1 className={stylesLayout.heading}>{username}</h1>}
					</div>
				</div>
				{isAuth && <Counters minutes={minutes} workouts={workouts} kgs={kgs}/>}
			</div>
			<div className="wrapper-inner-page" style={{paddingLeft: 0, paddingRight: 0}}>
				<div className={styles.before_after}>
					<div>
						<div className={styles.heading}>
							Before
						</div>
						<img src={afterImage} alt=""/>
					</div>
					<div>
						<div className={styles.heading}>
							After
						</div>
						<img src={afterImage} alt=""/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;

