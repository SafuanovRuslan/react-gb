import './index.css';
import { CHANGE_VISIBILITY } from '../store/profile/actionTypes';
import {useSelector, useDispatch} from 'react-redux';

export default function Profile() {
    const profileInfo = useSelector(state => state.profile);
    const dispatch = useDispatch();

    function changeVisibility() {
        dispatch({
            type: CHANGE_VISIBILITY,
        })
    }

    return (
        <div className="profile">
            <div>Имя: {profileInfo.visibility && profileInfo.name}</div>
            <div>Возраст: {profileInfo.visibility && profileInfo.age}</div>
            <div>Профессия: {profileInfo.visibility && profileInfo.profession}</div>
            <button onClick={changeVisibility}>Change visibility</button>
        </div>
    );
}