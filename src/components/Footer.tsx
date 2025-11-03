import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className="w-full h-[5%] flex flex-col md:flex-col lg:flex-row gap-5 lg:gap-0 justify-around items-center p-10">
                <span className="text-white flex flex-row justify-center items-center gap-2">
                    Credits to <a href="https://github.com/vinothsasikumar" target="_blank"><i className="pi pi-github"></i></a> &
                    <a href="https://www.vinothsasikumar.in/" target="_blank"><img className="w-5" src="/mukesh.svg" alt="Vinoth Sasikumar" /></a>
                </span>
                <div className='flex flex-row justify-center gap-5 text-3xl text-white'>
                    <a href='https://www.linkedin.com/in/amar-amarnath2603' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
                    <a href='https://github.com/amarnath2603'target='_blank' rel='noreferrer'><AiFillGithub /></a>
                    <a href='https://www.instagram.com/amar_nath2603/' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
                  
                    
                </div>
                <span className="text-white flex flex-row justify-center items-center gap-2">
                    Made with 🩵 by
                    <span className="font-bold">AV</span>
                </span>
            </div>
        </>
    )
};

export default Footer;