interface AppQuestContentPictureProps {
  coverImg: string;
  coverImgWebp: string;
  previewImg: string;
  previewImgWebp: string;

}


export default function AppQuestContentPicture(props: AppQuestContentPictureProps): JSX.Element {
  const {previewImg, previewImgWebp, coverImg, coverImgWebp} = props;

  return (
    <div className="decorated-page__decor" aria-hidden="true">
      <picture>
        <source
          type='image/webp'
          srcSet={`${previewImgWebp}, ${coverImgWebp} 2x`}
        />
        <img
          src={previewImg}
          srcSet={`${coverImg} 2x`}
          width='1366'
          height='768'
          alt=''
        />
      </picture>
    </div>
  );
}


/*
'/img/content/maniac/maniac-size-m.webp, /img/content/maniac/maniac-size-m@2x.webp 2x'
 */
