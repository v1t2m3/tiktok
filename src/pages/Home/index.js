import React from 'react';
import ContentItem from '../../components/Content';
import classNames from 'classnames/bind';
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles);
function Home() {
	return (
		<div className={cx('home')}>
			<ContentItem
				src={require('../../assets/video/video1.mp4')}
				status_post="Nhiều bạn yêu cầu nên mình ra Full nhé. #amnhacgiatri #nhachaymoingay #giaitri
				#xuhuongtiktok #xuhuong @Âm Nhạc Giải Trí @Âm Nhạc Giải Trí @Âm Nhạc Giải Trí"
				avatar_channel={require('../../assets/avatar/avatar1.jpeg')}
			/>
			<ContentItem
				src={require('../../assets/video/video2.mp4')}
				status_post=" Ngoài em ra tôi chẳng thể say đắm thêm một ai <3  #xuhuong#trend #_editnhacchill_ #twaf🌟"
				avatar_channel={require('../../assets/avatar/avatar2.jpeg')}
			/>
			<ContentItem
				src={require('../../assets/video/video3.mp4')}
				status_post="Đi nhận thưởng 😅 #j4f"
				avatar_channel={require('../../assets/avatar/avatar3.jpeg')}
			/>
			<ContentItem
				src={require('../../assets/video/video4.mp4')}
				status_post="BIG SHARK-OFFICIAL Mất 90 Tiếng Để Bắt Tất Cả Mob Trong Minecraft Hardcore PHẦN 2 #7749HieuUng #minecraft #VietNamToiYeu #xuhuong #YomostStreetDance #xh #viral #fyp #xuhuongtiktok #SEAGames31 #xhuong #xuhuong2022 #xhtiktok"
				avatar_channel={require('../../assets/avatar/avatar4.jpeg')}
			/>
		</div>
	);
}

export default Home;
