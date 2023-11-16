import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-primary-pink flex-between w-full fixed bottom-0'>
      <p className='text-3xl text-white ml-5'>
        &#169; Diego J F Campos
      </p>
      <Image
        src="/assets/footer.webp"
        alt="logo"
        width={400}
        height={150}
        className='object-contain mt-5 mb-5 mr-5'
      />
    </footer>
  )
}

export default Footer
