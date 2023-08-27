
import * as PAD from './PhotoAlbumDetail.styled'
import Slider from '../../../components/common/slider/Slider';
import GroupHeader from '../../../components/layout/header/GroupHeader';

interface PhotoAlbumDetailData {
  _id: string;
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  post_id: number;
  __v: number;
}
interface PhotoAlbumDetailDataProps {
  data?: PhotoAlbumDetailData;
}

const PhotoAlbumDetail = ({ data }: PhotoAlbumDetailDataProps) => {
  return (
    <PAD.Wrapper>
<GroupHeader />
      <PAD.GroupBoardTitle>
        <div>모임 이름</div>
      </PAD.GroupBoardTitle>
      <PAD.User>
        <PAD.ProfileImg>
          <img src="" alt="이미지" />
        </PAD.ProfileImg>
        <PAD.Desc>
          <PAD.DescDisplay>
            <div>
              <div>최형욱</div>
              <div>글쓴 시간</div>
            </div>
            <PAD.EditButton>●●●</PAD.EditButton>
          </PAD.DescDisplay>
        </PAD.Desc>
      </PAD.User>
      <PAD.UserWriteBox>
        <div>
          사진이 있으면 이미지 슬라이드 개수에 맞게 (최대3장) 사진이 있으면
          이미지 슬라이드 개수에 맞게 (최대3장) 사진이 있으면 이미지 슬라이드
          개수에 맞게 (최대3장) 사진이 있으면 이미지 슬라이드 개수에 맞게
          (최대3장)
          <Slider />
        </div>
      </PAD.UserWriteBox>
      <PAD.Button>
        <button>❤️ 좋아요 숫자</button>
        <button>📮 공유하기</button>
      </PAD.Button>
      <PAD.Comment>
        <li>
          <PAD.CommentTitle> 댓글 5(개수)</PAD.CommentTitle>
          {Array(3)
            .fill('')
            .map((v, i) => (
              <PAD.UserCommentBox key={i}>
                <PAD.CommentProfileImg>
                  <img src="" alt="프로필" />
                </PAD.CommentProfileImg>
                <PAD.UserReply>
                  <div>최형욱</div>
                  <div>
                    대댓글 기능 대댓글 기능 대댓글 기능 대댓글 기능 대댓글 기능
                  </div>
                  <div>시간 답글달기 삭제하기 등</div>
                </PAD.UserReply>
              </PAD.UserCommentBox>
            ))}
        </li>
      </PAD.Comment>
    </PAD.Wrapper>
  );
};

export default PhotoAlbumDetail;
