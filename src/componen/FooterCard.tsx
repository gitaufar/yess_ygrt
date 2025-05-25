type FooterCardProps = {
    'image': string,
    'text': string
};

const FooterCard = ({image, text} : FooterCardProps) => {
  return (
    <div className='px-5 flex flex-col justify-center items-center gap-4 w-[15.875rem] h-[8.625rem] bg-white rounded-md shadow-md'>
        <img src={image} className='w-auto h-[30px]'/>
        <p className='text-base text-center'>
            {text}
        </p>
    </div>
  )
}

export default FooterCard