import ActionVideo from './ActionVideo';
import Video from './Video';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';
import Button from '../../components/Button';

const cx = classNames.bind(Styles);
function ContentItem() {
	return (
		<div className={cx('content-item')}>
			<div>
				<img className={cx('avatar-channel')} src={require('../../assets/avatar/avatar1.jpeg')} alt="channel" />
			</div>
			<div className={cx('detail-content')}>
				<div className={cx('sub-content')}>
					<div className={cx('channel')}>
						<div className={cx('channel-account')}>
							<h4>
								amnhacgiaitri<span>Âm nhạc giải trí</span>
							</h4>
						</div>
						<div className={cx('dicription-post')}>
							Nhiều bạn yêu cầu nên mình ra Full nhé. #amnhacgiatri #nhachaymoingay #giaitri
							#xuhuongtiktok #xuhuong @Âm Nhạc Giải Trí @Âm Nhạc Giải Trí @Âm Nhạc Giải Trí
						</div>
						<div className={cx('soundtrack')}>Nhạc nền - Âm Nhạc Giải Trí</div>
					</div>
					<div>
						<Button outline>Folow</Button>
					</div>
				</div>
				<div className={cx('main-content')}>
					<Video />
					<ActionVideo />
				</div>
			</div>
		</div>
	);
}

export default ContentItem;
