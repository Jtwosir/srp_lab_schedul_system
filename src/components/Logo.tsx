import {useNavigate } from 'react-router-dom';
import logo from "@/assets/images/logo.png"

export default function Logo() {
    const navigate = useNavigate();
    return (
        <div className="flex items-center">
            {/*<div className="bg-blue-500 p-2 rounded-lg rotate-45 cursor-pointer" onClick={() => navigate('/schedule')}>*/}
            {/*    /!*  使下面的div为一个正方形*!/*/}
            {/*    <div className="text-white -rotate-45 aspect-square flex items-center justify-center" >LAB</div>*/}
            {/*</div>*/}
            <img src={logo} alt="logo" className="h-12 cursor-pointer" onClick={() => navigate('/schedule')} />
            <span className="text-xl font-semibold text-blue-500 cursor-pointer" onClick={() => navigate('/schedule')}>智课无忧</span>
        </div>
  );
}
