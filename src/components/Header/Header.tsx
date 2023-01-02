import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import arrowImage from '../../images/header/arrow.svg';
import userImage from '../../images/header/user.svg';
import CustomSelect from '../CustomSelect/CustomSelect';
import styles from './Header.module.scss';

const Header = () => {
	const navigate = useNavigate();
	const isAuth = useAppSelector(state => state.auth.isAuth);

	return (<header className={styles.header}>
		{isAuth ? (<button type='button' onClick={() => navigate(-1)}>
			<img src={arrowImage} alt="back"/>
		</button>) : (<button type='button' onClick={() => navigate('/auth')}>
			<img src={userImage} alt="Auth"/>
		</button>)}
		<CustomSelect/>
	</header>);
};

export default Header;
