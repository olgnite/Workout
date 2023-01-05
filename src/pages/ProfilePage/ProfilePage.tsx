import { FC, useEffect } from "react";
import Header from "../../components/Header/Header";
import stylesLayout from "../../components/Layout/Layout.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import afterImage from "../../images/after.jpg";
import userImage from "../../images/header/user.svg";
import bgImage from "../../images/profile-bg.jpg";
import styles from "./ProfilePage.module.scss";

const ProfilePage: FC = () => {
	const dispatch = useAppDispatch();
	const { isAuth, accessToken, username } = useAppSelector(state => state.auth);

	useEffect(() => {

	}, [dispatch, isAuth, accessToken])

	return (
		<>
			<div className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
				style={{ backgroundImage: `url(${bgImage})` }}>
				<Header />
				<div className={styles.center}>
					<img src={userImage} alt="Profile" height='56' />
					<div>
						{isAuth && <h1 className={stylesLayout.heading}>{username}</h1>}
					</div>
				</div>
				{/* {isAuth && <Counters minutes={minutes} workouts={workouts} kgs={kgs} />} */}
			</div>
			<div className="wrapper-inner-page" style={{ paddingLeft: 0, paddingRight: 0 }}>
				<div className={styles.before_after}>
					<div>
						<div className={styles.heading}>
							Before
						</div>
						<img src={afterImage} alt="" />
					</div>
					<div>
						<div className={styles.heading}>
							After
						</div>
						<img src={afterImage} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;

