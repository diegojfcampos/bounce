import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-primary-pink font-semibold w-full fixed bottom-0 '>
      <div className='hidden sm:flex items-center justify-between'>
        <p className='text-3xl flex justify-between text-white ml-5'>
          &#169; Diego J F Campos
        </p>
        <Image
          src="/assets/footer.webp"
          alt="logo"
          width={400}
          height={150}
          className='object-contain mt-5 mb-5 mr-5'
        />
      </div>

      <div className='sm:hidden flex items-center justify-center'>
        <Image
          src="/assets/footer.webp"
          alt="logo"
          width={350}
          height={100}
          className='object-contain mt-5 mb-5'
        />
      </div>
    </footer>
  );
};

export default Footer;
