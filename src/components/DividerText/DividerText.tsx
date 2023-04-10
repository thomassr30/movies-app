import './DividerText.css'

interface Props{
    text: string;
}

export const DividerText = ({text}: Props) => {
  return (
    <div className='flex items-center justify-center my-10'>
        <hr className='hr-line' />
            <h3 className='text-xl font-bold text-white text-center mx-4'>{text}</h3>
        <hr className='hr-line' />
    </div>
  )
}
