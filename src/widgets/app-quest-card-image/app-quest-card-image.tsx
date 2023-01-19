interface AppQuestCardImageProps {
  altText: string;
  previewImg: string;
  previewImgWebp: string;
}

export default function AppQuestCardImage(props: AppQuestCardImageProps): JSX.Element {
  const {altText = '', previewImg, previewImgWebp} = props;

  return (
    <div className='quest-card__img'>
      <picture>
        <source
          type='image/webp'
          srcSet={`${previewImgWebp}, img/content/crypt/crypt-size-s@2x.webp 2x`}
        />
        <img
          src={previewImg}
          srcSet={'img/content/crypt/crypt-size-s@2x.jpg 2x'}
          width='344'
          height='232'
          alt={altText}
        />
      </picture>
    </div>
  );
}
