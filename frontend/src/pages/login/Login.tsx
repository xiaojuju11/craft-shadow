import { useState } from 'react'

export default function Login() {
  const [loading, setLoading] = useState(false)

  return (
    <form action="" onSubmit={() => {}}>
      <div className='relative mb-5'>
        <i className="iconfont icon-zhanghao absolute left-4 top-1/2 -translate-y-1/2 text-[#888]"></i>
        <input type="tel" placeholder='请输入手机号或邮箱' className='w-full py-2.5 px-5 pl-12 border-2 border-[#e0e0e0] rounded-2xl text-[15px] bg-[#fafafa] outline-none transition-all duration-500 ease focus:border-[#7ddad4] focus:shadow-[0_0_0_3px_rgba(255,140,0,0.2)] focus:bg-white'/>
      </div>
      <div className='relative mb-5'>
        <i className="iconfont icon-mima absolute left-4 top-1/2 -translate-y-1/2 text-[#888]"></i>
        <input type="password" placeholder='请输入密码' className='w-full py-2.5 px-5 pl-12 border-2 border-[#e0e0e0] rounded-2xl text-[15px] bg-[#fafafa] outline-none transition-all duration-500 ease focus:border-[#7ddad4] focus:shadow-[0_0_0_3px_rgba(255,140,0,0.2)] focus:bg-white'/>
      </div>
      <div className="text-right mb-5">
        <a href="#" className="text-[#a7afaf] text-sm no-underline font-semibold">忘记密码？</a>
      </div>
      <button 
        disabled={loading}
        type="submit"
        className="w-full py-4 bg-linear-to-br from-[#c8f3f3] to-[#9df0ea] text-white border-none rounded-2xl text-base font-bold shadow-[0_4px_12px_rgba(255,140,0,0.3)] cursor-pointer disabled:opacity-80">{loading ? '登录中...' : '登录'}</button>
    </form>
  )
}